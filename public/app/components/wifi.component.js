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
var WifiComponent = (function () {
    function WifiComponent(modalService, headerService) {
        this.modalService = modalService;
        this.headerService = headerService;
        this.cmpName = "Wireless Fidelity";
        this.wifi = new components_model_1.Wifi;
        this.rows = [];
    }
    WifiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getWOContent('/getWifiContent')
            .subscribe(function (rows) {
            _this.rows = rows;
        });
    };
    WifiComponent.prototype.addWifi = function () {
        var CmpRef = this.modalService.open(add_wo_component_1.AddWOComponent);
        CmpRef.componentInstance.editedWifi = this.wifi;
        CmpRef.componentInstance.editForm = true;
        CmpRef.componentInstance.type = 1;
    };
    WifiComponent.prototype.deleteWifi = function (id) {
        var _this = this;
        this.headerService.deleteWO(id)
            .subscribe(function () {
            var index = _this.rows.findIndex(function (x) { return x.id == id; });
            _this.rows.splice(index, 1);
        });
    };
    WifiComponent.prototype.editWifi = function (id) {
        var index = this.rows.findIndex(function (x) { return x.id == id; });
        var CmpRef = this.modalService.open(add_wo_component_1.AddWOComponent);
        CmpRef.componentInstance.editedWifi = this.rows[index];
        CmpRef.componentInstance.editForm = false;
        CmpRef.componentInstance.type = 1;
    };
    return WifiComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], WifiComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], WifiComponent.prototype, "cmpName", void 0);
WifiComponent = __decorate([
    core_1.Component({
        selector: 'wifi-app',
        templateUrl: '/app/components/views/wifi.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], WifiComponent);
exports.WifiComponent = WifiComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvd2lmaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUF1RDtBQUN2RCwyREFBNkQ7QUFFN0QsMkRBQXlEO0FBQ3pELCtEQUFpRTtBQUNqRSx1REFBa0Q7QUFRbEQsSUFBYSxhQUFhO0lBT3hCLHVCQUFvQixZQUFzQixFQUN0QixhQUE0QjtRQUQ1QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU50QyxZQUFPLEdBQVcsbUJBQW1CLENBQUM7UUFFaEQsU0FBSSxHQUFTLElBQUksdUJBQUksQ0FBQztRQUN0QixTQUFJLEdBQVcsRUFBRSxDQUFDO0lBSWYsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO2FBQy9DLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUNBQWMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFLLElBQUksQ0FBQztRQUMzQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEVBQVU7UUFBckIsaUJBTUM7UUFMQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDO1lBQ1QsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEVBQVU7UUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpQ0FBYyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUssS0FBSyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDSCxvQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF2Q1U7SUFBUixZQUFLLEVBQUU7OEJBQU8sNEJBQVM7MkNBQUM7QUFDZjtJQUFULGFBQU0sRUFBRTs7OENBQXVDO0FBRnJDLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSwyQ0FBMkM7UUFDeEQsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQVNrQyx1QkFBUTtRQUNQLDhCQUFhO0dBUnJDLGFBQWEsQ0F3Q3pCO0FBeENZLHNDQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvd2lmaS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyOS1NYXktMTcuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZGFsIH0gICAgICAgIGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1ByaXZpbGVnZSwgV2lmaX0gICAgICAgZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7QWRkV09Db21wb25lbnR9IGZyb20gXCIuL2FkZC53by5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnd2lmaS1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3ZpZXdzL3dpZmkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXaWZpQ29tcG9uZW50e1xyXG4gIEBJbnB1dCgpIHVzZXI6IFByaXZpbGVnZTtcclxuICBAT3V0cHV0KCkgY21wTmFtZTogc3RyaW5nID0gXCJXaXJlbGVzcyBGaWRlbGl0eVwiO1xyXG5cclxuICB3aWZpOiBXaWZpID0gbmV3IFdpZmk7XHJcbiAgcm93czogV2lmaVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0V09Db250ZW50KCcvZ2V0V2lmaUNvbnRlbnQnKVxyXG4gICAgICAuc3Vic2NyaWJlKChyb3dzKT0+e1xyXG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkV2lmaSgpe1xyXG4gICAgbGV0IENtcFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQWRkV09Db21wb25lbnQpO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0ZWRXaWZpID0gdGhpcy53aWZpO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0Rm9ybSAgID0gdHJ1ZTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UudHlwZSAgID0gMTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVdpZmkoaWQ6IG51bWJlcil7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZGVsZXRlV08oaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCk9PntcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJvd3MuZmluZEluZGV4KHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICAgICAgICB0aGlzLnJvd3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0V2lmaShpZDogbnVtYmVyKXtcclxuICAgIGxldCBpbmRleCA9IHRoaXMucm93cy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgIGxldCBDbXBSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZFdPQ29tcG9uZW50KTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdGVkV2lmaSA9IHRoaXMucm93c1tpbmRleF07XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRGb3JtICAgPSBmYWxzZTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UudHlwZSAgID0gMTtcclxuICB9XHJcbn1cclxuIl19
