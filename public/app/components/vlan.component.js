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
        templateUrl: '/app/components/views/vlan.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        core_1.ComponentFactoryResolver])
], VlanComponent);
exports.VlanComponent = VlanComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvdmxhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUd1QjtBQUN2QiwyREFBeUQ7QUFDekQsK0RBQTJEO0FBQzNELHlEQUFxRDtBQVFyRCxJQUFhLGFBQWE7SUFpQnhCLHVCQUFxQixhQUE0QixFQUM1Qix3QkFBa0Q7UUFEbEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWhCN0QsWUFBTyxHQUFXLDRCQUE0QixDQUFDO1FBRXpELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUVwQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsU0FBSSxHQUFTLElBQUksdUJBQUksRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFDNUIsa0JBQWEsR0FBVyxHQUFHLENBQUM7SUFRMUIsQ0FBQztJQUVILGdDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO2FBQ2hDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFFZCxLQUFJLENBQUMsT0FBTyxHQUFTLE1BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRWpCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVB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LENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xCLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztnQkFFMUQsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDekQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXRJQSxBQXNJQyxJQUFBO0FBcklVO0lBQVIsWUFBSyxFQUFFOzhCQUFPLDRCQUFTOzJDQUFDO0FBQ2Y7SUFBVCxhQUFNLEVBQUU7OzhDQUFnRDtBQVl6RDtJQURDLG1CQUFZLENBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7OEJBQzVDLGdCQUFTOzZDQUFNO0FBZFosYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBbUJvQyw4QkFBYTtRQUNGLCtCQUF3QjtHQWxCNUQsYUFBYSxDQXNJekI7QUF0SVksc0NBQWEiLCJmaWxlIjoiY29tcG9uZW50cy92bGFuLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDI1LUFwci0xNy5cclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZixcclxuICBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtQcml2aWxlZ2UsIFZsYW59IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQge1ZsYW5zSXBDb21wb25lbnR9IGZyb20gXCIuL2lwLnZsYW4uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZsYW4tYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy92aWV3cy92bGFuLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmxhbkNvbXBvbmVudHtcclxuICBASW5wdXQoKSB1c2VyOiBQcml2aWxlZ2U7XHJcbiAgQE91dHB1dCgpIGNtcE5hbWU6IHN0cmluZyA9IFwiVmlydHVhbCBMb2NhbCBBcmVhIE5ldHdvcmtcIjtcclxuXHJcbiAgdmxhbnM6IFZsYW5bXSA9IFtdO1xyXG4gIHRhcmlmZnM6IGFueVtdID0gW107XHJcblxyXG4gIFNhdmVCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEFkZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHZsYW46IFZsYW4gPSBuZXcgVmxhbigpO1xyXG4gIF9pZDsgX2dhdGV3YXk6IHN0cmluZyA9IFwiMFwiOyBfbmFtZTsgIF9zdWJuZXRNYXNrO1xyXG4gIHNlbGVjdGVkSW5kZXg6IFN0cmluZyA9IFwiMFwiO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKCdpcENvbnRlbnQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXHJcbiAgcGFyZW50OiBRdWVyeUxpc3Q8YW55PjtcclxuICBjbXBSZWY6IENvbXBvbmVudFJlZjxDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgKXt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0VmxhbkNvbnRlbnQoKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG5cclxuICAgICAgICB0aGlzLnRhcmlmZnMgPSAoPGFueT5PYmplY3QpLnZhbHVlcyhkYXRhLnRhcmlmZik7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEudmxhbjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBsZXQgdmxhbiA9IG5ldyBWbGFuKChpKzEpLCBkYXRhW2ldLklELCBkYXRhW2ldLmdhdGV3YXksIGRhdGFbaV0ubmFtZSwgZGF0YVtpXS50YXJpZmYsXHJcbiAgICAgICAgICAgIGRhdGFbaV0uc3VibmV0TWFzayk7XHJcbiAgICAgICAgICB0aGlzLnZsYW5zLnB1c2godmxhbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGROZXdWbGFuKHZsYW4pOiB2b2lke1xyXG4gICAgdmxhbi50YXJpZmYgPSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmFkZE5ld1ZsYW4odmxhbilcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBfdmxhbiA9IG5ldyBWbGFuKHRoaXMudmxhbnMubGVuZ3RoICsgMSwgZGF0YS5JRCwgZGF0YS5nYXRld2F5LCBkYXRhLm5hbWUsXHJcbiAgICAgICAgICBkYXRhLmlkX3RhcmlmZiwgZGF0YS5zdWJuZXRfbWFzayk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudGFyaWZmcy5maW5kSW5kZXgoeCA9PiB4LklEID09IE51bWJlcihkYXRhLmlkX3RhcmlmZikpO1xyXG4gICAgICAgIF92bGFuLnRhcmlmZiA9IFwiXCIgKyB0aGlzLnRhcmlmZnNbaW5kZXhdLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMudmxhbnMucHVzaChfdmxhbik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVmxhbihpZDogbnVtYmVyKXtcclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5kZWxldGVWbGFuKGlkKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpPT57XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy52bGFucy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgICAgICB0aGlzLnZsYW5zLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMudmxhbnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICB0aGlzLnZsYW5zW2ldLm51bWJlciA9IChpICsgMSk7XHJcblxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRWbGFuKGlkLCBnYXRld2F5LCBuYW1lLCB0YXJpZmYsIHN1Ym5ldE1hc2spe1xyXG4gICAgdGhpcy5faWQgICAgICAgICA9IGlkLnZhbHVlO1xyXG4gICAgdGhpcy5fZ2F0ZXdheSAgICA9IGdhdGV3YXkuaW5uZXJIVE1MO1xyXG4gICAgdGhpcy5fbmFtZSAgICAgICA9IG5hbWUuaW5uZXJIVE1MO1xyXG4gICAgdGhpcy5fc3VibmV0TWFzayA9IHN1Ym5ldE1hc2suaW5uZXJIVE1MO1xyXG4gICAgdGhpcy5BZGRCdXR0b24gICA9IHRydWU7XHJcbiAgICB0aGlzLlNhdmVCdXR0b24gID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gdGhpcy50YXJpZmZzLmZpbmRJbmRleCh4ID0+IHgubmFtZSA9PSB0YXJpZmYuaW5uZXJIVE1MKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IFwiXCIgKyB0aGlzLnRhcmlmZnNbaW5kZXhdLklEO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJGb3JtKCl7XHJcbiAgICB0aGlzLl9nYXRld2F5ID0gXCJcIjtcclxuICAgIHRoaXMuX25hbWUgPSBcIlwiO1xyXG4gICAgdGhpcy5fc3VibmV0TWFzayA9IFwiXCI7XHJcbiAgICB0aGlzLlNhdmVCdXR0b24gPSB0cnVlO1xyXG4gICAgdGhpcy5BZGRCdXR0b24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZsYW4oZ2F0ZXdheSwgbmFtZSwgc3VibmV0TWFzayl7XHJcblxyXG4gICAgbGV0IHZsYW4gPSBuZXcgVmxhbih1bmRlZmluZWQsIHRoaXMuX2lkLCAgZ2F0ZXdheSwgbmFtZSwgdGhpcy5zZWxlY3RlZEluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym5ldE1hc2spO1xyXG5cclxuICAgIGlmICghZ2F0ZXdheSkgICAgdmxhbi5nYXRld2F5ICAgID0gdGhpcy5fZ2F0ZXdheTtcclxuICAgIGlmICghbmFtZSkgICAgICAgdmxhbi5uYW1lICAgICAgID0gdGhpcy5fbmFtZTtcclxuICAgIGlmICghc3VibmV0TWFzaykgdmxhbi5zdWJuZXRNYXNrID0gdGhpcy5fc3VibmV0TWFzaztcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UudXBkYXRlVmxhbih2bGFuKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZsYW5zLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gdGhpcy5faWQpO1xyXG4gICAgICAgIGxldCB2bGFuID0gdGhpcy52bGFuc1tpbmRleF07XHJcblxyXG4gICAgICAgIGxldCBpbmRleDIgPSB0aGlzLnRhcmlmZnMuZmluZEluZGV4KHggPT4geC5JRCA9PSBOdW1iZXIoZGF0YS5pZF90YXJpZmYpKTtcclxuXHJcbiAgICAgICAgdmxhbi50YXJpZmYgICAgID0gXCJcIiArIHRoaXMudGFyaWZmc1tpbmRleDJdLm5hbWU7XHJcbiAgICAgICAgdmxhbi5nYXRld2F5ICAgID0gZGF0YS5nYXRld2F5O1xyXG4gICAgICAgIHZsYW4ubmFtZSAgICAgICA9IGRhdGEubmFtZTtcclxuICAgICAgICB2bGFuLnN1Ym5ldE1hc2sgPSBkYXRhLnN1Ym5ldF9tYXNrO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dWbGFuc0lwKG51bWJlcil7XHJcbiAgICBpZih0aGlzLmNtcFJlZikgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xyXG5cclxuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVmxhbnNJcENvbXBvbmVudCk7XHJcbiAgICB0aGlzLnBhcmVudC5tYXAoKHRhYkluc3RhbmNlLCBpKSA9PntcclxuXHJcbiAgICAgIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xyXG4gICAgICAgIGlmKG51bWJlciAtIDEgPT0gaSl7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZsYW5zLmZpbmRJbmRleCh4ID0+IHgubnVtYmVyID09IG51bWJlcik7XHJcblxyXG4gICAgICAgICAgbGV0IENtcFJlZiA9IHRhYkluc3RhbmNlLmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICBDbXBSZWYuaW5zdGFuY2UudmxhbiA9IHRoaXMudmxhbnNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgIHRoaXMuY21wUmVmID0gQ21wUmVmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhpZGVWbGFuc0lwKCl7XHJcbiAgICBpZih0aGlzLmNtcFJlZikgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
