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
var core_1 = require("@angular/core");
var header_component_1 = require("./components/header.component");
var header_service_1 = require("./shared/header.service");
var AppComponent = (function () {
    function AppComponent(headerService, componentFactoryResolver) {
        this.headerService = headerService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getUserInfo()
            .subscribe(function (data) {
            var childComponent = _this.componentFactoryResolver.resolveComponentFactory(header_component_1.HeaderComponent);
            var cmpRef = _this.parent.createComponent(childComponent);
            cmpRef.instance.user = _this.headerService.getUserPrivileges(data, 0);
        });
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('parent', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], AppComponent.prototype, "parent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<div #parent></div>',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        core_1.ComponentFactoryResolver])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0c7QUFDaEcsa0VBQWlFO0FBQ2pFLDBEQUEyRDtBQVMzRCxJQUFhLFlBQVk7SUFNdkIsc0JBQXFCLGFBQTRCLEVBQzVCLHdCQUFrRDtRQURsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3BFLENBQUM7SUFFSiwrQkFBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsSUFBTSxjQUFjLEdBQUcsS0FBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGtDQUFlLENBQUMsQ0FBQztZQUM5RixJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUUxRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxtQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFoQkM7SUFEQyxnQkFBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSx1QkFBZ0IsRUFBQyxDQUFDOzhCQUN0Qyx1QkFBZ0I7NENBQUM7QUFIZCxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FRb0MsOEJBQWE7UUFDRiwrQkFBd0I7R0FQNUQsWUFBWSxDQW1CeEI7QUFuQlksb0NBQVkiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9ICAgIGZyb20gXCIuL3NoYXJlZC9oZWFkZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUHJpdmlsZWdlIH0gICAgICAgIGZyb20gJy4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICB0ZW1wbGF0ZTogJzxkaXYgI3BhcmVudD48L2Rpdj4nLFxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICBAVmlld0NoaWxkKCdwYXJlbnQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gIHBhcmVudDogVmlld0NvbnRhaW5lclJlZjtcblxuICB1c2VyOiBQcml2aWxlZ2U7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UsXG4gICAgICAgICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkge31cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRVc2VySW5mbygpXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEhlYWRlckNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjbXBSZWYgPSB0aGlzLnBhcmVudC5jcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQpO1xuICAgICAgICAgICAgY21wUmVmLmluc3RhbmNlLnVzZXIgPSB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0VXNlclByaXZpbGVnZXMoZGF0YSwwKTtcblxuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==
