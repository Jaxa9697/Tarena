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
        if (password.newPassword !== password.repeatNewPassword) {
            alert("Новый пароль с его повтором не совподают");
        }
        else {
            this.headerService.changePassword(password)
                .subscribe(function (data) {
                if (data.message == "ok") {
                    alert("Ваш пароль успешно изменен");
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
        templateUrl: '/js/app/components/views/profile.component.html',
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
        templateUrl: '/js/app/components/views/new.user.component.html',
        providers: [sign_in_up_service_1.SignInService]
    }),
    __metadata("design:paramtypes", [sign_in_up_service_1.SignInService,
        ng_bootstrap_1.NgbActiveModal])
], NewUserComponent);
exports.NewUserComponent = NewUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBK0M7QUFDL0MsMkRBQTBEO0FBQzFELDJEQUE0RDtBQUM1RCwrREFBNEQ7QUFDNUQsdUNBQWdEO0FBQ2hELG1FQUE4RDtBQVE5RCxJQUFhLGdCQUFnQjtJQUczQiwwQkFBcUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFEakQsYUFBUSxHQUFtQixJQUFJLGlDQUFjLEVBQUUsQ0FBQztJQUU5QyxDQUFDO0lBRUgseUNBQWMsR0FBZCxVQUFlLFFBQXdCO1FBQ3JDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUEsQ0FBQztZQUN0RCxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ3hDLFNBQVMsQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUN2QixLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQSxDQUFDO29CQUN6QyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFSCx1QkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsaURBQWlEO1FBQzlELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FLb0MsOEJBQWE7R0FIdEMsZ0JBQWdCLENBcUI1QjtBQXJCWSw0Q0FBZ0I7QUE2QjdCLElBQWEsZ0JBQWdCO0lBSTNCLDBCQUFxQixhQUE0QixFQUM1QixXQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFIbEQsZUFBVSxHQUFlLElBQUksaUJBQVUsRUFBRSxDQUFDO0lBSXhDLENBQUM7SUFFSCxtQ0FBUSxHQUFSLFVBQVMsVUFBVTtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7WUFDN0MsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxrREFBa0Q7UUFDL0QsU0FBUyxFQUFFLENBQUUsa0NBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQU1vQyxrQ0FBYTtRQUNiLDZCQUFjO0dBTHZDLGdCQUFnQixDQWdCNUI7QUFoQlksNENBQWdCIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAwNi1KdW4tMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gIGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJTaWduVXAgfSAgICAgZnJvbSBcIi4uL3NoYXJlZC91c2VyXCI7XHJcbmltcG9ydCB7IFNpZ25JblNlcnZpY2UgfSAgZnJvbSBcIi4uL3NoYXJlZC9zaWduLWluLXVwLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncHJvZmlsZS1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50e1xyXG5cclxuICBwYXNzd29yZDogQ2hhbmdlUGFzc3dvcmQgPSBuZXcgQ2hhbmdlUGFzc3dvcmQoKTtcclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlXHJcbiAgKXt9XHJcblxyXG4gIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkOiBDaGFuZ2VQYXNzd29yZCl7XHJcbiAgICBpZihwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQucmVwZWF0TmV3UGFzc3dvcmQpe1xyXG4gICAgICBhbGVydChcItCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMINGBINC10LPQviDQv9C+0LLRgtC+0YDQvtC8INC90LUg0YHQvtCy0L/QvtC00LDRjtGCXCIpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICB0aGlzLmhlYWRlclNlcnZpY2UuY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIm9rXCIpe1xyXG4gICAgICAgICAgICBhbGVydChcItCS0LDRiCDQv9Cw0YDQvtC70Ywg0YPRgdC/0LXRiNC90L4g0LjQt9C80LXQvdC10L1cIik7XHJcbiAgICAgICAgICB9ZWxzZSBpZiAoZGF0YS5tZXNzYWdlID09IFwicGFzc3dvcmRFcnJvclwiKXtcclxuICAgICAgICAgICAgYWxlcnQoXCLQndC10LLQtdGA0L3Ri9C5INC/0LDRgNC+0LvRjC5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZXctdXNlci1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL25ldy51c2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgU2lnbkluU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3VXNlckNvbXBvbmVudHtcclxuXHJcbiAgdXNlclNpZ25VcDogVXNlclNpZ25VcCA9IG5ldyBVc2VyU2lnblVwKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHNpZ25JblNlcnZpY2U6IFNpZ25JblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgIHB1YmxpYyAgYWN0aXZlTW9kYWw6ICAgTmdiQWN0aXZlTW9kYWxcclxuICApe31cclxuXHJcbiAgb25TaWduVXAodXNlclNpZ25VcCk6IHZvaWR7XHJcbiAgICB0aGlzLnNpZ25JblNlcnZpY2Uuc2lnblVwKHVzZXJTaWduVXApXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIGFsZXJ0KFwi0J3QvtCy0YvQuSDQv9C+0YzQt9C+0LLQsNGC0LXQu9GMINGD0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L1cIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19
