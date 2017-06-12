"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Jahongir on 18-Apr-17.
 */
var Atc = (function () {
    function Atc(id, port, alc, idAtc, name, address, passport, telephone, phone, ipAddress, vlan, macAddress, stan, line, vpi, vci, idClient, isData) {
        this.id = id;
        this.port = port;
        this.alc = alc;
        this.idAtc = idAtc;
        this.name = name;
        this.address = address;
        this.passport = passport;
        this.telephone = telephone;
        this.phone = phone;
        this.ipAddress = ipAddress;
        this.vlan = vlan;
        this.macAddress = macAddress;
        this.stan = stan;
        this.line = line;
        this.vpi = vpi;
        this.vci = vci;
        this.idClient = idClient;
        this.isData = isData;
    }
    return Atc;
}());
exports.Atc = Atc;
var Wifi = (function () {
    function Wifi(number, id, type, name, itMan, address, passport, telephone, phone, ipAddress, vlan, idClient) {
        this.number = number;
        this.id = id;
        this.type = type;
        this.name = name;
        this.itMan = itMan;
        this.address = address;
        this.passport = passport;
        this.telephone = telephone;
        this.phone = phone;
        this.ipAddress = ipAddress;
        this.vlan = vlan;
        this.idClient = idClient;
    }
    return Wifi;
}());
exports.Wifi = Wifi;
var Report = (function () {
    function Report(number, 
        // public id?: number,
        date, user, client, telephone, problem) {
        this.number = number;
        this.date = date;
        this.user = user;
        this.client = client;
        this.telephone = telephone;
        this.problem = problem;
    }
    return Report;
}());
exports.Report = Report;
var Sign = (function () {
    function Sign(number, 
        // public id?: number,
        dateEntry, dateExit, username) {
        this.number = number;
        this.dateEntry = dateEntry;
        this.dateExit = dateExit;
        this.username = username;
    }
    return Sign;
}());
exports.Sign = Sign;
var Filter = (function () {
    function Filter(
        // public id?: number,
        dateFilter, userFilter, fromDate, toDate, type) {
        this.dateFilter = dateFilter;
        this.userFilter = userFilter;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.type = type;
    }
    return Filter;
}());
exports.Filter = Filter;
var Problem = (function () {
    function Problem(id, number, dateCreate, dateSolve, user, problem, status, changed) {
        this.id = id;
        this.number = number;
        this.dateCreate = dateCreate;
        this.dateSolve = dateSolve;
        this.user = user;
        this.problem = problem;
        this.status = status;
        this.changed = changed;
    }
    return Problem;
}());
exports.Problem = Problem;
var ICRUD = (function () {
    function ICRUD() {
    }
    return ICRUD;
}());
var CRUD = (function () {
    function CRUD(privilege) {
        this.privilege = privilege;
    }
    CRUD.prototype.getcrud = function () {
        this.crud = new ICRUD();
        this.crud.read = (this.privilege.substr(0, 1) == '1');
        this.crud.remove = (this.privilege.substr(1, 1) == '1');
        this.crud.update = (this.privilege.substr(2, 1) == '1');
        this.crud.create = (this.privilege.substr(3, 1) == '1');
        return this.crud;
    };
    return CRUD;
}());
exports.CRUD = CRUD;
var Privilege = (function () {
    function Privilege(id, number, username, position, pAtc, pVlan, pReport, pWifi, pOptics, changed) {
        this.id = id;
        this.number = number;
        this.username = username;
        this.position = position;
        this.pAtc = pAtc;
        this.pVlan = pVlan;
        this.pReport = pReport;
        this.pWifi = pWifi;
        this.pOptics = pOptics;
        this.changed = changed;
    }
    return Privilege;
}());
exports.Privilege = Privilege;
var VlansClients = (function () {
    function VlansClients(number, name, telephone, ipAddress) {
        this.number = number;
        this.name = name;
        this.telephone = telephone;
        this.ipAddress = ipAddress;
    }
    return VlansClients;
}());
exports.VlansClients = VlansClients;
var AtcList = (function () {
    function AtcList(id, name, ipAddress, alcQuant) {
        this.id = id;
        this.name = name;
        this.ipAddress = ipAddress;
        this.alcQuant = alcQuant;
    }
    return AtcList;
}());
exports.AtcList = AtcList;
var Vlan = (function () {
    function Vlan(number, id, gateway, name, tariff, subnetMask) {
        this.number = number;
        this.id = id;
        this.gateway = gateway;
        this.name = name;
        this.tariff = tariff;
        this.subnetMask = subnetMask;
    }
    return Vlan;
}());
exports.Vlan = Vlan;
var Tariff = (function () {
    function Tariff(number, id, name, price, incomingSpeed, outgoingSpeed, traffic) {
        this.number = number;
        this.id = id;
        this.name = name;
        this.price = price;
        this.incomingSpeed = incomingSpeed;
        this.outgoingSpeed = outgoingSpeed;
        this.traffic = traffic;
    }
    return Tariff;
}());
exports.Tariff = Tariff;
var ChangePassword = (function () {
    function ChangePassword(currentPassword, newPassword, repeatNewPassword) {
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
        this.repeatNewPassword = repeatNewPassword;
    }
    return ChangePassword;
}());
exports.ChangePassword = ChangePassword;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9zaGFyZWQvY29tcG9uZW50cy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOztHQUVHO0FBQ0g7SUFDRSxhQUNTLEVBQWMsRUFDZCxJQUFjLEVBQ2QsR0FBYyxFQUNkLEtBQWMsRUFDZCxJQUFjLEVBQ2QsT0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsU0FBbUIsRUFDbkIsS0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsSUFBbUIsRUFDbkIsVUFBbUIsRUFDbkIsSUFBYSxFQUNiLElBQWEsRUFDYixHQUFhLEVBQ2IsR0FBYSxFQUNiLFFBQWlCLEVBQ2pCLE1BQWtCO1FBakJsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQ2IsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUN6QixDQUFDO0lBQ0wsVUFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksa0JBQUc7QUF1QmhCO0lBQ0UsY0FDUyxNQUFlLEVBQ2YsRUFBZSxFQUNmLElBQWlCLEVBQ2pCLElBQWUsRUFDZixL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S0FBSyxDQUFTO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUN2QixDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksd0JBQU07QUFZbkI7SUFDRSx3QkFDUyxlQUEwQixFQUMxQixXQUEwQixFQUMxQixpQkFBMEI7UUFGMUIsb0JBQWUsR0FBZixlQUFlLENBQVc7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFTO0lBQ2pDLENBQUM7SUFDTCxxQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksd0NBQWMiLCJmaWxlIjoic2hhcmVkL2NvbXBvbmVudHMubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZVRpbWVGb3JtYXQgPSBJbnRsLkRhdGVUaW1lRm9ybWF0O1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAxOC1BcHItMTcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXRje1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGlkPzogICAgbnVtYmVyLFxyXG4gICAgcHVibGljIHBvcnQ/OiAgbnVtYmVyLFxyXG4gICAgcHVibGljIGFsYz86ICAgbnVtYmVyLFxyXG4gICAgcHVibGljIGlkQXRjPzogbnVtYmVyLFxyXG4gICAgcHVibGljIG5hbWU/OiAgc3RyaW5nLFxyXG4gICAgcHVibGljIGFkZHJlc3M/OiAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcGFzc3BvcnQ/OiAgIHN0cmluZyxcclxuICAgIHB1YmxpYyB0ZWxlcGhvbmU/OiAgc3RyaW5nLFxyXG4gICAgcHVibGljIHBob25lPzogICAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaXBBZGRyZXNzPzogIHN0cmluZyxcclxuICAgIHB1YmxpYyB2bGFuPzogICAgICAgc3RyaW5nLFxyXG4gICAgcHVibGljIG1hY0FkZHJlc3M/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgc3Rhbj86IG51bWJlcixcclxuICAgIHB1YmxpYyBsaW5lPzogbnVtYmVyLFxyXG4gICAgcHVibGljIHZwaT86ICBudW1iZXIsXHJcbiAgICBwdWJsaWMgdmNpPzogIG51bWJlcixcclxuICAgIHB1YmxpYyBpZENsaWVudD86IG51bWJlcixcclxuICAgIHB1YmxpYyBpc0RhdGE/OiAgIGJvb2xlYW5cclxuICApe31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpZml7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnVtYmVyPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGlkPzogICAgIG51bWJlcixcclxuICAgIHB1YmxpYyB0eXBlPzogICAgIG51bWJlcixcclxuICAgIHB1YmxpYyBuYW1lPzogICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaXRNYW4/OiAgc3RyaW5nLFxyXG4gICAgcHVibGljIGFkZHJlc3M/OiAgIHN0cmluZyxcclxuICAgIHB1YmxpYyBwYXNzcG9ydD86ICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGVsZXBob25lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHBob25lPzogICAgIHN0cmluZyxcclxuICAgIHB1YmxpYyBpcEFkZHJlc3M/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdmxhbj86ICAgICAgc3RyaW5nLFxyXG4gICAgcHVibGljIGlkQ2xpZW50PzogIG51bWJlclxyXG4gICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0e1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG51bWJlcj86IG51bWJlcixcclxuICAgIC8vIHB1YmxpYyBpZD86IG51bWJlcixcclxuICAgIHB1YmxpYyBkYXRlPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHVzZXI/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgY2xpZW50PzogICAgc3RyaW5nLFxyXG4gICAgcHVibGljIHRlbGVwaG9uZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBwcm9ibGVtPzogICAgc3RyaW5nXHJcbiAgKXt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdue1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG51bWJlcj86IG51bWJlcixcclxuICAgIC8vIHB1YmxpYyBpZD86IG51bWJlcixcclxuICAgIHB1YmxpYyBkYXRlRW50cnk/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGF0ZUV4aXQ/OiAgc3RyaW5nLFxyXG4gICAgcHVibGljIHVzZXJuYW1lPzogIHN0cmluZ1xyXG4gICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVye1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgLy8gcHVibGljIGlkPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGRhdGVGaWx0ZXI/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdXNlckZpbHRlcj86IHN0cmluZyxcclxuICAgIHB1YmxpYyBmcm9tRGF0ZT86ICAgc3RyaW5nLFxyXG4gICAgcHVibGljIHRvRGF0ZT86ICAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdHlwZT86ICAgICAgIHN0cmluZ1xyXG4gICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvYmxlbXtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpZD86ICAgICBudW1iZXIsXHJcbiAgICBwdWJsaWMgbnVtYmVyPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGRhdGVDcmVhdGU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGF0ZVNvbHZlPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHVzZXI/OiAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcHJvYmxlbT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBzdGF0dXM/OiAgYm9vbGVhbixcclxuICAgIHB1YmxpYyBjaGFuZ2VkPzogIGJvb2xlYW5cclxuICApe31cclxufVxyXG5cclxuY2xhc3MgSUNSVUR7XHJcbiAgcHVibGljIHJlYWQ6ICAgYm9vbGVhbjtcclxuICBwdWJsaWMgcmVtb3ZlOiBib29sZWFuO1xyXG4gIHB1YmxpYyB1cGRhdGU6IGJvb2xlYW47XHJcbiAgcHVibGljIGNyZWF0ZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENSVUR7XHJcbiAgY3J1ZDogSUNSVUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHByaXZpbGVnZTogc3RyaW5nKXt9XHJcbiAgIGdldGNydWQoKXtcclxuICAgICAgdGhpcy5jcnVkID0gbmV3IElDUlVEKCk7XHJcbiAgICAgIHRoaXMuY3J1ZC5yZWFkICAgPSAodGhpcy5wcml2aWxlZ2Uuc3Vic3RyKDAsMSkgPT0gJzEnKTtcclxuICAgICAgdGhpcy5jcnVkLnJlbW92ZSA9ICh0aGlzLnByaXZpbGVnZS5zdWJzdHIoMSwxKSA9PSAnMScpO1xyXG4gICAgICB0aGlzLmNydWQudXBkYXRlID0gKHRoaXMucHJpdmlsZWdlLnN1YnN0cigyLDEpID09ICcxJyk7XHJcbiAgICAgIHRoaXMuY3J1ZC5jcmVhdGUgPSAodGhpcy5wcml2aWxlZ2Uuc3Vic3RyKDMsMSkgPT0gJzEnKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNydWQ7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZpbGVnZXtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpZD86IG51bWJlcixcclxuICAgIHB1YmxpYyBudW1iZXI/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgdXNlcm5hbWU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcG9zaXRpb24/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcEF0Yz86IElDUlVELFxyXG4gICAgcHVibGljIHBWbGFuPzogSUNSVUQsXHJcbiAgICBwdWJsaWMgcFJlcG9ydD86IElDUlVELFxyXG4gICAgcHVibGljIHBXaWZpPzogSUNSVUQsXHJcbiAgICBwdWJsaWMgcE9wdGljcz86IElDUlVELFxyXG4gICAgcHVibGljIGNoYW5nZWQ/OiBib29sZWFuXHJcbiAgKXt9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmxhbnNDbGllbnRze1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG51bWJlcj86IG51bWJlcixcclxuICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHRlbGVwaG9uZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBpcEFkZHJlc3M/OiAgICBzdHJpbmdcclxuICApe31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0Y0xpc3R7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgbmFtZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBpcEFkZHJlc3M/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgYWxjUXVhbnQ/OiBudW1iZXJcclxuICApe31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZsYW57XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnVtYmVyPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGlkPzogICAgIG51bWJlcixcclxuICAgIHB1YmxpYyBnYXRld2F5Pzogc3RyaW5nLFxyXG4gICAgcHVibGljIG5hbWU/OiAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGFyaWZmPzogIHN0cmluZyxcclxuICAgIHB1YmxpYyBzdWJuZXRNYXNrPzogc3RyaW5nXHJcbiAgKXt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXJpZmZ7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnVtYmVyPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGlkPzogbnVtYmVyLFxyXG4gICAgcHVibGljIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcHJpY2U/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaW5jb21pbmdTcGVlZD86IHN0cmluZyxcclxuICAgIHB1YmxpYyBvdXRnb2luZ1NwZWVkPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHRyYWZmaWM/OiBudW1iZXJcclxuICApe31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3Jke1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGN1cnJlbnRQYXNzd29yZD86ICAgc3RyaW5nLFxyXG4gICAgcHVibGljIG5ld1Bhc3N3b3JkPzogICAgICAgc3RyaW5nLFxyXG4gICAgcHVibGljIHJlcGVhdE5ld1Bhc3N3b3JkPzogc3RyaW5nXHJcbiAgKXt9XHJcbn1cclxuIl19
