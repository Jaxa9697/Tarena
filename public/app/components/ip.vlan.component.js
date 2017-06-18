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
 * Created by Jahongir on 23-May-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var VlansIpComponent = (function () {
    function VlansIpComponent(headerService) {
        this.headerService = headerService;
        this.clients = [];
    }
    VlansIpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getClientsByVlan(this.vlan)
            .subscribe(function (clients) {
            _this.clients = clients;
        });
    };
    return VlansIpComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VlansIpComponent.prototype, "vlan", void 0);
VlansIpComponent = __decorate([
    core_1.Component({
        selector: 'tr[vlansIp]',
        templateUrl: '/app/components/views/ip.vlan.component.html',
        providers: [header_service_1.HeaderService],
        host: { 'class': 'ipTr' }
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService])
], VlansIpComponent);
exports.VlansIpComponent = VlansIpComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvaXAudmxhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFpRDtBQUVqRCwyREFBeUQ7QUFVekQsSUFBYSxnQkFBZ0I7SUFNM0IsMEJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSGhELFlBQU8sR0FBbUIsRUFBRSxDQUFDO0lBR3NCLENBQUM7SUFFcEQsbUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNDLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDZCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSCx1QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZFU7SUFBUixZQUFLLEVBQUU7OzhDQUFNO0FBREgsZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsOENBQThDO1FBQzNELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7UUFDNUIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztLQUN4QixDQUFDO3FDQVFtQyw4QkFBYTtHQU5yQyxnQkFBZ0IsQ0FlNUI7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiY29tcG9uZW50cy9pcC52bGFuLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDIzLU1heS0xNy5cclxuICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWbGFuc0NsaWVudHMgIH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyW3ZsYW5zSXBdJyxcclxuICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy92aWV3cy9pcC52bGFuLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdLFxyXG4gIGhvc3Q6IHsnY2xhc3MnOiAnaXBUcid9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmxhbnNJcENvbXBvbmVudHtcclxuICBASW5wdXQoKSB2bGFuO1xyXG5cclxuICBjbGllbnRzOiBWbGFuc0NsaWVudHNbXSA9IFtdO1xyXG4gIGNsaWVudDogVmxhbnNDbGllbnRzO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0Q2xpZW50c0J5Vmxhbih0aGlzLnZsYW4pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGNsaWVudHMpPT57XHJcbiAgICAgICAgICAgdGhpcy5jbGllbnRzID0gY2xpZW50cztcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19
