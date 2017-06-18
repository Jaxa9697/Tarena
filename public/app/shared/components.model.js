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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0dBRUc7QUFDSDtJQUNFLGFBQ1MsRUFBYyxFQUNkLElBQWMsRUFDZCxHQUFjLEVBQ2QsS0FBYyxFQUNkLElBQWMsRUFDZCxPQUFtQixFQUNuQixRQUFtQixFQUNuQixTQUFtQixFQUNuQixLQUFtQixFQUNuQixTQUFtQixFQUNuQixJQUFtQixFQUNuQixVQUFtQixFQUNuQixJQUFhLEVBQ2IsSUFBYSxFQUNiLEdBQWEsRUFDYixHQUFhLEVBQ2IsUUFBaUIsRUFDakIsTUFBa0I7UUFqQmxCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFFBQUcsR0FBSCxHQUFHLENBQVU7UUFDYixRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFZO0lBQ3pCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxrQkFBRztBQXVCaEI7SUFDRSxjQUNTLE1BQWUsRUFDZixFQUFlLEVBQ2YsSUFBaUIsRUFDakIsSUFBZSxFQUNmLEtBQWUsRUFD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QVM7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3ZCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSx3QkFBTTtBQVluQjtJQUNFLHdCQUNTLGVBQTBCLEVBQzFCLFdBQTBCLEVBQzFCLGlCQUEwQjtRQUYxQixvQkFBZSxHQUFmLGVBQWUsQ0FBVztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUMxQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVM7SUFDakMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSx3Q0FBYyIsImZpbGUiOiJzaGFyZWQvY29tcG9uZW50cy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlVGltZUZvcm1hdCA9IEludGwuRGF0ZVRpbWVGb3JtYXQ7XHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDE4LUFwci0xNy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdGN7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ/OiAgICBudW1iZXIsXHJcbiAgICBwdWJsaWMgcG9ydD86ICBudW1iZXIsXHJcbiAgICBwdWJsaWMgYWxjPzogICBudW1iZXIsXHJcbiAgICBwdWJsaWMgaWRBdGM/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgbmFtZT86ICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgYWRkcmVzcz86ICAgIHN0cmluZyxcclxuICAgIHB1YmxpYyBwYXNzcG9ydD86ICAgc3RyaW5nLFxyXG4gICAgcHVibGljIHRlbGVwaG9uZT86ICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcGhvbmU/OiAgICAgIHN0cmluZyxcclxuICAgIHB1YmxpYyBpcEFkZHJlc3M/OiAgc3RyaW5nLFxyXG4gICAgcHVibGljIHZsYW4/OiAgICAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgbWFjQWRkcmVzcz86IHN0cmluZyxcclxuICAgIHB1YmxpYyBzdGFuPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGxpbmU/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgdnBpPzogIG51bWJlcixcclxuICAgIHB1YmxpYyB2Y2k/OiAgbnVtYmVyLFxyXG4gICAgcHVibGljIGlkQ2xpZW50PzogbnVtYmVyLFxyXG4gICAgcHVibGljIGlzRGF0YT86ICAgYm9vbGVhblxyXG4gICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2lmaXtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBudW1iZXI/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgaWQ/OiAgICAgbnVtYmVyLFxyXG4gICAgcHVibGljIHR5cGU/OiAgICAgbnVtYmVyLFxyXG4gICAgcHVibGljIG5hbWU/OiAgIHN0cmluZyxcclxuICAgIHB1YmxpYyBpdE1hbj86ICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgYWRkcmVzcz86ICAgc3RyaW5nLFxyXG4gICAgcHVibGljIHBhc3Nwb3J0PzogIHN0cmluZyxcclxuICAgIHB1YmxpYyB0ZWxlcGhvbmU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcGhvbmU/OiAgICAgc3RyaW5nLFxyXG4gICAgcHVibGljIGlwQWRkcmVzcz86IHN0cmluZyxcclxuICAgIHB1YmxpYyB2bGFuPzogICAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaWRDbGllbnQ/OiAgbnVtYmVyXHJcbiAgKXt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnR7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnVtYmVyPzogbnVtYmVyLFxyXG4gICAgLy8gcHVibGljIGlkPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGRhdGU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdXNlcj86IHN0cmluZyxcclxuICAgIHB1YmxpYyBjbGllbnQ/OiAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGVsZXBob25lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHByb2JsZW0/OiAgICBzdHJpbmdcclxuICApe31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ257XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnVtYmVyPzogbnVtYmVyLFxyXG4gICAgLy8gcHVibGljIGlkPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGRhdGVFbnRyeT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBkYXRlRXhpdD86ICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdXNlcm5hbWU/OiAgc3RyaW5nXHJcbiAgKXt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJ7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvLyBwdWJsaWMgaWQ/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgZGF0ZUZpbHRlcj86IHN0cmluZyxcclxuICAgIHB1YmxpYyB1c2VyRmlsdGVyPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGZyb21EYXRlPzogICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdG9EYXRlPzogICAgIHN0cmluZyxcclxuICAgIHB1YmxpYyB0eXBlPzogICAgICAgc3RyaW5nXHJcbiAgKXt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ibGVte1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGlkPzogICAgIG51bWJlcixcclxuICAgIHB1YmxpYyBudW1iZXI/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgZGF0ZUNyZWF0ZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBkYXRlU29sdmU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdXNlcj86ICAgIHN0cmluZyxcclxuICAgIHB1YmxpYyBwcm9ibGVtPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHN0YXR1cz86ICBib29sZWFuLFxyXG4gICAgcHVibGljIGNoYW5nZWQ/OiAgYm9vbGVhblxyXG4gICl7fVxyXG59XHJcblxyXG5jbGFzcyBJQ1JVRHtcclxuICBwdWJsaWMgcmVhZDogICBib29sZWFuO1xyXG4gIHB1YmxpYyByZW1vdmU6IGJvb2xlYW47XHJcbiAgcHVibGljIHVwZGF0ZTogYm9vbGVhbjtcclxuICBwdWJsaWMgY3JlYXRlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ1JVRHtcclxuICBjcnVkOiBJQ1JVRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJpdmlsZWdlOiBzdHJpbmcpe31cclxuICAgZ2V0Y3J1ZCgpe1xyXG4gICAgICB0aGlzLmNydWQgPSBuZXcgSUNSVUQoKTtcclxuICAgICAgdGhpcy5jcnVkLnJlYWQgICA9ICh0aGlzLnByaXZpbGVnZS5zdWJzdHIoMCwxKSA9PSAnMScpO1xyXG4gICAgICB0aGlzLmNydWQucmVtb3ZlID0gKHRoaXMucHJpdmlsZWdlLnN1YnN0cigxLDEpID09ICcxJyk7XHJcbiAgICAgIHRoaXMuY3J1ZC51cGRhdGUgPSAodGhpcy5wcml2aWxlZ2Uuc3Vic3RyKDIsMSkgPT0gJzEnKTtcclxuICAgICAgdGhpcy5jcnVkLmNyZWF0ZSA9ICh0aGlzLnByaXZpbGVnZS5zdWJzdHIoMywxKSA9PSAnMScpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY3J1ZDtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmlsZWdle1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGlkPzogbnVtYmVyLFxyXG4gICAgcHVibGljIG51bWJlcj86IG51bWJlcixcclxuICAgIHB1YmxpYyB1c2VybmFtZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBwb3NpdGlvbj86IHN0cmluZyxcclxuICAgIHB1YmxpYyBwQXRjPzogSUNSVUQsXHJcbiAgICBwdWJsaWMgcFZsYW4/OiBJQ1JVRCxcclxuICAgIHB1YmxpYyBwUmVwb3J0PzogSUNSVUQsXHJcbiAgICBwdWJsaWMgcFdpZmk/OiBJQ1JVRCxcclxuICAgIHB1YmxpYyBwT3B0aWNzPzogSUNSVUQsXHJcbiAgICBwdWJsaWMgY2hhbmdlZD86IGJvb2xlYW5cclxuICApe31cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWbGFuc0NsaWVudHN7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnVtYmVyPzogbnVtYmVyLFxyXG4gICAgcHVibGljIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGVsZXBob25lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGlwQWRkcmVzcz86ICAgIHN0cmluZ1xyXG4gICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXRjTGlzdHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpZD86IG51bWJlcixcclxuICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGlwQWRkcmVzcz86IHN0cmluZyxcclxuICAgIHB1YmxpYyBhbGNRdWFudD86IG51bWJlclxyXG4gICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmxhbntcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBudW1iZXI/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgaWQ/OiAgICAgbnVtYmVyLFxyXG4gICAgcHVibGljIGdhdGV3YXk/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgbmFtZT86ICAgIHN0cmluZyxcclxuICAgIHB1YmxpYyB0YXJpZmY/OiAgc3RyaW5nLFxyXG4gICAgcHVibGljIHN1Ym5ldE1hc2s/OiBzdHJpbmdcclxuICApe31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhcmlmZntcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBudW1iZXI/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgaWQ/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgbmFtZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBwcmljZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBpbmNvbWluZ1NwZWVkPzogc3RyaW5nLFxyXG4gICAgcHVibGljIG91dGdvaW5nU3BlZWQ/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdHJhZmZpYz86IG51bWJlclxyXG4gICl7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmR7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY3VycmVudFBhc3N3b3JkPzogICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgbmV3UGFzc3dvcmQ/OiAgICAgICBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcmVwZWF0TmV3UGFzc3dvcmQ/OiBzdHJpbmdcclxuICApe31cclxufVxyXG4iXX0=
