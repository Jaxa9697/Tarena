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
        templateUrl: '/app/components/views/app.component.html',
        providers: [sign_in_up_service_1.SignInService, cookies_service_1.CookieService, header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [sign_in_up_service_1.SignInService,
        header_service_1.HeaderService,
        core_1.ComponentFactoryResolver,
        cookies_service_1.CookieService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0c7QUFDaEcsa0VBQStEO0FBQy9ELHNDQUFpRDtBQUNqRCxrRUFBaUU7QUFDakUsNEVBQTRFO0FBQzVFLDBEQUFzRDtBQVF0RCxJQUFhLFlBQVk7SUFTdkIsc0JBQXFCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLHdCQUFrRCxFQUNsRCxjQUE2QjtRQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBWDFDLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVuQyxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBVzVCLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBRnJCLENBQUM7SUFJSiw0Q0FBcUIsR0FBckIsVUFBc0IsSUFBSTtRQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFFdEIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGtDQUFlLENBQUMsQ0FBQztZQUM5RixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0UsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtpQkFDbkMsU0FBUyxDQUFDLFVBQUMsSUFBSTtnQkFDZCxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxJQUFJO1FBQWIsaUJBS0M7UUFKQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSCxtQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUF4Q0M7SUFEQyxnQkFBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSx1QkFBZ0IsRUFBQyxDQUFDOzhCQUN0Qyx1QkFBZ0I7NENBQUM7QUFQZCxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFNBQVMsRUFBRSxDQUFFLGtDQUFhLEVBQUUsK0JBQWEsRUFBRSw4QkFBYSxDQUFFO0tBQzNELENBQUM7cUNBV29DLGtDQUFhO1FBQ2IsOEJBQWE7UUFDRiwrQkFBd0I7UUFDbEMsK0JBQWE7R0FadkMsWUFBWSxDQStDeEI7QUEvQ1ksb0NBQVkiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2lnbkluU2VydmljZSB9ICAgIGZyb20gJy4vc2hhcmVkL3NpZ24taW4tdXAuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXJcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9ICBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSAgICBmcm9tICdhbmd1bGFyMi1jb29raWUvc2VydmljZXMvY29va2llcy5zZXJ2aWNlJztcbmltcG9ydCB7SGVhZGVyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3ZpZXdzL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogWyBTaWduSW5TZXJ2aWNlLCBDb29raWVTZXJ2aWNlLCBIZWFkZXJTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcml2YXRlIEVudHJ5UGFnZTogIGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbnRyeUVycm9yOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcmltYXJ5OiBzdHJpbmcgPSBcInByaW1hcnlcIjtcblxuICBAVmlld0NoaWxkKCdwYXJlbnQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gIHBhcmVudDogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzaWduSW5TZXJ2aWNlOiBTaWduSW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuXG4gIGNyZWF0ZUhlYWRlckNvbXBvbmVudChkYXRhKTogdm9pZHtcbiAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcbiAgICAgIHRoaXMuRW50cnlQYWdlID0gdHJ1ZTtcblxuICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShIZWFkZXJDb21wb25lbnQpO1xuICAgICAgbGV0IGNtcFJlZiA9IHRoaXMucGFyZW50LmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgICAgICAgY21wUmVmLmluc3RhbmNlLnVzZXIgPSB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0VXNlclByaXZpbGVnZXMoZGF0YS51c2VyLDApO1xuXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmVudHJ5RXJyb3IgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIGxldCBjb29raWUgPSB0aGlzLl9jb29raWVTZXJ2aWNlLmdldCgncmVtZW1iZXInKTtcbiAgICBpZiAoY29va2llKXtcbiAgICAgIHRoaXMuc2lnbkluU2VydmljZS5zaWduSW5Vc2luZ0Nvb2tpZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlckNvbXBvbmVudChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQodXNlcik6IHZvaWR7XG4gICAgdGhpcy5zaWduSW5TZXJ2aWNlLnNpZ25Jbih1c2VyKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlckNvbXBvbmVudChkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==
