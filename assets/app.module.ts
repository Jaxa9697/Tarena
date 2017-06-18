import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }     from './app.component';
import { HeaderComponent }  from "./components/header.component";
import { AtcComponent }     from './components/atc.component';
import { AtcListComponent } from './components/atc-list.component';
import { VlanComponent }    from "./components/vlan.component";
import { AddComponent }     from "./components/add.component";
import { MainComponent }    from "./components/main.component";
import { ReportComponent }  from "./components/report.component";
import { ResultSearchComponent }  from "./components/result.search.component";
import { VlansIpComponent } from "./components/ip.vlan.component";
import { WifiComponent }    from "./components/wifi.component";
import { AddWOComponent }   from "./components/add.wo.component";
import { OpticsComponent}   from "./components/optics.component";

import {MaterialModule, MdNativeDateModule} from '@angular/material'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PrivilegeComponent} from "./components/privilege.component";
import {NewUserComponent, ProfileComponent} from "./components/profile.component";

@NgModule({
  declarations: [
    AppComponent,  HeaderComponent,
    AtcComponent,  AtcListComponent,
    VlanComponent, AddComponent,
    MainComponent, ReportComponent,
    ResultSearchComponent, VlansIpComponent,
    WifiComponent,    AddWOComponent,
    OpticsComponent,  PrivilegeComponent,
    ProfileComponent, NewUserComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [
    AppComponent,  HeaderComponent,
    AtcComponent,  AtcListComponent,
    VlanComponent, AddComponent,
    MainComponent, ReportComponent,
    ResultSearchComponent, VlansIpComponent,
    WifiComponent,    AddWOComponent,
    OpticsComponent,  PrivilegeComponent,
    ProfileComponent, NewUserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
