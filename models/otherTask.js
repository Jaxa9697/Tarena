/**
 * Created by JAHONGIR-PC on 07/21/2016.
 */
module.exports = function (connection){

    return Tasks = {
        list: function(from, callback){
            connection.query(" SELECT * FROM ??", from, callback);
        },

        add: function (into, record, callback) {
            connection.query("INSERT INTO ?? SET ?", [into ,record], callback);
        },

        delete: function (from, where ,id, callback) {
            connection.query("DELETE FROM ?? WHERE ?? = ?",[from, where, id], callback);
        }
    };
};
