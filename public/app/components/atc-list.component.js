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
        templateUrl: '/app/components/views/atc-list.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], AtcListComponent);
exports.AtcListComponent = AtcListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvYXRjLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBdUQ7QUFDdkQsMkRBQThEO0FBRTlELDJEQUF5RDtBQUN6RCwrREFBNkU7QUFDN0UsaURBQWdEO0FBUWhELElBQWEsZ0JBQWdCO0lBTzNCLDBCQUFvQixZQUFzQixFQUN0QixhQUE0QjtRQUQ1QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVBoRCxVQUFLLEdBQWMsRUFBRSxDQUFDO1FBQ3RCLFFBQUcsR0FBUSxJQUFJLHNCQUFHLEVBQUUsQ0FBQztRQUdYLFlBQU8sR0FBVyxtQ0FBbUMsQ0FBQztJQUk3RCxDQUFDO0lBRUosbUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7YUFDL0IsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUVkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLDBCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDOUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBSSxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUFBLENBQUM7SUFDSix1QkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUF2QlU7SUFBUixZQUFLLEVBQUU7OEJBQU8sNEJBQVM7OENBQUM7QUFDZjtJQUFULGFBQU0sRUFBRTs7aURBQXVEO0FBTHJELGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBU2tDLHVCQUFRO1FBQ1AsOEJBQWE7R0FSckMsZ0JBQWdCLENBMkI1QjtBQTNCWSw0Q0FBZ0IiLCJmaWxlIjoiY29tcG9uZW50cy9hdGMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyMC1BcHItMTcuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZGFsIH0gICAgICAgICBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtBdGMsIEF0Y0xpc3QsIFByaXZpbGVnZX0gICAgICAgICAgIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSAgZnJvbSBcIi4vYWRkLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdGNMaXN0LWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvdmlld3MvYXRjLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdGNMaXN0Q29tcG9uZW50e1xyXG4gIGF0Y2VzOiBBdGNMaXN0W10gPSBbXTtcclxuICBhdGM6IEF0YyA9IG5ldyBBdGMoKTtcclxuXHJcbiAgQElucHV0KCkgdXNlcjogUHJpdmlsZWdlO1xyXG4gIEBPdXRwdXQoKSBjbXBOYW1lOiBzdHJpbmcgPSBcItCQ0LLRgtC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0YLQtdC70LXRhNC+0L3QvdCw0Y8g0YHRgtCw0L3RhtC40Y9cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0QXRjQ29udGVudCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgbGV0IGF0YyA9IG5ldyBBdGNMaXN0KGRhdGFbaV0uSUQsIGRhdGFbaV0ubmFtZSwgZGF0YVtpXS5pcEFkZHJlc3MsIGRhdGFbaV0uYWxjUXVhbnQpO1xyXG4gICAgICAgICAgdGhpcy5hdGNlcy5wdXNoKGF0Yyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbEZvcm0oKXtcclxuICAgIGxldCBDbXBSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZENvbXBvbmVudCk7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRlZEF0YyA9IHRoaXMuYXRjO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0Rm9ybSAgPSB0cnVlO1xyXG4gIH07XHJcbn1cclxuXHJcbiJdfQ==
