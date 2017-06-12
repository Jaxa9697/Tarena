/**
 * Created by Jahongir on 01-Jun-17.
 */
import { Component, Input } from '@angular/core';
import { HeaderService }    from '../shared/header.service';
import { Vlan, Wifi}        from "../shared/components.model";
import { NgbActiveModal }   from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'add-app',
  templateUrl: '/js/app/components/views/add.wo.component.html',
  providers: [ HeaderService ]
})

export class AddWOComponent{

  @Input() editedWifi: Wifi;
  @Input() editForm;
  @Input() type: number;

  vlans;

  _vlan:  string = "0";
  freeIps: any[] = [];

  constructor( private headerService: HeaderService,
               public  activeModal:   NgbActiveModal
  ){}

  ngOnInit(){
    this.headerService.getVlanList()
      .subscribe((data)=>{
        this.vlans = data.vlans;
        if (this.editedWifi.id){
          let index  = this.vlans.findIndex(x => x.name == this.editedWifi.vlan);
          if(index != -1) this._vlan = "" + this.vlans[index].ID;
        }
      });
  }

  changingVlanSelect(){
    let index  = this.vlans.findIndex(x => x.ID == Number(this._vlan));

    let currentVlan = this.vlans[index];
    let vlan = new Vlan(0,currentVlan.ID, currentVlan.gateway, currentVlan.name,
      currentVlan.id_tariff, currentVlan.subnet_mask);

    this.headerService.getClientsByVlan(vlan)
      .subscribe((data)=>{
        this.freeIps = [];
        data.forEach((el)=>{
          if(el.name == ""){
            this.freeIps.push(el.ipAddress);
          }
        });
      });
  }

  AddNew(name, itMan, address, passport, telephone, phone, ipAddress ){
    let _row = new Wifi(null, null, this.type, name, itMan, address, passport, telephone,
      phone, ipAddress, this._vlan, Number(this.editedWifi.idClient));

    this.headerService.addNewWO(_row)
      .subscribe((data)=>{
        if (data.message == "ok"){
          this.activeModal.close('Close click');
        }
      });
  }

  update(name, itMan, address, passport, telephone, phone, ipAddress){
    let _row = new Wifi(null, null, this.type,  name, itMan, address, passport, telephone,
      phone, ipAddress, this._vlan, Number(this.editedWifi.idClient));

    this.headerService.updateWO(_row)
      .subscribe((data)=>{
        if (data.message == "ok"){
          this.activeModal.close('Close click');
        }
      });
  }
}
