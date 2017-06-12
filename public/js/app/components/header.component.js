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
        templateUrl: '/js/app/components/views/header.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        material_1.MdSnackBar])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUd1QjtBQUN2QiwyREFBNkQ7QUFDN0QsMkRBQXlEO0FBQ3pELG1EQUFxRDtBQUNyRCxtREFBcUQ7QUFDckQsdURBQXVEO0FBQ3ZELG1EQUFxRDtBQUNyRCx1REFBbUQ7QUFDbkQsNkRBQXlEO0FBQ3pELCtEQUFxRDtBQUNyRCw4Q0FBNkM7QUFDN0MseURBQXFEO0FBUXJELElBQWEsZUFBZTtJQW1CMUIseUJBQW9CLHdCQUFrRCxFQUNuRCxRQUFvQjtRQURuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ25ELGFBQVEsR0FBUixRQUFRLENBQVk7UUFsQnZDLGNBQVMsR0FBVyxNQUFNLENBQUM7UUFPM0IsWUFBWTtRQUNaLGNBQVMsR0FBRyxrQ0FBZSxDQUFDO1FBQzVCLFlBQU8sR0FBSyw4QkFBYSxDQUFDO1FBQzFCLFlBQU8sR0FBSyw4QkFBYSxDQUFDO1FBQzFCLFdBQU0sR0FBTSxxQ0FBZ0IsQ0FBQztRQUM3QixZQUFPLEdBQUssOEJBQWEsQ0FBQztRQUMxQixjQUFTLEdBQUcsa0NBQWUsQ0FBQztRQUM1QixZQUFPLEdBQUssd0NBQWtCLENBQUM7UUFDL0IsWUFBTyxHQUFLLG9DQUFnQixDQUFDO0lBR1ksQ0FBQztJQUUxQyxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0RBQTBCLEdBQTFCLFVBQTJCLEdBQUc7UUFDNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFaEIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCw0Q0FBNEM7UUFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3pDLG9FQUFvRTtRQUV4RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixrRUFBa0U7SUFDcEUsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXZDVTtJQUFSLFlBQUssRUFBRTs4QkFBTyw0QkFBUzs2Q0FBQztBQUl6QjtJQURDLGdCQUFTLENBQUMsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7OEJBQ3ZDLHVCQUFnQjsrQ0FBQztBQUxkLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxnREFBZ0Q7UUFDN0QsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQXFCOEMsK0JBQXdCO1FBQ3pDLHFCQUFVO0dBcEI1QixlQUFlLENBd0MzQjtBQXhDWSwwQ0FBZSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAxMy1BcHItMTcuXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsXHJcbiAgVHlwZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gICAgIGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0Y0xpc3RDb21wb25lbnQgfSAgZnJvbSAnLi9hdGMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWbGFuQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL3ZsYW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSAgICAgZnJvbSBcIi4vbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVwb3J0Q29tcG9uZW50IH0gICBmcm9tIFwiLi9yZXBvcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpZmlDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vd2lmaS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPcHRpY3NDb21wb25lbnR9IGZyb20gXCIuL29wdGljcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcml2aWxlZ2VDb21wb25lbnR9IGZyb20gXCIuL3ByaXZpbGVnZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcml2aWxlZ2V9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQge01kU25hY2tCYXJ9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudHtcclxuICBASW5wdXQoKSB1c2VyOiBQcml2aWxlZ2U7XHJcbiAgY29tcG9uZW50OiBzdHJpbmcgPSBcIkhISEhcIjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcclxuICBwYXJlbnQ6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgdHlwZTogVHlwZTxSZXBvcnRDb21wb25lbnQ+O1xyXG4gIGNtcFJlZjogQ29tcG9uZW50UmVmPENvbXBvbmVudD47XHJcblxyXG4gIC8vQ29tcG9uZW50c1xyXG4gIHJlcG9ydENtcCA9IFJlcG9ydENvbXBvbmVudDtcclxuICBtYWluQ21wICAgPSBNYWluQ29tcG9uZW50O1xyXG4gIHZsYW5DbXAgICA9IFZsYW5Db21wb25lbnQ7XHJcbiAgYXRjQ21wICAgID0gQXRjTGlzdENvbXBvbmVudDtcclxuICB3aWZpQ21wICAgPSBXaWZpQ29tcG9uZW50O1xyXG4gIG9wdGljc0NtcCA9IE9wdGljc0NvbXBvbmVudDtcclxuICBwcml2Q21wICAgPSBQcml2aWxlZ2VDb21wb25lbnQ7XHJcbiAgcHJvZkNtcCAgID0gUHJvZmlsZUNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1kU25hY2tCYXIpe31cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50RHluYW1pY2FsbHkodGhpcy5tYWluQ21wKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbXBvbmVudER5bmFtaWNhbGx5KGNtcCl7XHJcbiAgICBpZih0aGlzLmNtcFJlZikgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xyXG4gICAgdGhpcy50eXBlID0gY21wO1xyXG5cclxuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy50eXBlKTtcclxuICAgIGxldCBDbXBSZWYgPSB0aGlzLnBhcmVudC5jcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgIC8vIENtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgQ21wUmVmLmluc3RhbmNlLnVzZXIgPSB0aGlzLnVzZXI7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBDbXBSZWYuaW5zdGFuY2UuY21wTmFtZTtcclxuICAgICAgICAvLyBDbXBSZWYuaW5zdGFuY2UuY21wTmFtZS5zdWJzY3JpYmUobmFtZSA9PiB0aGlzLmNvbXBvbmVudCA9IG5hbWUpO1xyXG5cclxuICAgIHRoaXMuY21wUmVmID0gQ21wUmVmO1xyXG4gICAgLy8gdGhpcy5zbmFja0Jhci5vcGVuKCdDb21wb25lbnQgY3JlYXRlZCcsJ29rJywgeyBkdXJhdGlvbjogNTAwfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
