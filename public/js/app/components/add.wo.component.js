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
        templateUrl: '/js/app/components/views/add.wo.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbActiveModal])
], AddWOComponent);
exports.AddWOComponent = AddWOComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL2FkZC53by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFpRDtBQUNqRCwyREFBNEQ7QUFDNUQsK0RBQThEO0FBQzlELDJEQUE4RDtBQVE5RCxJQUFhLGNBQWM7SUFZekIsd0JBQXFCLGFBQTRCLEVBQzVCLFdBQTZCO1FBRDdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVJsRCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBSXRCLFVBQUssR0FBWSxHQUFHLENBQUM7UUFDckIsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQUlsQixDQUFDO0lBRUgsaUNBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWRDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUM7UUFDOUMsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRywwQkFBMEIsQ0FBQztRQUM3QyxDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQ3RCLElBQUksS0FBSyxHQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUN2RSxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDekQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUFBLGlCQWdCQztRQWZDLElBQUksS0FBSyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7UUFFbkUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFJLENBQUMsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxFQUN6RSxXQUFXLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO29CQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTO1FBQWxFLGlCQVVDO1FBVEMsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUNsRixLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTO1FBQWxFLGlCQVVDO1FBVEMsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUNuRixLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0EzRUEsQUEyRUMsSUFBQTtBQXpFVTtJQUFSLFlBQUssRUFBRTs4QkFBYSx1QkFBSTtrREFBQztBQUNqQjtJQUFSLFlBQUssRUFBRTs7Z0RBQVU7QUFDVDtJQUFSLFlBQUssRUFBRTs7NENBQWM7QUFKWCxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsZ0RBQWdEO1FBQzdELFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0Fjb0MsOEJBQWE7UUFDYiw2QkFBYztHQWJ2QyxjQUFjLENBMkUxQjtBQTNFWSx3Q0FBYyIsImZpbGUiOiJjb21wb25lbnRzL2FkZC53by5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYWhvbmdpciBvbiAwMS1KdW4tMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSAgICBmcm9tICcuLi9zaGFyZWQvaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWbGFuLCBXaWZpfSAgICAgICAgZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gICBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWRkLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvanMvYXBwL2NvbXBvbmVudHMvdmlld3MvYWRkLndvLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgSGVhZGVyU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkV09Db21wb25lbnR7XHJcblxyXG4gIEBJbnB1dCgpIGVkaXRlZFdpZmk6IFdpZmk7XHJcbiAgQElucHV0KCkgZWRpdEZvcm07XHJcbiAgQElucHV0KCkgdHlwZTogbnVtYmVyO1xyXG4gIGZvcm1UeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICB2bGFucztcclxuXHJcbiAgX3ZsYW46ICBzdHJpbmcgPSBcIjBcIjtcclxuICBmcmVlSXBzOiBhbnlbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICBwdWJsaWMgIGFjdGl2ZU1vZGFsOiAgIE5nYkFjdGl2ZU1vZGFsXHJcbiAgKXt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcblxyXG4gICAgaWYodGhpcy5lZGl0Rm9ybSl7XHJcbiAgICAgIHRoaXMuZm9ybVR5cGUgPSBcItCU0L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0LPQviDQutC70LjQtdC90YLQsFwiO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1UeXBlID0gXCLQmNC30LzQtdC90LXQvdC40LUg0LTQsNC90L3Ri9C1INC60LvQuNC10L3RgtCwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFZsYW5MaXN0KClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICB0aGlzLnZsYW5zID0gZGF0YS52bGFucztcclxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRXaWZpLmlkKXtcclxuICAgICAgICAgIGxldCBpbmRleCAgPSB0aGlzLnZsYW5zLmZpbmRJbmRleCh4ID0+IHgubmFtZSA9PSB0aGlzLmVkaXRlZFdpZmkudmxhbik7XHJcbiAgICAgICAgICBpZihpbmRleCAhPSAtMSkgdGhpcy5fdmxhbiA9IFwiXCIgKyB0aGlzLnZsYW5zW2luZGV4XS5JRDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdpbmdWbGFuU2VsZWN0KCl7XHJcbiAgICBsZXQgaW5kZXggID0gdGhpcy52bGFucy5maW5kSW5kZXgoeCA9PiB4LklEID09IE51bWJlcih0aGlzLl92bGFuKSk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRWbGFuID0gdGhpcy52bGFuc1tpbmRleF07XHJcbiAgICBsZXQgdmxhbiA9IG5ldyBWbGFuKDAsY3VycmVudFZsYW4uSUQsIGN1cnJlbnRWbGFuLmdhdGV3YXksIGN1cnJlbnRWbGFuLm5hbWUsXHJcbiAgICAgIGN1cnJlbnRWbGFuLmlkX3RhcmlmZiwgY3VycmVudFZsYW4uc3VibmV0X21hc2spO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRDbGllbnRzQnlWbGFuKHZsYW4pXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgdGhpcy5mcmVlSXBzID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlbCk9PntcclxuICAgICAgICAgIGlmKGVsLm5hbWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZUlwcy5wdXNoKGVsLmlwQWRkcmVzcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQWRkTmV3KG5hbWUsIGl0TWFuLCBhZGRyZXNzLCBwYXNzcG9ydCwgdGVsZXBob25lLCBwaG9uZSwgaXBBZGRyZXNzICl7XHJcbiAgICBsZXQgX3JvdyA9IG5ldyBXaWZpKG51bGwsIG51bGwsIHRoaXMudHlwZSwgbmFtZSwgaXRNYW4sIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsXHJcbiAgICAgIHBob25lLCBpcEFkZHJlc3MsIHRoaXMuX3ZsYW4sIE51bWJlcih0aGlzLmVkaXRlZFdpZmkuaWRDbGllbnQpKTtcclxuXHJcbiAgICB0aGlzLmhlYWRlclNlcnZpY2UuYWRkTmV3V08oX3JvdylcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwib2tcIil7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCdDbG9zZSBjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmFtZSwgaXRNYW4sIGFkZHJlc3MsIHBhc3Nwb3J0LCB0ZWxlcGhvbmUsIHBob25lLCBpcEFkZHJlc3Mpe1xyXG4gICAgbGV0IF9yb3cgPSBuZXcgV2lmaShudWxsLCBudWxsLCB0aGlzLnR5cGUsICBuYW1lLCBpdE1hbiwgYWRkcmVzcywgcGFzc3BvcnQsIHRlbGVwaG9uZSxcclxuICAgICAgcGhvbmUsIGlwQWRkcmVzcywgdGhpcy5fdmxhbiwgTnVtYmVyKHRoaXMuZWRpdGVkV2lmaS5pZENsaWVudCkpO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyU2VydmljZS51cGRhdGVXTyhfcm93KVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJva1wiKXtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
