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
 * Created by Jahongir on 20-Apr-17.
 */
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_service_1 = require("../shared/header.service");
var components_model_1 = require("../shared/components.model");
var add_component_1 = require("./add.component");
var AtcListComponent = (function () {
    function AtcListComponent(modalService, headerService) {
        this.modalService = modalService;
        this.headerService = headerService;
        this.atces = [];
        this.atc = new components_model_1.Atc();
        this.cmpName = "Автоматическая телефонная станция";
    }
    AtcListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getAtcContent()
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                var atc = new components_model_1.AtcList(data[i].ID, data[i].name, data[i].ipAddress, data[i].alcQuant);
                _this.atces.push(atc);
            }
        });
    };
    AtcListComponent.prototype.openModalForm = function () {
        var CmpRef = this.modalService.open(add_component_1.AddComponent);
        CmpRef.componentInstance.editedAtc = this.atc;
        CmpRef.componentInstance.editForm = true;
    };
    ;
    return AtcListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], AtcListComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], AtcListComponent.prototype, "cmpName", void 0);
AtcListComponent = __decorate([
    core_1.Component({
        selector: 'atcList-app',
        templateUrl: '/js/app/components/views/atc-list.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], AtcListComponent);
exports.AtcListComponent = AtcListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL2F0Yy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQXVEO0FBQ3ZELDJEQUE4RDtBQUU5RCwyREFBeUQ7QUFDekQsK0RBQTZFO0FBQzdFLGlEQUFnRDtBQVFoRCxJQUFhLGdCQUFnQjtJQU8zQiwwQkFBb0IsWUFBc0IsRUFDdEIsYUFBNEI7UUFENUIsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFQaEQsVUFBSyxHQUFjLEVBQUUsQ0FBQztRQUN0QixRQUFHLEdBQVEsSUFBSSxzQkFBRyxFQUFFLENBQUM7UUFHWCxZQUFPLEdBQVcsbUNBQW1DLENBQUM7SUFJN0QsQ0FBQztJQUVKLG1DQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFFZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSwwQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckYsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFBQSxDQUFDO0lBQ0osdUJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBdkJVO0lBQVIsWUFBSyxFQUFFOzhCQUFPLDRCQUFTOzhDQUFDO0FBQ2Y7SUFBVCxhQUFNLEVBQUU7O2lEQUF1RDtBQUxyRCxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxrREFBa0Q7UUFDL0QsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQVNrQyx1QkFBUTtRQUNQLDhCQUFhO0dBUnJDLGdCQUFnQixDQTJCNUI7QUEzQlksNENBQWdCIiwiZmlsZSI6ImNvbXBvbmVudHMvYXRjLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMjAtQXByLTE3LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9ICAgICAgICAgZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7QXRjLCBBdGNMaXN0LCBQcml2aWxlZ2V9ICAgICAgICAgICBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gIGZyb20gXCIuL2FkZC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXRjTGlzdC1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL2F0Yy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXRjTGlzdENvbXBvbmVudHtcclxuICBhdGNlczogQXRjTGlzdFtdID0gW107XHJcbiAgYXRjOiBBdGMgPSBuZXcgQXRjKCk7XHJcblxyXG4gIEBJbnB1dCgpIHVzZXI6IFByaXZpbGVnZTtcclxuICBAT3V0cHV0KCkgY21wTmFtZTogc3RyaW5nID0gXCLQkNCy0YLQvtC80LDRgtC40YfQtdGB0LrQsNGPINGC0LXQu9C10YTQvtC90L3QsNGPINGB0YLQsNC90YbQuNGPXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldEF0Y0NvbnRlbnQoKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGxldCBhdGMgPSBuZXcgQXRjTGlzdChkYXRhW2ldLklELCBkYXRhW2ldLm5hbWUsIGRhdGFbaV0uaXBBZGRyZXNzLCBkYXRhW2ldLmFsY1F1YW50KTtcclxuICAgICAgICAgIHRoaXMuYXRjZXMucHVzaChhdGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWxGb3JtKCl7XHJcbiAgICBsZXQgQ21wUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRDb21wb25lbnQpO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0ZWRBdGMgPSB0aGlzLmF0YztcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdEZvcm0gID0gdHJ1ZTtcclxuICB9O1xyXG59XHJcblxyXG4iXX0=
