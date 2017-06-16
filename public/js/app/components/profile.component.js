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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBK0M7QUFDL0MsMkRBQTBEO0FBQzFELDJEQUE0RDtBQUM1RCwrREFBNEQ7QUFDNUQsdUNBQWdEO0FBQ2hELG1FQUE4RDtBQVE5RCxJQUFhLGdCQUFnQjtJQUczQiwwQkFBcUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFEakQsYUFBUSxHQUFtQixJQUFJLGlDQUFjLEVBQUUsQ0FBQztJQUU5QyxDQUFDO0lBRUgseUNBQWMsR0FBZCxVQUFlLFFBQXdCO1FBQXZDLGlCQWVDO1FBZEMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQSxDQUFDO1lBQ3RELEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztpQkFDeEMsU0FBUyxDQUFDLFVBQUMsSUFBSTtnQkFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO29CQUNwQyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTt5QkFDeEIsU0FBUyxDQUFDLGNBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUEsQ0FBQztvQkFDekMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzVCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDSCxDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGlEQUFpRDtRQUM5RCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBS29DLDhCQUFhO0dBSHRDLGdCQUFnQixDQXVCNUI7QUF2QlksNENBQWdCO0FBK0I3QixJQUFhLGdCQUFnQjtJQUkzQiwwQkFBcUIsYUFBNEIsRUFDNUIsV0FBNkI7UUFEN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBSGxELGVBQVUsR0FBZSxJQUFJLGlCQUFVLEVBQUUsQ0FBQztJQUl4QyxDQUFDO0lBRUgsbUNBQVEsR0FBUixVQUFTLFVBQVU7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO1lBQzdDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCx1QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsa0RBQWtEO1FBQy9ELFNBQVMsRUFBRSxDQUFFLGtDQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FNb0Msa0NBQWE7UUFDYiw2QkFBYztHQUx2QyxnQkFBZ0IsQ0FnQjVCO0FBaEJZLDRDQUFnQiIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMDYtSnVuLTE3LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9ICBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gICAgIGZyb20gXCIuLi9zaGFyZWQvdXNlclwiO1xyXG5pbXBvcnQgeyBTaWduSW5TZXJ2aWNlIH0gIGZyb20gXCIuLi9zaGFyZWQvc2lnbi1pbi11cC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Byb2ZpbGUtYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9qcy9hcHAvY29tcG9uZW50cy92aWV3cy9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudHtcclxuXHJcbiAgcGFzc3dvcmQ6IENoYW5nZVBhc3N3b3JkID0gbmV3IENoYW5nZVBhc3N3b3JkKCk7XHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZVxyXG4gICl7fVxyXG5cclxuICBjaGFuZ2VQYXNzd29yZChwYXNzd29yZDogQ2hhbmdlUGFzc3dvcmQpe1xyXG4gICAgaWYocGFzc3dvcmQubmV3UGFzc3dvcmQgIT09IHBhc3N3b3JkLnJlcGVhdE5ld1Bhc3N3b3JkKXtcclxuICAgICAgYWxlcnQoXCLQndC+0LLRi9C5INC/0LDRgNC+0LvRjCDRgSDQtdCz0L4g0L/QvtCy0YLQvtGA0L7QvCDQvdC1INGB0L7QstC/0L7QtNCw0Y7RglwiKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgICAgYWxlcnQoXCLQktCw0Ygg0L/QsNGA0L7Qu9GMINGD0YHQv9C10YjQvdC+INC40LfQvNC10L3QtdC9XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlclNlcnZpY2UubG9nb2ZmKClcclxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpPT57fSk7XHJcbiAgICAgICAgICB9ZWxzZSBpZiAoZGF0YS5tZXNzYWdlID09IFwicGFzc3dvcmRFcnJvclwiKXtcclxuICAgICAgICAgICAgYWxlcnQoXCLQndC10LLQtdGA0L3Ri9C5INC/0LDRgNC+0LvRjC5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZXctdXNlci1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL25ldy51c2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgU2lnbkluU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3VXNlckNvbXBvbmVudHtcclxuXHJcbiAgdXNlclNpZ25VcDogVXNlclNpZ25VcCA9IG5ldyBVc2VyU2lnblVwKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHNpZ25JblNlcnZpY2U6IFNpZ25JblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgIHB1YmxpYyAgYWN0aXZlTW9kYWw6ICAgTmdiQWN0aXZlTW9kYWxcclxuICApe31cclxuXHJcbiAgb25TaWduVXAodXNlclNpZ25VcCk6IHZvaWR7XHJcbiAgICB0aGlzLnNpZ25JblNlcnZpY2Uuc2lnblVwKHVzZXJTaWduVXApXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIGFsZXJ0KFwi0J3QvtCy0YvQuSDQv9C+0YzQt9C+0LLQsNGC0LXQu9GMINGD0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L1cIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19
