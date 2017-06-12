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
 * Created by Jahongir on 29-Apr-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var result_search_component_1 = require("./result.search.component");
var components_model_1 = require("../shared/components.model");
var MainComponent = (function () {
    function MainComponent(headerService, modalService) {
        this.headerService = headerService;
        this.modalService = modalService;
        this.cmpName = "Главная";
        this.results = [];
        this.unsolvedProblems = true;
        this.problems = [];
        this.primary = 'primary';
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getUnsolvedProblems();
    };
    MainComponent.prototype.searchEv = function () {
        var _this = this;
        var input = this.search;
        if (input !== "") {
            this.headerService.searchData(input)
                .subscribe(function (data) {
                _this.results = [];
                for (var i = 0; i < data.length; i++) {
                    _this.results.push({
                        id: data[i].ID,
                        name: data[i].name_cl,
                        tel: data[i].telephone,
                        ip: data[i].ipAddress,
                        status: data[i].status
                    });
                }
            });
            this.getRS(input);
        }
        else {
            this.results = [];
        }
    };
    MainComponent.prototype.getRS = function (input) {
        var _this = this;
        if (this.results.length > 1) {
            for (var i = 0; i < this.results.length; i++) {
                var val = this.results[i].name + ' ' + this.results[i].tel + ' ' + this.results[i].ip;
                if (val == input) {
                    this.headerService.getResultSearch(this.results[i].id)
                        .subscribe(function (data) {
                        var CmpRef = _this.modalService.open(result_search_component_1.ResultSearchComponent);
                        CmpRef.componentInstance.result = data;
                        _this.search = "";
                    });
                }
            }
        }
    };
    MainComponent.prototype.solvedChanging = function (id, checked) {
        var index = this.problems.findIndex(function (x) { return x.id == id; });
        var currentProblem = this.problems[index];
        currentProblem.changed = (currentProblem.status !== checked);
    };
    MainComponent.prototype.saveNewProblem = function () {
        var _this = this;
        this.headerService.saveNewProblem({ problem: this.problem })
            .subscribe(function (data) {
            if (data.message == "ok") {
                alert("Проблема успешно создано");
                _this.getUnsolvedProblems();
                _this.problem = "";
            }
        });
    };
    MainComponent.prototype.getUnsolvedProblems = function () {
        var _this = this;
        this.headerService.getProblemContent()
            .subscribe(function (problems) {
            _this.problems = problems.filter(function (el) { return !el.status; });
            _this.unsolvedProblems = (_this.problems.length > 0);
        });
    };
    MainComponent.prototype.saveSolvedProblem = function (id, checked) {
        var _this = this;
        this.headerService.solvingProblem({ id: id, solved: checked })
            .subscribe(function () {
            _this.getUnsolvedProblems();
        });
    };
    return MainComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], MainComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], MainComponent.prototype, "cmpName", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'main-app',
        templateUrl: '/js/app/components/views/main.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbModal])
], MainComponent);
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBdUQ7QUFDdkQsMkRBQXlEO0FBQ3pELDJEQUFzRDtBQUN0RCxxRUFBa0U7QUFDbEUsK0RBQWdFO0FBU2hFLElBQWEsYUFBYTtJQVV4Qix1QkFBb0IsYUFBNEIsRUFDNUIsWUFBc0I7UUFEdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQVU7UUFUaEMsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUV0QyxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBVyxTQUFTLENBQUM7SUFJMUIsQ0FBQztJQUVILGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBS0QsZ0NBQVEsR0FBUjtRQUFBLGlCQW9CQztRQW5CQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDakMsU0FBUyxDQUFDLFVBQUMsSUFBSTtnQkFDZCxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUNoQixFQUFFLEVBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFD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QyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7YUFDbkMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUcsT0FBQSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQVYsQ0FBVSxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLEVBQVUsRUFBRSxPQUFnQjtRQUE5QyxpQkFLQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDekQsU0FBUyxDQUFDO1lBQ1QsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQTdGQSxBQTZGQyxJQUFBO0FBNUZVO0lBQVIsWUFBSyxFQUFFOzhCQUFPLDRCQUFTOzJDQUFDO0FBQ2Y7SUFBVCxhQUFNLEVBQUU7OzhDQUE2QjtBQUYzQixhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsOENBQThDO1FBQzNELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FZbUMsOEJBQWE7UUFDZCx1QkFBUTtHQVgvQixhQUFhLENBNkZ6QjtBQTdGWSxzQ0FBYSIsImZpbGUiOiJjb21wb25lbnRzL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMjktQXByLTE3LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgUmVzdWx0U2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdWx0LnNlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJpdmlsZWdlLCBQcm9ibGVtIH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYWluLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvanMvYXBwL2NvbXBvbmVudHMvdmlld3MvbWFpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnR7XHJcbiAgQElucHV0KCkgdXNlcjogUHJpdmlsZWdlO1xyXG4gIEBPdXRwdXQoKSBjbXBOYW1lOiBzdHJpbmcgPSBcItCT0LvQsNCy0L3QsNGPXCI7XHJcblxyXG4gIHJlc3VsdHM6IGFueVtdID0gW107XHJcbiAgdW5zb2x2ZWRQcm9ibGVtczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByb2JsZW1zOiBQcm9ibGVtW10gPSBbXTtcclxuICBwcmltYXJ5OiBzdHJpbmcgPSAncHJpbWFyeSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcclxuICApe31cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuZ2V0VW5zb2x2ZWRQcm9ibGVtcygpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoOiBzdHJpbmc7XHJcbiAgcHJvYmxlbTogc3RyaW5nO1xyXG5cclxuICBzZWFyY2hFdigpe1xyXG4gICAgbGV0IGlucHV0ID0gdGhpcy5zZWFyY2g7XHJcbiAgICBpZiAoaW5wdXQgIT09IFwiXCIpe1xyXG4gICAgICB0aGlzLmhlYWRlclNlcnZpY2Uuc2VhcmNoRGF0YShpbnB1dClcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiAgICAgZGF0YVtpXS5JRCxcclxuICAgICAgICAgICAgICBuYW1lOiAgIGRhdGFbaV0ubmFtZV9jbCxcclxuICAgICAgICAgICAgICB0ZWw6ICAgIGRhdGFbaV0udGVsZXBob25lLFxyXG4gICAgICAgICAgICAgIGlwOiAgICAgZGF0YVtpXS5pcEFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhW2ldLnN0YXR1c1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5nZXRSUyhpbnB1dCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5yZXN1bHRzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSUyhpbnB1dDogc3RyaW5nKXtcclxuICAgIGlmICh0aGlzLnJlc3VsdHMubGVuZ3RoID4gMSl7XHJcblxyXG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLnJlc3VsdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLnJlc3VsdHNbaV0ubmFtZSArICcgJyArIHRoaXMucmVzdWx0c1tpXS50ZWwgKyAnICcgKyB0aGlzLnJlc3VsdHNbaV0uaXA7XHJcbiAgICAgICAgaWYgKHZhbCA9PSBpbnB1dCl7XHJcbiAgICAgICAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0UmVzdWx0U2VhcmNoKHRoaXMucmVzdWx0c1tpXS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICAgICAgICBsZXQgQ21wUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihSZXN1bHRTZWFyY2hDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UucmVzdWx0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvbHZlZENoYW5naW5nKGlkOiBudW1iZXIsIGNoZWNrZWQ6IGJvb2xlYW4pe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5wcm9ibGVtcy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgIGxldCBjdXJyZW50UHJvYmxlbSA9IHRoaXMucHJvYmxlbXNbaW5kZXhdO1xyXG5cclxuICAgIGN1cnJlbnRQcm9ibGVtLmNoYW5nZWQgPSAoY3VycmVudFByb2JsZW0uc3RhdHVzICE9PSBjaGVja2VkKTtcclxuICB9XHJcblxyXG4gIHNhdmVOZXdQcm9ibGVtKCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2Uuc2F2ZU5ld1Byb2JsZW0oe3Byb2JsZW06IHRoaXMucHJvYmxlbX0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwib2tcIil7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi0J/RgNC+0LHQu9C10LzQsCDRg9GB0L/QtdGI0L3QviDRgdC+0LfQtNCw0L3QvlwiKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRVbnNvbHZlZFByb2JsZW1zKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbSA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VW5zb2x2ZWRQcm9ibGVtcygpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFByb2JsZW1Db250ZW50KClcclxuICAgICAgLnN1YnNjcmliZSgocHJvYmxlbXMpPT57XHJcbiAgICAgICAgdGhpcy5wcm9ibGVtcyA9IHByb2JsZW1zLmZpbHRlcihlbD0+ICFlbC5zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMudW5zb2x2ZWRQcm9ibGVtcyA9ICh0aGlzLnByb2JsZW1zLmxlbmd0aCA+IDApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmVTb2x2ZWRQcm9ibGVtKGlkOiBudW1iZXIsIGNoZWNrZWQ6IGJvb2xlYW4pe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLnNvbHZpbmdQcm9ibGVtKHtpZDogaWQsIHNvbHZlZDogY2hlY2tlZH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKCk9PntcclxuICAgICAgICB0aGlzLmdldFVuc29sdmVkUHJvYmxlbXMoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
