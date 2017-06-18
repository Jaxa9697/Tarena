/**
 * Created by Jahongir on 13-Apr-17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from  "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {
  Atc, CRUD, Problem, Vlan, VlansClients, Wifi, Privilege, ChangePassword, Sign,
  Filter
} from "./components.model";

@Injectable()
export class HeaderService {
  constructor (private http: Http
  ){}

  getAtcContent(){
    return this.http.get('/getAtcContent')
      .map((data: Response )=> {
        return data.json();
      });
  }

  getUserInfo(){
    return this.http.get('/getUserInfo')
      .map((data: Response )=> {
        return data.json();
      });
  }

  getWOContent(query){
    return this.http.get(query)
      .map((data: Response )=> {
        return data.json();
      }).map((data)=>{
        let rows = [];
        if(data){
          data.forEach((el,i)=>{
            let row = new Wifi((i+1), el.ID, el.type, el.name_cl, el.itMan, el.address, el.n_passport,
              el.telephone, el.phone, el.ipAddress, el.vlan, el.id_client);
           rows.push(row);
          });
        }

        return rows;
      });
  }

  getVlanContent(){
    return this.http.get('/getVlanContent')
      .map((data: Response )=> {
        return data.json();
      });
  }

  getPrivilegeContent(){
    return this.http.get('/getPrivilegeContent')
      .map((data: Response )=> {
        return data.json();
      });
  }

  getUserPrivileges(user, number){
    let pAtc    = new CRUD(user.p_atc).getcrud();
    let pVlan   = new CRUD(user.p_vlan).getcrud();
    let pReport = new CRUD(user.p_report).getcrud();
    let pWifi   = new CRUD(user.p_wifi).getcrud();
    let pOptics = new CRUD(user.p_optics).getcrud();

    return new Privilege(user.ID, number, user.username, user.status, pAtc,
      pVlan, pReport, pWifi, pOptics, false);

  }

  logoff(){
    return this.http.get('/logoff')
      .map(()=>{
        window.location.reload();
      });
  }

  getReportContent(){
    return this.http.get('/getReportContent')
      .map((data: Response )=> {
        return data.json();
      });
  }

  getProblemContent(){
    return this.http.get('/getProblemContent')
      .map((data: Response )=> {
        return data.json();
      }).map((data)=>{
        let problems: Problem[] = [];

        data.forEach((el, i)=>{
          let createDate = this.getDate(new Date(el.createDate));
          let solveDate = this.getDate(new Date(el.solveDate));

          if(!el.solveDate){ solveDate = ''; }

          let problem = new Problem(el.ID, (i+1), createDate,
            solveDate, el.username, el.problem, !!el.solveDate, false );

          problems.push(problem);
        });

        return problems;
      });
  }

  getSignContent(){
    return this.http.get('/getSignContent')
      .map((data: Response )=> {
        return data.json();
      });
  }

  getVlanList(){
    return this.http.get('/getVlanList')
      .map((data: Response )=> {
        return data.json();
      }).map((data)=>{
        return {
          vlans: (<any>Object).values(data.vlan),
          atcs: (<any>Object).values(data.atc)
        }
      });
  }

  getAtcContentById(id: number){
    return this.http.get('/getAtcContentById?id=' + id.toString())
      .map((data: Response )=> {
        return data.json();
      });
  }

  getClientsByVlan(vlan: Vlan){
    return this.http.get('/getClientsByVlan?id=' + vlan.id.toString())
      .map((data: Response )=> {
        return data.json();
      }).map((data)=>{

          let quantity = 255 - Number(vlan.subnetMask.split(".")[3]);
          let gatewayArray = vlan.gateway.split(".");

          let idNode = Number(gatewayArray[3]);
          gatewayArray.splice(-1,1);
          let networkNode = gatewayArray.join().replace(/,/g, ".");

          let isData: boolean;
          let client: VlansClients;
          let clients: VlansClients[] = [];

          for (let i=1; i <= quantity; i++){
            let ip = networkNode + "." + (idNode + i);

            for (let j=0; j < data.length; j++){
              if (data[j].ipAddress == ip){
                isData = true;
                client = new VlansClients(i, data[j].name_cl, data[j].telephone, data[j].ipAddress);
                break;
              }else {
                isData = false;
              }
            }

            if(!isData){
              client = new VlansClients(i, '', '', ip);
            }
            clients.push(client);
          }

          return clients;
        }
      );
  }

  addNewVlan(obj: Vlan){
    const body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('/addNewVlan', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  addNewAtc(obj: Atc){
    const body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('/addNewAtc', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  addNewWO(obj: Atc){
    const body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('/addNewWO', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  deleteVlan(id: number){
    return this.http.delete('/deleteVlan?id=' + id)
      .map((data: Response )=> {
        return data.json();
      });
  }

  deleteAtc(id: number){
    return this.http.delete('/deleteAtc?id=' + id)
      .map((data: Response )=> {
        return data.json();
      });
  }

  deleteWO(id: number){
    return this.http.delete('/deleteWO?id=' + id)
      .map((data: Response )=> {
        return data.json();
      });
  }

  updateVlan(obj: Vlan){
    const body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.put('/updateVlan', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  updateAtc(obj: Atc){
    const body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.put('/updateAtc', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  updateWO(obj: Atc){
    const body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.put('/updateWO', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  saveReport(data){
    const body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('/saveReport', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  saveNewProblem(data){
    const body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('/saveNewProblem', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  filterReportRows(data: Filter){
    const body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('/filterReportRows', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  saveUserPrivileges(user: Privilege){
    const body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.put('/saveUserPrivileges', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  solvingProblem(data){
    const body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.put('/saveSolvedProblem', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  searchData(query: string){
    return this.http.get('/searchData?query=' + query)
      .map((data: Response )=> {
        return data.json();
      });
  }

  getResultSearch(id: number){
    return this.http.get('/getResultSearch?id=' + id.toString())
      .map((data: Response )=> {
        return data.json();
      });
  }

  changePassword(password: ChangePassword){
    const body = JSON.stringify(password);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.put('/changePassword', body, { headers: headers })
      .map((data: Response )=> {
        return data.json();
      });
  }

  getDate(date){
    let day  = date.getDate(),
      month  = date.getMonth() + 1,
      year   = date.getFullYear(),
      hour   = date.getHours(),
      minute = date.getMinutes();
      // second = date.getSeconds();

    if (month < 10) { month = '0' + month; }
    if (day < 10)   { day = '0' + day; }
    if (hour < 10)  { hour = '0' + hour; }
    if (minute < 10){ minute = '0' + minute; }
    // if (second < 10){ second = '0' + second; }

    return year + "-" + month + "-" + day + " " + hour + ":" + minute;
  }
}
