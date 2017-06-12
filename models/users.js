/**
 * Created by JAHONGIR-PC on 06/02/2016.
 */
module.exports = function (connection){

    return users = {

        list: function (callback) {
            connection.query("SELECT * FROM `tr_users` ", callback);
        },

        getOne: function (login, callback){
            connection.query("SELECT * FROM `tr_users` WHERE `username` = ?", login, callback);
        },

        add: function (record, callback) {
            connection.query("INSERT INTO `tr_users` SET ?", record, callback);
        }

        //update: function (id, data, callback) {
        //    connection.query("UPDATE `group` SET ? WHERE `ID` = ?", [data, id],  callback);
        //},
        //
        //delete: function (id, callback) {
        //    connection.query("DELETE FROM `group` WHERE `ID` = ?", id, callback);
        //}
    };

};
