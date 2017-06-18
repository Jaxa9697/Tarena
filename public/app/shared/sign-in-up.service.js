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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL3NoYXJlZC9zaWduLWluLXVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNGLHNDQUEwQztBQUMxQyxzQ0FBeUQ7QUFHekQsdUNBQXFDO0FBQ3JDLG1CQUFpQjtBQUdqQixJQUFhLGFBQWE7SUFDeEIsdUJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUUsQ0FBQztJQUVsQyx5Q0FBaUIsR0FBakI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxVQUFDLElBQWM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sR0FBUztRQUNkLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDO1FBRWhGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pELEdBQUcsQ0FBQyxVQUFDLElBQWM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sR0FBZTtRQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGdDQUFnQyxFQUFFLENBQUMsQ0FBQztRQUVoRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN6RCxHQUFHLENBQUMsVUFBQyxJQUFjO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FFZ0IsV0FBSTtHQURwQixhQUFhLENBNkJ6QjtBQTdCWSxzQ0FBYSIsImZpbGUiOiJzaGFyZWQvc2lnbi1pbi11cC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMTEtQXByLTE3LlxyXG4gKi9cclxuIGltcG9ydHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICBcIkBhbmd1bGFyL2h0dHBcIjtcclxuIGltcG9ydCB7IFVzZXIsIFVzZXJTaWduVXB9IGZyb20gJy4vdXNlcic7XHJcblxyXG4gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG4gaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbiBASW5qZWN0YWJsZSgpXHJcbiBleHBvcnQgY2xhc3MgU2lnbkluU2VydmljZSB7XHJcbiAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApe31cclxuXHJcbiAgIHNpZ25JblVzaW5nQ29va2llKCl7XHJcbiAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9zaWduSW4nKVxyXG4gICAgICAgLm1hcCgoZGF0YTogUmVzcG9uc2UgKT0+IHtcclxuICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHNpZ25JbihvYmo6IFVzZXIgKXtcclxuICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnIH0pO1xyXG5cclxuICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9zaWduSW4nLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgIC5tYXAoKGRhdGE6IFJlc3BvbnNlICk9PiB7XHJcbiAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcclxuICAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBzaWduVXAob2JqOiBVc2VyU2lnblVwICl7XHJcbiAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyB9KTtcclxuXHJcbiAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvc2lnblVwJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAubWFwKChkYXRhOiBSZXNwb25zZSApPT4ge1xyXG4gICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XHJcbiAgICAgICB9KTtcclxuICAgfVxyXG4gfVxyXG4iXX0=
