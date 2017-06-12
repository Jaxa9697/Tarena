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
var components_model_1 = require("../shared/components.model");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AddComponent = (function () {
    function AddComponent(headerService, activeModal) {
        this.headerService = headerService;
        this.activeModal = activeModal;
        this.atc = new components_model_1.Atc();
        this.alcNumber = [];
        this._vlan = "0";
        this._idAtc = "0";
        this.alc = "0";
        this.freeIps = [];
        this.formType = "";
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.editForm) {
            this.formType = "Добавление нового клиента";
        }
        else {
            this.formType = "Изменение данные клиента";
        }
        this.headerService.getVlanList()
            .subscribe(function (data) {
            _this.vlans = data.vlans;
            _this.atcList = data.atcs;
            if (_this.editedAtc.port) {
                var index = _this.vlans.findIndex(function (x) { return x.name == _this.editedAtc.vlan; });
                var index2 = _this.atcList.findIndex(function (x) { return x.ID == _this.editedAtc.idAtc; });
                if (index != -1)
                    _this._vlan = "" + _this.vlans[index].ID;
                _this._idAtc = "" + _this.editedAtc.idAtc;
                _this.setAlcQuantity(_this.atcList[index2].alcQuant);
                _this.alc = "" + _this.editedAtc.alc;
            }
        });
    };
    AddComponent.prototype.setAlcQuantity = function (quantity) {
        this.alcNumber = [];
        for (var i = 1; i <= quantity; i++)
            this.alcNumber.push(i);
    };
    AddComponent.prototype.changingAlcSelect = function () {
        var _this = this;
        var index = this.atcList.findIndex(function (x) { return x.ID == Number(_this._idAtc); });
        this.setAlcQuantity(this.atcList[index].alcQuant);
    };
    AddComponent.prototype.changingVlanSelect = function () {
        var _this = this;
        var index = this.vlans.findIndex(function (x) { return x.ID == Number(_this._vlan); });
        var currentVlan = this.vlans[index];
        var vlan = new components_model_1.Vlan(0, currentVlan.ID, currentVlan.gateway, currentVlan.name, currentVlan.id_tariff, currentVlan.subnet_mask);
        this.headerService.getClientsByVlan(vlan)
            .subscribe(function (data) {
            _this.freeIps = [];
            data.forEach(function (el) {
                if (el.name == "") {
                    _this.freeIps.push(el.ipAddress);
                }
            });
        });
    };
    AddComponent.prototype.AddNew = function (port, name, address, passport, telephone, phone, ipAddress, macAddress, stan, line, vpi, vci) {
        var _this = this;
        var _atc = new components_model_1.Atc(this.editedAtc.id, port, Number(this.alc), Number(this._idAtc), name, address, passport, telephone, phone, ipAddress, this._vlan, macAddress, stan, line, vpi, vci, this.editedAtc.idClient);
        this.headerService.addNewAtc(_atc)
            .subscribe(function (data) {
            if (data.message == "ok") {
                _this.activeModal.close('Close click');
            }
        });
    };
    AddComponent.prototype.updateAtc = function (port, name, address, passport, telephone, phone, ipAddress, macAddress, stan, line, vpi, vci) {
        var _this = this;
        var _atc = new components_model_1.Atc(this.editedAtc.id, port, Number(this.alc), Number(this._idAtc), name, address, passport, telephone, phone, ipAddress, this._vlan, macAddress, stan, line, vpi, vci, this.editedAtc.idClient);
        this.headerService.updateAtc(_atc)
            .subscribe(function (data) {
            if (data.message == "ok") {
                _this.activeModal.close('Close click');
            }
        });
    };
    return AddComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AddComponent.prototype, "editedAtc", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AddComponent.prototype, "editForm", void 0);
AddComponent = __decorate([
    core_1.Component({
        selector: 'add-app',
        templateUrl: '/js/app/components/views/add.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbActiveModal])
], AddComponent);
exports.AddComponent = AddComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL2FkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFpRDtBQUNqRCwyREFBeUQ7QUFDekQsK0RBQXFEO0FBQ3JELDJEQUE0RDtBQVE1RCxJQUFhLFlBQVk7SUFnQnZCLHNCQUFxQixhQUE0QixFQUM1QixXQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFWbEQsUUFBRyxHQUFRLElBQUksc0JBQUcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBRTlCLFVBQUssR0FBWSxHQUFHLENBQUM7UUFDckIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixRQUFHLEdBQWMsR0FBRyxDQUFDO1FBQ3JCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQUlwQixDQUFDO0lBRUgsK0JBQVEsR0FBUjtRQUFBLGlCQXdCQztRQXZCQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEyQixDQUFDO1FBQzlDLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsMEJBQTBCLENBQUM7UUFDN0MsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDWixLQUFJLENBQUMsS0FBSyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRTNCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFF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QyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUNqRyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTdHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQWpHQSxBQWlHQyxJQUFBO0FBL0ZVO0lBQVIsWUFBSyxFQUFFOzsrQ0FBVztBQUNWO0lBQVIsWUFBSyxFQUFFOzs4Q0FBVTtBQUhQLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSw2Q0FBNkM7UUFDMUQsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQWtCb0MsOEJBQWE7UUFDYiw2QkFBYztHQWpCdkMsWUFBWSxDQWlHeEI7QUFqR1ksb0NBQVkiLCJmaWxlIjoiY29tcG9uZW50cy9hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMjktQXByLTE3LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtBdGMsIFZsYW59IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZGQtYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9qcy9hcHAvY29tcG9uZW50cy92aWV3cy9hZGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRDb21wb25lbnR7XHJcblxyXG4gIEBJbnB1dCgpIGVkaXRlZEF0YztcclxuICBASW5wdXQoKSBlZGl0Rm9ybTtcclxuICB2bGFucztcclxuICBhdGNMaXN0O1xyXG5cclxuICBhdGM6IEF0YyA9IG5ldyBBdGMoKTtcclxuICBhbGNOdW1iZXI6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgX3ZsYW46ICBzdHJpbmcgPSBcIjBcIjtcclxuICBfaWRBdGM6IHN0cmluZyA9IFwiMFwiO1xyXG4gIGFsYzogICAgc3RyaW5nID0gXCIwXCI7XHJcbiAgZnJlZUlwczogYW55W10gPSBbXTtcclxuICBmb3JtVHlwZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSxcclxuICAgICAgICAgICAgICAgcHVibGljICBhY3RpdmVNb2RhbDogICBOZ2JBY3RpdmVNb2RhbFxyXG4gICl7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgaWYodGhpcy5lZGl0Rm9ybSl7XHJcbiAgICAgIHRoaXMuZm9ybVR5cGUgPSBcItCU0L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0LPQviDQutC70LjQtdC90YLQsFwiO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1UeXBlID0gXCLQmNC30LzQtdC90LXQvdC40LUg0LTQsNC90L3Ri9C1INC60LvQuNC10L3RgtCwXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0Vmxhbkxpc3QoKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgICAgdGhpcy52bGFucyAgID0gZGF0YS52bGFucztcclxuICAgICAgICAgIHRoaXMuYXRjTGlzdCA9IGRhdGEuYXRjcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdGVkQXRjLnBvcnQpe1xyXG5cclxuICAgICAgICAgIGxldCBpbmRleCAgPSB0aGlzLnZsYW5zLmZpbmRJbmRleCh4ID0+IHgubmFtZSA9PSB0aGlzLmVkaXRlZEF0Yy52bGFuKTtcclxuICAgICAgICAgIGxldCBpbmRleDIgPSB0aGlzLmF0Y0xpc3QuZmluZEluZGV4KHggPT4geC5JRCA9PSB0aGlzLmVkaXRlZEF0Yy5pZEF0Yyk7XHJcblxyXG4gICAgICAgICAgaWYoaW5kZXggIT0gLTEpIHRoaXMuX3ZsYW4gPSBcIlwiICsgdGhpcy52bGFuc1tpbmRleF0uSUQ7XHJcbiAgICAgICAgICB0aGlzLl9pZEF0YyA9IFwiXCIgKyB0aGlzLmVkaXRlZEF0Yy5pZEF0YztcclxuXHJcbiAgICAgICAgICB0aGlzLnNldEFsY1F1YW50aXR5KHRoaXMuYXRjTGlzdFtpbmRleDJdLmFsY1F1YW50KTtcclxuICAgICAgICAgIHRoaXMuYWxjID0gXCJcIiArIHRoaXMuZWRpdGVkQXRjLmFsYztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFsY1F1YW50aXR5KHF1YW50aXR5OiBudW1iZXIpe1xyXG4gICAgdGhpcy5hbGNOdW1iZXIgPSBbXTtcclxuICAgIGZvciAobGV0IGk9MTsgaSA8PSBxdWFudGl0eTsgaSsrKSB0aGlzLmFsY051bWJlci5wdXNoKGkpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdpbmdBbGNTZWxlY3QoKXtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuYXRjTGlzdC5maW5kSW5kZXgoeCA9PiB4LklEID09IE51bWJlcih0aGlzLl9pZEF0YykpO1xyXG4gICAgdGhpcy5zZXRBbGNRdWFudGl0eSh0aGlzLmF0Y0xpc3RbaW5kZXhdLmFsY1F1YW50KTtcclxuICB9XHJcblxyXG4gIGNoYW5naW5nVmxhblNlbGVjdCgpe1xyXG4gICAgbGV0IGluZGV4ICA9IHRoaXMudmxhbnMuZmluZEluZGV4KHggPT4geC5JRCA9PSBOdW1iZXIodGhpcy5fdmxhbikpO1xyXG5cclxuICAgIGxldCBjdXJyZW50VmxhbiA9IHRoaXMudmxhbnNbaW5kZXhdO1xyXG4gICAgbGV0IHZsYW4gPSBuZXcgVmxhbigwLGN1cnJlbnRWbGFuLklELCBjdXJyZW50Vmxhbi5nYXRld2F5LCBjdXJyZW50Vmxhbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmxhbi5pZF90YXJpZmYsIGN1cnJlbnRWbGFuLnN1Ym5ldF9tYXNrKTtcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0Q2xpZW50c0J5Vmxhbih2bGFuKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgICAgdGhpcy5mcmVlSXBzID0gW107XHJcbiAgICAgICAgICBkYXRhLmZvckVhY2goKGVsKT0+e1xyXG4gICAgICAgICAgICBpZihlbC5uYW1lID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgIHRoaXMuZnJlZUlwcy5wdXNoKGVsLmlwQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEFkZE5ldyhwb3J0LCBuYW1lLCBhZGRyZXNzLCBwYXNzcG9ydCwgdGVsZXBob25lLCBwaG9uZSwgaXBBZGRyZXNzLCBtYWNBZGRyZXNzLCBzdGFuLCBsaW5lLCB2cGksIHZjaSl7XHJcbiAgICBsZXQgX2F0YyA9IG5ldyBBdGModGhpcy5lZGl0ZWRBdGMuaWQsIHBvcnQsIE51bWJlcih0aGlzLmFsYyksIE51bWJlcih0aGlzLl9pZEF0YyksIG5hbWUsIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgIHBob25lLCBpcEFkZHJlc3MsIHRoaXMuX3ZsYW4sIG1hY0FkZHJlc3MsIHN0YW4sIGxpbmUsIHZwaSwgdmNpLCB0aGlzLmVkaXRlZEF0Yy5pZENsaWVudCk7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmFkZE5ld0F0YyhfYXRjKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF0Yyhwb3J0LCBuYW1lLCBhZGRyZXNzLCBwYXNzcG9ydCwgdGVsZXBob25lLCBwaG9uZSwgaXBBZGRyZXNzLCBtYWNBZGRyZXNzLCBzdGFuLCBsaW5lLCB2cGksIHZjaSl7XHJcbiAgICBsZXQgX2F0YyA9IG5ldyBBdGModGhpcy5lZGl0ZWRBdGMuaWQsIHBvcnQsIE51bWJlcih0aGlzLmFsYyksIE51bWJlcih0aGlzLl9pZEF0YyksIG5hbWUsIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lLCBpcEFkZHJlc3MsIHRoaXMuX3ZsYW4sIG1hY0FkZHJlc3MsIHN0YW4sIGxpbmUsIHZwaSwgdmNpLCB0aGlzLmVkaXRlZEF0Yy5pZENsaWVudCk7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLnVwZGF0ZUF0YyhfYXRjKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
