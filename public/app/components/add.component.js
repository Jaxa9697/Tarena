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
        templateUrl: '/app/components/views/add.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbActiveModal])
], AddComponent);
exports.AddComponent = AddComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1RhcmVuYTIvYXNzZXRzL2NvbXBvbmVudHMvYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQWlEO0FBQ2pELDJEQUF5RDtBQUN6RCwrREFBcUQ7QUFDckQsMkRBQTREO0FBUTVELElBQWEsWUFBWTtJQWdCdkIsc0JBQXFCLGFBQTRCLEVBQzVCLFdBQTZCO1FBRDdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVZsRCxRQUFHLEdBQVEsSUFBSSxzQkFBRyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFFOUIsVUFBSyxHQUFZLEdBQUcsQ0FBQztRQUNyQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFFBQUcsR0FBYyxHQUFHLENBQUM7UUFDckIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBSXBCLENBQUM7SUFFSCwrQkFBUSxHQUFSO1FBQUEsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUM7UUFDOUMsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRywwQkFBMEIsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNaLEtBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFM0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUV2QixJQUFJ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Q0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQ2pHLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxtQkFBQztBQUFELENBakdBLEFBaUdDLElBQUE7QUEvRlU7SUFBUixZQUFLLEVBQUU7OytDQUFXO0FBQ1Y7SUFBUixZQUFLLEVBQUU7OzhDQUFVO0FBSFAsWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLDBDQUEwQztRQUN2RCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBa0JvQyw4QkFBYTtRQUNiLDZCQUFjO0dBakJ2QyxZQUFZLENBaUd4QjtBQWpHWSxvQ0FBWSIsImZpbGUiOiJjb21wb25lbnRzL2FkZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAyOS1BcHItMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0F0YywgVmxhbn0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FkZC1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3ZpZXdzL2FkZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZENvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgZWRpdGVkQXRjO1xyXG4gIEBJbnB1dCgpIGVkaXRGb3JtO1xyXG4gIHZsYW5zO1xyXG4gIGF0Y0xpc3Q7XHJcblxyXG4gIGF0YzogQXRjID0gbmV3IEF0YygpO1xyXG4gIGFsY051bWJlcjogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG5cclxuICBfdmxhbjogIHN0cmluZyA9IFwiMFwiO1xyXG4gIF9pZEF0Yzogc3RyaW5nID0gXCIwXCI7XHJcbiAgYWxjOiAgICBzdHJpbmcgPSBcIjBcIjtcclxuICBmcmVlSXBzOiBhbnlbXSA9IFtdO1xyXG4gIGZvcm1UeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICBwdWJsaWMgIGFjdGl2ZU1vZGFsOiAgIE5nYkFjdGl2ZU1vZGFsXHJcbiAgKXt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBpZih0aGlzLmVkaXRGb3JtKXtcclxuICAgICAgdGhpcy5mb3JtVHlwZSA9IFwi0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7Qs9C+INC60LvQuNC10L3RgtCwXCI7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9ybVR5cGUgPSBcItCY0LfQvNC10L3QtdC90LjQtSDQtNCw0L3QvdGL0LUg0LrQu9C40LXQvdGC0LBcIjtcclxuICAgIH1cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRWbGFuTGlzdCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICB0aGlzLnZsYW5zICAgPSBkYXRhLnZsYW5zO1xyXG4gICAgICAgICAgdGhpcy5hdGNMaXN0ID0gZGF0YS5hdGNzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRBdGMucG9ydCl7XHJcblxyXG4gICAgICAgICAgbGV0IGluZGV4ICA9IHRoaXMudmxhbnMuZmluZEluZGV4KHggPT4geC5uYW1lID09IHRoaXMuZWRpdGVkQXRjLnZsYW4pO1xyXG4gICAgICAgICAgbGV0IGluZGV4MiA9IHRoaXMuYXRjTGlzdC5maW5kSW5kZXgoeCA9PiB4LklEID09IHRoaXMuZWRpdGVkQXRjLmlkQXRjKTtcclxuXHJcbiAgICAgICAgICBpZihpbmRleCAhPSAtMSkgdGhpcy5fdmxhbiA9IFwiXCIgKyB0aGlzLnZsYW5zW2luZGV4XS5JRDtcclxuICAgICAgICAgIHRoaXMuX2lkQXRjID0gXCJcIiArIHRoaXMuZWRpdGVkQXRjLmlkQXRjO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0QWxjUXVhbnRpdHkodGhpcy5hdGNMaXN0W2luZGV4Ml0uYWxjUXVhbnQpO1xyXG4gICAgICAgICAgdGhpcy5hbGMgPSBcIlwiICsgdGhpcy5lZGl0ZWRBdGMuYWxjO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxjUXVhbnRpdHkocXVhbnRpdHk6IG51bWJlcil7XHJcbiAgICB0aGlzLmFsY051bWJlciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaT0xOyBpIDw9IHF1YW50aXR5OyBpKyspIHRoaXMuYWxjTnVtYmVyLnB1c2goaSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2luZ0FsY1NlbGVjdCgpe1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5hdGNMaXN0LmZpbmRJbmRleCh4ID0+IHguSUQgPT0gTnVtYmVyKHRoaXMuX2lkQXRjKSk7XHJcbiAgICB0aGlzLnNldEFsY1F1YW50aXR5KHRoaXMuYXRjTGlzdFtpbmRleF0uYWxjUXVhbnQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdpbmdWbGFuU2VsZWN0KCl7XHJcbiAgICBsZXQgaW5kZXggID0gdGhpcy52bGFucy5maW5kSW5kZXgoeCA9PiB4LklEID09IE51bWJlcih0aGlzLl92bGFuKSk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRWbGFuID0gdGhpcy52bGFuc1tpbmRleF07XHJcbiAgICBsZXQgdmxhbiA9IG5ldyBWbGFuKDAsY3VycmVudFZsYW4uSUQsIGN1cnJlbnRWbGFuLmdhdGV3YXksIGN1cnJlbnRWbGFuLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWbGFuLmlkX3RhcmlmZiwgY3VycmVudFZsYW4uc3VibmV0X21hc2spO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRDbGllbnRzQnlWbGFuKHZsYW4pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICB0aGlzLmZyZWVJcHMgPSBbXTtcclxuICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZWwpPT57XHJcbiAgICAgICAgICAgIGlmKGVsLm5hbWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgdGhpcy5mcmVlSXBzLnB1c2goZWwuaXBBZGRyZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQWRkTmV3KHBvcnQsIG5hbWUsIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsIHBob25lLCBpcEFkZHJlc3MsIG1hY0FkZHJlc3MsIHN0YW4sIGxpbmUsIHZwaSwgdmNpKXtcclxuICAgIGxldCBfYXRjID0gbmV3IEF0Yyh0aGlzLmVkaXRlZEF0Yy5pZCwgcG9ydCwgTnVtYmVyKHRoaXMuYWxjKSwgTnVtYmVyKHRoaXMuX2lkQXRjKSwgbmFtZSwgYWRkcmVzcywgcGFzc3BvcnQsIHRlbGVwaG9uZSxcclxuICAgICAgICAgICAgICAgICAgcGhvbmUsIGlwQWRkcmVzcywgdGhpcy5fdmxhbiwgbWFjQWRkcmVzcywgc3RhbiwgbGluZSwgdnBpLCB2Y2ksIHRoaXMuZWRpdGVkQXRjLmlkQ2xpZW50KTtcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuYWRkTmV3QXRjKF9hdGMpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PSBcIm9rXCIpe1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnQ2xvc2UgY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXRjKHBvcnQsIG5hbWUsIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsIHBob25lLCBpcEFkZHJlc3MsIG1hY0FkZHJlc3MsIHN0YW4sIGxpbmUsIHZwaSwgdmNpKXtcclxuICAgIGxldCBfYXRjID0gbmV3IEF0Yyh0aGlzLmVkaXRlZEF0Yy5pZCwgcG9ydCwgTnVtYmVyKHRoaXMuYWxjKSwgTnVtYmVyKHRoaXMuX2lkQXRjKSwgbmFtZSwgYWRkcmVzcywgcGFzc3BvcnQsIHRlbGVwaG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmUsIGlwQWRkcmVzcywgdGhpcy5fdmxhbiwgbWFjQWRkcmVzcywgc3RhbiwgbGluZSwgdnBpLCB2Y2ksIHRoaXMuZWRpdGVkQXRjLmlkQ2xpZW50KTtcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UudXBkYXRlQXRjKF9hdGMpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PSBcIm9rXCIpe1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnQ2xvc2UgY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
