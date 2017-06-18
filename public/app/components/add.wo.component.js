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
 * Created by Jahongir on 01-Jun-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var components_model_1 = require("../shared/components.model");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AddWOComponent = (function () {
    function AddWOComponent(headerService, activeModal) {
        this.headerService = headerService;
        this.activeModal = activeModal;
        this.formType = "";
        this._vlan = "0";
        this.freeIps = [];
    }
    AddWOComponent.prototype.ngOnInit = function () {
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
            if (_this.editedWifi.id) {
                var index = _this.vlans.findIndex(function (x) { return x.name == _this.editedWifi.vlan; });
                if (index != -1)
                    _this._vlan = "" + _this.vlans[index].ID;
            }
        });
    };
    AddWOComponent.prototype.changingVlanSelect = function () {
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
    AddWOComponent.prototype.AddNew = function (name, itMan, address, passport, telephone, phone, ipAddress) {
        var _this = this;
        var _row = new components_model_1.Wifi(null, null, this.type, name, itMan, address, passport, telephone, phone, ipAddress, this._vlan, Number(this.editedWifi.idClient));
        this.headerService.addNewWO(_row)
            .subscribe(function (data) {
            if (data.message == "ok") {
                _this.activeModal.close('Close click');
            }
        });
    };
    AddWOComponent.prototype.update = function (name, itMan, address, passport, telephone, phone, ipAddress) {
        var _this = this;
        var _row = new components_model_1.Wifi(null, null, this.type, name, itMan, address, passport, telephone, phone, ipAddress, this._vlan, Number(this.editedWifi.idClient));
        this.headerService.updateWO(_row)
            .subscribe(function (data) {
            if (data.message == "ok") {
                _this.activeModal.close('Close click');
            }
        });
    };
    return AddWOComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_model_1.Wifi)
], AddWOComponent.prototype, "editedWifi", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AddWOComponent.prototype, "editForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AddWOComponent.prototype, "type", void 0);
AddWOComponent = __decorate([
    core_1.Component({
        selector: 'add-app',
        templateUrl: '/app/components/views/add.wo.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbActiveModal])
], AddWOComponent);
exports.AddWOComponent = AddWOComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvYWRkLndvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQWlEO0FBQ2pELDJEQUE0RDtBQUM1RCwrREFBOEQ7QUFDOUQsMkRBQThEO0FBUTlELElBQWEsY0FBYztJQVl6Qix3QkFBcUIsYUFBNEIsRUFDNUIsV0FBNkI7UUFEN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBUmxELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFJdEIsVUFBSyxHQUFZLEdBQUcsQ0FBQztRQUNyQixZQUFPLEdBQVUsRUFBRSxDQUFDO0lBSWxCLENBQUM7SUFFSCxpQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztRQUM5QyxDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUEwQixDQUFDO1FBQzdDLENBQUM7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDdEIsSUFBSSxLQUFLLEdBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUE5QixDQUE4QixDQUFDLENBQUM7Z0JBQ3ZFLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxD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QUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQTNFQSxBQTJFQyxJQUFBO0FBekVVO0lBQVIsWUFBSyxFQUFFOzhCQUFhLHVCQUFJO2tEQUFDO0FBQ2pCO0lBQVIsWUFBSyxFQUFFOztnREFBVTtBQUNUO0lBQVIsWUFBSyxFQUFFOzs0Q0FBYztBQUpYLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSw2Q0FBNkM7UUFDMUQsU0FBUyxFQUFFLENBQUUsOEJBQWEsQ0FBRTtLQUM3QixDQUFDO3FDQWNvQyw4QkFBYTtRQUNiLDZCQUFjO0dBYnZDLGNBQWMsQ0EyRTFCO0FBM0VZLHdDQUFjIiwiZmlsZSI6ImNvbXBvbmVudHMvYWRkLndvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEphaG9uZ2lyIG9uIDAxLUp1bi0xNy5cclxuICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9ICAgIGZyb20gJy4uL3NoYXJlZC9oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFZsYW4sIFdpZml9ICAgICAgICBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMubW9kZWxcIjtcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSAgIGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZGQtYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy92aWV3cy9hZGQud28uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogWyBIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRXT0NvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgZWRpdGVkV2lmaTogV2lmaTtcclxuICBASW5wdXQoKSBlZGl0Rm9ybTtcclxuICBASW5wdXQoKSB0eXBlOiBudW1iZXI7XHJcbiAgZm9ybVR5cGU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHZsYW5zO1xyXG5cclxuICBfdmxhbjogIHN0cmluZyA9IFwiMFwiO1xyXG4gIGZyZWVJcHM6IGFueVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgIHB1YmxpYyAgYWN0aXZlTW9kYWw6ICAgTmdiQWN0aXZlTW9kYWxcclxuICApe31cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuXHJcbiAgICBpZih0aGlzLmVkaXRGb3JtKXtcclxuICAgICAgdGhpcy5mb3JtVHlwZSA9IFwi0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7Qs9C+INC60LvQuNC10L3RgtCwXCI7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9ybVR5cGUgPSBcItCY0LfQvNC10L3QtdC90LjQtSDQtNCw0L3QvdGL0LUg0LrQu9C40LXQvdGC0LBcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0Vmxhbkxpc3QoKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIHRoaXMudmxhbnMgPSBkYXRhLnZsYW5zO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRlZFdpZmkuaWQpe1xyXG4gICAgICAgICAgbGV0IGluZGV4ICA9IHRoaXMudmxhbnMuZmluZEluZGV4KHggPT4geC5uYW1lID09IHRoaXMuZWRpdGVkV2lmaS52bGFuKTtcclxuICAgICAgICAgIGlmKGluZGV4ICE9IC0xKSB0aGlzLl92bGFuID0gXCJcIiArIHRoaXMudmxhbnNbaW5kZXhdLklEO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2luZ1ZsYW5TZWxlY3QoKXtcclxuICAgIGxldCBpbmRleCAgPSB0aGlzLnZsYW5zLmZpbmRJbmRleCh4ID0+IHguSUQgPT0gTnVtYmVyKHRoaXMuX3ZsYW4pKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFZsYW4gPSB0aGlzLnZsYW5zW2luZGV4XTtcclxuICAgIGxldCB2bGFuID0gbmV3IFZsYW4oMCxjdXJyZW50Vmxhbi5JRCwgY3VycmVudFZsYW4uZ2F0ZXdheSwgY3VycmVudFZsYW4ubmFtZSxcclxuICAgICAgY3VycmVudFZsYW4uaWRfdGFyaWZmLCBjdXJyZW50Vmxhbi5zdWJuZXRfbWFzayk7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldENsaWVudHNCeVZsYW4odmxhbilcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICB0aGlzLmZyZWVJcHMgPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGVsKT0+e1xyXG4gICAgICAgICAgaWYoZWwubmFtZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5mcmVlSXBzLnB1c2goZWwuaXBBZGRyZXNzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBBZGROZXcobmFtZSwgaXRNYW4sIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsIHBob25lLCBpcEFkZHJlc3MgKXtcclxuICAgIGxldCBfcm93ID0gbmV3IFdpZmkobnVsbCwgbnVsbCwgdGhpcy50eXBlLCBuYW1lLCBpdE1hbiwgYWRkcmVzcywgcGFzc3BvcnQsIHRlbGVwaG9uZSxcclxuICAgICAgcGhvbmUsIGlwQWRkcmVzcywgdGhpcy5fdmxhbiwgTnVtYmVyKHRoaXMuZWRpdGVkV2lmaS5pZENsaWVudCkpO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5hZGROZXdXTyhfcm93KVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShuYW1lLCBpdE1hbiwgYWRkcmVzcywgcGFzc3BvcnQsIHRlbGVwaG9uZSwgcGhvbmUsIGlwQWRkcmVzcyl7XHJcbiAgICBsZXQgX3JvdyA9IG5ldyBXaWZpKG51bGwsIG51bGwsIHRoaXMudHlwZSwgIG5hbWUsIGl0TWFuLCBhZGRyZXNzLCBwYXNzcG9ydCwgdGVsZXBob25lLFxyXG4gICAgICBwaG9uZSwgaXBBZGRyZXNzLCB0aGlzLl92bGFuLCBOdW1iZXIodGhpcy5lZGl0ZWRXaWZpLmlkQ2xpZW50KSk7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLnVwZGF0ZVdPKF9yb3cpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PSBcIm9rXCIpe1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnQ2xvc2UgY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
