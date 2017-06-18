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
 * Created by Jahongir on 06-Jun-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var components_model_1 = require("../shared/components.model");
var user_1 = require("../shared/user");
var sign_in_up_service_1 = require("../shared/sign-in-up.service");
var ProfileComponent = (function () {
    function ProfileComponent(headerService) {
        this.headerService = headerService;
        this.password = new components_model_1.ChangePassword();
    }
    ProfileComponent.prototype.changePassword = function (password) {
        var _this = this;
        if (password.newPassword !== password.repeatNewPassword) {
            alert("Новый пароль с его повтором не совподают");
        }
        else {
            this.headerService.changePassword(password)
                .subscribe(function (data) {
                if (data.message == "ok") {
                    alert("Ваш пароль успешно изменен");
                    _this.headerService.logoff()
                        .subscribe(function () { });
                }
                else if (data.message == "passwordError") {
                    alert("Неверный пароль.");
                }
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile-app',
        templateUrl: '/app/components/views/profile.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var NewUserComponent = (function () {
    function NewUserComponent(signInService, activeModal) {
        this.signInService = signInService;
        this.activeModal = activeModal;
        this.userSignUp = new user_1.UserSignUp();
    }
    NewUserComponent.prototype.onSignUp = function (userSignUp) {
        this.signInService.signUp(userSignUp)
            .subscribe(function (data) {
            if (data.message == "ok") {
                alert("Новый поьзователь успешно добавлен");
            }
        });
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    core_1.Component({
        selector: 'new-user-app',
        templateUrl: '/app/components/views/new.user.component.html',
        providers: [sign_in_up_service_1.SignInService]
    }),
    __metadata("design:paramtypes", [sign_in_up_service_1.SignInService,
        ng_bootstrap_1.NgbActiveModal])
], NewUserComponent);
exports.NewUserComponent = NewUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUErQztBQUMvQywyREFBMEQ7QUFDMUQsMkRBQTREO0FBQzVELCtEQUE0RDtBQUM1RCx1Q0FBZ0Q7QUFDaEQsbUVBQThEO0FBUTlELElBQWEsZ0JBQWdCO0lBRzNCLDBCQUFxQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQURqRCxhQUFRLEdBQW1CLElBQUksaUNBQWMsRUFBRSxDQUFDO0lBRTlDLENBQUM7SUFFSCx5Q0FBYyxHQUFkLFVBQWUsUUFBd0I7UUFBdkMsaUJBZUM7UUFkQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBLENBQUM7WUFDdEQsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO2lCQUN4QyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO3lCQUN4QixTQUFTLENBQUMsY0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQSxDQUFDO29CQUN6QyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFSCx1QkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsOENBQThDO1FBQzNELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FLb0MsOEJBQWE7R0FIdEMsZ0JBQWdCLENBdUI1QjtBQXZCWSw0Q0FBZ0I7QUErQjdCLElBQWEsZ0JBQWdCO0lBSTNCLDBCQUFxQixhQUE0QixFQUM1QixXQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFIbEQsZUFBVSxHQUFlLElBQUksaUJBQVUsRUFBRSxDQUFDO0lBSXhDLENBQUM7SUFFSCxtQ0FBUSxHQUFSLFVBQVMsVUFBVTtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7WUFDN0MsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwrQ0FBK0M7UUFDNUQsU0FBUyxFQUFFLENBQUUsa0NBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQU1vQyxrQ0FBYTtRQUNiLDZCQUFjO0dBTHZDLGdCQUFnQixDQWdCNUI7QUFoQlksNENBQWdCIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAwNi1KdW4tMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gIGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJTaWduVXAgfSAgICAgZnJvbSBcIi4uL3NoYXJlZC91c2VyXCI7XHJcbmltcG9ydCB7IFNpZ25JblNlcnZpY2UgfSAgZnJvbSBcIi4uL3NoYXJlZC9zaWduLWluLXVwLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncHJvZmlsZS1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3ZpZXdzL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50e1xyXG5cclxuICBwYXNzd29yZDogQ2hhbmdlUGFzc3dvcmQgPSBuZXcgQ2hhbmdlUGFzc3dvcmQoKTtcclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlXHJcbiAgKXt9XHJcblxyXG4gIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkOiBDaGFuZ2VQYXNzd29yZCl7XHJcbiAgICBpZihwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQucmVwZWF0TmV3UGFzc3dvcmQpe1xyXG4gICAgICBhbGVydChcItCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMINGBINC10LPQviDQv9C+0LLRgtC+0YDQvtC8INC90LUg0YHQvtCy0L/QvtC00LDRjtGCXCIpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICB0aGlzLmhlYWRlclNlcnZpY2UuY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIm9rXCIpe1xyXG4gICAgICAgICAgICBhbGVydChcItCS0LDRiCDQv9Cw0YDQvtC70Ywg0YPRgdC/0LXRiNC90L4g0LjQt9C80LXQvdC10L1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyU2VydmljZS5sb2dvZmYoKVxyXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCk9Pnt9KTtcclxuICAgICAgICAgIH1lbHNlIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJwYXNzd29yZEVycm9yXCIpe1xyXG4gICAgICAgICAgICBhbGVydChcItCd0LXQstC10YDQvdGL0Lkg0L/QsNGA0L7Qu9GMLlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25ldy11c2VyLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvdmlld3MvbmV3LnVzZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBTaWduSW5TZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdVc2VyQ29tcG9uZW50e1xyXG5cclxuICB1c2VyU2lnblVwOiBVc2VyU2lnblVwID0gbmV3IFVzZXJTaWduVXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgc2lnbkluU2VydmljZTogU2lnbkluU2VydmljZSxcclxuICAgICAgICAgICAgICAgcHVibGljICBhY3RpdmVNb2RhbDogICBOZ2JBY3RpdmVNb2RhbFxyXG4gICl7fVxyXG5cclxuICBvblNpZ25VcCh1c2VyU2lnblVwKTogdm9pZHtcclxuICAgIHRoaXMuc2lnbkluU2VydmljZS5zaWduVXAodXNlclNpZ25VcClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIm9rXCIpe1xyXG4gICAgICAgICAgYWxlcnQoXCLQndC+0LLRi9C5INC/0L7RjNC30L7QstCw0YLQtdC70Ywg0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=
