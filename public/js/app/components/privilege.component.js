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
        templateUrl: '/js/app/components/views/privilege.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], PrivilegeComponent);
exports.PrivilegeComponent = PrivilegeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL3ByaXZpbGVnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUF1RDtBQUN2RCwyREFBNkQ7QUFFN0QsMkRBQXlEO0FBQ3pELCtEQUF1RTtBQUN2RSx5REFBcUQ7QUFRckQsSUFBYSxrQkFBa0I7SUFVN0IsNEJBQW9CLFlBQXNCLEVBQ3RCLGFBQTRCO1FBRDVCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVnRDLFlBQU8sR0FBVyxZQUFZLENBQUM7UUFFekMsUUFBRyxHQUFjLElBQUksNEJBQVMsQ0FBQztRQUMvQixTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFnQixFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsV0FBTSxHQUFHLFFBQVEsQ0FBQztJQUlmLENBQUM7SUFFSixxQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFO2FBQ3JDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLEVBQVU7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUcsT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUVoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBSSxTQUFTLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkFPQztRQU5DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFHLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BELFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDWixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDSCx5QkFBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUE1Q1c7SUFBVCxhQUFNLEVBQUU7O21EQUFnQztBQUQ5QixrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSxtREFBbUQ7UUFDaEUsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQVlrQyx1QkFBUTtRQUNQLDhCQUFhO0dBWHJDLGtCQUFrQixDQTZDOUI7QUE3Q1ksZ0RBQWtCIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJpdmlsZWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDA0LUp1bi0xNy5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSAgICAgICAgZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7Q1JVRCwgUHJpdmlsZWdlLCBXaWZpfSAgICAgICBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHtOZXdVc2VyQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwcml2aWxlZ2UtYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9qcy9hcHAvY29tcG9uZW50cy92aWV3cy9wcml2aWxlZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2aWxlZ2VDb21wb25lbnR7XHJcbiAgQE91dHB1dCgpIGNtcE5hbWU6IHN0cmluZyA9IFwi0J/RgNC40LLQuNC70LXQs9C40Y9cIjtcclxuXHJcbiAgcm93OiBQcml2aWxlZ2UgPSBuZXcgUHJpdmlsZWdlO1xyXG4gIHJvd3M6IFByaXZpbGVnZVtdID0gW107XHJcbiAgcm93c1Jlc2VydmU6IFByaXZpbGVnZVtdID0gW107XHJcbiAgcHJpbWFyeSA9ICdwcmltYXJ5JztcclxuICB3YXJuID0gJ3dhcm4nO1xyXG4gIGFjY2VudCA9ICdhY2NlbnQnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFByaXZpbGVnZUNvbnRlbnQoKVxyXG4gICAgICAuc3Vic2NyaWJlKChyb3dzKT0+e1xyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgIHJvd3MuZm9yRWFjaCgoZWwsIGkpPT57XHJcbiAgICAgICAgICB0aGlzLnJvd3NSZXNlcnZlLnB1c2godGhpcy5oZWFkZXJTZXJ2aWNlLmdldFVzZXJQcml2aWxlZ2VzKGVsLCBpKzEpKTtcclxuICAgICAgICAgIHRoaXMucm93cy5wdXNoKHRoaXMuaGVhZGVyU2VydmljZS5nZXRVc2VyUHJpdmlsZWdlcyhlbCwgaSsxKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUHJpdmlsZWdlcyhpZDogbnVtYmVyKXtcclxuICAgIGxldCBpbmRleCA9IHRoaXMucm93cy5maW5kSW5kZXgoeD0+IHguaWQgPT0gaWQpO1xyXG5cclxuICAgIGxldCBjb25kaXRpb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnJvd3NbaW5kZXhdKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnJvd3NSZXNlcnZlW2luZGV4XSk7XHJcbiAgICB0aGlzLnJvd3NbaW5kZXhdLmNoYW5nZWQgPSAgY29uZGl0aW9uO1xyXG4gICAgdGhpcy5yb3dzUmVzZXJ2ZVtpbmRleF0uY2hhbmdlZCA9IGNvbmRpdGlvbjtcclxuICB9XHJcblxyXG4gIHNhdmVQcml2aWxlZ2VzKGlkOiBudW1iZXIpe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5yb3dzLmZpbmRJbmRleCh4PT4geC5pZCA9PSBpZCk7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2Uuc2F2ZVVzZXJQcml2aWxlZ2VzKHRoaXMucm93c1tpbmRleF0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICB0aGlzLnJvd3NbaW5kZXhdLmNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucm93c1Jlc2VydmVbaW5kZXhdID0gdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFVzZXJQcml2aWxlZ2VzKGRhdGEudXNlciwgaW5kZXgrMSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkTmV3VXNlcigpe1xyXG4gICAgbGV0IENtcFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTmV3VXNlckNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
