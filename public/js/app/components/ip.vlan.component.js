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
        templateUrl: '/js/app/components/views/ip.vlan.component.html',
        providers: [header_service_1.HeaderService],
        host: { 'class': 'ipTr' }
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService])
], VlansIpComponent);
exports.VlansIpComponent = VlansIpComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL2lwLnZsYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBaUQ7QUFFakQsMkRBQXlEO0FBVXpELElBQWEsZ0JBQWdCO0lBTTNCLDBCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUhoRCxZQUFPLEdBQW1CLEVBQUUsQ0FBQztJQUdzQixDQUFDO0lBRXBELG1DQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMzQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWRVO0lBQVIsWUFBSyxFQUFFOzs4Q0FBTTtBQURILGdCQUFnQjtJQVA1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGlEQUFpRDtRQUM5RCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO1FBQzVCLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUM7S0FDeEIsQ0FBQztxQ0FRbUMsOEJBQWE7R0FOckMsZ0JBQWdCLENBZTVCO0FBZlksNENBQWdCIiwiZmlsZSI6ImNvbXBvbmVudHMvaXAudmxhbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyMy1NYXktMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmxhbnNDbGllbnRzICB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0clt2bGFuc0lwXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcvanMvYXBwL2NvbXBvbmVudHMvdmlld3MvaXAudmxhbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXSxcclxuICBob3N0OiB7J2NsYXNzJzogJ2lwVHInfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZsYW5zSXBDb21wb25lbnR7XHJcbiAgQElucHV0KCkgdmxhbjtcclxuXHJcbiAgY2xpZW50czogVmxhbnNDbGllbnRzW10gPSBbXTtcclxuICBjbGllbnQ6IFZsYW5zQ2xpZW50cztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldENsaWVudHNCeVZsYW4odGhpcy52bGFuKVxyXG4gICAgICAuc3Vic2NyaWJlKChjbGllbnRzKT0+e1xyXG4gICAgICAgICAgIHRoaXMuY2xpZW50cyA9IGNsaWVudHM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
