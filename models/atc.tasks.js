/**
 * Created by Jahongir on 16-Apr-17.
 */
module.exports = function (connection){
  var select = "SELECT `tr_atc`.`ID`,`tr_clients`.`name_cl`,`tr_clients`.`telephone`,`tr_clients`.`address`," +
    "`tr_clients`.`n_passport`,`tr_atc`.`port`,`tr_atc`.`alc`, `tr_atc`.`id_client`,`tr_atc`.`ip_address` " +
    "AS `ipAddress`,`tr_vlan`.`name` AS `vlan`, `tr_atc`.`mac_address` AS `macAddress`, `tr_atc`.`stan`," +
    "`tr_atc`.`line`,`tr_atc`.`vpi`,`tr_atc`.`vci`, `tr_atc`.`status`, `tr_clients`.`phone` ";

  var from = " FROM `tr_atc`,`tr_clients`,`tr_vlan` ";

  var where = "WHERE (`tr_clients`.`ID`=`tr_atc`.`id_client`) AND (`tr_vlan`.`ID` = `tr_atc`.`id_vlan`)";

  var selectWifi = "SELECT `tr_wifi_optics`.`ID`,`tr_wifi_optics`.`id_client`, `tr_wifi_optics`.`status`," +
    "`tr_clients`.`name_cl`,`tr_clients`.`itMan`,  `tr_clients`.`telephone`, `tr_clients`.`address`, " +
    "`tr_clients`.`n_passport`, `tr_clients`.`phone`, `tr_wifi_optics`.`ip_address` AS `ipAddress`, " +
    "`tr_vlan`.`name` AS `vlan` FROM `tr_wifi_optics`,`tr_clients`,`tr_vlan` WHERE  (`tr_clients`.`ID` = " +
    "`tr_wifi_optics`.`id_client`) AND (`tr_vlan`.`ID` = `tr_wifi_optics`.`id_vlan`) AND `tr_wifi_optics`.`status` = '1'";

  var selectReport =  "SELECT `tr_reports`.`ID`,`tr_reports`.`date`, `tr_reports`.`problem`,`tr_clients`.`name_cl`," +
    "`tr_clients`.`telephone`,`tr_users`.`username`,`tr_users`.`status` FROM `tr_atc`,`tr_users`,`tr_clients`, " +
    "`tr_reports` WHERE `tr_reports`.`id_user` = `tr_users`.`ID` AND `tr_reports`.`idAtc` = `tr_atc`.`ID` AND " +
    "`tr_atc`.`id_client` = `tr_clients`.`ID` ";

  var orderReport = " ORDER BY `tr_reports`.`date` DESC";

  //Problems
  var selectProblem = "SELECT `tr_problems`.`ID`, `tr_problems`.`createDate`, `tr_problems`.`solveDate`, " +
    "`tr_problems`.`problem`, `tr_users`.`username` FROM `tr_problems`,`tr_users`  WHERE `tr_users`.`ID` = " +
    "`tr_problems`.`id_user` ";

  var orderProblem = " ORDER BY `tr_problems`.`createDate` DESC";

  var selectSign = "SELECT `tr_signs`.`ID`,`tr_signs`.`dateEntry`,`tr_signs`.`dateExit`,`tr_users`.`username` " +
    " FROM `tr_signs`, `tr_users` WHERE `tr_signs`.`id_user` = `tr_users`.`ID` ";

  var orderSign = " ORDER BY `tr_signs`.`dateEntry` DESC";

  return {
    list: function (callback) {
      connection.query("SELECT * FROM `tr_atc_list` ORDER BY `name`", callback);
    },

    listByAtc: function (id, callback) {
      connection.query(select + from + where + "AND `tr_atc`.`status`='1' AND `tr_atc`.`id_atc` = ?", id, callback);
    },

    addClient: function (record, callback) {
      connection.query("INSERT INTO `tr_clients` SET ?", record, callback);
    },

    addAtc: function (record, callback) {
      connection.query("INSERT INTO `tr_atc` SET ?", record, callback);
    },

    addWO: function (record, callback) {
      connection.query("INSERT INTO `tr_wifi_optics` SET ?", record, callback);
    },

    listVlan: function (callback) {
      connection.query("SELECT `tr_vlan`.`ID`,`tr_tariffs`.`name` AS `tariff`, `tr_vlan`.`name`, `tr_vlan`.`gateway`," +
        "`tr_vlan`.`subnet_mask` AS `subnetMask` FROM `tr_tariffs`,`tr_vlan` WHERE " +
        "(`tr_tariffs`.`ID` = `tr_vlan`.`id_tariff`)", callback);
    },

    listVlanForSelect: function (callback) {
      connection.query("SELECT * FROM `tr_vlan` ", callback);
    },

    addVlan: function (record, callback) {
      connection.query("INSERT INTO `tr_vlan` SET ?", record, callback);
    },

    deleteVlan: function (id, callback) {
      connection.query("DELETE FROM `tr_vlan` WHERE `ID` = ?", id, callback);
    },

    deleteAtc: function (id, callback) {
      connection.query("UPDATE `tr_atc` SET `status` = '0' WHERE `ID` = ?", id, callback);
    },

    deleteWO: function (id, callback) {
      connection.query("UPDATE `tr_wifi_optics` SET `status` = '0' WHERE `ID` = ?", id, callback);
    },

    updateVlan: function (data, id, callback) {
      connection.query("UPDATE `tr_vlan` SET ? WHERE `ID` = ?", [data, id],  callback);
    },

    updateAtc: function (data, id, callback) {
      connection.query("UPDATE `tr_atc` SET ? WHERE `ID` = ?", [data, id],  callback);
    },

    updateWO: function (data, id, callback) {
      connection.query("UPDATE `tr_wifi_optics` SET ? WHERE `ID` = ?", [data, id],  callback);
    },

    updateProblem: function (data, id, callback) {
      connection.query("UPDATE `tr_problems` SET ? WHERE `ID` = ?", [data, id],  callback);
    },

    updateClient: function (data, id, callback) {
      connection.query("UPDATE `tr_clients` SET ? WHERE `ID` = ?", [data, id],  callback);
    },

    updatePassword: function (password, id, callback) {
      connection.query("UPDATE `tr_users` SET `password` = ? WHERE `ID` = ?", [password, id],  callback);
    },

    updatePrivileges: function (data, id, callback) {
      connection.query("UPDATE `tr_users` SET ? WHERE `ID` = ? ;" +
        "SELECT * FROM `tr_users` WHERE `ID` = ?", [data, id, id],  callback);
    },

    updateLastSign: function (lastSign, id, callback) {
      connection.query("UPDATE `tr_users` SET `last_sign` = ? WHERE `ID` = ?", [lastSign, id],  callback);
    },

    listUsersForSelect  : function (callback) {
      connection.query("SELECT `username`, `ID` FROM `tr_users`", callback);
    },

    listTariff: function (callback) {
      connection.query("SELECT `ID`,`name` FROM `tr_tariffs`", callback);
    },

    listWifi: function (callback) {
      connection.query(selectWifi + " AND `tr_wifi_optics`.`type` = '1'", callback);
    },

    listOptics: function (callback) {
      connection.query(selectWifi + " AND `tr_wifi_optics`.`type` = '0'", callback);
    },

    listPrivilege: function (callback) {
      connection.query("SELECT `ID`,`username`, `status`,`p_atc`, `p_vlan`, `p_report`, " +
        "`p_wifi`, `p_optics` FROM `tr_users` ", callback);
    },

    getOne: function (login, callback){
      connection.query("SELECT * FROM `tr_users` WHERE `username` = ?", login, callback);
    },

    add: function (record, callback) {
      connection.query("INSERT INTO `tr_users` SET ?", record, callback);
    },

    addReport: function (record, callback) {
      connection.query("INSERT INTO `tr_reports` SET ?", record, callback);
    },

    addProblem: function (record, callback) {
      connection.query("INSERT INTO `tr_problems` SET ?", record, callback);
    },

    recordUserEntry: function (record, callback) {
      connection.query("INSERT INTO `tr_signs` SET ?", record, callback);
    },

    recordUserExit: function (dateExit, id, callback) {
      connection.query("UPDATE `tr_signs` SET `dateExit` = ? WHERE `ID` = ?", [dateExit, id], callback);
    },

    getResultSearch: function (id, callback) {
      connection.query(select + ",`tr_vlan`.`gateway`, `tr_vlan`.`subnet_mask`, `tr_tariffs`.`name` AS`tariffName`," +
        "`tr_atc_list`.`name` AS `atcName`, `tr_atc_list`.`ipAddress` AS `atcIp` " + from + " ,`tr_atc_list`,`tr_tariffs`" +
        where + "AND (`tr_atc_list`.`ID` = `tr_atc`.`id_atc`) AND (`tr_tariffs`.`ID` = `tr_vlan`.`id_tariff`) " +
        "AND (`tr_atc_list`.`ID` = `tr_atc`.`id_atc`) AND (`tr_atc`.`ID` = ?)", id, callback);
    },

    searchData: function (text, callback) {
      text = '%' + text + '%';
      connection.query("SELECT `tr_atc`.`ID`, `tr_clients`.`name_cl`, `tr_clients`.`telephone`, `tr_atc`.`ip_address` " +
        "AS`ipAddress`,`tr_atc`.`status` FROM `tr_atc`, `tr_clients` WHERE (`tr_clients`.`ID` = `tr_atc`.`id_client`) " +
        "AND (`tr_clients`.`name_cl` LIKE ? or `tr_clients`.`telephone` LIKE ? or `tr_atc`.`ip_address` LIKE ?) " +
        " LIMIT 0,20 ", [text, text, text], callback);
    },

    getClientsByVlan: function (id, callback) {
      connection.query("SELECT `tr_clients`.`name_cl`, `tr_clients`.`telephone`, `tr_atc`.`ip_address` AS `ipAddress` " +
        "FROM `tr_atc`,`tr_clients` WHERE (`tr_clients`.`ID` =`tr_atc`.`id_client`) AND `tr_atc`.`status`='1' " +
        "AND (`tr_atc`.`id_vlan` = ?) ", id, callback);
    },

    getReport: function (callback) {
      connection.query(selectReport + orderReport, callback);
    },

    getProblems: function (callback) {
      connection.query(selectProblem + orderProblem, callback);
    },

    listSigns: function (callback) {
      connection.query(selectSign + orderSign, callback);
    },

    filterReport: function (from, to, idUser, callback){
      connection.query(selectReport + " AND ( `tr_reports`.`date` >= ?) AND (`tr_reports`.`date` <= ?)"
         + "AND (`tr_reports`.`id_user` LIKE ? )" + orderReport , [from, to, idUser], callback);
    },

    filterProblem: function (from, to, idUser, callback){
      connection.query(selectProblem + " AND ( `tr_problems`.`createDate` >= ?) AND (`tr_problems`.`createDate` <= ?)"
        + " AND `tr_problems`.`id_user` LIKE ? " + orderProblem , [from, to, idUser], callback);
    },

    filterSign: function (from, to, idUser, callback){
      connection.query(selectSign + " AND ( `tr_signs`.`dateEntry` >= ?) AND (`tr_signs`.`dateEntry` <= ?)"
        + " AND `tr_signs`.`id_user` LIKE ? " + orderSign , [from, to, idUser], callback);
    }
  };
};


