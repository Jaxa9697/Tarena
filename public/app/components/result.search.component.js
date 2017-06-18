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
 * Created by Jahongir on 22-May-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ResultSearchComponent = (function () {
    function ResultSearchComponent(headerService, activeModal) {
        this.headerService = headerService;
        this.activeModal = activeModal;
    }
    ResultSearchComponent.prototype.saveReport = function (problem) {
        var data = { problem: problem, id: this.result.ID };
        this.headerService.saveReport(data)
            .subscribe(function (data) {
            if (data.message == "ok") {
                alert("Отчет успешно сохранен");
            }
        });
    };
    return ResultSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ResultSearchComponent.prototype, "result", void 0);
ResultSearchComponent = __decorate([
    core_1.Component({
        selector: 'result-app',
        templateUrl: '/app/components/views/result.search.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbActiveModal])
], ResultSearchComponent);
exports.ResultSearchComponent = ResultSearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvcmVzdWx0LnNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFpRDtBQUNqRCwyREFBeUQ7QUFDekQsMkRBQTREO0FBUTVELElBQWEscUJBQXFCO0lBR2hDLCtCQUFxQixhQUE0QixFQUM1QixXQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFDaEQsQ0FBQztJQUVILDBDQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2hCLElBQUksSUFBSSxHQUFHLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWhCVTtJQUFSLFlBQUssRUFBRTs7cURBQVE7QUFETCxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxvREFBb0Q7UUFDakUsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQUtvQyw4QkFBYTtRQUNiLDZCQUFjO0dBSnZDLHFCQUFxQixDQWlCakM7QUFqQlksc0RBQXFCIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVzdWx0LnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyMi1NYXktMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyZXN1bHQtYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy92aWV3cy9yZXN1bHQuc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0U2VhcmNoQ29tcG9uZW50e1xyXG4gIEBJbnB1dCgpIHJlc3VsdDtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSxcclxuICAgICAgICAgICAgICAgcHVibGljICBhY3RpdmVNb2RhbDogICBOZ2JBY3RpdmVNb2RhbFxyXG4gICl7fVxyXG5cclxuICBzYXZlUmVwb3J0KHByb2JsZW0pe1xyXG4gICAgbGV0IGRhdGEgPSB7cHJvYmxlbTogcHJvYmxlbSwgaWQ6IHRoaXMucmVzdWx0LklEfTtcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2Uuc2F2ZVJlcG9ydChkYXRhKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIGFsZXJ0KFwi0J7RgtGH0LXRgiDRg9GB0L/QtdGI0L3QviDRgdC+0YXRgNCw0L3QtdC9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
