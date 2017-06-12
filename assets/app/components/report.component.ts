/**
 * Created by Jahongir on 18-May-17.
 */
import {Component, Input, Output} from '@angular/core';

import { HeaderService } from '../shared/header.service';
import {Filter, Privilege, Problem, Report, Sign}           from "../shared/components.model";
import {NgbTabChangeEvent} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'report-app',
  templateUrl: '/js/app/components/views/report.component.html',
  providers: [ HeaderService ]
})

export class ReportComponent{
  @Input() user: Privilege;
  @Output() cmpName: any = "Отчеты";
  page: number = 1;
  //Filter
  users:  any[] = [];
  filter: Filter = new Filter();
  // Tab 1
  reports: Report[] = [];
  // Tab 2
  signs: Sign[] = [];
  sign:  Sign = new Sign();
  // Tab 3
  problems: Problem[] = [];
  problem:  Problem = new Problem();
  //color
  primary: string = 'primary';

  constructor(private headerService: HeaderService) {}

  ngOnInit(){
    this.headerService.getReportContent()
      .subscribe((data)=>{

        for (let i=0; i < data.users.length; i++){
          this.users.push({
            name: data.users[i].username,
            id:   data.users[i].ID
          });
        }
        this.reports = this.getReports(data.reports);
      });
  }

  getReports(data){
    let reports: Report[] = [];

    for (let i=0; i < data.length; i++){
      let date = new Date(data[i].date);
      let report = new Report((i+1), this.headerService.getDate(date), data[i].username  + " "+ data[i].status,
        data[i].name_cl, data[i].telephone, data[i].problem);
      reports.push(report);
    }

    return reports;
  }

  getProblems(data){
    let problems: Problem[] = [];

    data.forEach((el, i)=>{
      let createDate = this.headerService.getDate(new Date(el.createDate));
      let solveDate = this.headerService.getDate(new Date(el.solveDate));

      if(!el.solveDate){ solveDate = ''; }

      let problem = new Problem(el.ID, (i+1), createDate,
        solveDate, el.username, el.problem, !!el.solveDate, false );

      problems.push(problem);
    });

    return problems;
  }

  getSigns(data){
    let signs: Sign[] = [];

    data.forEach((el, i)=>{
      let entryDate = this.headerService.getDate(new Date(el.dateEntry));
      let exitDate  = this.headerService.getDate(new Date(el.dateExit));

      if(!el.dateExit){ exitDate = ''; }

      let sign = new Sign((i+1), entryDate, exitDate, el.username);
      signs.push(sign);
    });

    return signs;
  }

  beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === '3') {

      this.headerService.getProblemContent()
        .subscribe((problems)=>{
          this.problems = problems;
        });
    }else if($event.nextId === '2'){

      this.headerService.getSignContent()
        .subscribe((signs)=>{
          this.signs = this.getSigns(signs);
        });
    }
  };

  solvedChanging(id: number, checked: boolean){
    let index = this.problems.findIndex(x => x.id == id);
    let currentProblem = this.problems[index];

    currentProblem.changed = (currentProblem.status !== checked);
  }

  saveSolvedProblem(id: number, checked: boolean){
    this.headerService.solvingProblem({id: id, solved: checked})
      .subscribe((data)=>{
        let index = this.problems.findIndex(x => x.id == id);
        let currentProblem = this.problems[index];

        if(!data.solveDate){
          currentProblem.dateSolve = '';
        }else {
          currentProblem.dateSolve = data.solveDate;
        }

        currentProblem.changed = false;
        currentProblem.status = checked;
      });
  }

  filterRows(filter: Filter, type: string){
    filter.type = type;

    this.headerService.filterReportRows(filter)
      .subscribe((data)=>{
        if(type == 'report'){
          this.reports = this.getReports(data);
        }else if(type == 'sign'){
          this.signs = this.getSigns(data);
        }else if(type =='problem'){
          this.problems = this.getProblems(data);
        }
      });
  }
}

