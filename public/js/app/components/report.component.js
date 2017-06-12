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
        templateUrl: '/js/app/components/views/report.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService])
], ReportComponent);
exports.ReportComponent = ReportComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL3JlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUF1RDtBQUV2RCwyREFBeUQ7QUFDekQsK0RBQThGO0FBUzlGLElBQWEsZUFBZTtJQWtCMUIseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBaEJ0QyxZQUFPLEdBQVEsUUFBUSxDQUFDO1FBQ2xDLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsUUFBUTtRQUNSLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFXLElBQUkseUJBQU0sRUFBRSxDQUFDO1FBQzlCLFFBQVE7UUFDUixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFFBQVE7UUFDUixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBVSxJQUFJLHVCQUFJLEVBQUUsQ0FBQztRQUN6QixRQUFRO1FBQ1IsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWEsSUFBSSwwQkFBTyxFQUFFLENBQUM7UUFDbEMsT0FBTztRQUNQLFlBQU8sR0FBVyxTQUFTLENBQUM7SUFFdUIsQ0FBQztJQUVwRCxrQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO2FBQ2xDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFFZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7b0JBQzVCLEVBQUUsRUFBSSxJQUFJLENB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QUMsVUFBQyxJQUFJO1lBQ2QsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxzQkFBQztBQUFELENBdklBLEFBdUlDLElBQUE7QUF0SVU7SUFBUixZQUFLLEVBQUU7OEJBQU8sNEJBQVM7NkNBQUM7QUFDZjtJQUFULGFBQU0sRUFBRTs7Z0RBQXlCO0FBRnZCLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxnREFBZ0Q7UUFDN0QsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQW9CbUMsOEJBQWE7R0FsQnJDLGVBQWUsQ0F1STNCO0FBdklZLDBDQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDE4LU1heS0xNy5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ZpbHRlciwgUHJpdmlsZWdlLCBQcm9ibGVtLCBSZXBvcnQsIFNpZ259ICAgICAgICAgICBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHtOZ2JUYWJDaGFuZ2VFdmVudH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JlcG9ydC1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudHtcclxuICBASW5wdXQoKSB1c2VyOiBQcml2aWxlZ2U7XHJcbiAgQE91dHB1dCgpIGNtcE5hbWU6IGFueSA9IFwi0J7RgtGH0LXRgtGLXCI7XHJcbiAgcGFnZTogbnVtYmVyID0gMTtcclxuICAvL0ZpbHRlclxyXG4gIHVzZXJzOiAgYW55W10gPSBbXTtcclxuICBmaWx0ZXI6IEZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuICAvLyBUYWIgMVxyXG4gIHJlcG9ydHM6IFJlcG9ydFtdID0gW107XHJcbiAgLy8gVGFiIDJcclxuICBzaWduczogU2lnbltdID0gW107XHJcbiAgc2lnbjogIFNpZ24gPSBuZXcgU2lnbigpO1xyXG4gIC8vIFRhYiAzXHJcbiAgcHJvYmxlbXM6IFByb2JsZW1bXSA9IFtdO1xyXG4gIHByb2JsZW06ICBQcm9ibGVtID0gbmV3IFByb2JsZW0oKTtcclxuICAvL2NvbG9yXHJcbiAgcHJpbWFyeTogc3RyaW5nID0gJ3ByaW1hcnknO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0UmVwb3J0Q29udGVudCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgdGhpcy51c2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS51c2Vyc1tpXS51c2VybmFtZSxcclxuICAgICAgICAgICAgaWQ6ICAgZGF0YS51c2Vyc1tpXS5JRFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVwb3J0cyA9IHRoaXMuZ2V0UmVwb3J0cyhkYXRhLnJlcG9ydHMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFJlcG9ydHMoZGF0YSl7XHJcbiAgICBsZXQgcmVwb3J0czogUmVwb3J0W10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRhW2ldLmRhdGUpO1xyXG4gICAgICBsZXQgcmVwb3J0ID0gbmV3IFJlcG9ydCgoaSsxKSwgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldERhdGUoZGF0ZSksIGRhdGFbaV0udXNlcm5hbWUgICsgXCIgXCIrIGRhdGFbaV0uc3RhdHVzLFxyXG4gICAgICAgIGRhdGFbaV0ubmFtZV9jbCwgZGF0YVtpXS50ZWxlcGhvbmUsIGRhdGFbaV0ucHJvYmxlbSk7XHJcbiAgICAgIHJlcG9ydHMucHVzaChyZXBvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXBvcnRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvYmxlbXMoZGF0YSl7XHJcbiAgICBsZXQgcHJvYmxlbXM6IFByb2JsZW1bXSA9IFtdO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaCgoZWwsIGkpPT57XHJcbiAgICAgIGxldCBjcmVhdGVEYXRlID0gdGhpcy5oZWFkZXJTZXJ2aWNlLmdldERhdGUobmV3IERhdGUoZWwuY3JlYXRlRGF0ZSkpO1xyXG4gICAgICBsZXQgc29sdmVEYXRlID0gdGhpcy5oZWFkZXJTZXJ2aWNlLmdldERhdGUobmV3IERhdGUoZWwuc29sdmVEYXRlKSk7XHJcblxyXG4gICAgICBpZighZWwuc29sdmVEYXRlKXsgc29sdmVEYXRlID0gJyc7IH1cclxuXHJcbiAgICAgIGxldCBwcm9ibGVtID0gbmV3IFByb2JsZW0oZWwuSUQsIChpKzEpLCBjcmVhdGVEYXRlLFxyXG4gICAgICAgIHNvbHZlRGF0ZSwgZWwudXNlcm5hbWUsIGVsLnByb2JsZW0sICEhZWwuc29sdmVEYXRlLCBmYWxzZSApO1xyXG5cclxuICAgICAgcHJvYmxlbXMucHVzaChwcm9ibGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9ibGVtcztcclxuICB9XHJcblxyXG4gIGdldFNpZ25zKGRhdGEpe1xyXG4gICAgbGV0IHNpZ25zOiBTaWduW10gPSBbXTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKGVsLCBpKT0+e1xyXG4gICAgICBsZXQgZW50cnlEYXRlID0gdGhpcy5oZWFkZXJTZXJ2aWNlLmdldERhdGUobmV3IERhdGUoZWwuZGF0ZUVudHJ5KSk7XHJcbiAgICAgIGxldCBleGl0RGF0ZSAgPSB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0RGF0ZShuZXcgRGF0ZShlbC5kYXRlRXhpdCkpO1xyXG5cclxuICAgICAgaWYoIWVsLmRhdGVFeGl0KXsgZXhpdERhdGUgPSAnJzsgfVxyXG5cclxuICAgICAgbGV0IHNpZ24gPSBuZXcgU2lnbigoaSsxKSwgZW50cnlEYXRlLCBleGl0RGF0ZSwgZWwudXNlcm5hbWUpO1xyXG4gICAgICBzaWducy5wdXNoKHNpZ24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25zO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlQ2hhbmdlKCRldmVudDogTmdiVGFiQ2hhbmdlRXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQubmV4dElkID09PSAnMycpIHtcclxuXHJcbiAgICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRQcm9ibGVtQ29udGVudCgpXHJcbiAgICAgICAgLnN1YnNjcmliZSgocHJvYmxlbXMpPT57XHJcbiAgICAgICAgICB0aGlzLnByb2JsZW1zID0gcHJvYmxlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ZWxzZSBpZigkZXZlbnQubmV4dElkID09PSAnMicpe1xyXG5cclxuICAgICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFNpZ25Db250ZW50KClcclxuICAgICAgICAuc3Vic2NyaWJlKChzaWducyk9PntcclxuICAgICAgICAgIHRoaXMuc2lnbnMgPSB0aGlzLmdldFNpZ25zKHNpZ25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzb2x2ZWRDaGFuZ2luZyhpZDogbnVtYmVyLCBjaGVja2VkOiBib29sZWFuKXtcclxuICAgIGxldCBpbmRleCA9IHRoaXMucHJvYmxlbXMuZmluZEluZGV4KHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICBsZXQgY3VycmVudFByb2JsZW0gPSB0aGlzLnByb2JsZW1zW2luZGV4XTtcclxuXHJcbiAgICBjdXJyZW50UHJvYmxlbS5jaGFuZ2VkID0gKGN1cnJlbnRQcm9ibGVtLnN0YXR1cyAhPT0gY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICBzYXZlU29sdmVkUHJvYmxlbShpZDogbnVtYmVyLCBjaGVja2VkOiBib29sZWFuKXtcclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5zb2x2aW5nUHJvYmxlbSh7aWQ6IGlkLCBzb2x2ZWQ6IGNoZWNrZWR9KVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucHJvYmxlbXMuZmluZEluZGV4KHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9ibGVtID0gdGhpcy5wcm9ibGVtc1tpbmRleF07XHJcblxyXG4gICAgICAgIGlmKCFkYXRhLnNvbHZlRGF0ZSl7XHJcbiAgICAgICAgICBjdXJyZW50UHJvYmxlbS5kYXRlU29sdmUgPSAnJztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50UHJvYmxlbS5kYXRlU29sdmUgPSBkYXRhLnNvbHZlRGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRQcm9ibGVtLmNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBjdXJyZW50UHJvYmxlbS5zdGF0dXMgPSBjaGVja2VkO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlclJvd3MoZmlsdGVyOiBGaWx0ZXIsIHR5cGU6IHN0cmluZyl7XHJcbiAgICBmaWx0ZXIudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmZpbHRlclJlcG9ydFJvd3MoZmlsdGVyKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGlmKHR5cGUgPT0gJ3JlcG9ydCcpe1xyXG4gICAgICAgICAgdGhpcy5yZXBvcnRzID0gdGhpcy5nZXRSZXBvcnRzKGRhdGEpO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGUgPT0gJ3NpZ24nKXtcclxuICAgICAgICAgIHRoaXMuc2lnbnMgPSB0aGlzLmdldFNpZ25zKGRhdGEpO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGUgPT0ncHJvYmxlbScpe1xyXG4gICAgICAgICAgdGhpcy5wcm9ibGVtcyA9IHRoaXMuZ2V0UHJvYmxlbXMoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
