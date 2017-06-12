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
        this._vlan = "0";
        this.freeIps = [];
    }
    AddWOComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        templateUrl: '/js/app/components/views/add.wo.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbActiveModal])
], AddWOComponent);
exports.AddWOComponent = AddWOComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL2FkZC53by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFpRDtBQUNqRCwyREFBNEQ7QUFDNUQsK0RBQThEO0FBQzlELDJEQUE4RDtBQVE5RCxJQUFhLGNBQWM7SUFXekIsd0JBQXFCLGFBQTRCLEVBQzVCLFdBQTZCO1FBRDdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUpsRCxVQUFLLEdBQVksR0FBRyxDQUFDO1FBQ3JCLFlBQU8sR0FBVSxFQUFFLENBQUM7SUFJbEIsQ0FBQztJQUVILGlDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUN0QixJQUFJLEtBQUssR0FBSSxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDdkUsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLEtBQUssR0FBSSxJ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dUJBQUk7a0RBQUM7QUFDakI7SUFBUixZQUFLLEVBQUU7O2dEQUFVO0FBQ1Q7SUFBUixZQUFLLEVBQUU7OzRDQUFjO0FBSlgsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLGdEQUFnRDtRQUM3RCxTQUFTLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO0tBQzdCLENBQUM7cUNBYW9DLDhCQUFhO1FBQ2IsNkJBQWM7R0FadkMsY0FBYyxDQW1FMUI7QUFuRVksd0NBQWMiLCJmaWxlIjoiY29tcG9uZW50cy9hZGQud28uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMDEtSnVuLTE3LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gICAgZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmxhbiwgV2lmaX0gICAgICAgIGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9ICAgZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FkZC1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdzL2FkZC53by5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFdPQ29tcG9uZW50e1xyXG5cclxuICBASW5wdXQoKSBlZGl0ZWRXaWZpOiBXaWZpO1xyXG4gIEBJbnB1dCgpIGVkaXRGb3JtO1xyXG4gIEBJbnB1dCgpIHR5cGU6IG51bWJlcjtcclxuXHJcbiAgdmxhbnM7XHJcblxyXG4gIF92bGFuOiAgc3RyaW5nID0gXCIwXCI7XHJcbiAgZnJlZUlwczogYW55W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSxcclxuICAgICAgICAgICAgICAgcHVibGljICBhY3RpdmVNb2RhbDogICBOZ2JBY3RpdmVNb2RhbFxyXG4gICl7fVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFZsYW5MaXN0KClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICB0aGlzLnZsYW5zID0gZGF0YS52bGFucztcclxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRXaWZpLmlkKXtcclxuICAgICAgICAgIGxldCBpbmRleCAgPSB0aGlzLnZsYW5zLmZpbmRJbmRleCh4ID0+IHgubmFtZSA9PSB0aGlzLmVkaXRlZFdpZmkudmxhbik7XHJcbiAgICAgICAgICBpZihpbmRleCAhPSAtMSkgdGhpcy5fdmxhbiA9IFwiXCIgKyB0aGlzLnZsYW5zW2luZGV4XS5JRDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdpbmdWbGFuU2VsZWN0KCl7XHJcbiAgICBsZXQgaW5kZXggID0gdGhpcy52bGFucy5maW5kSW5kZXgoeCA9PiB4LklEID09IE51bWJlcih0aGlzLl92bGFuKSk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRWbGFuID0gdGhpcy52bGFuc1tpbmRleF07XHJcbiAgICBsZXQgdmxhbiA9IG5ldyBWbGFuKDAsY3VycmVudFZsYW4uSUQsIGN1cnJlbnRWbGFuLmdhdGV3YXksIGN1cnJlbnRWbGFuLm5hbWUsXHJcbiAgICAgIGN1cnJlbnRWbGFuLmlkX3RhcmlmZiwgY3VycmVudFZsYW4uc3VibmV0X21hc2spO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRDbGllbnRzQnlWbGFuKHZsYW4pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgdGhpcy5mcmVlSXBzID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlbCk9PntcclxuICAgICAgICAgIGlmKGVsLm5hbWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZUlwcy5wdXNoKGVsLmlwQWRkcmVzcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQWRkTmV3KG5hbWUsIGl0TWFuLCBhZGRyZXNzLCBwYXNzcG9ydCwgdGVsZXBob25lLCBwaG9uZSwgaXBBZGRyZXNzICl7XHJcbiAgICBsZXQgX3JvdyA9IG5ldyBXaWZpKG51bGwsIG51bGwsIHRoaXMudHlwZSwgbmFtZSwgaXRNYW4sIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsXHJcbiAgICAgIHBob25lLCBpcEFkZHJlc3MsIHRoaXMuX3ZsYW4sIE51bWJlcih0aGlzLmVkaXRlZFdpZmkuaWRDbGllbnQpKTtcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuYWRkTmV3V08oX3JvdylcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwib2tcIil7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCdDbG9zZSBjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmFtZSwgaXRNYW4sIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsIHBob25lLCBpcEFkZHJlc3Mpe1xyXG4gICAgbGV0IF9yb3cgPSBuZXcgV2lmaShudWxsLCBudWxsLCB0aGlzLnR5cGUsICBuYW1lLCBpdE1hbiwgYWRkcmVzcywgcGFzc3BvcnQsIHRlbGVwaG9uZSxcclxuICAgICAgcGhvbmUsIGlwQWRkcmVzcywgdGhpcy5fdmxhbiwgTnVtYmVyKHRoaXMuZWRpdGVkV2lmaS5pZENsaWVudCkpO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS51cGRhdGVXTyhfcm93KVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
