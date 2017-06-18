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
 * Created by Jahongir on 13-Apr-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var atc_list_component_1 = require("./atc-list.component");
var vlan_component_1 = require("./vlan.component");
var main_component_1 = require("./main.component");
var report_component_1 = require("./report.component");
var wifi_component_1 = require("./wifi.component");
var optics_component_1 = require("./optics.component");
var privilege_component_1 = require("./privilege.component");
var components_model_1 = require("../shared/components.model");
var material_1 = require("@angular/material");
var profile_component_1 = require("./profile.component");
var HeaderComponent = (function () {
    function HeaderComponent(componentFactoryResolver, snackBar) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.snackBar = snackBar;
        this.component = "HHHH";
        //Components
        this.reportCmp = report_component_1.ReportComponent;
        this.mainCmp = main_component_1.MainComponent;
        this.vlanCmp = vlan_component_1.VlanComponent;
        this.atcCmp = atc_list_component_1.AtcListComponent;
        this.wifiCmp = wifi_component_1.WifiComponent;
        this.opticsCmp = optics_component_1.OpticsComponent;
        this.privCmp = privilege_component_1.PrivilegeComponent;
        this.profCmp = profile_component_1.ProfileComponent;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.createComponentDynamically(this.mainCmp);
    };
    HeaderComponent.prototype.createComponentDynamically = function (cmp) {
        if (this.cmpRef)
            this.cmpRef.destroy();
        this.type = cmp;
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(this.type);
        var CmpRef = this.parent.createComponent(childComponent);
        // CmpRef.changeDetectorRef.detectChanges();
        CmpRef.instance.user = this.user;
        this.component = CmpRef.instance.cmpName;
        // CmpRef.instance.cmpName.subscribe(name => this.component = name);
        this.cmpRef = CmpRef;
        // this.snackBar.open('Component created','ok', { duration: 500});
    };
    return HeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], HeaderComponent.prototype, "user", void 0);
__decorate([
    core_1.ViewChild('content', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], HeaderComponent.prototype, "parent", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-app',
        templateUrl: '/app/components/views/header.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        material_1.MdSnackBar])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBR3VCO0FBQ3ZCLDJEQUE2RDtBQUM3RCwyREFBeUQ7QUFDekQsbURBQXFEO0FBQ3JELG1EQUFxRDtBQUNyRCx1REFBdUQ7QUFDdkQsbURBQXFEO0FBQ3JELHVEQUFtRDtBQUNuRCw2REFBeUQ7QUFDekQsK0RBQXFEO0FBQ3JELDhDQUE2QztBQUM3Qyx5REFBcUQ7QUFRckQsSUFBYSxlQUFlO0lBbUIxQix5QkFBb0Isd0JBQWtELEVBQ25ELFFBQW9CO1FBRG5CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbkQsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQWxCdkMsY0FBUyxHQUFXLE1BQU0sQ0FBQztRQU8zQixZQUFZO1FBQ1osY0FBUyxHQUFHLGtDQUFlLENBQUM7UUFDNUIsWUFBTyxHQUFLLDhCQUFhLENBQUM7UUFDMUIsWUFBTyxHQUFLLDhCQUFhLENBQUM7UUFDMUIsV0FBTSxHQUFNLHFDQUFnQixDQUFDO1FBQzdCLFlBQU8sR0FBSyw4QkFBYSxDQUFDO1FBQzFCLGNBQVMsR0FBRyxrQ0FBZSxDQUFDO1FBQzVCLFlBQU8sR0FBSyx3Q0FBa0IsQ0FBQztRQUMvQixZQUFPLEdBQUssb0NBQWdCLENBQUM7SUFHWSxDQUFDO0lBRTFDLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvREFBMEIsR0FBMUIsVUFBMkIsR0FBRztRQUM1QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELDRDQUE0QztRQUM1QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDekMsb0VBQW9FO1FBRXhFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLGtFQUFrRTtJQUNwRSxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBdkNVO0lBQVIsWUFBSyxFQUFFOzhCQUFPLDRCQUFTOzZDQUFDO0FBSXpCO0lBREMsZ0JBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsdUJBQWdCLEVBQUMsQ0FBQzs4QkFDdkMsdUJBQWdCOytDQUFDO0FBTGQsZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBcUI4QywrQkFBd0I7UUFDekMscUJBQVU7R0FwQjVCLGVBQWUsQ0F3QzNCO0FBeENZLDBDQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDEzLUFwci0xNy5cclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZixcclxuICBUeXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSAgICAgZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXRjTGlzdENvbXBvbmVudCB9ICBmcm9tICcuL2F0Yy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZsYW5Db21wb25lbnQgfSAgICAgZnJvbSBcIi4vdmxhbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXBvcnRDb21wb25lbnQgfSAgIGZyb20gXCIuL3JlcG9ydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgV2lmaUNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi93aWZpLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09wdGljc0NvbXBvbmVudH0gZnJvbSBcIi4vb3B0aWNzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1ByaXZpbGVnZUNvbXBvbmVudH0gZnJvbSBcIi4vcHJpdmlsZWdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1ByaXZpbGVnZX0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7TWRTbmFja0Jhcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvZmlsZS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVhZGVyLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvdmlld3MvaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50e1xyXG4gIEBJbnB1dCgpIHVzZXI6IFByaXZpbGVnZTtcclxuICBjb21wb25lbnQ6IHN0cmluZyA9IFwiSEhISFwiO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb250ZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxyXG4gIHBhcmVudDogVmlld0NvbnRhaW5lclJlZjtcclxuICB0eXBlOiBUeXBlPFJlcG9ydENvbXBvbmVudD47XHJcbiAgY21wUmVmOiBDb21wb25lbnRSZWY8Q29tcG9uZW50PjtcclxuXHJcbiAgLy9Db21wb25lbnRzXHJcbiAgcmVwb3J0Q21wID0gUmVwb3J0Q29tcG9uZW50O1xyXG4gIG1haW5DbXAgICA9IE1haW5Db21wb25lbnQ7XHJcbiAgdmxhbkNtcCAgID0gVmxhbkNvbXBvbmVudDtcclxuICBhdGNDbXAgICAgPSBBdGNMaXN0Q29tcG9uZW50O1xyXG4gIHdpZmlDbXAgICA9IFdpZmlDb21wb25lbnQ7XHJcbiAgb3B0aWNzQ21wID0gT3B0aWNzQ29tcG9uZW50O1xyXG4gIHByaXZDbXAgICA9IFByaXZpbGVnZUNvbXBvbmVudDtcclxuICBwcm9mQ21wICAgPSBQcm9maWxlQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWRTbmFja0Jhcil7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5jcmVhdGVDb21wb25lbnREeW5hbWljYWxseSh0aGlzLm1haW5DbXApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29tcG9uZW50RHluYW1pY2FsbHkoY21wKXtcclxuICAgIGlmKHRoaXMuY21wUmVmKSB0aGlzLmNtcFJlZi5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnR5cGUgPSBjbXA7XHJcblxyXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnR5cGUpO1xyXG4gICAgbGV0IENtcFJlZiA9IHRoaXMucGFyZW50LmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gQ21wUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBDbXBSZWYuaW5zdGFuY2UudXNlciA9IHRoaXMudXNlcjtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IENtcFJlZi5pbnN0YW5jZS5jbXBOYW1lO1xyXG4gICAgICAgIC8vIENtcFJlZi5pbnN0YW5jZS5jbXBOYW1lLnN1YnNjcmliZShuYW1lID0+IHRoaXMuY29tcG9uZW50ID0gbmFtZSk7XHJcblxyXG4gICAgdGhpcy5jbXBSZWYgPSBDbXBSZWY7XHJcbiAgICAvLyB0aGlzLnNuYWNrQmFyLm9wZW4oJ0NvbXBvbmVudCBjcmVhdGVkJywnb2snLCB7IGR1cmF0aW9uOiA1MDB9KTtcclxuICB9XHJcbn1cclxuIl19
