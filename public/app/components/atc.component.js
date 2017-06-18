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
        templateUrl: '/app/components/views/atc.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        header_service_1.HeaderService])
], AtcComponent);
exports.AtcComponent = AtcComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvYXRjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQWdEO0FBQ2hELDJEQUE2RDtBQUU3RCwyREFBeUQ7QUFDekQsK0RBQW9FO0FBQ3BFLGlEQUFnRDtBQVFoRCxJQUFhLFlBQVk7SUFPdkIsc0JBQW9CLFlBQXNCLEVBQ3RCLGFBQTRCO1FBRDVCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSGhELFVBQUssR0FBVSxFQUFFLENBQUM7SUFJZixDQUFDO0lBRUosK0JBQVEsR0FBUjtRQUFBLGlCQXVDQztRQXRDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2FBQ2hELFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUNqRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksTUFBZSxDQUFDO1lBRXBCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBRS9DLElBQUksRUFBRSxDQUFDO2dCQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQSxDQUFDO29CQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQUMsU0FBUyxFQUFFLENBQUM7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LFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUksS0FBSyxDQUFDO0lBQ2pELENBQUM7SUFDSCxtQkFBQztBQUFELENBdEVBLEFBc0VDLElBQUE7QUFyRVU7SUFBUixZQUFLLEVBQUU7OzJDQUFPO0FBQ047SUFBUixZQUFLLEVBQUU7OEJBQU8sNEJBQVM7MENBQUM7QUFGZCxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FTa0MsdUJBQVE7UUFDUCw4QkFBYTtHQVJyQyxZQUFZLENBc0V4QjtBQXRFWSxvQ0FBWSIsImZpbGUiOiJjb21wb25lbnRzL2F0Yy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAxMy1BcHItMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSAgICAgICAgZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7QXRjLCBQcml2aWxlZ2V9ICAgICAgICAgICBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHsgQWRkQ29tcG9uZW50IH0gIGZyb20gXCIuL2FkZC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXRjLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvdmlld3MvYXRjLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXRjQ29tcG9uZW50e1xyXG4gIEBJbnB1dCgpIGF0Y0lkO1xyXG4gIEBJbnB1dCgpIHVzZXI6IFByaXZpbGVnZTtcclxuXHJcbiAgYXRjOiBBdGM7XHJcbiAgYXRjZXM6IEF0Y1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0QXRjQ29udGVudEJ5SWQodGhpcy5hdGNJZC5pZClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICBsZXQgYWxjTnVtYmVyID0gMSwgcG9ydCA9IDAsIHN0YW4gPSAwLCBsaW5lID0gNTAsIHZwaSA9IDUsIHZjaSA9IDM1LFxyXG4gICAgICAgICAgcHZjID0gMSwgbnVtYmVyUHZjID0gNSwgaWQgPSAtMTtcclxuICAgICAgICBsZXQgaXNEYXRhOiBib29sZWFuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqPTA7IGogPCAyNCAqIHRoaXMuYXRjSWQuYWxjUXVhbnQ7IGorKyl7XHJcblxyXG4gICAgICAgICAgcG9ydCsrO1xyXG4gICAgICAgICAgaWYgKHBvcnQgPiAyNCl7IHBvcnQgPSAxOyBhbGNOdW1iZXIrKzsgfVxyXG4gICAgICAgICAgaWYgKHN0YW4gPiA0Nyl7IHN0YW4gPSAwOyBsaW5lID0gNTA7IH1cclxuICAgICAgICAgIGlmICh2cGkgPiA4KXsgbnVtYmVyUHZjID0gNDsgfWVsc2UgeyBudW1iZXJQdmMgPSA1O31cclxuICAgICAgICAgIGlmIChwdmMgPiBudW1iZXJQdmMpeyBwdmMgPSAxOyB2cGkrKzsgIHZjaSsrOyB9XHJcbiAgICAgICAgICBpZiAodnBpID4gOSl7IHZwaSA9IDU7ICB2Y2kgPSAzNTsgfVxyXG5cclxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtpXS5wb3J0ID09IHBvcnQgJiYgZGF0YVtpXS5hbGMgPT0gYWxjTnVtYmVyKXtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5hdGMgPSBuZXcgQXRjKGRhdGFbaV0uSUQsIGRhdGFbaV0ucG9ydCwgZGF0YVtpXS5hbGMsIHRoaXMuYXRjSWQuaWQsIGRhdGFbaV0ubmFtZV9jbCwgZGF0YVtpXS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGF0YVtpXS5uX3Bhc3Nwb3J0LCBkYXRhW2ldLnRlbGVwaG9uZSwgZGF0YVtpXS5waG9uZSwgZGF0YVtpXS5pcEFkZHJlc3MsIGRhdGFbaV0udmxhbixcclxuICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFjQWRkcmVzcywgZGF0YVtpXS5zdGFuLCBkYXRhW2ldLmxpbmUsIGRhdGFbaV0udnBpLCBkYXRhW2ldLnZjaSwgZGF0YVtpXS5pZF9jbGllbnQsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICBpc0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBpc0RhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghaXNEYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5hdGMgPSBuZXcgQXRjKGlkLCBwb3J0LCBhbGNOdW1iZXIsIHRoaXMuYXRjSWQuaWQsICcnLCAnJywgJycsICcnLCAnJyxcclxuICAgICAgICAgICAgICAnJywnJywnJywgc3RhbiwgbGluZSwgdnBpLCB2Y2ksIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlkLS07XHJcbiAgICAgICAgICBzdGFuKys7IGxpbmUrKzsgcHZjKys7XHJcbiAgICAgICAgICB0aGlzLmF0Y2VzLnB1c2godGhpcy5hdGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRBdGMoaWQ6IG51bWJlcil7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmF0Y2VzLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gaWQpO1xyXG4gICAgbGV0IENtcFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQWRkQ29tcG9uZW50KTtcclxuICAgICAgICBDbXBSZWYuY29tcG9uZW50SW5zdGFuY2UuZWRpdGVkQXRjID0gdGhpcy5hdGNlc1tpbmRleF07XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRGb3JtICA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkZWxldGVBdGMoaWQ6IG51bWJlcil7XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZGVsZXRlQXRjKGlkKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpPT57fSk7XHJcbiAgfVxyXG5cclxuICBlZGl0QXRjKGlkOiBudW1iZXIpe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5hdGNlcy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAgIGxldCBDbXBSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZENvbXBvbmVudCk7XHJcbiAgICAgICAgQ21wUmVmLmNvbXBvbmVudEluc3RhbmNlLmVkaXRlZEF0YyA9IHRoaXMuYXRjZXNbaW5kZXhdO1xyXG4gICAgICAgIENtcFJlZi5jb21wb25lbnRJbnN0YW5jZS5lZGl0Rm9ybSAgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19
