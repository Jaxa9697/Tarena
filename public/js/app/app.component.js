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
        this.primary = "primary";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWdHO0FBQ2hHLGtFQUErRDtBQUMvRCxzQ0FBaUQ7QUFDakQsa0VBQWlFO0FBQ2pFLDRFQUE0RTtBQUM1RSwwREFBc0Q7QUFRdEQsSUFBYSxZQUFZO0lBU3ZCLHNCQUFxQixhQUE0QixFQUM1QixhQUE0QixFQUM1Qix3QkFBa0QsRUFDbEQsY0FBNkI7UUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVgxQyxjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFbkMsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQVc1QixTQUFJLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUZyQixDQUFDO0lBSUosNENBQXFCLEdBQXJCLFVBQXNCLElBQUk7UUFDeEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRXRCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxrQ0FBZSxDQUFDLENBQUM7WUFDOUYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9FLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7aUJBQ25DLFNBQVMsQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUFiLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBeENDO0lBREMsZ0JBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsdUJBQWdCLEVBQUMsQ0FBQzs4QkFDdEMsdUJBQWdCOzRDQUFDO0FBUGQsWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxTQUFTLEVBQUUsQ0FBRSxrQ0FBYSxFQUFFLCtCQUFhLEVBQUUsOEJBQWEsQ0FBRTtLQUMzRCxDQUFDO3FDQVdvQyxrQ0FBYTtRQUNiLDhCQUFhO1FBQ0YsK0JBQXdCO1FBQ2xDLCtCQUFhO0dBWnZDLFlBQVksQ0ErQ3hCO0FBL0NZLG9DQUFZIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZ25JblNlcnZpY2UgfSAgICBmcm9tICcuL3NoYXJlZC9zaWduLWluLXVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciwgVXNlclNpZ25VcCB9IGZyb20gXCIuL3NoYXJlZC91c2VyXCI7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSAgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gICAgZnJvbSAnYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZSc7XG5pbXBvcnQge0hlYWRlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9oZWFkZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJy9qcy9hcHAvY29tcG9uZW50cy92aWV3cy9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFsgU2lnbkluU2VydmljZSwgQ29va2llU2VydmljZSwgSGVhZGVyU2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBFbnRyeVBhZ2U6ICBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZW50cnlFcnJvcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpbWFyeTogc3RyaW5nID0gXCJwcmltYXJ5XCI7XG5cbiAgQFZpZXdDaGlsZCgncGFyZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxuICBwYXJlbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgc2lnbkluU2VydmljZTogU2lnbkluU2VydmljZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlXG4gICkge31cblxuICB1c2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcblxuICBjcmVhdGVIZWFkZXJDb21wb25lbnQoZGF0YSk6IHZvaWR7XG4gICAgaWYoZGF0YS5tZXNzYWdlID09IFwib2tcIil7XG4gICAgICB0aGlzLkVudHJ5UGFnZSA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSGVhZGVyQ29tcG9uZW50KTtcbiAgICAgIGxldCBjbXBSZWYgPSB0aGlzLnBhcmVudC5jcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQpO1xuICAgICAgICAgIGNtcFJlZi5pbnN0YW5jZS51c2VyID0gdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFVzZXJQcml2aWxlZ2VzKGRhdGEudXNlciwwKTtcblxuICAgIH1lbHNle1xuICAgICAgdGhpcy5lbnRyeUVycm9yID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgY29va2llID0gdGhpcy5fY29va2llU2VydmljZS5nZXQoJ3JlbWVtYmVyJyk7XG4gICAgaWYgKGNvb2tpZSl7XG4gICAgICB0aGlzLnNpZ25JblNlcnZpY2Uuc2lnbkluVXNpbmdDb29raWUoKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJDb21wb25lbnQoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KHVzZXIpOiB2b2lke1xuICAgIHRoaXMuc2lnbkluU2VydmljZS5zaWduSW4odXNlcilcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJDb21wb25lbnQoZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=
