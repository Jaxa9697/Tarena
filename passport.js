/**
 * Created by JAHONGIR-PC on 06/02/2016.
 */
var todo = require('./app'),
    app = todo.app,
    users = require('./models/users')(todo.connection);

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('cookie-session');
app.use(session({keys: ['secret']}));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

var bCrypt = require('bcrypt-nodejs');

var LocalStrategy = require('passport-local').Strategy;
passport.use( new LocalStrategy({
        passReqToCallback : true
    },

    function( req, username, password, done){

        users.list(function(err, rows){
            if (err) throw err;
            for (var i=0; i < rows.length; i++){

                if (username === rows[i].login){
                    users.listOne(rows[i].ID, function(error, row){
                        if (error) throw error;

                            if (username !== row[0].login){
                            return done(null, false, {message: 'Login Error'});
                        }

                        var passwordHash = bCrypt.compareSync(password , row[0].password);

                        if (!passwordHash){
                            return done(null, false, {message: 'Password Error'});
                        }

                        return done(null, {username:  row[0].Username});

                    });
                }
            }
        });
    }
));


//passport.use( new LocalStrategy({
//        passReqToCallback : true
//    },
//    function(req, username, password, done) {
//
//        users.list(function(err, rows){
//
//            if (err) throw err;
//
//            for (var i=0; i < rows.length; i++){
//
//                if( username == rows[i].login){
//                    return done(null, false, {message: 'Пользователь с таким логином сушествует!'});
//                }else{
//
//                    var data = {
//                        login: username,
//                        password: bCrypt.hashSync(password),
//                        Username: username.toLowerCase(),
//                        delete: 0,
//                        change: 0
//                    };
//
//                    users.add(data, function(){
//                        return done(null, {username:  data.login});
//                    });
//                }
//            }
//        });
//    })
//);

passport.serializeUser(function(user, done){
    done(null, user.username);
});

passport.deserializeUser(function(id, done){
    done(null, {username: id});
});

var auth =  passport.authenticate(
    'local', {
        successRedirect: '/signIn' ,
        failureRedirect: '/'
    });

app.get('/', function (req, res){
    //auth(req, res);
    res.render('index', {title: 'Форма входа'});
});

app.post('/login', auth);

var mustBeAuthenticated = function(req, res, next){
    req.isAuthenticated() ? next() : res.redirect('/');
};

app.all('/signIn', mustBeAuthenticated);
app.all('/*', mustBeAuthenticated);


app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});
