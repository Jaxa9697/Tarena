/**
 * Created by Jahongir on 29-May-17.
 */
import {Component, Input, Output} from '@angular/core';
import { NgbModal }        from '@ng-bootstrap/ng-bootstrap';

import { HeaderService } from '../shared/header.service';
import {Privilege, Wifi}       from "../shared/components.model";
import {AddWOComponent} from "./add.wo.component";

@Component({
  selector: 'wifi-app',
  templateUrl: '/js/app/components/views/wifi.component.html',
  providers: [ HeaderService ]
})

export class WifiComponent{
  @Input() user: Privilege;
  @Output() cmpName: string = "Wireless Fidelity";

  wifi: Wifi = new Wifi;
  rows: Wifi[] = [];

  constructor(private modalService: NgbModal,
              private headerService: HeaderService
  ) {}

  ngOnInit(){
    this.headerService.getWOContent('/getWifiContent')
      .subscribe((rows)=>{
        this.rows = rows;
      });
  }

  addWifi(){
    let CmpRef = this.modalService.open(AddWOComponent);
        CmpRef.componentInstance.editedWifi = this.wifi;
        CmpRef.componentInstance.editForm   = true;
        CmpRef.componentInstance.type   = 1;
  }

  deleteWifi(id: number){
    this.headerService.deleteWO(id)
      .subscribe(()=>{
        let index = this.rows.findIndex(x => x.id == id);
          this.rows.splice(index, 1);
      });
  }

  editWifi(id: number){
    let index = this.rows.findIndex(x => x.id == id);
    let CmpRef = this.modalService.open(AddWOComponent);
        CmpRef.componentInstance.editedWifi = this.rows[index];
        CmpRef.componentInstance.editForm   = false;
        CmpRef.componentInstance.type   = 1;
  }
}
