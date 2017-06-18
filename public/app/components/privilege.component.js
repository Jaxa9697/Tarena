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
 * Created by Jahongir on 04-Jun-17.
 */
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_service_1 = require("../shared/header.service");
var components_model_1 = require("../shared/components.model");
var profile_component_1 = require("./profile.component");
var PrivilegeComponent = (function () {
    function PrivilegeComponent(modalService, headerService) {
        this.modalService = modalService;
        this.headerService = headerService;
        this.cmpName = "Привилегия";
        this.row = new components_model_1.Privilege;
        this.rows = [];
        this.rowsReserve = [];
        this.primary = 'primary';
        this.warn = 'warn';
        this.accent = 'accent';
    }
    PrivilegeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getPrivilegeContent()
            .subscribe(function (rows) {
            _this.rows = [];
            rows.forEach(function (el, i) {
                _this.rowsReserve.push(_this.headerService.getUserPrivileges(el, i + 1));
                _this.rows.push(_this.headerService.getUserPrivileges(el, i + 1));
            });
        });
    };
    PrivilegeComponent.prototype.changePrivileges = function (id) {
        var index = this.rows.findIndex(function (x) { return x.id == id; });
        var condition = JSON.stringify(this.rows[index]) != JSON.stringify(this.rowsReserve[index]);
        this.rows[index].changed = condition;
        this.rowsReserve[index].changed = condition;
    };
    PrivilegeComponent.prototype.savePrivileges = function (id) {
        var _this = this;
        var index = this.rows.findIndex(function (x) { return x.id == id; });
        this.headerService.saveUserPrivileges(this.rows[index])
            .subscribe(function (data) {
            _this.rows[index].changed = false;
            _this.rowsReserve[index] = _this.headerService.getUserPrivileges(data.user, index + 1);
        });
    };
    PrivilegeComponent.prototype.addNewUser = function () {
        var CmpRef = this.modalService.open(profile_component_1.NewUserComponent);
    };
    return PrivilegeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], PrivilegeComponent.prototype, "cmpName", void 0);
PrivilegeComponent = __decorate([
    core_1.Component({
        selector: 'privilege-app',
        templateUrl: '/app/components/views/privilege.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], PrivilegeComponent);
exports.PrivilegeComponent = PrivilegeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvcHJpdmlsZWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQXVEO0FBQ3ZELDJEQUE2RDtBQUU3RCwyREFBeUQ7QUFDekQsK0RBQXVFO0FBQ3ZFLHlEQUFxRDtBQVFyRCxJQUFhLGtCQUFrQjtJQVU3Qiw0QkFBb0IsWUFBc0IsRUFDdEIsYUFBNEI7UUFENUIsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFWdEMsWUFBTyxHQUFXLFlBQVksQ0FBQztRQUV6QyxRQUFHLEdBQWMsSUFBSSw0QkFBUyxDQUFDO1FBQy9CLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxXQUFNLEdBQUcsUUFBUSxDQUFDO0lBSWYsQ0FBQztJQUVKLHFDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUU7YUFDckMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBVTtRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBRyxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBRWhELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFJLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQXpCLGlCQU9DO1FBTkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUcsT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEQsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNaLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9DQUFnQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTVDVztJQUFULGFBQU0sRUFBRTs7bURBQWdDO0FBRDlCLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLGdEQUFnRDtRQUM3RCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBWWtDLHVCQUFRO1FBQ1AsOEJBQWE7R0FYckMsa0JBQWtCLENBNkM5QjtBQTdDWSxnREFBa0IiLCJmaWxlIjoiY29tcG9uZW50cy9wcml2aWxlZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMDQtSnVuLTE3LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9ICAgICAgICBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtDUlVELCBQcml2aWxlZ2UsIFdpZml9ICAgICAgIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQge05ld1VzZXJDb21wb25lbnR9IGZyb20gXCIuL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ByaXZpbGVnZS1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3ZpZXdzL3ByaXZpbGVnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZpbGVnZUNvbXBvbmVudHtcclxuICBAT3V0cHV0KCkgY21wTmFtZTogc3RyaW5nID0gXCLQn9GA0LjQstC40LvQtdCz0LjRj1wiO1xyXG5cclxuICByb3c6IFByaXZpbGVnZSA9IG5ldyBQcml2aWxlZ2U7XHJcbiAgcm93czogUHJpdmlsZWdlW10gPSBbXTtcclxuICByb3dzUmVzZXJ2ZTogUHJpdmlsZWdlW10gPSBbXTtcclxuICBwcmltYXJ5ID0gJ3ByaW1hcnknO1xyXG4gIHdhcm4gPSAnd2Fybic7XHJcbiAgYWNjZW50ID0gJ2FjY2VudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0UHJpdmlsZWdlQ29udGVudCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJvd3MpPT57XHJcbiAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgcm93cy5mb3JFYWNoKChlbCwgaSk9PntcclxuICAgICAgICAgIHRoaXMucm93c1Jlc2VydmUucHVzaCh0aGlzLmhlYWRlclNlcnZpY2UuZ2V0VXNlclByaXZpbGVnZXMoZWwsIGkrMSkpO1xyXG4gICAgICAgICAgdGhpcy5yb3dzLnB1c2godGhpcy5oZWFkZXJTZXJ2aWNlLmdldFVzZXJQcml2aWxlZ2VzKGVsLCBpKzEpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQcml2aWxlZ2VzKGlkOiBudW1iZXIpe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5yb3dzLmZpbmRJbmRleCh4PT4geC5pZCA9PSBpZCk7XHJcblxyXG4gICAgbGV0IGNvbmRpdGlvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucm93c1tpbmRleF0pICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucm93c1Jlc2VydmVbaW5kZXhdKTtcclxuICAgIHRoaXMucm93c1tpbmRleF0uY2hhbmdlZCA9ICBjb25kaXRpb247XHJcbiAgICB0aGlzLnJvd3NSZXNlcnZlW2luZGV4XS5jaGFuZ2VkID0gY29uZGl0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVByaXZpbGVnZXMoaWQ6IG51bWJlcil7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLnJvd3MuZmluZEluZGV4KHg9PiB4LmlkID09IGlkKTtcclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5zYXZlVXNlclByaXZpbGVnZXModGhpcy5yb3dzW2luZGV4XSlcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICAgIHRoaXMucm93c1tpbmRleF0uY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5yb3dzUmVzZXJ2ZVtpbmRleF0gPSB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0VXNlclByaXZpbGVnZXMoZGF0YS51c2VyLCBpbmRleCsxKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGROZXdVc2VyKCl7XHJcbiAgICBsZXQgQ21wUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihOZXdVc2VyQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIl19
