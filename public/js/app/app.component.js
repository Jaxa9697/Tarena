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
var core_1 = require("@angular/core");
var sign_in_up_service_1 = require("./shared/sign-in-up.service");
var user_1 = require("./shared/user");
var header_component_1 = require("./components/header.component");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var header_service_1 = require("./shared/header.service");
var AppComponent = (function () {
    function AppComponent(signInService, headerService, componentFactoryResolver, _cookieService) {
        this.signInService = signInService;
        this.headerService = headerService;
        this.componentFactoryResolver = componentFactoryResolver;
        this._cookieService = _cookieService;
        this.EntryPage = false;
        this.entryError = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.createHeaderComponent = function (data) {
        if (data.message == "ok") {
            this.EntryPage = true;
            var childComponent = this.componentFactoryResolver.resolveComponentFactory(header_component_1.HeaderComponent);
            var cmpRef = this.parent.createComponent(childComponent);
            cmpRef.instance.user = this.headerService.getUserPrivileges(data.user, 0);
        }
        else {
            this.entryError = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookie = this._cookieService.get('remember');
        if (cookie) {
            this.signInService.signInUsingCookie()
                .subscribe(function (data) {
                _this.createHeaderComponent(data);
            });
        }
    };
    AppComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.signInService.signIn(user)
            .subscribe(function (data) {
            _this.createHeaderComponent(data);
        });
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('parent', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], AppComponent.prototype, "parent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/js/app/components/views/app.component.html',
        providers: [sign_in_up_service_1.SignInService, cookies_service_1.CookieService, header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [sign_in_up_service_1.SignInService,
        header_service_1.HeaderService,
        core_1.ComponentFactoryResolver,
        cookies_service_1.CookieService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWdHO0FBQ2hHLGtFQUErRDtBQUMvRCxzQ0FBaUQ7QUFDakQsa0VBQWlFO0FBQ2pFLDRFQUE0RTtBQUM1RSwwREFBc0Q7QUFRdEQsSUFBYSxZQUFZO0lBT3ZCLHNCQUFxQixhQUE0QixFQUM1QixhQUE0QixFQUM1Qix3QkFBa0QsRUFDbEQsY0FBNkI7UUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVQxQyxjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFXbkMsU0FBSSxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7SUFGckIsQ0FBQztJQUlKLDRDQUFxQixHQUFyQixVQUFzQixJQUFJO1FBQ3hCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUV0QixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsa0NBQWUsQ0FBQyxDQUFDO1lBQzlGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUUvRSxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFO2lCQUNuQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUNkLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDSCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQUk7UUFBYixpQkFLQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUM1QixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQXhDQztJQURDLGdCQUFTLENBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7OEJBQ3RDLHVCQUFnQjs0Q0FBQztBQUxkLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSw2Q0FBNkM7UUFDMUQsU0FBUyxFQUFFLENBQUUsa0NBQWEsRUFBRSwrQkFBYSxFQUFFLDhCQUFhLENBQUU7S0FDM0QsQ0FBQztxQ0FTb0Msa0NBQWE7UUFDYiw4QkFBYTtRQUNGLCtCQUF3QjtRQUNsQywrQkFBYTtHQVZ2QyxZQUFZLENBNkN4QjtBQTdDWSxvQ0FBWSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWduSW5TZXJ2aWNlIH0gICAgZnJvbSAnLi9zaGFyZWQvc2lnbi1pbi11cC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tIFwiLi9zaGFyZWQvdXNlclwiO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9ICAgIGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9zZXJ2aWNlcy9jb29raWVzLnNlcnZpY2UnO1xuaW1wb3J0IHtIZWFkZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICcvanMvYXBwL2NvbXBvbmVudHMvdmlld3MvYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbIFNpZ25JblNlcnZpY2UsIENvb2tpZVNlcnZpY2UsIEhlYWRlclNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHByaXZhdGUgRW50cnlQYWdlOiAgYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGVudHJ5RXJyb3I6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhcmVudCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgcGFyZW50OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIHNpZ25JblNlcnZpY2U6IFNpZ25JblNlcnZpY2UsXG4gICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UsXG4gICAgICAgICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29va2llU2VydmljZTogQ29va2llU2VydmljZVxuICApIHt9XG5cbiAgdXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XG5cbiAgY3JlYXRlSGVhZGVyQ29tcG9uZW50KGRhdGEpOiB2b2lke1xuICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIm9rXCIpe1xuICAgICAgdGhpcy5FbnRyeVBhZ2UgPSB0cnVlO1xuXG4gICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEhlYWRlckNvbXBvbmVudCk7XG4gICAgICBsZXQgY21wUmVmID0gdGhpcy5wYXJlbnQuY3JlYXRlQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgICBjbXBSZWYuaW5zdGFuY2UudXNlciA9IHRoaXMuaGVhZGVyU2VydmljZS5nZXRVc2VyUHJpdmlsZWdlcyhkYXRhLnVzZXIsMCk7XG5cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuZW50cnlFcnJvciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgbGV0IGNvb2tpZSA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UuZ2V0KCdyZW1lbWJlcicpO1xuICAgIGlmIChjb29raWUpe1xuICAgICAgdGhpcy5zaWduSW5TZXJ2aWNlLnNpZ25JblVzaW5nQ29va2llKClcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3JlYXRlSGVhZGVyQ29tcG9uZW50KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCh1c2VyKTogdm9pZHtcbiAgICB0aGlzLnNpZ25JblNlcnZpY2Uuc2lnbkluKHVzZXIpXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuY3JlYXRlSGVhZGVyQ29tcG9uZW50KGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19
