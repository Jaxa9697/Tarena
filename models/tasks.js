/**
 * Created by JAHONGIR-PC on 05/22/2016
 */

module.exports = function (connection){

    var queryList ="SELECT  `docs`.`number_doc`, `docs`.`date` , `providers`.`kont` , SUM(`journal`.`quantity`) AS `quantity`,   " +
        " SUM(`journal`.`summa`) AS `summa`, `docs`.`reason` FROM  `journal` ,  `docs`, `providers` " +
        " WHERE  (`journal`.`id_doc` =  `docs`.`number_doc`) and (`docs`.`id_provider` = `providers`.`ID`)" ,
        groupBy = " GROUP BY  `id_doc` HAVING COUNT( * ) >= 1 ORDER BY `docs`.`date`  ";

    return Tasks = {
        list: function (callback) {
            connection.query( queryList + groupBy, callback) ;
        },

        filter: function (from, still, callback) {
            connection.query( queryList + "and (`docs`.`date` <= ?) and (`docs`.`date` >= ?)" + groupBy, [still, from], callback);
        },

        openRecordbyId: function (id, callback) {
            connection.query("SELECT  `number_doc` , `date` , `id_provider`,  `id_reciever` , `by_whom` , `reason` FROM  `docs`" +
                            " WHERE `number_doc` = ? ",  id, callback);
        },

        listOfProviders: function(callback){
            connection.query(" SELECT `ID`, `kont` FROM `providers`", callback);
        },

        listOfReceivers: function(callback){
            connection.query(" SELECT `ID`, `name_receiver` FROM `receivers`", callback);
        },

        listOfGoods: function(callback){
            connection.query(" SELECT `ID`, `name_good` FROM `goods` WHERE `type`= 0", callback);
        },

        listOfAccounts: function(callback){
            connection.query(" SELECT `number` FROM `accounts` WHERE `NotUse` = 0", callback);
        },

        listOFGoodsById: function (id, callback) {
            connection.query("SELECT  `journal`.`ID`, `name_good` ,  `year_of_good` ,  `from_credit` ,  `to_debit` ,  `quantity` ,  `price` ," +
                             " `summa` FROM  `goods` ,  `journal` WHERE (`id_good` =  `goods`.`ID`) AND  `id_doc` = ? ",
                                id, callback);
        },

        // search: function (query, callback) {
        //     connection.query("SELECT * FROM `group` WHERE `Surname` LIKE ? or `Name` LIKE ?" +
        //                     " or `PlaceOfParents` LIKE ?  or `PlaceOfStudent` LIKE ? or `Email` LIKE ? " +
        //                     " order by `Surname`,`Name`" , query, callback);
        // },

        listForUpdate: function (id, callback){
            connection.query("SELECT * FROM `journal` WHERE `ID` = ?", id, callback);
        },

        add: function (record, callback) {
            connection.query("INSERT INTO `journal` SET ?", record, callback);
        },

        addComing: function (record, callback) {
            connection.query("INSERT INTO `docs` SET ?", record, callback);
        },

        updateGood: function (id, data, callback) {
            connection.query("UPDATE `journal` SET ? WHERE `ID` = ?", [data, id],  callback);
        },

        updateComings: function (id, data, callback) {
            connection.query("UPDATE `docs` SET ? WHERE `number_doc` = ?", [data, id],  callback);
        },

        deleteFromJournal: function (id, callback) {
            connection.query("DELETE FROM `journal` WHERE `ID` = ?", id, callback);
        },

        deleteFromDocs: function (id, callback) {
            connection.query("DELETE  `docs` ,`journal` FROM  `docs` LEFT JOIN  `journal` ON  `docs`.`number_doc` =  `journal`.`id_doc` WHERE  `docs`.`number_doc` = ?",  id, callback);
        }
    };

};