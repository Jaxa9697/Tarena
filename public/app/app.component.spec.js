"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app works!'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF1RDtBQUV2RCxpREFBK0M7QUFFL0MsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUN2QixVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2YsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7YUFDYjtTQUNGLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsdUJBQXVCLEVBQUUsZUFBSyxDQUFDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLG1DQUFtQyxFQUFFLGVBQUssQ0FBQztRQUM1QyxJQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDdEQsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLGlDQUFpQyxFQUFFLGVBQUssQ0FBQztRQUMxQyxJQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCwgYXN5bmMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5kZXNjcmliZSgnQXBwQ29tcG9uZW50JywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgICAgXSxcbiAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KSk7XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUgdGhlIGFwcCcsIGFzeW5jKCgpID0+IHtcbiAgICBjb25zdCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQXBwQ29tcG9uZW50KTtcbiAgICBjb25zdCBhcHAgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBleHBlY3QoYXBwKS50b0JlVHJ1dGh5KCk7XG4gIH0pKTtcblxuICBpdChgc2hvdWxkIGhhdmUgYXMgdGl0bGUgJ2FwcCB3b3JrcyEnYCwgYXN5bmMoKCkgPT4ge1xuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgIGNvbnN0IGFwcCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGV4cGVjdChhcHAudGl0bGUpLnRvRXF1YWwoJ2FwcCB3b3JrcyEnKTtcbiAgfSkpO1xuXG4gIGl0KCdzaG91bGQgcmVuZGVyIHRpdGxlIGluIGEgaDEgdGFnJywgYXN5bmMoKCkgPT4ge1xuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGNvbnN0IGNvbXBpbGVkID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBleHBlY3QoY29tcGlsZWQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudCkudG9Db250YWluKCdhcHAgd29ya3MhJyk7XG4gIH0pKTtcbn0pO1xuIl19
