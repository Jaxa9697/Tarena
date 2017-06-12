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
 * Created by Jahongir on 25-Apr-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var components_model_1 = require("../shared/components.model");
var ip_vlan_component_1 = require("./ip.vlan.component");
var VlanComponent = (function () {
    function VlanComponent(headerService, componentFactoryResolver) {
        this.headerService = headerService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cmpName = "Virtual Local Area Network";
        this.vlans = [];
        this.tariffs = [];
        this.SaveButton = true;
        this.AddButton = false;
        this.vlan = new components_model_1.Vlan();
        this._gateway = "0";
        this.selectedIndex = "0";
    }
    VlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getVlanContent()
            .subscribe(function (data) {
            _this.tariffs = Object.values(data.tariff);
            data = data.vlan;
            for (var i = 0; i < data.length; i++) {
                var vlan = new components_model_1.Vlan((i + 1), data[i].ID, data[i].gateway, data[i].name, data[i].tariff, data[i].subnetMask);
                _this.vlans.push(vlan);
            }
        });
    };
    VlanComponent.prototype.addNewVlan = function (vlan) {
        var _this = this;
        vlan.tariff = this.selectedIndex;
        this.headerService.addNewVlan(vlan)
            .subscribe(function (data) {
            var _vlan = new components_model_1.Vlan(_this.vlans.length + 1, data.ID, data.gateway, data.name, data.id_tariff, data.subnet_mask);
            var index = _this.tariffs.findIndex(function (x) { return x.ID == Number(data.id_tariff); });
            _vlan.tariff = "" + _this.tariffs[index].name;
            _this.vlans.push(_vlan);
            _this.clearForm();
        });
    };
    VlanComponent.prototype.deleteVlan = function (id) {
        var _this = this;
        this.headerService.deleteVlan(id)
            .subscribe(function () {
            var index = _this.vlans.findIndex(function (x) { return x.id == id; });
            _this.vlans.splice(index, 1);
            for (var i = 0; i < _this.vlans.length; i++)
                _this.vlans[i].number = (i + 1);
        });
    };
    VlanComponent.prototype.editVlan = function (id, gateway, name, tariff, subnetMask) {
        this._id = id.value;
        this._gateway = gateway.innerHTML;
        this._name = name.innerHTML;
        this._subnetMask = subnetMask.innerHTML;
        this.AddButton = true;
        this.SaveButton = false;
        var index = this.tariffs.findIndex(function (x) { return x.name == tariff.innerHTML; });
        this.selectedIndex = "" + this.tariffs[index].ID;
    };
    VlanComponent.prototype.clearForm = function () {
        this._gateway = "";
        this._name = "";
        this._subnetMask = "";
        this.SaveButton = true;
        this.AddButton = false;
    };
    VlanComponent.prototype.updateVlan = function (gateway, name, subnetMask) {
        var _this = this;
        var vlan = new components_model_1.Vlan(undefined, this._id, gateway, name, this.selectedIndex.toString(), subnetMask);
        if (!gateway)
            vlan.gateway = this._gateway;
        if (!name)
            vlan.name = this._name;
        if (!subnetMask)
            vlan.subnetMask = this._subnetMask;
        this.headerService.updateVlan(vlan)
            .subscribe(function (data) {
            var index = _this.vlans.findIndex(function (x) { return x.id == _this._id; });
            var vlan = _this.vlans[index];
            var index2 = _this.tariffs.findIndex(function (x) { return x.ID == Number(data.id_tariff); });
            vlan.tariff = "" + _this.tariffs[index2].name;
            vlan.gateway = data.gateway;
            vlan.name = data.name;
            vlan.subnetMask = data.subnet_mask;
            _this.clearForm();
        });
    };
    VlanComponent.prototype.showVlansIp = function (number) {
        var _this = this;
        if (this.cmpRef)
            this.cmpRef.destroy();
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(ip_vlan_component_1.VlansIpComponent);
        this.parent.map(function (tabInstance, i) {
            number = Number(number);
            if (number - 1 == i) {
                var index = _this.vlans.findIndex(function (x) { return x.number == number; });
                var CmpRef = tabInstance.createComponent(childComponent);
                CmpRef.instance.vlan = _this.vlans[index];
                _this.cmpRef = CmpRef;
            }
        });
    };
    VlanComponent.prototype.hideVlansIp = function () {
        if (this.cmpRef)
            this.cmpRef.destroy();
    };
    return VlanComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], VlanComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], VlanComponent.prototype, "cmpName", void 0);
__decorate([
    core_1.ViewChildren('ipContent', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.QueryList)
], VlanComponent.prototype, "parent", void 0);
VlanComponent = __decorate([
    core_1.Component({
        selector: 'vlan-app',
        templateUrl: '/js/app/components/views/vlan.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        core_1.ComponentFactoryResolver])
], VlanComponent);
exports.VlanComponent = VlanComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL3ZsYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FHdUI7QUFDdkIsMkRBQXlEO0FBQ3pELCtEQUEyRDtBQUMzRCx5REFBcUQ7QUFRckQsSUFBYSxhQUFhO0lBaUJ4Qix1QkFBcUIsYUFBNEIsRUFDNUIsd0JBQWtEO1FBRGxELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFoQjdELFlBQU8sR0FBVyw0QkFBNEIsQ0FBQztRQUV6RCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFcEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFNBQUksR0FBUyxJQUFJLHVCQUFJLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO0lBUTFCLENBQUM7SUFFSCxnQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRTthQUNoQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBRWQsS0FBSSxDQUFDLE9BQU8sR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMs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QUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNsQixJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFsQixDQUFrQixDQUFDLENBQUM7Z0JBRTFELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3pELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXpDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0F0SUEsQUFzSUMsSUFBQTtBQXJJVTtJQUFSLFlBQUssRUFBRTs4QkFBTyw0QkFBUzsyQ0FBQztBQUNmO0lBQVQsYUFBTSxFQUFFOzs4Q0FBZ0Q7QUFZekQ7SUFEQyxtQkFBWSxDQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSx1QkFBZ0IsRUFBQyxDQUFDOzhCQUM1QyxnQkFBUzs2Q0FBTTtBQWRaLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSw4Q0FBOEM7UUFDM0QsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQW1Cb0MsOEJBQWE7UUFDRiwrQkFBd0I7R0FsQjVELGFBQWEsQ0FzSXpCO0FBdElZLHNDQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvdmxhbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyNS1BcHItMTcuXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsXHJcbiAgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIElucHV0LCBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7UHJpdmlsZWdlLCBWbGFufSBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHtWbGFuc0lwQ29tcG9uZW50fSBmcm9tIFwiLi9pcC52bGFuLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2bGFuLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvanMvYXBwL2NvbXBvbmVudHMvdmlld3Mvdmxhbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZsYW5Db21wb25lbnR7XHJcbiAgQElucHV0KCkgdXNlcjogUHJpdmlsZWdlO1xyXG4gIEBPdXRwdXQoKSBjbXBOYW1lOiBzdHJpbmcgPSBcIlZpcnR1YWwgTG9jYWwgQXJlYSBOZXR3b3JrXCI7XHJcblxyXG4gIHZsYW5zOiBWbGFuW10gPSBbXTtcclxuICB0YXJpZmZzOiBhbnlbXSA9IFtdO1xyXG5cclxuICBTYXZlQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcclxuICBBZGRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICB2bGFuOiBWbGFuID0gbmV3IFZsYW4oKTtcclxuICBfaWQ7IF9nYXRld2F5OiBzdHJpbmcgPSBcIjBcIjsgX25hbWU7ICBfc3VibmV0TWFzaztcclxuICBzZWxlY3RlZEluZGV4OiBTdHJpbmcgPSBcIjBcIjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbignaXBDb250ZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxyXG4gIHBhcmVudDogUXVlcnlMaXN0PGFueT47XHJcbiAgY21wUmVmOiBDb21wb25lbnRSZWY8Q29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSxcclxuICAgICAgICAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICl7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFZsYW5Db250ZW50KClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuXHJcbiAgICAgICAgdGhpcy50YXJpZmZzID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMoZGF0YS50YXJpZmYpO1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLnZsYW47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgbGV0IHZsYW4gPSBuZXcgVmxhbigoaSsxKSwgZGF0YVtpXS5JRCwgZGF0YVtpXS5nYXRld2F5LCBkYXRhW2ldLm5hbWUsIGRhdGFbaV0udGFyaWZmLFxyXG4gICAgICAgICAgICBkYXRhW2ldLnN1Ym5ldE1hc2spO1xyXG4gICAgICAgICAgdGhpcy52bGFucy5wdXNoKHZsYW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkTmV3Vmxhbih2bGFuKTogdm9pZHtcclxuICAgIHZsYW4udGFyaWZmID0gdGhpcy5zZWxlY3RlZEluZGV4O1xyXG5cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5hZGROZXdWbGFuKHZsYW4pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgX3ZsYW4gPSBuZXcgVmxhbih0aGlzLnZsYW5zLmxlbmd0aCArIDEsIGRhdGEuSUQsIGRhdGEuZ2F0ZXdheSwgZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGF0YS5pZF90YXJpZmYsIGRhdGEuc3VibmV0X21hc2spO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRhcmlmZnMuZmluZEluZGV4KHggPT4geC5JRCA9PSBOdW1iZXIoZGF0YS5pZF90YXJpZmYpKTtcclxuICAgICAgICBfdmxhbi50YXJpZmYgPSBcIlwiICsgdGhpcy50YXJpZmZzW2luZGV4XS5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnZsYW5zLnB1c2goX3ZsYW4pO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVZsYW4oaWQ6IG51bWJlcil7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZGVsZXRlVmxhbihpZClcclxuICAgICAgLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudmxhbnMuZmluZEluZGV4KHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICAgICAgdGhpcy52bGFucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLnZsYW5zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgdGhpcy52bGFuc1tpXS5udW1iZXIgPSAoaSArIDEpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0VmxhbihpZCwgZ2F0ZXdheSwgbmFtZSwgdGFyaWZmLCBzdWJuZXRNYXNrKXtcclxuICAgIHRoaXMuX2lkICAgICAgICAgPSBpZC52YWx1ZTtcclxuICAgIHRoaXMuX2dhdGV3YXkgICAgPSBnYXRld2F5LmlubmVySFRNTDtcclxuICAgIHRoaXMuX25hbWUgICAgICAgPSBuYW1lLmlubmVySFRNTDtcclxuICAgIHRoaXMuX3N1Ym5ldE1hc2sgPSBzdWJuZXRNYXNrLmlubmVySFRNTDtcclxuICAgIHRoaXMuQWRkQnV0dG9uICAgPSB0cnVlO1xyXG4gICAgdGhpcy5TYXZlQnV0dG9uICA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbmRleCA9IHRoaXMudGFyaWZmcy5maW5kSW5kZXgoeCA9PiB4Lm5hbWUgPT0gdGFyaWZmLmlubmVySFRNTCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBcIlwiICsgdGhpcy50YXJpZmZzW2luZGV4XS5JRDtcclxuICB9XHJcblxyXG4gIGNsZWFyRm9ybSgpe1xyXG4gICAgdGhpcy5fZ2F0ZXdheSA9IFwiXCI7XHJcbiAgICB0aGlzLl9uYW1lID0gXCJcIjtcclxuICAgIHRoaXMuX3N1Ym5ldE1hc2sgPSBcIlwiO1xyXG4gICAgdGhpcy5TYXZlQnV0dG9uID0gdHJ1ZTtcclxuICAgIHRoaXMuQWRkQnV0dG9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWbGFuKGdhdGV3YXksIG5hbWUsIHN1Ym5ldE1hc2spe1xyXG5cclxuICAgIGxldCB2bGFuID0gbmV3IFZsYW4odW5kZWZpbmVkLCB0aGlzLl9pZCwgIGdhdGV3YXksIG5hbWUsIHRoaXMuc2VsZWN0ZWRJbmRleC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJuZXRNYXNrKTtcclxuXHJcbiAgICBpZiAoIWdhdGV3YXkpICAgIHZsYW4uZ2F0ZXdheSAgICA9IHRoaXMuX2dhdGV3YXk7XHJcbiAgICBpZiAoIW5hbWUpICAgICAgIHZsYW4ubmFtZSAgICAgICA9IHRoaXMuX25hbWU7XHJcbiAgICBpZiAoIXN1Ym5ldE1hc2spIHZsYW4uc3VibmV0TWFzayA9IHRoaXMuX3N1Ym5ldE1hc2s7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLnVwZGF0ZVZsYW4odmxhbilcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy52bGFucy5maW5kSW5kZXgoeCA9PiB4LmlkID09IHRoaXMuX2lkKTtcclxuICAgICAgICBsZXQgdmxhbiA9IHRoaXMudmxhbnNbaW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXgyID0gdGhpcy50YXJpZmZzLmZpbmRJbmRleCh4ID0+IHguSUQgPT0gTnVtYmVyKGRhdGEuaWRfdGFyaWZmKSk7XHJcblxyXG4gICAgICAgIHZsYW4udGFyaWZmICAgICA9IFwiXCIgKyB0aGlzLnRhcmlmZnNbaW5kZXgyXS5uYW1lO1xyXG4gICAgICAgIHZsYW4uZ2F0ZXdheSAgICA9IGRhdGEuZ2F0ZXdheTtcclxuICAgICAgICB2bGFuLm5hbWUgICAgICAgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdmxhbi5zdWJuZXRNYXNrID0gZGF0YS5zdWJuZXRfbWFzaztcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhckZvcm0oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93VmxhbnNJcChudW1iZXIpe1xyXG4gICAgaWYodGhpcy5jbXBSZWYpIHRoaXMuY21wUmVmLmRlc3Ryb3koKTtcclxuXHJcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFZsYW5zSXBDb21wb25lbnQpO1xyXG4gICAgdGhpcy5wYXJlbnQubWFwKCh0YWJJbnN0YW5jZSwgaSkgPT57XHJcblxyXG4gICAgICBudW1iZXIgPSBOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICBpZihudW1iZXIgLSAxID09IGkpe1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy52bGFucy5maW5kSW5kZXgoeCA9PiB4Lm51bWJlciA9PSBudW1iZXIpO1xyXG5cclxuICAgICAgICAgIGxldCBDbXBSZWYgPSB0YWJJbnN0YW5jZS5jcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgQ21wUmVmLmluc3RhbmNlLnZsYW4gPSB0aGlzLnZsYW5zW2luZGV4XTtcclxuXHJcbiAgICAgICAgICB0aGlzLmNtcFJlZiA9IENtcFJlZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoaWRlVmxhbnNJcCgpe1xyXG4gICAgaWYodGhpcy5jbXBSZWYpIHRoaXMuY21wUmVmLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19
