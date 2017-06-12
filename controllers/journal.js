/**
 * Created by JAHONGIR-PC on 07/21/2016.
 */
var todo = require('../app'),
    app = todo.app,
    tasks = require('../models/tasks')(todo.connection);

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

app.put('/updateRecord', function (req, res) {
    var number_doc = req.query.number_doc,
        data = {
            id_provider: req.query.id_provider,
            reason: req.query.reason,
            date: req.query.date,
            id_reciever: req.query.id_reciever,
            by_whom: req.query.by_whom
        };

    tasks.updateComings(number_doc, data, function (err) {
        if (err) throw err;
        res.send();
    });
});

app.get('/openRecord', function(req, res){

    var id = Number(req.query.id);

    tasks.openRecordbyId(id, function(err, rows){

        var day = rows[0].date.getDate(),
            month = rows[0].date.getMonth() + 1,
            year = rows[0].date.getFullYear();

        if (month < 10){month = '0' + month;}
        if (day < 10){day = '0' + day;}

        var providers = [], selectedProvider, idOfSelPro;
        tasks.listOfProviders(function(err, rowsOfProviders){

            for(var i=0; i < rowsOfProviders.length; i++) {
                if(rowsOfProviders[i].ID == rows[0].id_provider){
                    selectedProvider = rowsOfProviders[i].kont;
                    idOfSelPro = rowsOfProviders[i].ID;
                }else{
                    providers.push({name_of_provider: rowsOfProviders[i].kont,
                        id_provider: rowsOfProviders[i].ID});
                }
            }

            var receivers =[], selectedReceiver, idOfSelRec;
            tasks.listOfReceivers(function(err, rowsOfReceivers){

                for(var i=0; i < rowsOfReceivers.length; i++) {
                    if(rowsOfReceivers[i].ID == rows[0].id_reciever){
                        selectedReceiver = rowsOfReceivers[i].name_receiver;
                        idOfSelRec = rowsOfReceivers[i].ID;
                    }else{
                        receivers.push({name_of_receiver: rowsOfReceivers[i].name_receiver,
                            id_reciever: rowsOfReceivers[i].ID});
                    }
                }

                tasks.listOFGoodsById(id, function(err, rowsOfGood){

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
                        {good: listOfGoods,generalSumma: generalSumma},
                        function(err,comingsList){
                            res.render('journal/comings',
                                {comingsListOfGoods: comingsList,
                                    number_doc: rows[0].number_doc,
                                    date_of_coming: year + '-' + month + '-' + day,
                                    id_provider_s : idOfSelPro,
                                    name_of_provider_s: selectedProvider,
                                    provider: providers,
                                    id_reciever_s: idOfSelRec,
                                    name_of_receiver_s: selectedReceiver,
                                    receiver: receivers,
                                    by_whom: rows[0].by_whom,
                                    reason: rows[0].reason
                                },
                                function (err, html) {
                                    res.send(html);
                                }
                            )
                        });
                });
            });
        });
    });
});

app.get('/addRecord', function (req, res) {

    var providers = [];
    tasks.listOfProviders(function(err, rowsOfProviders){
        for(var i=0; i < rowsOfProviders.length; i++) {
            providers.push({name_of_provider: rowsOfProviders[i].kont,
                id_provider: rowsOfProviders[i].ID});
        }

        var receivers =[];
        tasks.listOfReceivers(function(err, rowsOfReceivers){
            for(var i=0; i < rowsOfReceivers.length; i++) {
                receivers.push({name_of_receiver: rowsOfReceivers[i].name_receiver,
                    id_reciever: rowsOfReceivers[i].ID});
            }

            res.render('journal/comingsListOfGoods',
                function(err,comingsList){
                    res.render('journal/comings',
                        {comingsListOfGoods: comingsList,
                            provider: providers,
                            receiver: receivers
                        },
                        function (err, html) {
                            res.send(html);
                        }
                    )
                });
        });
    });
});

app.post('/addRecord', function (req, res){

    tasks.openRecordbyId(req.query.number_doc, function (err, rows) {
        if (rows.length == 0){
            var data = {
                number_doc: req.query.number_doc,
                id_provider: req.query.id_provider,
                reason: req.query.reason,
                date: req.query.date,
                id_reciever: req.query.id_reciever,
                by_whom: req.query.by_whom
            };

            tasks.addComing(data, function () {
                res.send('true');
            });
        }else{
            res.send('false');
        }
    });

});

app.all('/formForGood', function (req, res) {

    if ((req.query.status == 'add') || (req.query.status == 'update')){
        var data = {
            id_doc: req.query.number_doc,
            id_good: req.query.id_good,
            year_of_good: req.query.year_of_good,
            from_credit: req.query.from_credit,
            to_debit: req.query.to_debit,
            quantity: req.query.quantity,
            price: req.query.price,
            summa: req.query.summa
        };
    }

    if (req.query.status == 'open'){

        tasks.listOfGoods(function (err, rowsOfGoods) {
            var goodsArray = [];
            for (var i=0; i < rowsOfGoods.length; i++){
                goodsArray.push({
                    idOfGood: rowsOfGoods[i].ID,
                    nameOfGood: rowsOfGoods[i].name_good
                });
            }

            tasks.listOfAccounts(function (err, rowsOfAccounts) {
                var accountArray = [];
                for (var i=0; i < rowsOfAccounts.length; i++){
                    accountArray.push({nameOfCredit: rowsOfAccounts[i].number});
                }

                res.render('journal/addNewGood',
                    {good: goodsArray,
                        credit: accountArray,
                        debet: accountArray},
                    function (err, html) {
                        res.send(html);
                    });
            });
        });
    }

    if (req.query.status == 'add'){

        tasks.add(data, function () {
            listOfGoods(req, res)
        });
    }

    if (req.query.status == 'getForUpdate'){

        var id = Number(req.query.id_good);
        tasks.listForUpdate(id, function (err, rows) {
            tasks.listOfGoods(function (err, rowsOfGoods) {

                var goodsArray = [], selectedGood, idOfSelectedGood;
                for (var i=0; i < rowsOfGoods.length; i++){
                    if(rowsOfGoods[i].ID == rows[0].id_good){
                        idOfSelectedGood = rowsOfGoods[i].ID;
                        selectedGood = rowsOfGoods[i].name_good;
                    }else{
                        goodsArray.push({
                            idOfGood: rowsOfGoods[i].ID,
                            nameOfGood: rowsOfGoods[i].name_good
                        });
                    }
                }

                tasks.listOfAccounts(function (err, rowsOfAccounts) {
                    var accountArray = [];
                    for (var i=0; i < rowsOfAccounts.length; i++){
                        accountArray.push({nameOfCredit: rowsOfAccounts[i].number});
                    }

                    res.render('journal/addNewGood',
                        {idOfGood_s: idOfSelectedGood,
                            nameOfGood_s: selectedGood,
                            good: goodsArray,
                            year_of_good: rows[0].year_of_good,
                            nameOfCredit_s: rows[0].from_credit,
                            credit: accountArray,
                            nameOfDebit_s: rows[0].to_debit,
                            debet: accountArray,
                            quantity: rows[0].quantity,
                            price: rows[0].price
                        },
                        function (err, html) {
                            res.send(html);
                        });
                });
            });
        });
    }

    if (req.query.status == 'update'){
        var idGood = Number(req.query.id);
        tasks.updateGood(idGood, data, function () {
            listOfGoods(req, res);
        });
    }
});
