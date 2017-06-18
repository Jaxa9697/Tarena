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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQThDO0FBQzlDLHdDQUErQztBQUMvQyxzQ0FBOEM7QUFDOUMsMkRBQTJEO0FBRTNELGlEQUFtRDtBQUNuRCxrRUFBaUU7QUFDakUsNERBQThEO0FBQzlELHNFQUFtRTtBQUNuRSw4REFBK0Q7QUFDL0QsNERBQThEO0FBQzlELDhEQUErRDtBQUMvRCxrRUFBaUU7QUFDakUsZ0ZBQThFO0FBQzlFLG9FQUFrRTtBQUNsRSw4REFBK0Q7QUFDL0Qsa0VBQWlFO0FBQ2pFLGtFQUFpRTtBQUVqRSw4Q0FBb0U7QUFDcEUsbUVBQTBFO0FBQzFFLHdFQUFvRTtBQUNwRSxvRUFBa0Y7QUFtQ2xGLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQWpDckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osNEJBQVksRUFBRyxrQ0FBZTtZQUM5Qiw0QkFBWSxFQUFHLHFDQUFnQjtZQUMvQiw4QkFBYSxFQUFFLDRCQUFZO1lBQzNCLDhCQUFhLEVBQUUsa0NBQWU7WUFDOUIsK0NBQXFCLEVBQUUsb0NBQWdCO1lBQ3ZDLDhCQUFhLEVBQUssaUNBQWM7WUFDaEMsa0NBQWUsRUFBRyx3Q0FBa0I7WUFDcEMsb0NBQWdCLEVBQUUsb0NBQWdCO1NBQ25DO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0JBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDbkIsZ0NBQWE7WUFDYixtQkFBVztZQUNYLGlCQUFVO1lBQ1YseUJBQWM7WUFDZCw2QkFBa0I7WUFDbEIsaUNBQW9CO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixlQUFlLEVBQUU7WUFDZiw0QkFBWSxFQUFHLGtDQUFlO1lBQzlCLDRCQUFZLEVBQUcscUNBQWdCO1lBQy9CLDhCQUFhLEVBQUUsNEJBQVk7WUFDM0IsOEJBQWEsRUFBRSxrQ0FBZTtZQUM5QiwrQ0FBcUIsRUFBRSxvQ0FBZ0I7WUFDdkMsOEJBQWEsRUFBSyxpQ0FBYztZQUNoQyxrQ0FBZSxFQUFHLHdDQUFrQjtZQUNwQyxvQ0FBZ0IsRUFBRSxvQ0FBZ0I7U0FDbkM7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9ICAgICBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXRjQ29tcG9uZW50IH0gICAgIGZyb20gJy4vY29tcG9uZW50cy9hdGMuY29tcG9uZW50JztcbmltcG9ydCB7IEF0Y0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXRjLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFZsYW5Db21wb25lbnQgfSAgICBmcm9tIFwiLi9jb21wb25lbnRzL3ZsYW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gICAgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVwb3J0Q29tcG9uZW50IH0gIGZyb20gXCIuL2NvbXBvbmVudHMvcmVwb3J0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0U2VhcmNoQ29tcG9uZW50IH0gIGZyb20gXCIuL2NvbXBvbmVudHMvcmVzdWx0LnNlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFZsYW5zSXBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lwLnZsYW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXaWZpQ29tcG9uZW50IH0gICAgZnJvbSBcIi4vY29tcG9uZW50cy93aWZpLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkV09Db21wb25lbnQgfSAgIGZyb20gXCIuL2NvbXBvbmVudHMvYWRkLndvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3B0aWNzQ29tcG9uZW50fSAgIGZyb20gXCIuL2NvbXBvbmVudHMvb3B0aWNzLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge01hdGVyaWFsTW9kdWxlLCBNZE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJ1xuaW1wb3J0IHtOb29wQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7UHJpdmlsZWdlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3ByaXZpbGVnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TmV3VXNlckNvbXBvbmVudCwgUHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsICBIZWFkZXJDb21wb25lbnQsXG4gICAgQXRjQ29tcG9uZW50LCAgQXRjTGlzdENvbXBvbmVudCxcbiAgICBWbGFuQ29tcG9uZW50LCBBZGRDb21wb25lbnQsXG4gICAgTWFpbkNvbXBvbmVudCwgUmVwb3J0Q29tcG9uZW50LFxuICAgIFJlc3VsdFNlYXJjaENvbXBvbmVudCwgVmxhbnNJcENvbXBvbmVudCxcbiAgICBXaWZpQ29tcG9uZW50LCAgICBBZGRXT0NvbXBvbmVudCxcbiAgICBPcHRpY3NDb21wb25lbnQsICBQcml2aWxlZ2VDb21wb25lbnQsXG4gICAgUHJvZmlsZUNvbXBvbmVudCwgTmV3VXNlckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgTWROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE5vb3BBbmltYXRpb25zTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFwcENvbXBvbmVudCwgIEhlYWRlckNvbXBvbmVudCxcbiAgICBBdGNDb21wb25lbnQsICBBdGNMaXN0Q29tcG9uZW50LFxuICAgIFZsYW5Db21wb25lbnQsIEFkZENvbXBvbmVudCxcbiAgICBNYWluQ29tcG9uZW50LCBSZXBvcnRDb21wb25lbnQsXG4gICAgUmVzdWx0U2VhcmNoQ29tcG9uZW50LCBWbGFuc0lwQ29tcG9uZW50LFxuICAgIFdpZmlDb21wb25lbnQsICAgIEFkZFdPQ29tcG9uZW50LFxuICAgIE9wdGljc0NvbXBvbmVudCwgIFByaXZpbGVnZUNvbXBvbmVudCxcbiAgICBQcm9maWxlQ29tcG9uZW50LCBOZXdVc2VyQ29tcG9uZW50XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
