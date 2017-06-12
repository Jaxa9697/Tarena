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
        templateUrl: '/js/app/components/views/wifi.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], WifiComponent);
exports.WifiComponent = WifiComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL3dpZmkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBdUQ7QUFDdkQsMkRBQTZEO0FBRTdELDJEQUF5RDtBQUN6RCwrREFBaUU7QUFDakUsdURBQWtEO0FBUWxELElBQWEsYUFBYTtJQU94Qix1QkFBb0IsWUFBc0IsRUFDdEIsYUFBNEI7UUFENUIsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFOdEMsWUFBTyxHQUFXLG1CQUFtQixDQUFDO1FBRWhELFNBQUksR0FBUyxJQUFJLHVCQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUlmLENBQUM7SUFFSixnQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzthQUMvQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlDQUFjLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBSyxJQUFJLENBQUM7UUFDM0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQXJCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQztZQUNULElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxFQUFVO1FBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUNBQWMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFLLEtBQUssQ0FBQztRQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBdkNVO0lBQVIsWUFBSyxFQUFFOzhCQUFPLDRCQUFTOzJDQUFDO0FBQ2Y7SUFBVCxhQUFNLEVBQUU7OzhDQUF1QztBQUZyQyxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsOENBQThDO1FBQzNELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FTa0MsdUJBQVE7UUFDUCw4QkFBYTtHQVJyQyxhQUFhLENBd0N6QjtBQXhDWSxzQ0FBYSIsImZpbGUiOiJjb21wb25lbnRzL3dpZmkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMjktTWF5LTE3LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9ICAgICAgICBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtQcml2aWxlZ2UsIFdpZml9ICAgICAgIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQge0FkZFdPQ29tcG9uZW50fSBmcm9tIFwiLi9hZGQud28uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3dpZmktYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9qcy9hcHAvY29tcG9uZW50cy92aWV3cy93aWZpLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2lmaUNvbXBvbmVudHtcclxuICBASW5wdXQoKSB1c2VyOiBQcml2aWxlZ2U7XHJcbiAgQE91dHB1dCgpIGNtcE5hbWU6IHN0cmluZyA9IFwiV2lyZWxlc3MgRmlkZWxpdHlcIjtcclxuXHJcbiAgd2lmaTogV2lmaSA9IG5ldyBXaWZpO1xyXG4gIHJvd3M6IFdpZmlbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFdPQ29udGVudCgnL2dldFdpZmlDb250ZW50JylcclxuICAgICAgLnN1YnNjcmliZSgocm93cyk9PntcclxuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFdpZmkoKXtcclxuICAgIGxldCBDbXBSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZFdPQ29tcG9uZW50KTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdGVkV2lmaSA9IHRoaXMud2lmaTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdEZvcm0gICA9IHRydWU7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLnR5cGUgICA9IDE7XHJcbiAgfVxyXG5cclxuICBkZWxldGVXaWZpKGlkOiBudW1iZXIpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmRlbGV0ZVdPKGlkKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpPT57XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5yb3dzLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gaWQpO1xyXG4gICAgICAgICAgdGhpcy5yb3dzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdFdpZmkoaWQ6IG51bWJlcil7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLnJvd3MuZmluZEluZGV4KHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICBsZXQgQ21wUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRXT0NvbXBvbmVudCk7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRlZFdpZmkgPSB0aGlzLnJvd3NbaW5kZXhdO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0Rm9ybSAgID0gZmFsc2U7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLnR5cGUgICA9IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ==
