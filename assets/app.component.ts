import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { HeaderComponent }  from "./components/header.component";
import { HeaderService }    from "./shared/header.service";
import { Privilege }        from './shared/components.model';

@Component({
  selector: 'my-app',
  template: '<div #parent></div>',
  providers: [ HeaderService ]
})

export class AppComponent {

  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;

  user: Privilege;
  constructor (private headerService: HeaderService,
               private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(){
    this.headerService.getUserInfo()
      .subscribe((data)=>{
        const childComponent = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);
        let cmpRef = this.parent.createComponent(childComponent);
            cmpRef.instance.user = this.headerService.getUserPrivileges(data,0);

      });
  }
}
