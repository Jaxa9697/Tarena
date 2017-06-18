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
        templateUrl: '/app/components/views/optics.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], OpticsComponent);
exports.OpticsComponent = OpticsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvb3B0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQXVEO0FBQ3ZELDJEQUE2RDtBQUU3RCwyREFBeUQ7QUFDekQsK0RBQWlFO0FBQ2pFLHVEQUFrRDtBQVFsRCxJQUFhLGVBQWU7SUFPMUIseUJBQW9CLFlBQXNCLEVBQ3RCLGFBQTRCO1FBRDVCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTmhELFNBQUksR0FBUyxJQUFJLHVCQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVSLFlBQU8sR0FBVyxPQUFPLENBQUM7SUFJakMsQ0FBQztJQUVKLGtDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pELFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUNBQWMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFLLElBQUksQ0FBQztRQUMzQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFBckIsaUJBTUM7UUFMQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDO1lBQ1QsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEVBQVU7UUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpQ0FBYyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUssS0FBSyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDSCxzQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUFwQ1U7SUFBUixZQUFLLEVBQUU7OEJBQU8sNEJBQVM7NkNBQUM7QUFDZjtJQUFULGFBQU0sRUFBRTs7Z0RBQTJCO0FBTHpCLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSw2Q0FBNkM7UUFDMUQsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQVNrQyx1QkFBUTtRQUNQLDhCQUFhO0dBUnJDLGVBQWUsQ0F3QzNCO0FBeENZLDBDQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvb3B0aWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDI5LU1heS0xNy5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSAgICAgICAgZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7UHJpdmlsZWdlLCBXaWZpfSAgICAgICBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHtBZGRXT0NvbXBvbmVudH0gZnJvbSBcIi4vYWRkLndvLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHRpY3MtYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy92aWV3cy9vcHRpY3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpY3NDb21wb25lbnR7XHJcblxyXG4gIHdpZmk6IFdpZmkgPSBuZXcgV2lmaTtcclxuICByb3dzOiBXaWZpW10gPSBbXTtcclxuICBASW5wdXQoKSB1c2VyOiBQcml2aWxlZ2U7XHJcbiAgQE91dHB1dCgpIGNtcE5hbWU6IHN0cmluZyA9IFwiT3B0aWNcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRXT0NvbnRlbnQoJy9nZXRPcHRpY3NDb250ZW50JylcclxuICAgICAgLnN1YnNjcmliZSgocm93cyk9PntcclxuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFdpZmkoKXtcclxuICAgIGxldCBDbXBSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZFdPQ29tcG9uZW50KTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdGVkV2lmaSA9IHRoaXMud2lmaTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdEZvcm0gICA9IHRydWU7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLnR5cGUgICA9IDA7XHJcbiAgfVxyXG5cclxuICBkZWxldGVXaWZpKGlkOiBudW1iZXIpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmRlbGV0ZVdPKGlkKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpPT57XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5yb3dzLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gaWQpO1xyXG4gICAgICAgICAgdGhpcy5yb3dzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdFdpZmkoaWQ6IG51bWJlcil7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLnJvd3MuZmluZEluZGV4KHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICBsZXQgQ21wUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRXT0NvbXBvbmVudCk7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRlZFdpZmkgPSB0aGlzLnJvd3NbaW5kZXhdO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0Rm9ybSAgID0gZmFsc2U7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLnR5cGUgICA9IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==
