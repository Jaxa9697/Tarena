/**
 * Created by Jahongir on 13-Apr-17.
 */
import { Component, Input} from '@angular/core';
import { NgbModal }        from '@ng-bootstrap/ng-bootstrap';

import { HeaderService } from '../shared/header.service';
import {Atc, Privilege}           from "../shared/components.model";
import { AddComponent }  from "./add.component";

@Component({
  selector: 'atc-app',
  templateUrl: '/js/app/components/views/atc.component.html',
  providers: [ HeaderService ]
})

export class AtcComponent{
  @Input() atcId;
  @Input() user: Privilege;

  atc: Atc;
  atces: Atc[] = [];

  constructor(private modalService: NgbModal,
              private headerService: HeaderService
  ) {}

  ngOnInit(){
    this.headerService.getAtcContentById(this.atcId.id)
      .subscribe((data)=>{
        let alcNumber = 1, port = 0, stan = 0, line = 50, vpi = 5, vci = 35,
          pvc = 1, numberPvc = 5, id = -1;
        let isData: boolean;

        for (let j=0; j < 24 * this.atcId.alcQuant; j++){

          port++;
          if (port > 24){ port = 1; alcNumber++; }
          if (stan > 47){ stan = 0; line = 50; }
          if (vpi > 8){ numberPvc = 4; }else { numberPvc = 5;}
          if (pvc > numberPvc){ pvc = 1; vpi++;  vci++; }
          if (vpi > 9){ vpi = 5;  vci = 35; }

          for (let i=0; i < data.length; i++){
            if (data[i].port == port && data[i].alc == alcNumber){

              this.atc = new Atc(data[i].ID, data[i].port, data[i].alc, this.atcId.id, data[i].name_cl, data[i].address,
                data[i].n_passport, data[i].telephone, data[i].phone, data[i].ipAddress, data[i].vlan,
                data[i].macAddress, data[i].stan, data[i].line, data[i].vpi, data[i].vci, data[i].id_client, true);

              isData = true;
              break;
            }else{
              isData = false;
            }
          }

          if (!isData){
            this.atc = new Atc(id, port, alcNumber, this.atcId.id, '', '', '', '', '',
              '','','', stan, line, vpi, vci, null, false);
          }
          id--;
          stan++; line++; pvc++;
          this.atces.push(this.atc);
        }
      });
  }

  addAtc(id: number){
    let index = this.atces.findIndex(x => x.id == id);
    let CmpRef = this.modalService.open(AddComponent);
        CmpRef.componentInstance.editedAtc = this.atces[index];
        CmpRef.componentInstance.editForm  = true;
  }

  deleteAtc(id: number){
    this.headerService.deleteAtc(id)
      .subscribe(()=>{});
  }

  editAtc(id: number){
    let index = this.atces.findIndex(x => x.id == id);
    let CmpRef = this.modalService.open(AddComponent);
        CmpRef.componentInstance.editedAtc = this.atces[index];
        CmpRef.componentInstance.editForm  = false;
  }
}
