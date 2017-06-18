var express = require('express'),
    router = express.Router(),
    app = require('../app'),
    user = require('../models/users')(app.connection),
    atc = require('../models/atc.tasks')(app.connection),
    bcrypt = require('bcryptjs'),
    main = require("../controllers/common-functions"),
    SALT_WORK_FACTOR = 10;

function clearCookie(res) {
    res.clearCookie('remember');
    res.clearCookie('session');
    res.clearCookie('session.sig');
    res.redirect('/');
}

router.all('/', function(req, res) {
  if (req.cookies.remember) {
    user.getOne(req.session.username, function (err, user) {
      if (err || user === 'undefined' || !user || user === null || user.length === 0) {
        clearCookie(res);
      } else {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(ip);
        console.log(req.ip);

        delete user[0].password;
        res.render('index');
      }
    });
  } else {
    res.render('signIn');
  }
});

router.all('/login=error', function(req, res) {
  res.render('signIn', {error: "Неправильный логин или пароль"});
});

router.get('/getUserInfo', function (req, res) {
    user.getOne(req.session.username, function (err, user) {
      if (err || user === 'undefined' || !user || user === null || user.length === 0) {
        clearCookie(res);
      } else {
        delete user[0].password;
        res.json(user[0]);
      }
    });
});

function getPrivilegesByRolea(role) {
  var privileges = {};

  if(role === 'admin'){
    privileges = {
      atc:    '1111',
      vlan:   '1111',
      report: '1111',
      wifi:   '1111',
      optics: '1111'
    }
  }else{
    privileges = {
      atc:    '1000',
      vlan:   '1000',
      report: '1000',
      wifi:   '1000',
      optics: '1000'
    }
  }

  return privileges;
}

router.post('/signUp', function (req, res) {

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(req.body.password, salt, function(err2, hash) {
      if (err2) return next(err2);

      var p = getPrivilegesByRolea(req.body.status);
      var post = {
        username: req.body.login,
        password: hash,
        status:   req.body.status,
        p_atc:    p.atc,
        p_vlan:   p.vlan,
        p_report: p.report,
        p_wifi:   p.wifi,
        p_optics: p.optics
      };

      user.add(post, function (err) {
        if (err) return next(err);

        res.json({'message': "ok"});
      });
    });
  });
});

router.all('/login', function (req, res) {

  user.getOne(req.body.username, function (err, user) {
    if(err || user === 'undefined' || !user || user === null || user.length === 0){
      res.redirect('/login=error');
    }else{

      bcrypt.compare(req.body.password, user[0].password, function(err, isMatch) {
        if (err)  throw err;

        if (!isMatch) {
          res.redirect('/login=error');
        }else{
          if(req.body.remember) res.cookie('remember', 1, {maxAge: 24 * 60 * 60 * 1000});

          req.session.authorized = true;
          req.session.username   = user[0].username;
          req.session.ID = user[0].ID;
          req.session.userStatus = user[0].status;

          var record = {
            dateEntry: main.getDate(new Date(Date.now())),
            id_user:   user[0].ID
          };

          atc.recordUserEntry(record, function (err, result) {
            if (err)  throw err;
            req.session.signId = result.insertId;
            atc.updateLastSign(result.insertId, req.session.ID);

            delete user[0].password;
            res.render('index');
          });
        }
      });

    }
  });
});

router.get('/getAtcContent', function (req, res) {
  atc.list(function (err, atc) {
    if (err) throw err;
      res.json(atc);
  });
});

function vlanContent(res){
  atc.listVlan(function (err, vlan) {
    if (err) throw err;
    atc.listTariff(function (err, tariff) {
      res.json({vlan: vlan, tariff: tariff});
    });
  });
}

router.get('/getVlanContent', function (req, res) {
  vlanContent(res);
});

router.get('/getReportContent', function (req, res) {
  atc.getReport(function (err, reports) {
    if (err) throw err;

    atc.listUsersForSelect(function (err, users) {
      res.json({
        reports: reports,
        users: users
      });
    });
  });
});

router.get('/getPrivilegeContent', function (req, res) {
  atc.listPrivilege(function (err, reports) {
    if (err) throw err;
      res.json(reports);
  });
});

router.get('/getWifiContent', function (req, res) {
  atc.listWifi(function (err, reports) {
    if (err) throw err;
    res.json(reports);
  });
});

router.get('/getOpticsContent', function (req, res) {
  atc.listOptics(function (err, reports) {
    if (err) throw err;
    res.json(reports);
  });
});

router.get('/getOpticsContent', function (req, res) {
  atc.listOptics(function (err, reports) {
    if (err) throw err;
    res.json(reports);
  });
});

router.get('/getProblemContent', function (req, res) {
  atc.getProblems(function (err, reports) {
    if (err) throw err;
    res.json(reports);
  });
});

router.get('/getSignContent', function (req, res) {
  atc.listSigns(function (err, reports) {
    if (err) throw err;
    res.json(reports);
  });
});

router.get('/getAtcContentById', function (req, res) {
  atc.listByAtc(req.query.id, function (err, atc) {
    if (err) throw err;
    res.json(atc);
  });
});

router.post('/addNewVlan', function (req, res) {

  var _vlan = {
    gateway:     req.body.gateway,
    name:        req.body.name,
    id_tariff:   req.body.tariff,
    subnet_mask: req.body.subnetMask
  };

  atc.addVlan(_vlan, function (err, result) {
    if (err) throw err;
    _vlan.ID = result.insertId;
    res.json(_vlan);
  });
});

router.post('/addNewAtc', function (req, res) {

  var address = req.body.address;
  var passport = req.body.passport;

  if(!address) address = '';
  if(!passport) passport = '';

  var client = {
    name_cl:    req.body.name,
    address:    address,
    n_passport: passport,
    telephone:  req.body.telephone,
    phone:      req.body.phone
  };

  atc.addClient(client, function (err, result) {
    if (err) throw err;

    var _atc = {
      id_atc: req.body.idAtc,
      id_client: result.insertId,
      port: req.body.port,
      ip_address: req.body.ipAddress,
      id_vlan: req.body.vlan,
      mac_address: req.body.macAddress,
      stan: req.body.stan,
      line: req.body.line,
      vpi: req.body.vpi,
      vci: req.body.vci,
      alc: req.body.alc,
      status: 1
    };

    atc.addAtc(_atc, function (err2) {
      if (err2) throw err2;

      res.json({"message": "ok"});
    });
  });
});

router.post('/filterReportRows', function (req, res) {

  var from, to, idUser;

  if(req.body.dateFilter && req.body.dateFilter !== 'null'){
    var date = main.filterOption(req.body.dateFilter);
    from = main.getDate(date.start);
    to   = main.getDate(date.end);

  }else{
    from = main.getDate(new Date(req.body.fromDate));
    to   = main.getDate(new Date(req.body.toDate));
  }

  if(!req.body.userFilter || req.body.userFilter === 'null'){ idUser = '%%';}
  else { idUser = req.body.userFilter;}


  if (req.body.type === "report"){
    atc.filterReport(from, to, idUser, function (err, rows) {
      if (err) throw err;
      res.json(rows);
    });

  }else if(req.body.type === "problem"){
    atc.filterProblem(from, to, idUser, function (err, rows) {
      if (err) throw err;
      res.json(rows);
    });

  }else if (req.body.type === "sign"){
    atc.filterSign(from, to, idUser, function (err, rows) {
      if (err) throw err;
      res.json(rows);
    });
  }
});

function converter(ps){

  function boolToBinary(bool) {
    if(bool) {return '1'}
    else { return '0'}
  }

  var read   = boolToBinary(ps.read),
      remove = boolToBinary(ps.remove),
      update = boolToBinary(ps.update),
      create = boolToBinary(ps.create);

  return read + remove + update + create;
}

router.put('/saveUserPrivileges', function (req, res) {

  var userPriviligies = {
    p_atc:    converter(req.body.pAtc),
    p_vlan:   converter(req.body.pVlan),
    p_report: converter(req.body.pReport),
    p_wifi:   converter(req.body.pWifi),
    p_optics: converter(req.body.pOptics)
  };

  atc.updatePrivileges(userPriviligies, req.body.id, function (err, user) {
    if (err) throw err;
    delete user[1][0].password;
    res.json({
      "mesaage": "ok",
      "user": user[1][0]
    });
  });
});

router.post('/addNewWO', function (req, res) {

  var address = req.body.address;
  var passport = req.body.passport;

  if(!address) address = '';
  if(!passport) passport = '';

  var client = {
    name_cl:    req.body.name,
    itMan:      req.body.itMan,
    address:    address,
    n_passport: passport,
    telephone:  req.body.telephone,
    phone:      req.body.phone
  };

  atc.addClient(client, function (err, result) {
    if (err) throw err;

    var _wo = {
      type:   req.body.type,
      id_client: result.insertId,
      ip_address: req.body.ipAddress,
      id_vlan: req.body.vlan,
      status: 1
    };

    atc.addWO(_wo, function (err2) {
      if (err2) throw err2;

      res.json({"message": "ok"});
    });
  });
});

router.put('/updateVlan', function (req, res) {

  var _vlan = {
    gateway:     req.body.gateway,
    name:        req.body.name,
    id_tariff:   req.body.tariff,
    subnet_mask: req.body.subnetMask
  };

  atc.updateVlan(_vlan, req.body.id, function (err) {
    if (err) throw err;
    res.json(_vlan);
  });
});

router.put('/changePassword', function (req, res) {

  user.getOne(req.session.username, function (err, user) {
    if(err || user === 'undefined' || !user || user === null || user.length === 0){
      res.json({'message': "error"});
    }else{

      bcrypt.compare(req.body.currentPassword, user[0].password, function(err, isMatch) {
        if (err)  throw err;

        if (!isMatch) {
          res.json({'message': "passwordError"});
        }else{
          if(req.body.newPassword !== req.body.repeatNewPassword){
            res.json({'message': "passwordError"});
          }else{
            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
              if (err) return next(err);

              bcrypt.hash(req.body.newPassword, salt, function(err, hash) {
                if (err) return next(err);

                atc.updatePassword(hash, req.session.ID, function (err2) {
                  if (err2) throw err2;
                  res.json({"message": "ok"});
                });

              });
            });
          }
        }
      });

    }
  });
});

router.put('/updateAtc', function (req, res) {
  var address  = req.body.address;
  var passport = req.body.passport;

  if(!address) address = '';
  if(!passport) passport = '';

  var client = {
    name_cl:    req.body.name,
    address:    address,
    n_passport: passport,
    telephone:  req.body.telephone,
    phone:      req.body.phone
  };

  atc.updateClient(client, req.body.idClient, function (err) {
    if (err) throw err;

    var _atc = {
      id_atc: req.body.idAtc,
      id_client: req.body.idClient,
      port: req.body.port,
      ip_address: req.body.ipAddress,
      id_vlan: req.body.vlan,
      mac_address: req.body.macAddress,
      stan: req.body.stan,
      line: req.body.line,
      vpi: req.body.vpi,
      vci: req.body.vci,
      alc: req.body.alc,
      status: 1
    };

    atc.updateAtc(_atc, req.body.id, function (err2) {
      if (err2) throw err2;

      res.json({"message": "ok"});
    });
  });
});

router.put('/updateWO', function (req, res) {
  var address  = req.body.address;
  var passport = req.body.passport;

  if(!address) address = '';
  if(!passport) passport = '';

  var client = {
    name_cl:    req.body.name,
    itMan:      req.body.itMan,
    address:    address,
    n_passport: passport,
    telephone:  req.body.telephone,
    phone:      req.body.phone
  };

  atc.updateClient(client, req.body.idClient, function (err) {
    if (err) throw err;

    var _wo = {
      id_client: req.body.idClient,
      ip_address: req.body.ipAddress,
      id_vlan: req.body.vlan,
      status: 1
    };

    atc.updateWO(_wo, req.body.id, function (err2) {
      if (err2) throw err2;

      res.json({"message": "ok"});
    });
  });
});

router.put('/saveSolvedProblem', function (req, res) {

  var data = {};

  if (req.body.solved){
    var date = new Date(Date.now());
    data.solveDate = main.getDate(date);
  }else {
    data.solveDate = null;
  }

  atc.updateProblem(data, req.body.id, function (err) {
    if (err) throw err;

    res.json({
      "message": "ok",
      "solveDate": data.solveDate
    });
  });
});


router.post('/saveNewProblem', function (req, res) {

  var report = {
    id_user: req.session.ID,
    problem: req.body.problem,
    createDate: main.getDate(new Date(Date.now()))
  };

  atc.addProblem(report, function (err) {
    if (err) throw err;
    res.json({"message": "ok"});
  });
});

router.delete('/deleteVlan', function (req, res) {
  atc.deleteVlan(req.query.id, function (err) {
    if (err) throw err;
    res.send('ok');
  });
});

router.delete('/deleteAtc', function (req, res) {
  atc.deleteAtc(req.query.id, function (err) {
    if (err) throw err;
    res.send("ok");
  });
});


router.delete('/deleteWO', function (req, res) {
  atc.deleteWO(req.query.id, function (err) {
    if (err) throw err;
    res.json({"message":"ok"});
  });
});

router.get('/getVlanList', function (req,res) {
  atc.listVlanForSelect(function (err, vlans) {
    if (err) throw err;

    atc.list(function (err2, atc) {
      if (err2) throw err2;
      res.json({vlan: vlans, atc: atc});
    });

  });
});

router.get('/getClientsByVlan', function (req, res) {
  atc.getClientsByVlan(req.query.id, function (err, rows) {
    if(err) throw err;
    res.json(rows);
  });
});

router.get('/logoff', function (req, res) {
  var exitDate = main.getDate(new Date(Date.now()));
  var id = req.session.signId;

  console.log(id);
  atc.recordUserExit(exitDate, id, function (err) {
    if (err) throw err;
    clearCookie(res);
  });
});

router.get('/searchData', function (req, res) {
  var text = req.query.query;
  atc.searchData(text, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.get('/getResultSearch', function (req, res) {
  atc.getResultSearch(req.query.id, function (err, result) {
    if (err) throw err;
    res.json(result[0]);
  });
});

router.post('/saveReport', function (req, res) {

  var date = new Date(Date.now());
  var report = {
    id_user: req.session.ID,
    problem: req.body.problem,
    idAtc: req.body.id,
    date: main.getDate(date)
  };

  atc.addReport(report, function (err) {
    if (err) throw err;
    res.json({"message": "ok"});
  });
});

module.exports = router;
