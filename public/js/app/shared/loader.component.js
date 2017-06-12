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
var core_1 = require("@angular/core");
var DclWrapper = (function () {
    function DclWrapper(resolver) {
        this.resolver = resolver;
        this.isViewInitialized = false;
    }
    DclWrapper.prototype.updateComponent = function () {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var factory = this.resolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory);
    };
    DclWrapper.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    DclWrapper.prototype.ngAfterViewInit = function () {
        this.isViewInitialized = true;
        this.updateComponent();
    };
    DclWrapper.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    return DclWrapper;
}());
__decorate([
    core_1.ViewChild('target', { read: core_1.ViewContainerRef }),
    __metadata("design:type", Object)
], DclWrapper.prototype, "target", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DclWrapper.prototype, "type", void 0);
DclWrapper = __decorate([
    core_1.Component({
        selector: 'dcl-wrapper',
        template: "<div #target></div>"
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], DclWrapper);
exports.DclWrapper = DclWrapper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9zaGFyZWQvbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF1STtBQU92SSxJQUFhLFVBQVU7SUFNckIsb0JBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBRjlDLHNCQUFpQixHQUFXLEtBQUssQ0FBQztJQUVlLENBQUM7SUFFMUQsb0NBQWUsR0FBZjtRQUNFLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxvQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFqQ2dEO0lBQTlDLGdCQUFTLENBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7OzBDQUFRO0FBQzdDO0lBQVIsWUFBSyxFQUFFOzt3Q0FBTTtBQUZILFVBQVU7SUFMdEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7S0FDaEMsQ0FBQztxQ0FROEIsK0JBQXdCO0dBTjNDLFVBQVUsQ0FrQ3RCO0FBbENZLGdDQUFVIiwiZmlsZSI6InNoYXJlZC9sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsICBDb21wb25lbnRSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RjbC13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI3RhcmdldD48L2Rpdj5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGNsV3JhcHBlciB7XHJcbiAgQFZpZXdDaGlsZCgndGFyZ2V0Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSB0YXJnZXQ7XHJcbiAgQElucHV0KCkgdHlwZTtcclxuICBjbXBSZWY6Q29tcG9uZW50UmVmPGFueT47XHJcbiAgcHJpdmF0ZSBpc1ZpZXdJbml0aWFsaXplZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHJcbiAgdXBkYXRlQ29tcG9uZW50KCkge1xyXG4gICAgaWYoIXRoaXMuaXNWaWV3SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5jbXBSZWYpIHtcclxuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudHlwZSk7XHJcbiAgICB0aGlzLmNtcFJlZiA9IHRoaXMudGFyZ2V0LmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy51cGRhdGVDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaXNWaWV3SW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGVDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYodGhpcy5jbXBSZWYpIHtcclxuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
