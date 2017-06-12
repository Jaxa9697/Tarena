/**
 * Created by JAHONGIR-PC on 07/15/2016.
 */
var todo = require('../app'),
    app = todo.app,
    tasks = require('../models/tasks')(todo.connection),
    otherTask = require('../models/otherTask')(todo.connection);

function getRows(rows) {

    var listOfRecords = [];

    if (!rows){
        return listOfRecords;
    }

    for(var i=0; i < rows.length; i++) {

        var day = rows[i].date.getDate(),
            month = rows[i].date.getMonth() + 1,
            year = rows[i].date.getFullYear();

        if (month < 10) {month = '0' + month;}
        if (day < 10) {day = '0' + day;}

        listOfRecords.push({
            id: rows[i].number_doc,
            number: i + 1 + '.',
            date: day + '/' + month + '/' + year,
            provider: rows[i].kont,
            quantity: rows[i].quantity,
            summa: rows[i].summa,
            reason: rows[i].reason
        });
    }

    return listOfRecords;
}

function listOfDocs(res) {
    tasks.list(function(err, rows){
        if (err) res.send(err);

        var listOfRecords = getRows(rows);
        res.render('journal/listOfJournal',
            {record: listOfRecords},
            function (err, listOfJournal) {
                res.render('journal/journal',
                    {listOfJournal: listOfJournal}, 
                    function (err, html) {
                        res.send(html);                        
                    }
                );
            }
        );
    });
}

function listOfRecords(res,from, error) {
    if (error) res.send(error);
    otherTask.list(from ,function (err, rows) {

        if (err) res.send(err);

        var listOfRecords = [];
        for ( var i=0; i < rows.length; i++){

            if (from == 'goods'){
                listOfRecords.push({
                    number: i + 1 + '.',
                    name_good: rows[i].name_good,
                    unit_of_m: rows[i].unit_of_measurement,
                    group: rows[i].group,
                    id: rows[i].ID
                });
            }

            if (from == 'receivers'){
                listOfRecords.push({
                    number: i + 1 + '.',
                    chef: rows[i].chef,
                    receiver: rows[i].name_receiver,
                    describe: rows[i].note,
                    id: rows[i].ID
                });
            }

            if (from == 'providers'){
                listOfRecords.push({
                    number: i + 1 + '.',
                    chef: rows[i].chef,
                    provider: rows[i].kont,
                    describe: rows[i].note,
                    id: rows[i].ID
                });
            }

            if (from == 'accounts'){
                listOfRecords.push({
                    number: i + 1 + '.',
                    number_account: rows[i].number,
                    describe: rows[i].description,
                    id: rows[i].number
                });
            }

        }
        res.render(from , {record: listOfRecords},
            function (err, html) {
                res.send(html);
            });
    });
}

function listOfGoods(req, res) {
    tasks.listOFGoodsById(req.query.number_doc, function(err, rowsOfGood){
        var listOfGoods = [], generalSumma = 0;
        for(var i=0; i < rowsOfGood.length; i++) {
            generalSumma = generalSumma + rowsOfGood[i].summa;
            listOfGoods.push({
                id: rowsOfGood[i].ID,
                number: i + 1 + '.',
                name_good: rowsOfGood[i].name_good,
                year_of_good: rowsOfGood[i].year_of_good,
                from_credit: rowsOfGood[i].from_credit,
                to_debit: rowsOfGood[i].to_debit,
                quantity: rowsOfGood[i].quantity,
                price: rowsOfGood[i].price,
                summa: rowsOfGood[i].summa
            });
        }

        res.render('journal/comingsListOfGoods',
            {good: listOfGoods, generalSumma: generalSumma},
            function (err, html) {
                res.send(html);
            });
    });
}

app.get('/getContent', function (req, res) {
    
    if(req.query.content == 'journal'){
        if(req.query.filter == 'byDate'){
            tasks.filter(req.query.from, req.query.still ,function (err, rows) {
                
                var listOfRecords = getRows(rows);
                res.render('journal/listOfJournal',
                    {record: listOfRecords},
                    function (err, html) {
                        res.send(html);
                    }
                );
            });
        }else{
            listOfDocs(res);
        }
    } else if(req.query.content == 'accounts'){
        listOfRecords(res, 'accounts');
    }else if (req.query.content == 'provider'){
        listOfRecords(res, 'providers');
    }else if (req.query.content == 'receivers'){
        listOfRecords(res, 'receivers');
    }else if (req.query.content == 'goods'){
        listOfRecords(res, 'goods');
    }
});

app.delete('/delete', function (req, res) {

    var id = Number(req.query.id);

    if (req.query.from == 'journal'){
        tasks.deleteFromJournal(id, function (err) {
            if (err) res.send(err);
            listOfGoods(req,res);
        });
    }

    if (req.query.from == 'docs'){
        tasks.deleteFromDocs(id,  function (err) {
            if (err) res.send(err);
            listOfDocs(res);
        });
    }

    if (req.query.from == 'accounts'){
        otherTask.delete('accounts' ,'number',req.query.number, function (err) {
            listOfRecords(res, 'accounts',err);
        });
    }
    
    if (req.query.from == 'provider'){
        otherTask.delete('providers', 'ID', req.query.id, function (err) {
            listOfRecords(res, 'providers',err);
        });
    }

    if (req.query.from == 'receivers'){
        otherTask.delete('receivers', 'ID', req.query.id, function (err) {
            listOfRecords(res, 'receivers',err);
        });
    }

    if (req.query.from == 'goods'){
        otherTask.delete('goods', 'ID', req.query.id, function (err) {
            listOfRecords(res, 'goods',err);
        });
    }
});

app.post('/addAccount', function (req, res) {

    var data = {number: req.query.number,
        description: req.query.des,
        NotUse: '0'};

    otherTask.add('accounts', data, function (err) {
        listOfRecords(res, 'accounts',err);
    });
});

app.post('/addProvider', function (req, res) {

    var data = {kont: req.query.name,
        chef: req.query.chef,
        note: req.query.des };

    otherTask.add('providers',data, function (err) {
        listOfRecords(res, 'providers',err);
    });
});

app.post('/addReceiver', function (req, res) {

    var data = {name_receiver: req.query.name,
        chef: req.query.chef,
        note: req.query.des };

    otherTask.add('receivers', data, function (err) {
        listOfRecords(res, 'receivers',err);
    });
});

app.post('/addGood', function (req, res) {

    var data = {name_good: req.query.name,
        unit_of_measurement: req.query.unit,
        group: req.query.group };

    otherTask.add('goods', data, function (err) {
        listOfRecords(res, 'goods',err);
    });
});
