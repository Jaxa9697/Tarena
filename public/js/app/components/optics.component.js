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
 * Created by Jahongir on 29-May-17.
 */
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_service_1 = require("../shared/header.service");
var components_model_1 = require("../shared/components.model");
var add_wo_component_1 = require("./add.wo.component");
var OpticsComponent = (function () {
    function OpticsComponent(modalService, headerService) {
        this.modalService = modalService;
        this.headerService = headerService;
        this.wifi = new components_model_1.Wifi;
        this.rows = [];
        this.cmpName = "Optic";
    }
    OpticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getWOContent('/getOpticsContent')
            .subscribe(function (rows) {
            _this.rows = rows;
        });
    };
    OpticsComponent.prototype.addWifi = function () {
        var CmpRef = this.modalService.open(add_wo_component_1.AddWOComponent);
        CmpRef.componentInstance.editedWifi = this.wifi;
        CmpRef.componentInstance.editForm = true;
        CmpRef.componentInstance.type = 0;
    };
    OpticsComponent.prototype.deleteWifi = function (id) {
        var _this = this;
        this.headerService.deleteWO(id)
            .subscribe(function () {
            var index = _this.rows.findIndex(function (x) { return x.id == id; });
            _this.rows.splice(index, 1);
        });
    };
    OpticsComponent.prototype.editWifi = function (id) {
        var index = this.rows.findIndex(function (x) { return x.id == id; });
        var CmpRef = this.modalService.open(add_wo_component_1.AddWOComponent);
        CmpRef.componentInstance.editedWifi = this.rows[index];
        CmpRef.componentInstance.editForm = false;
        CmpRef.componentInstance.type = 0;
    };
    return OpticsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], OpticsComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], OpticsComponent.prototype, "cmpName", void 0);
OpticsComponent = __decorate([
    core_1.Component({
        selector: 'optics-app',
        templateUrl: '/js/app/components/views/optics.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], OpticsComponent);
exports.OpticsComponent = OpticsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL29wdGljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUF1RDtBQUN2RCwyREFBNkQ7QUFFN0QsMkRBQXlEO0FBQ3pELCtEQUFpRTtBQUNqRSx1REFBa0Q7QUFRbEQsSUFBYSxlQUFlO0lBTzFCLHlCQUFvQixZQUFzQixFQUN0QixhQUE0QjtRQUQ1QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5oRCxTQUFJLEdBQVMsSUFBSSx1QkFBSSxDQUFDO1FBQ3RCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFUixZQUFPLEdBQVcsT0FBTyxDQUFDO0lBSWpDLENBQUM7SUFFSixrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQzthQUNqRCxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlDQUFjLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBSyxJQUFJLENBQUM7UUFDM0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQXJCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQztZQUNULElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxFQUFVO1FBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUNBQWMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFLLEtBQUssQ0FBQztRQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBcENVO0lBQVIsWUFBSyxFQUFFOzhCQUFPLDRCQUFTOzZDQUFDO0FBQ2Y7SUFBVCxhQUFNLEVBQUU7O2dEQUEyQjtBQUx6QixlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsZ0RBQWdEO1FBQzdELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FTa0MsdUJBQVE7UUFDUCw4QkFBYTtHQVJyQyxlQUFlLENBd0MzQjtBQXhDWSwwQ0FBZSIsImZpbGUiOiJjb21wb25lbnRzL29wdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyOS1NYXktMTcuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZGFsIH0gICAgICAgIGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1ByaXZpbGVnZSwgV2lmaX0gICAgICAgZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7QWRkV09Db21wb25lbnR9IGZyb20gXCIuL2FkZC53by5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3B0aWNzLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvanMvYXBwL2NvbXBvbmVudHMvdmlld3Mvb3B0aWNzLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aWNzQ29tcG9uZW50e1xyXG5cclxuICB3aWZpOiBXaWZpID0gbmV3IFdpZmk7XHJcbiAgcm93czogV2lmaVtdID0gW107XHJcbiAgQElucHV0KCkgdXNlcjogUHJpdmlsZWdlO1xyXG4gIEBPdXRwdXQoKSBjbXBOYW1lOiBzdHJpbmcgPSBcIk9wdGljXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0V09Db250ZW50KCcvZ2V0T3B0aWNzQ29udGVudCcpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJvd3MpPT57XHJcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRXaWZpKCl7XHJcbiAgICBsZXQgQ21wUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRXT0NvbXBvbmVudCk7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRlZFdpZmkgPSB0aGlzLndpZmk7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRGb3JtICAgPSB0cnVlO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS50eXBlICAgPSAwO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlV2lmaShpZDogbnVtYmVyKXtcclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5kZWxldGVXTyhpZClcclxuICAgICAgLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucm93cy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgICAgICAgIHRoaXMucm93cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRXaWZpKGlkOiBudW1iZXIpe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5yb3dzLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gaWQpO1xyXG4gICAgbGV0IENtcFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQWRkV09Db21wb25lbnQpO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0ZWRXaWZpID0gdGhpcy5yb3dzW2luZGV4XTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdEZvcm0gICA9IGZhbHNlO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS50eXBlICAgPSAwO1xyXG4gIH1cclxufVxyXG4iXX0=
