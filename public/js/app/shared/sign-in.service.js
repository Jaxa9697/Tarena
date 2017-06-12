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
    SignInService.prototype.signIn = function (obj) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('http://localhost:5001/signIn', body, { headers: headers })
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9zaGFyZWQvc2lnbi1pbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDRixzQ0FBMEM7QUFDMUMsc0NBQXlEO0FBSXpELHVDQUFxQztBQUNyQyxtQkFBaUI7QUFHakIsSUFBYSxhQUFhO0lBQ3hCLHVCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFFLENBQUM7SUFFbEMsOEJBQU0sR0FBTixVQUFPLEdBQVM7UUFDZCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGdDQUFnQyxFQUFFLENBQUMsQ0FBQztRQUVoRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzlFLEdBQUcsQ0FBQyxVQUFDLElBQWM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxvQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUVnQixXQUFJO0dBRHBCLGFBQWEsQ0FZekI7QUFaWSxzQ0FBYSIsImZpbGUiOiJzaGFyZWQvc2lnbi1pbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMTEtQXByLTE3LlxyXG4gKi9cclxuIGltcG9ydHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICBcIkBhbmd1bGFyL2h0dHBcIjtcclxuIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbiBpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcclxuXHJcbiBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbiBpbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuIEBJbmplY3RhYmxlKClcclxuIGV4cG9ydCBjbGFzcyBTaWduSW5TZXJ2aWNlIHtcclxuICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCl7fVxyXG5cclxuICAgc2lnbkluKG9iajogVXNlciApe1xyXG4gICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xyXG4gICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcgfSk7XHJcblxyXG4gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL3NpZ25JbicsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgLm1hcCgoZGF0YTogUmVzcG9uc2UgKT0+IHtcclxuICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxuIH1cclxuIl19
