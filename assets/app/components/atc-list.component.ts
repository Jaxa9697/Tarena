/**
 * Created by Jahongir on 20-Apr-17.
 */
import {Component, Input, Output} from '@angular/core';
import { NgbModal }         from '@ng-bootstrap/ng-bootstrap';

import { HeaderService } from '../shared/header.service';
import {Atc, AtcList, Privilege}           from "../shared/components.model";
import { AddComponent }  from "./add.component";

@Component({
  selector: 'atcList-app',
  templateUrl: '/js/app/components/views/atc-list.component.html',
  providers: [ HeaderService ]
})

export class AtcListComponent{
  atces: AtcList[] = [];
  atc: Atc = new Atc();

  @Input() user: Privilege;
  @Output() cmpName: string = "Автоматическая телефонная станция";

  constructor(private modalService: NgbModal,
              private headerService: HeaderService,
  ) {}

  ngOnInit(){
    this.headerService.getAtcContent()
      .subscribe((data)=>{

        for (let i=0; i < data.length; i++){
          let atc = new AtcList(data[i].ID, data[i].name, data[i].ipAddress, data[i].alcQuant);
          this.atces.push(atc);
        }
      });
  }

  openModalForm(){
    let CmpRef = this.modalService.open(AddComponent);
        CmpRef.componentInstance.editedAtc = this.atc;
        CmpRef.componentInstance.editForm  = true;
  };
}

