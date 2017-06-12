"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header.component");
var atc_component_1 = require("./components/atc.component");
var atc_list_component_1 = require("./components/atc-list.component");
var vlan_component_1 = require("./components/vlan.component");
var add_component_1 = require("./components/add.component");
var main_component_1 = require("./components/main.component");
var report_component_1 = require("./components/report.component");
var result_search_component_1 = require("./components/result.search.component");
var ip_vlan_component_1 = require("./components/ip.vlan.component");
var wifi_component_1 = require("./components/wifi.component");
var add_wo_component_1 = require("./components/add.wo.component");
var optics_component_1 = require("./components/optics.component");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var privilege_component_1 = require("./components/privilege.component");
var profile_component_1 = require("./components/profile.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, header_component_1.HeaderComponent,
            atc_component_1.AtcComponent, atc_list_component_1.AtcListComponent,
            vlan_component_1.VlanComponent, add_component_1.AddComponent,
            main_component_1.MainComponent, report_component_1.ReportComponent,
            result_search_component_1.ResultSearchComponent, ip_vlan_component_1.VlansIpComponent,
            wifi_component_1.WifiComponent, add_wo_component_1.AddWOComponent,
            optics_component_1.OpticsComponent, privilege_component_1.PrivilegeComponent,
            profile_component_1.ProfileComponent, profile_component_1.NewUserComponent
        ],
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MaterialModule,
            material_1.MdNativeDateModule,
            animations_1.NoopAnimationsModule
        ],
        providers: [],
        entryComponents: [
            app_component_1.AppComponent, header_component_1.HeaderComponent,
            atc_component_1.AtcComponent, atc_list_component_1.AtcListComponent,
            vlan_component_1.VlanComponent, add_component_1.AddComponent,
            main_component_1.MainComponent, report_component_1.ReportComponent,
            result_search_component_1.ResultSearchComponent, ip_vlan_component_1.VlansIpComponent,
            wifi_component_1.WifiComponent, add_wo_component_1.AddWOComponent,
            optics_component_1.OpticsComponent, privilege_component_1.PrivilegeComponent,
            profile_component_1.ProfileComponent, profile_component_1.NewUserComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOERBQTBEO0FBQzFELHNDQUE4QztBQUM5Qyx3Q0FBK0M7QUFDL0Msc0NBQThDO0FBQzlDLDJEQUEyRDtBQUUzRCxpREFBbUQ7QUFDbkQsa0VBQWlFO0FBQ2pFLDREQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUsOERBQStEO0FBQy9ELDREQUE4RDtBQUM5RCw4REFBK0Q7QUFDL0Qsa0VBQWlFO0FBQ2pFLGdGQUE4RTtBQUM5RSxvRUFBa0U7QUFDbEUsOERBQStEO0FBQy9ELGtFQUFpRTtBQUNqRSxrRUFBaUU7QUFFakUsOENBQW9FO0FBQ3BFLG1FQUEwRTtBQUMxRSx3RUFBb0U7QUFDcEUsb0VBQWtGO0FBbUNsRixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUFqQ3JCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZLEVBQUcsa0NBQWU7WUFDOUIsNEJBQVksRUFBRyxxQ0FBZ0I7WUFDL0IsOEJBQWEsRUFBRSw0QkFBWTtZQUMzQiw4QkFBYSxFQUFFLGtDQUFlO1lBQzlCLCtDQUFxQixFQUFFLG9DQUFnQjtZQUN2Qyw4QkFBYSxFQUFFLGlDQUFjO1lBQzdCLGtDQUFlLEVBQUUsd0NBQWtCO1lBQ25DLG9DQUFnQixFQUFFLG9DQUFnQjtTQUNuQztRQUNELE9BQU8sRUFBRTtZQUNQLHdCQUFTLENBQUMsT0FBTyxFQUFFO1lBQ25CLGdDQUFhO1lBQ2IsbUJBQVc7WUFDWCxpQkFBVTtZQUNWLHlCQUFjO1lBQ2QsNkJBQWtCO1lBQ2xCLGlDQUFvQjtTQUNyQjtRQUNELFNBQVMsRUFBRSxFQUFFO1FBQ2IsZUFBZSxFQUFFO1lBQ2YsNEJBQVksRUFBRyxrQ0FBZTtZQUM5Qiw0QkFBWSxFQUFHLHFDQUFnQjtZQUMvQiw4QkFBYSxFQUFFLDRCQUFZO1lBQzNCLDhCQUFhLEVBQUUsa0NBQWU7WUFDOUIsK0NBQXFCLEVBQUUsb0NBQWdCO1lBQ3ZDLDhCQUFhLEVBQUUsaUNBQWM7WUFDN0Isa0NBQWUsRUFBRSx3Q0FBa0I7WUFDbkMsb0NBQWdCLEVBQUUsb0NBQWdCO1NBQ25DO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSAgICAgZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9ICBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF0Y0NvbXBvbmVudCB9ICAgICBmcm9tICcuL2NvbXBvbmVudHMvYXRjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdGNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F0Yy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWbGFuQ29tcG9uZW50IH0gICAgZnJvbSBcIi4vY29tcG9uZW50cy92bGFuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9ICAgIGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcG9ydENvbXBvbmVudCB9ICBmcm9tIFwiLi9jb21wb25lbnRzL3JlcG9ydC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdFNlYXJjaENvbXBvbmVudCB9ICBmcm9tIFwiLi9jb21wb25lbnRzL3Jlc3VsdC5zZWFyY2guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBWbGFuc0lwQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pcC52bGFuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgV2lmaUNvbXBvbmVudCB9ICAgIGZyb20gXCIuL2NvbXBvbmVudHMvd2lmaS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZFdPQ29tcG9uZW50IH0gICBmcm9tIFwiLi9jb21wb25lbnRzL2FkZC53by5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9wdGljc0NvbXBvbmVudH0gICBmcm9tIFwiLi9jb21wb25lbnRzL29wdGljcy5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtNYXRlcmlhbE1vZHVsZSwgTWROYXRpdmVEYXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCdcbmltcG9ydCB7Tm9vcEFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1ByaXZpbGVnZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcml2aWxlZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge05ld1VzZXJDb21wb25lbnQsIFByb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LCAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEF0Y0NvbXBvbmVudCwgIEF0Y0xpc3RDb21wb25lbnQsXG4gICAgVmxhbkNvbXBvbmVudCwgQWRkQ29tcG9uZW50LFxuICAgIE1haW5Db21wb25lbnQsIFJlcG9ydENvbXBvbmVudCxcbiAgICBSZXN1bHRTZWFyY2hDb21wb25lbnQsIFZsYW5zSXBDb21wb25lbnQsXG4gICAgV2lmaUNvbXBvbmVudCwgQWRkV09Db21wb25lbnQsXG4gICAgT3B0aWNzQ29tcG9uZW50LCBQcml2aWxlZ2VDb21wb25lbnQsXG4gICAgUHJvZmlsZUNvbXBvbmVudCwgTmV3VXNlckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgTWROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE5vb3BBbmltYXRpb25zTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFwcENvbXBvbmVudCwgIEhlYWRlckNvbXBvbmVudCxcbiAgICBBdGNDb21wb25lbnQsICBBdGNMaXN0Q29tcG9uZW50LFxuICAgIFZsYW5Db21wb25lbnQsIEFkZENvbXBvbmVudCxcbiAgICBNYWluQ29tcG9uZW50LCBSZXBvcnRDb21wb25lbnQsXG4gICAgUmVzdWx0U2VhcmNoQ29tcG9uZW50LCBWbGFuc0lwQ29tcG9uZW50LFxuICAgIFdpZmlDb21wb25lbnQsIEFkZFdPQ29tcG9uZW50LFxuICAgIE9wdGljc0NvbXBvbmVudCwgUHJpdmlsZWdlQ29tcG9uZW50LFxuICAgIFByb2ZpbGVDb21wb25lbnQsIE5ld1VzZXJDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
