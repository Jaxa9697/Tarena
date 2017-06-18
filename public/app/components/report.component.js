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
 * Created by Jahongir on 18-May-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var components_model_1 = require("../shared/components.model");
var ReportComponent = (function () {
    function ReportComponent(headerService) {
        this.headerService = headerService;
        this.cmpName = "Отчеты";
        this.page = 1;
        //Filter
        this.users = [];
        this.filter = new components_model_1.Filter();
        // Tab 1
        this.reports = [];
        // Tab 2
        this.signs = [];
        this.sign = new components_model_1.Sign();
        // Tab 3
        this.problems = [];
        this.problem = new components_model_1.Problem();
        //color
        this.primary = 'primary';
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getReportContent()
            .subscribe(function (data) {
            for (var i = 0; i < data.users.length; i++) {
                _this.users.push({
                    name: data.users[i].username,
                    id: data.users[i].ID
                });
            }
            _this.reports = _this.getReports(data.reports);
        });
    };
    ReportComponent.prototype.getReports = function (data) {
        var reports = [];
        for (var i = 0; i < data.length; i++) {
            var date = new Date(data[i].date);
            var report = new components_model_1.Report((i + 1), this.headerService.getDate(date), data[i].username + " " + data[i].status, data[i].name_cl, data[i].telephone, data[i].problem);
            reports.push(report);
        }
        return reports;
    };
    ReportComponent.prototype.getProblems = function (data) {
        var _this = this;
        var problems = [];
        data.forEach(function (el, i) {
            var createDate = _this.headerService.getDate(new Date(el.createDate));
            var solveDate = _this.headerService.getDate(new Date(el.solveDate));
            if (!el.solveDate) {
                solveDate = '';
            }
            var problem = new components_model_1.Problem(el.ID, (i + 1), createDate, solveDate, el.username, el.problem, !!el.solveDate, false);
            problems.push(problem);
        });
        return problems;
    };
    ReportComponent.prototype.getSigns = function (data) {
        var _this = this;
        var signs = [];
        data.forEach(function (el, i) {
            var entryDate = _this.headerService.getDate(new Date(el.dateEntry));
            var exitDate = _this.headerService.getDate(new Date(el.dateExit));
            if (!el.dateExit) {
                exitDate = '';
            }
            var sign = new components_model_1.Sign((i + 1), entryDate, exitDate, el.username);
            signs.push(sign);
        });
        return signs;
    };
    ReportComponent.prototype.beforeChange = function ($event) {
        var _this = this;
        if ($event.nextId === '3') {
            this.headerService.getProblemContent()
                .subscribe(function (problems) {
                _this.problems = problems;
            });
        }
        else if ($event.nextId === '2') {
            this.headerService.getSignContent()
                .subscribe(function (signs) {
                _this.signs = _this.getSigns(signs);
            });
        }
    };
    ;
    ReportComponent.prototype.solvedChanging = function (id, checked) {
        var index = this.problems.findIndex(function (x) { return x.id == id; });
        var currentProblem = this.problems[index];
        currentProblem.changed = (currentProblem.status !== checked);
    };
    ReportComponent.prototype.saveSolvedProblem = function (id, checked) {
        var _this = this;
        this.headerService.solvingProblem({ id: id, solved: checked })
            .subscribe(function (data) {
            var index = _this.problems.findIndex(function (x) { return x.id == id; });
            var currentProblem = _this.problems[index];
            if (!data.solveDate) {
                currentProblem.dateSolve = '';
            }
            else {
                currentProblem.dateSolve = data.solveDate;
            }
            currentProblem.changed = false;
            currentProblem.status = checked;
        });
    };
    ReportComponent.prototype.filterRows = function (filter, type) {
        var _this = this;
        filter.type = type;
        this.headerService.filterReportRows(filter)
            .subscribe(function (data) {
            if (type == 'report') {
                _this.reports = _this.getReports(data);
            }
            else if (type == 'sign') {
                _this.signs = _this.getSigns(data);
            }
            else if (type == 'problem') {
                _this.problems = _this.getProblems(data);
            }
        });
    };
    return ReportComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], ReportComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReportComponent.prototype, "cmpName", void 0);
ReportComponent = __decorate([
    core_1.Component({
        selector: 'report-app',
        templateUrl: '/app/components/views/report.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService])
], ReportComponent);
exports.ReportComponent = ReportComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvcmVwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQXVEO0FBRXZELDJEQUF5RDtBQUN6RCwrREFBOEY7QUFTOUYsSUFBYSxlQUFlO0lBa0IxQix5QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFoQnRDLFlBQU8sR0FBUSxRQUFRLENBQUM7UUFDbEMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixRQUFRO1FBQ1IsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVcsSUFBSSx5QkFBTSxFQUFFLENBQUM7UUFDOUIsUUFBUTtRQUNSLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsUUFBUTtRQUNSLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFVLElBQUksdUJBQUksRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBYSxJQUFJLDBCQUFPLEVBQUUsQ0FBQztRQUNsQyxPQUFPO1FBQ1AsWUFBTyxHQUFXLFNBQVMsQ0FBQztJQUV1QixDQUFDO0lBRXBELGtDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7YUFDbEMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUVkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtvQkFDNUIsRUFBRSxFQUFJLElBQUksQ0FBQyxL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QUFDLElBQUk7WUFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBRyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0F2SUEsQUF1SUMsSUFBQTtBQXRJVTtJQUFSLFlBQUssRUFBRTs4QkFBTyw0QkFBUzs2Q0FBQztBQUNmO0lBQVQsYUFBTSxFQUFFOztnREFBeUI7QUFGdkIsZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBb0JtQyw4QkFBYTtHQWxCckMsZUFBZSxDQXVJM0I7QUF2SVksMENBQWUiLCJmaWxlIjoiY29tcG9uZW50cy9yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMTgtTWF5LTE3LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7RmlsdGVyLCBQcml2aWxlZ2UsIFByb2JsZW0sIFJlcG9ydCwgU2lnbn0gICAgICAgICAgIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQge05nYlRhYkNoYW5nZUV2ZW50fSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmVwb3J0LWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvdmlld3MvcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50e1xyXG4gIEBJbnB1dCgpIHVzZXI6IFByaXZpbGVnZTtcclxuICBAT3V0cHV0KCkgY21wTmFtZTogYW55ID0gXCLQntGC0YfQtdGC0YtcIjtcclxuICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gIC8vRmlsdGVyXHJcbiAgdXNlcnM6ICBhbnlbXSA9IFtdO1xyXG4gIGZpbHRlcjogRmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG4gIC8vIFRhYiAxXHJcbiAgcmVwb3J0czogUmVwb3J0W10gPSBbXTtcclxuICAvLyBUYWIgMlxyXG4gIHNpZ25zOiBTaWduW10gPSBbXTtcclxuICBzaWduOiAgU2lnbiA9IG5ldyBTaWduKCk7XHJcbiAgLy8gVGFiIDNcclxuICBwcm9ibGVtczogUHJvYmxlbVtdID0gW107XHJcbiAgcHJvYmxlbTogIFByb2JsZW0gPSBuZXcgUHJvYmxlbSgpO1xyXG4gIC8vY29sb3JcclxuICBwcmltYXJ5OiBzdHJpbmcgPSAncHJpbWFyeSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRSZXBvcnRDb250ZW50KClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICB0aGlzLnVzZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnVzZXJzW2ldLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBpZDogICBkYXRhLnVzZXJzW2ldLklEXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzID0gdGhpcy5nZXRSZXBvcnRzKGRhdGEucmVwb3J0cyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVwb3J0cyhkYXRhKXtcclxuICAgIGxldCByZXBvcnRzOiBSZXBvcnRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGRhdGFbaV0uZGF0ZSk7XHJcbiAgICAgIGxldCByZXBvcnQgPSBuZXcgUmVwb3J0KChpKzEpLCB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0RGF0ZShkYXRlKSwgZGF0YVtpXS51c2VybmFtZSAgKyBcIiBcIisgZGF0YVtpXS5zdGF0dXMsXHJcbiAgICAgICAgZGF0YVtpXS5uYW1lX2NsLCBkYXRhW2ldLnRlbGVwaG9uZSwgZGF0YVtpXS5wcm9ibGVtKTtcclxuICAgICAgcmVwb3J0cy5wdXNoKHJlcG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcG9ydHM7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9ibGVtcyhkYXRhKXtcclxuICAgIGxldCBwcm9ibGVtczogUHJvYmxlbVtdID0gW107XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKChlbCwgaSk9PntcclxuICAgICAgbGV0IGNyZWF0ZURhdGUgPSB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0RGF0ZShuZXcgRGF0ZShlbC5jcmVhdGVEYXRlKSk7XHJcbiAgICAgIGxldCBzb2x2ZURhdGUgPSB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0RGF0ZShuZXcgRGF0ZShlbC5zb2x2ZURhdGUpKTtcclxuXHJcbiAgICAgIGlmKCFlbC5zb2x2ZURhdGUpeyBzb2x2ZURhdGUgPSAnJzsgfVxyXG5cclxuICAgICAgbGV0IHByb2JsZW0gPSBuZXcgUHJvYmxlbShlbC5JRCwgKGkrMSksIGNyZWF0ZURhdGUsXHJcbiAgICAgICAgc29sdmVEYXRlLCBlbC51c2VybmFtZSwgZWwucHJvYmxlbSwgISFlbC5zb2x2ZURhdGUsIGZhbHNlICk7XHJcblxyXG4gICAgICBwcm9ibGVtcy5wdXNoKHByb2JsZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2JsZW1zO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnbnMoZGF0YSl7XHJcbiAgICBsZXQgc2lnbnM6IFNpZ25bXSA9IFtdO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaCgoZWwsIGkpPT57XHJcbiAgICAgIGxldCBlbnRyeURhdGUgPSB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0RGF0ZShuZXcgRGF0ZShlbC5kYXRlRW50cnkpKTtcclxuICAgICAgbGV0IGV4aXREYXRlICA9IHRoaXMuaGVhZGVyU2VydmljZS5nZXREYXRlKG5ldyBEYXRlKGVsLmRhdGVFeGl0KSk7XHJcblxyXG4gICAgICBpZighZWwuZGF0ZUV4aXQpeyBleGl0RGF0ZSA9ICcnOyB9XHJcblxyXG4gICAgICBsZXQgc2lnbiA9IG5ldyBTaWduKChpKzEpLCBlbnRyeURhdGUsIGV4aXREYXRlLCBlbC51c2VybmFtZSk7XHJcbiAgICAgIHNpZ25zLnB1c2goc2lnbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2lnbnM7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVDaGFuZ2UoJGV2ZW50OiBOZ2JUYWJDaGFuZ2VFdmVudCkge1xyXG4gICAgaWYgKCRldmVudC5uZXh0SWQgPT09ICczJykge1xyXG5cclxuICAgICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFByb2JsZW1Db250ZW50KClcclxuICAgICAgICAuc3Vic2NyaWJlKChwcm9ibGVtcyk9PntcclxuICAgICAgICAgIHRoaXMucHJvYmxlbXMgPSBwcm9ibGVtcztcclxuICAgICAgICB9KTtcclxuICAgIH1lbHNlIGlmKCRldmVudC5uZXh0SWQgPT09ICcyJyl7XHJcblxyXG4gICAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0U2lnbkNvbnRlbnQoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHNpZ25zKT0+e1xyXG4gICAgICAgICAgdGhpcy5zaWducyA9IHRoaXMuZ2V0U2lnbnMoc2lnbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNvbHZlZENoYW5naW5nKGlkOiBudW1iZXIsIGNoZWNrZWQ6IGJvb2xlYW4pe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5wcm9ibGVtcy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgIGxldCBjdXJyZW50UHJvYmxlbSA9IHRoaXMucHJvYmxlbXNbaW5kZXhdO1xyXG5cclxuICAgIGN1cnJlbnRQcm9ibGVtLmNoYW5nZWQgPSAoY3VycmVudFByb2JsZW0uc3RhdHVzICE9PSBjaGVja2VkKTtcclxuICB9XHJcblxyXG4gIHNhdmVTb2x2ZWRQcm9ibGVtKGlkOiBudW1iZXIsIGNoZWNrZWQ6IGJvb2xlYW4pe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLnNvbHZpbmdQcm9ibGVtKHtpZDogaWQsIHNvbHZlZDogY2hlY2tlZH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5wcm9ibGVtcy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgICAgICBsZXQgY3VycmVudFByb2JsZW0gPSB0aGlzLnByb2JsZW1zW2luZGV4XTtcclxuXHJcbiAgICAgICAgaWYoIWRhdGEuc29sdmVEYXRlKXtcclxuICAgICAgICAgIGN1cnJlbnRQcm9ibGVtLmRhdGVTb2x2ZSA9ICcnO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRQcm9ibGVtLmRhdGVTb2x2ZSA9IGRhdGEuc29sdmVEYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFByb2JsZW0uY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGN1cnJlbnRQcm9ibGVtLnN0YXR1cyA9IGNoZWNrZWQ7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyUm93cyhmaWx0ZXI6IEZpbHRlciwgdHlwZTogc3RyaW5nKXtcclxuICAgIGZpbHRlci50eXBlID0gdHlwZTtcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZmlsdGVyUmVwb3J0Um93cyhmaWx0ZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgaWYodHlwZSA9PSAncmVwb3J0Jyl7XHJcbiAgICAgICAgICB0aGlzLnJlcG9ydHMgPSB0aGlzLmdldFJlcG9ydHMoZGF0YSk7XHJcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnc2lnbicpe1xyXG4gICAgICAgICAgdGhpcy5zaWducyA9IHRoaXMuZ2V0U2lnbnMoZGF0YSk7XHJcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSdwcm9ibGVtJyl7XHJcbiAgICAgICAgICB0aGlzLnByb2JsZW1zID0gdGhpcy5nZXRQcm9ibGVtcyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuIl19
