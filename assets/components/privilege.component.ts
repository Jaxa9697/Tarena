/**
 * Created by Jahongir on 04-Jun-17.
 */
import {Component, Input, Output} from '@angular/core';
import { NgbModal }        from '@ng-bootstrap/ng-bootstrap';

import { HeaderService } from '../shared/header.service';
import {CRUD, Privilege, Wifi}       from "../shared/components.model";
import {NewUserComponent} from "./profile.component";

@Component({
  selector: 'privilege-app',
  templateUrl: '/app/components/views/privilege.component.html',
  providers: [ HeaderService ]
})

export class PrivilegeComponent{
  @Output() cmpName: string = "Привилегия";

  row: Privilege = new Privilege;
  rows: Privilege[] = [];
  rowsReserve: Privilege[] = [];
  primary = 'primary';
  warn = 'warn';
  accent = 'accent';

  constructor(private modalService: NgbModal,
              private headerService: HeaderService
  ) {}

  ngOnInit(){
    this.headerService.getPrivilegeContent()
      .subscribe((rows)=>{
        this.rows = [];
        rows.forEach((el, i)=>{
          this.rowsReserve.push(this.headerService.getUserPrivileges(el, i+1));
          this.rows.push(this.headerService.getUserPrivileges(el, i+1));
        });
      });
  }

  changePrivileges(id: number){
    let index = this.rows.findIndex(x=> x.id == id);

    let condition = JSON.stringify(this.rows[index]) != JSON.stringify(this.rowsReserve[index]);
    this.rows[index].changed =  condition;
    this.rowsReserve[index].changed = condition;
  }

  savePrivileges(id: number){
    let index = this.rows.findIndex(x=> x.id == id);
    this.headerService.saveUserPrivileges(this.rows[index])
      .subscribe((data)=>{
          this.rows[index].changed = false;
          this.rowsReserve[index] = this.headerService.getUserPrivileges(data.user, index+1);
      });
  }

  addNewUser(){
    let CmpRef = this.modalService.open(NewUserComponent);
  }
}
