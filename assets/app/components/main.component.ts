/**
 * Created by Jahongir on 29-Apr-17.
 */
import {Component, Input, Output} from '@angular/core';
import { HeaderService } from '../shared/header.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResultSearchComponent } from "./result.search.component";
import { Privilege, Problem } from "../shared/components.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'main-app',
  templateUrl: '/js/app/components/views/main.component.html',
  providers: [ HeaderService ]
})

export class MainComponent{
  @Input() user: Privilege;
  @Output() cmpName: string = "Главная";

  results: any[] = [];
  unsolvedProblems: boolean = true;

  problems: Problem[] = [];
  primary: string = 'primary';

  constructor(private headerService: HeaderService,
              private modalService: NgbModal
  ){}

  ngOnInit(){
    this.getUnsolvedProblems();
  }

  search: string;
  problem: string;

  searchEv(){
    let input = this.search;
    if (input !== ""){
      this.headerService.searchData(input)
        .subscribe((data)=>{
          this.results = [];
          for (let i=0; i < data.length; i++){
            this.results.push({
              id:     data[i].ID,
              name:   data[i].name_cl,
              tel:    data[i].telephone,
              ip:     data[i].ipAddress,
              status: data[i].status
            });
          }
        });
      this.getRS(input);
    }else{
      this.results = [];
    }
  }

  getRS(input: string){
    if (this.results.length > 1){

      for (let i=0; i < this.results.length; i++){
        let val = this.results[i].name + ' ' + this.results[i].tel + ' ' + this.results[i].ip;
        if (val == input){
          this.headerService.getResultSearch(this.results[i].id)
            .subscribe((data)=>{
              let CmpRef = this.modalService.open(ResultSearchComponent);
                  CmpRef.componentInstance.result = data;
                  this.search = "";
            });
        }
      }
    }
  }

  solvedChanging(id: number, checked: boolean){
    let index = this.problems.findIndex(x => x.id == id);
    let currentProblem = this.problems[index];

    currentProblem.changed = (currentProblem.status !== checked);
  }

  saveNewProblem(){
    this.headerService.saveNewProblem({problem: this.problem})
      .subscribe((data)=>{
          if (data.message == "ok"){
            alert("Проблема успешно создано");
            this.getUnsolvedProblems();
            this.problem = "";
          }
      });
  }

  getUnsolvedProblems(){
    this.headerService.getProblemContent()
      .subscribe((problems)=>{
        this.problems = problems.filter(el=> !el.status);
        this.unsolvedProblems = (this.problems.length > 0);
      });
  }

  saveSolvedProblem(id: number, checked: boolean){
    this.headerService.solvingProblem({id: id, solved: checked})
      .subscribe(()=>{
        this.getUnsolvedProblems();
      });
  }

}
