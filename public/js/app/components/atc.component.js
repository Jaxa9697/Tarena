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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_service_1 = require("../shared/header.service");
var components_model_1 = require("../shared/components.model");
var add_component_1 = require("./add.component");
var AtcComponent = (function () {
    function AtcComponent(modalService, headerService) {
        this.modalService = modalService;
        this.headerService = headerService;
        this.atces = [];
    }
    AtcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getAtcContentById(this.atcId.id)
            .subscribe(function (data) {
            var alcNumber = 1, port = 0, stan = 0, line = 50, vpi = 5, vci = 35, pvc = 1, numberPvc = 5, id = -1;
            var isData;
            for (var j = 0; j < 24 * _this.atcId.alcQuant; j++) {
                port++;
                if (port > 24) {
                    port = 1;
                    alcNumber++;
                }
                if (stan > 47) {
                    stan = 0;
                    line = 50;
                }
                if (vpi > 8) {
                    numberPvc = 4;
                }
                else {
                    numberPvc = 5;
                }
                if (pvc > numberPvc) {
                    pvc = 1;
                    vpi++;
                    vci++;
                }
                if (vpi > 9) {
                    vpi = 5;
                    vci = 35;
                }
                for (var i = 0; i < data.length; i++) {
                    if (data[i].port == port && data[i].alc == alcNumber) {
                        _this.atc = new components_model_1.Atc(data[i].ID, data[i].port, data[i].alc, _this.atcId.id, data[i].name_cl, data[i].address, data[i].n_passport, data[i].telephone, data[i].phone, data[i].ipAddress, data[i].vlan, data[i].macAddress, data[i].stan, data[i].line, data[i].vpi, data[i].vci, data[i].id_client, true);
                        isData = true;
                        break;
                    }
                    else {
                        isData = false;
                    }
                }
                if (!isData) {
                    _this.atc = new components_model_1.Atc(id, port, alcNumber, _this.atcId.id, '', '', '', '', '', '', '', '', stan, line, vpi, vci, null, false);
                }
                id--;
                stan++;
                line++;
                pvc++;
                _this.atces.push(_this.atc);
            }
        });
    };
    AtcComponent.prototype.addAtc = function (id) {
        var index = this.atces.findIndex(function (x) { return x.id == id; });
        var CmpRef = this.modalService.open(add_component_1.AddComponent);
        CmpRef.componentInstance.editedAtc = this.atces[index];
        CmpRef.componentInstance.editForm = true;
    };
    AtcComponent.prototype.deleteAtc = function (id) {
        this.headerService.deleteAtc(id)
            .subscribe(function () { });
    };
    AtcComponent.prototype.editAtc = function (id) {
        var index = this.atces.findIndex(function (x) { return x.id == id; });
        var CmpRef = this.modalService.open(add_component_1.AddComponent);
        CmpRef.componentInstance.editedAtc = this.atces[index];
        CmpRef.componentInstance.editForm = false;
    };
    return AtcComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AtcComponent.prototype, "atcId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Privilege)
], AtcComponent.prototype, "user", void 0);
AtcComponent = __decorate([
    core_1.Component({
        selector: 'atc-app',
        templateUrl: '/js/app/components/views/atc.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], AtcComponent);
exports.AtcComponent = AtcComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL2F0Yy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFnRDtBQUNoRCwyREFBNkQ7QUFFN0QsMkRBQXlEO0FBQ3pELCtEQUFvRTtBQUNwRSxpREFBZ0Q7QUFRaEQsSUFBYSxZQUFZO0lBT3ZCLHNCQUFvQixZQUFzQixFQUN0QixhQUE0QjtRQUQ1QixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUhoRCxVQUFLLEdBQVUsRUFBRSxDQUFDO0lBSWYsQ0FBQztJQUVKLCtCQUFRLEdBQVI7UUFBQSxpQkF1Q0M7UUF0Q0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUNoRCxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFDakUsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLE1BQWUsQ0FBQztZQUVwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUUvQyxJQUFJLEVBQUUsQ0FBQztnQkFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztvQkFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUFDLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQSxDQUFDO29CQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFBQyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLENBQUM7Z0JBQUEsSUFBSSxDQUFDLENBQUM7b0JBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFBQSxDQUFDO2dCQUNwRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQztvQkFBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUFDLEdBQUcsRUFBRSxDQUFDO29CQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUFDLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFBQyxDQUFDO2dCQUVuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztvQkFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO3dCQUVwRCxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksc0JBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMs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Q0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFJLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQXRFQSxBQXNFQyxJQUFBO0FBckVVO0lBQVIsWUFBSyxFQUFFOzsyQ0FBTztBQUNOO0lBQVIsWUFBSyxFQUFFOzhCQUFPLDRCQUFTOzBDQUFDO0FBRmQsWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBU2tDLHVCQUFRO1FBQ1AsOEJBQWE7R0FSckMsWUFBWSxDQXNFeEI7QUF0RVksb0NBQVkiLCJmaWxlIjoiY29tcG9uZW50cy9hdGMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMTMtQXByLTE3LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZGFsIH0gICAgICAgIGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0F0YywgUHJpdmlsZWdlfSAgICAgICAgICAgZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFkZENvbXBvbmVudCB9ICBmcm9tIFwiLi9hZGQuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F0Yy1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL2F0Yy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0Y0NvbXBvbmVudHtcclxuICBASW5wdXQoKSBhdGNJZDtcclxuICBASW5wdXQoKSB1c2VyOiBQcml2aWxlZ2U7XHJcblxyXG4gIGF0YzogQXRjO1xyXG4gIGF0Y2VzOiBBdGNbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldEF0Y0NvbnRlbnRCeUlkKHRoaXMuYXRjSWQuaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgbGV0IGFsY051bWJlciA9IDEsIHBvcnQgPSAwLCBzdGFuID0gMCwgbGluZSA9IDUwLCB2cGkgPSA1LCB2Y2kgPSAzNSxcclxuICAgICAgICAgIHB2YyA9IDEsIG51bWJlclB2YyA9IDUsIGlkID0gLTE7XHJcbiAgICAgICAgbGV0IGlzRGF0YTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgMjQgKiB0aGlzLmF0Y0lkLmFsY1F1YW50OyBqKyspe1xyXG5cclxuICAgICAgICAgIHBvcnQrKztcclxuICAgICAgICAgIGlmIChwb3J0ID4gMjQpeyBwb3J0ID0gMTsgYWxjTnVtYmVyKys7IH1cclxuICAgICAgICAgIGlmIChzdGFuID4gNDcpeyBzdGFuID0gMDsgbGluZSA9IDUwOyB9XHJcbiAgICAgICAgICBpZiAodnBpID4gOCl7IG51bWJlclB2YyA9IDQ7IH1lbHNlIHsgbnVtYmVyUHZjID0gNTt9XHJcbiAgICAgICAgICBpZiAocHZjID4gbnVtYmVyUHZjKXsgcHZjID0gMTsgdnBpKys7ICB2Y2krKzsgfVxyXG4gICAgICAgICAgaWYgKHZwaSA+IDkpeyB2cGkgPSA1OyAgdmNpID0gMzU7IH1cclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKGRhdGFbaV0ucG9ydCA9PSBwb3J0ICYmIGRhdGFbaV0uYWxjID09IGFsY051bWJlcil7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuYXRjID0gbmV3IEF0YyhkYXRhW2ldLklELCBkYXRhW2ldLnBvcnQsIGRhdGFbaV0uYWxjLCB0aGlzLmF0Y0lkLmlkLCBkYXRhW2ldLm5hbWVfY2wsIGRhdGFbaV0uYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRhdGFbaV0ubl9wYXNzcG9ydCwgZGF0YVtpXS50ZWxlcGhvbmUsIGRhdGFbaV0ucGhvbmUsIGRhdGFbaV0uaXBBZGRyZXNzLCBkYXRhW2ldLnZsYW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldLm1hY0FkZHJlc3MsIGRhdGFbaV0uc3RhbiwgZGF0YVtpXS5saW5lLCBkYXRhW2ldLnZwaSwgZGF0YVtpXS52Y2ksIGRhdGFbaV0uaWRfY2xpZW50LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgaXNEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgaXNEYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIWlzRGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuYXRjID0gbmV3IEF0YyhpZCwgcG9ydCwgYWxjTnVtYmVyLCB0aGlzLmF0Y0lkLmlkLCAnJywgJycsICcnLCAnJywgJycsXHJcbiAgICAgICAgICAgICAgJycsJycsJycsIHN0YW4sIGxpbmUsIHZwaSwgdmNpLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZC0tO1xyXG4gICAgICAgICAgc3RhbisrOyBsaW5lKys7IHB2YysrO1xyXG4gICAgICAgICAgdGhpcy5hdGNlcy5wdXNoKHRoaXMuYXRjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkQXRjKGlkOiBudW1iZXIpe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5hdGNlcy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgIGxldCBDbXBSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZENvbXBvbmVudCk7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRlZEF0YyA9IHRoaXMuYXRjZXNbaW5kZXhdO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0Rm9ybSAgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQXRjKGlkOiBudW1iZXIpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmRlbGV0ZUF0YyhpZClcclxuICAgICAgLnN1YnNjcmliZSgoKT0+e30pO1xyXG4gIH1cclxuXHJcbiAgZWRpdEF0YyhpZDogbnVtYmVyKXtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuYXRjZXMuZmluZEluZGV4KHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICBsZXQgQ21wUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRDb21wb25lbnQpO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0ZWRBdGMgPSB0aGlzLmF0Y2VzW2luZGV4XTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdEZvcm0gID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==
