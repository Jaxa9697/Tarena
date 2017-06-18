/**
 * Created by Jahongir on 13-Apr-17.
 */
import {
  Component, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentRef,
  Type
} from '@angular/core';
import { HeaderService }     from '../shared/header.service';
import { AtcListComponent }  from './atc-list.component';
import { VlanComponent }     from "./vlan.component";
import { MainComponent }     from "./main.component";
import { ReportComponent }   from "./report.component";
import { WifiComponent }     from "./wifi.component";
import {OpticsComponent} from "./optics.component";
import {PrivilegeComponent} from "./privilege.component";
import {Privilege} from "../shared/components.model";
import {MdSnackBar} from "@angular/material";
import {ProfileComponent} from "./profile.component";

@Component({
  selector: 'header-app',
  templateUrl: '/app/components/views/header.component.html',
  providers: [ HeaderService ]
})

export class HeaderComponent{
  @Input() user: Privilege;
  component: string = "HHHH";

  @ViewChild('content', {read: ViewContainerRef})
  parent: ViewContainerRef;
  type: Type<ReportComponent>;
  cmpRef: ComponentRef<Component>;

  //Components
  reportCmp = ReportComponent;
  mainCmp   = MainComponent;
  vlanCmp   = VlanComponent;
  atcCmp    = AtcListComponent;
  wifiCmp   = WifiComponent;
  opticsCmp = OpticsComponent;
  privCmp   = PrivilegeComponent;
  profCmp   = ProfileComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              public snackBar: MdSnackBar){}

  ngOnInit(){
    this.createComponentDynamically(this.mainCmp);
  }

  createComponentDynamically(cmp){
    if(this.cmpRef) this.cmpRef.destroy();
    this.type = cmp;

    const childComponent = this.componentFactoryResolver.resolveComponentFactory(this.type);
    let CmpRef = this.parent.createComponent(childComponent);
        // CmpRef.changeDetectorRef.detectChanges();
        CmpRef.instance.user = this.user;
        this.component = CmpRef.instance.cmpName;
        // CmpRef.instance.cmpName.subscribe(name => this.component = name);

    this.cmpRef = CmpRef;
    // this.snackBar.open('Component created','ok', { duration: 500});
  }
}
