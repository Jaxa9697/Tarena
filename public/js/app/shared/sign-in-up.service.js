"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Jahongir on 11-Apr-17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/Rx");
var SignInService = (function () {
    function SignInService(http) {
        this.http = http;
    }
    SignInService.prototype.signInUsingCookie = function () {
        return this.http.get('/signIn')
            .map(function (data) {
            return data.json();
        });
    };
    SignInService.prototype.signIn = function (obj) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('/signIn', body, { headers: headers })
            .map(function (data) {
            return data.json();
        });
    };
    SignInService.prototype.signUp = function (obj) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('/signUp', body, { headers: headers })
            .map(function (data) {
            return data.json();
        });
    };
    return SignInService;
}());
SignInService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignInService);
exports.SignInService = SignInService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9zaGFyZWQvc2lnbi1pbi11cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDRixzQ0FBMEM7QUFDMUMsc0NBQXlEO0FBR3pELHVDQUFxQztBQUNyQyxtQkFBaUI7QUFHakIsSUFBYSxhQUFhO0lBQ3hCLHVCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFFLENBQUM7SUFFbEMseUNBQWlCLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUM1QixHQUFHLENBQUMsVUFBQyxJQUFjO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEdBQVM7UUFDZCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGdDQUFnQyxFQUFFLENBQUMsQ0FBQztRQUVoRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN6RCxHQUFHLENBQUMsVUFBQyxJQUFjO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEdBQWU7UUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUM7UUFFaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDekQsR0FBRyxDQUFDLFVBQUMsSUFBYztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBRWdCLFdBQUk7R0FEcEIsYUFBYSxDQTZCekI7QUE3Qlksc0NBQWEiLCJmaWxlIjoic2hhcmVkL3NpZ24taW4tdXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDExLUFwci0xNy5cclxuICovXHJcbiBpbXBvcnR7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuIGltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAgXCJAYW5ndWxhci9odHRwXCI7XHJcbiBpbXBvcnQgeyBVc2VyLCBVc2VyU2lnblVwfSBmcm9tICcuL3VzZXInO1xyXG5cclxuIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuIGltcG9ydCAncnhqcy9SeCc7XHJcblxyXG4gQEluamVjdGFibGUoKVxyXG4gZXhwb3J0IGNsYXNzIFNpZ25JblNlcnZpY2Uge1xyXG4gICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKXt9XHJcblxyXG4gICBzaWduSW5Vc2luZ0Nvb2tpZSgpe1xyXG4gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvc2lnbkluJylcclxuICAgICAgIC5tYXAoKGRhdGE6IFJlc3BvbnNlICk9PiB7XHJcbiAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcclxuICAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBzaWduSW4ob2JqOiBVc2VyICl7XHJcbiAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyB9KTtcclxuXHJcbiAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvc2lnbkluJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAubWFwKChkYXRhOiBSZXNwb25zZSApPT4ge1xyXG4gICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XHJcbiAgICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgc2lnblVwKG9iajogVXNlclNpZ25VcCApe1xyXG4gICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xyXG4gICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcgfSk7XHJcblxyXG4gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL3NpZ25VcCcsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgLm1hcCgoZGF0YTogUmVzcG9uc2UgKT0+IHtcclxuICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxuIH1cclxuIl19
