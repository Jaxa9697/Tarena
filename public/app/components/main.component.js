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
        templateUrl: '/app/components/views/main.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbModal])
], MainComponent);
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUF1RDtBQUN2RCwyREFBeUQ7QUFDekQsMkRBQXNEO0FBQ3RELHFFQUFrRTtBQUNsRSwrREFBZ0U7QUFTaEUsSUFBYSxhQUFhO0lBVXhCLHVCQUFvQixhQUE0QixFQUM1QixZQUFzQjtRQUR0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQVRoQyxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBRXRDLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFXLFNBQVMsQ0FBQztJQUkxQixDQUFDO0lBRUgsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2lCQUNqQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUNkLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLEVBQUUsRUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3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Q0FBQyxpQkFBaUIsRUFBRTthQUNuQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBRyxPQUFBLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBVixDQUFVLENBQUMsQ0FBQztZQUNqRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsRUFBVSxFQUFFLE9BQWdCO1FBQTlDLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN6RCxTQUFTLENBQUM7WUFDVCxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSCxvQkFBQztBQUFELENBN0ZBLEFBNkZDLElBQUE7QUE1RlU7SUFBUixZQUFLLEVBQUU7OEJBQU8sNEJBQVM7MkNBQUM7QUFDZjtJQUFULGFBQU0sRUFBRTs7OENBQTZCO0FBRjNCLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSwyQ0FBMkM7UUFDeEQsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQVltQyw4QkFBYTtRQUNkLHVCQUFRO0dBWC9CLGFBQWEsQ0E2RnpCO0FBN0ZZLHNDQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyOS1BcHItMTcuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBSZXN1bHRTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN1bHQuc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcml2aWxlZ2UsIFByb2JsZW0gfSBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21haW4tYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy92aWV3cy9tYWluLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudHtcclxuICBASW5wdXQoKSB1c2VyOiBQcml2aWxlZ2U7XHJcbiAgQE91dHB1dCgpIGNtcE5hbWU6IHN0cmluZyA9IFwi0JPQu9Cw0LLQvdCw0Y9cIjtcclxuXHJcbiAgcmVzdWx0czogYW55W10gPSBbXTtcclxuICB1bnNvbHZlZFByb2JsZW1zOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHJvYmxlbXM6IFByb2JsZW1bXSA9IFtdO1xyXG4gIHByaW1hcnk6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxyXG4gICl7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5nZXRVbnNvbHZlZFByb2JsZW1zKCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2g6IHN0cmluZztcclxuICBwcm9ibGVtOiBzdHJpbmc7XHJcblxyXG4gIHNlYXJjaEV2KCl7XHJcbiAgICBsZXQgaW5wdXQgPSB0aGlzLnNlYXJjaDtcclxuICAgIGlmIChpbnB1dCAhPT0gXCJcIil7XHJcbiAgICAgIHRoaXMuaGVhZGVyU2VydmljZS5zZWFyY2hEYXRhKGlucHV0KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6ICAgICBkYXRhW2ldLklELFxyXG4gICAgICAgICAgICAgIG5hbWU6ICAgZGF0YVtpXS5uYW1lX2NsLFxyXG4gICAgICAgICAgICAgIHRlbDogICAgZGF0YVtpXS50ZWxlcGhvbmUsXHJcbiAgICAgICAgICAgICAgaXA6ICAgICBkYXRhW2ldLmlwQWRkcmVzcyxcclxuICAgICAgICAgICAgICBzdGF0dXM6IGRhdGFbaV0uc3RhdHVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdldFJTKGlucHV0KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJTKGlucHV0OiBzdHJpbmcpe1xyXG4gICAgaWYgKHRoaXMucmVzdWx0cy5sZW5ndGggPiAxKXtcclxuXHJcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMucmVzdWx0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMucmVzdWx0c1tpXS5uYW1lICsgJyAnICsgdGhpcy5yZXN1bHRzW2ldLnRlbCArICcgJyArIHRoaXMucmVzdWx0c1tpXS5pcDtcclxuICAgICAgICBpZiAodmFsID09IGlucHV0KXtcclxuICAgICAgICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRSZXN1bHRTZWFyY2godGhpcy5yZXN1bHRzW2ldLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgIGxldCBDbXBSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFJlc3VsdFNlYXJjaENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5yZXN1bHQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29sdmVkQ2hhbmdpbmcoaWQ6IG51bWJlciwgY2hlY2tlZDogYm9vbGVhbil7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLnByb2JsZW1zLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gaWQpO1xyXG4gICAgbGV0IGN1cnJlbnRQcm9ibGVtID0gdGhpcy5wcm9ibGVtc1tpbmRleF07XHJcblxyXG4gICAgY3VycmVudFByb2JsZW0uY2hhbmdlZCA9IChjdXJyZW50UHJvYmxlbS5zdGF0dXMgIT09IGNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZU5ld1Byb2JsZW0oKXtcclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5zYXZlTmV3UHJvYmxlbSh7cHJvYmxlbTogdGhpcy5wcm9ibGVtfSlcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgICAgYWxlcnQoXCLQn9GA0L7QsdC70LXQvNCwINGD0YHQv9C10YjQvdC+INGB0L7Qt9C00LDQvdC+XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFVuc29sdmVkUHJvYmxlbXMoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVbnNvbHZlZFByb2JsZW1zKCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0UHJvYmxlbUNvbnRlbnQoKVxyXG4gICAgICAuc3Vic2NyaWJlKChwcm9ibGVtcyk9PntcclxuICAgICAgICB0aGlzLnByb2JsZW1zID0gcHJvYmxlbXMuZmlsdGVyKGVsPT4gIWVsLnN0YXR1cyk7XHJcbiAgICAgICAgdGhpcy51bnNvbHZlZFByb2JsZW1zID0gKHRoaXMucHJvYmxlbXMubGVuZ3RoID4gMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVNvbHZlZFByb2JsZW0oaWQ6IG51bWJlciwgY2hlY2tlZDogYm9vbGVhbil7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2Uuc29sdmluZ1Byb2JsZW0oe2lkOiBpZCwgc29sdmVkOiBjaGVja2VkfSlcclxuICAgICAgLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICAgIHRoaXMuZ2V0VW5zb2x2ZWRQcm9ibGVtcygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
