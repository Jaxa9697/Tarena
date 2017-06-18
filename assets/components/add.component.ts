/**
 * Created by Jahongir on 29-Apr-17.
 */
import { Component, Input } from '@angular/core';
import { HeaderService } from '../shared/header.service';
import {Atc, Vlan} from "../shared/components.model";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'add-app',
  templateUrl: '/app/components/views/add.component.html',
  providers: [ HeaderService ]
})

export class AddComponent{

  @Input() editedAtc;
  @Input() editForm;
  vlans;
  atcList;

  atc: Atc = new Atc();
  alcNumber: Array<number> = [];

  _vlan:  string = "0";
  _idAtc: string = "0";
  alc:    string = "0";
  freeIps: any[] = [];
  formType: string = "";

  constructor( private headerService: HeaderService,
               public  activeModal:   NgbActiveModal
  ){}

  ngOnInit(){
    if(this.editForm){
      this.formType = "Добавление нового клиента";
    }else {
      this.formType = "Изменение данные клиента";
    }
    this.headerService.getVlanList()
      .subscribe((data)=>{
          this.vlans   = data.vlans;
          this.atcList = data.atcs;

        if (this.editedAtc.port){

          let index  = this.vlans.findIndex(x => x.name == this.editedAtc.vlan);
          let index2 = this.atcList.findIndex(x => x.ID == this.editedAtc.idAtc);

          if(index != -1) this._vlan = "" + this.vlans[index].ID;
          this._idAtc = "" + this.editedAtc.idAtc;

          this.setAlcQuantity(this.atcList[index2].alcQuant);
          this.alc = "" + this.editedAtc.alc;

        }
      });
  }

  setAlcQuantity(quantity: number){
    this.alcNumber = [];
    for (let i=1; i <= quantity; i++) this.alcNumber.push(i);
  }

  changingAlcSelect(){
    let index = this.atcList.findIndex(x => x.ID == Number(this._idAtc));
    this.setAlcQuantity(this.atcList[index].alcQuant);
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

  AddNew(port, name, address, passport, telephone, phone, ipAddress, macAddress, stan, line, vpi, vci){
    let _atc = new Atc(this.editedAtc.id, port, Number(this.alc), Number(this._idAtc), name, address, passport, telephone,
                  phone, ipAddress, this._vlan, macAddress, stan, line, vpi, vci, this.editedAtc.idClient);

    this.headerService.addNewAtc(_atc)
      .subscribe((data)=>{
        if (data.message == "ok"){
          this.activeModal.close('Close click');
        }
      });
  }

  updateAtc(port, name, address, passport, telephone, phone, ipAddress, macAddress, stan, line, vpi, vci){
    let _atc = new Atc(this.editedAtc.id, port, Number(this.alc), Number(this._idAtc), name, address, passport, telephone,
                        phone, ipAddress, this._vlan, macAddress, stan, line, vpi, vci, this.editedAtc.idClient);

    this.headerService.updateAtc(_atc)
      .subscribe((data)=>{
        if (data.message == "ok"){
          this.activeModal.close('Close click');
        }
      });
  }
}
