/**
 * Created by Jahongir on 22-May-17.
 */
import { Component, Input } from '@angular/core';
import { HeaderService } from '../shared/header.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'result-app',
  templateUrl: '/app/components/views/result.search.component.html',
  providers: [ HeaderService ]
})

export class ResultSearchComponent{
  @Input() result;

  constructor( private headerService: HeaderService,
               public  activeModal:   NgbActiveModal
  ){}

  saveReport(problem){
    let data = {problem: problem, id: this.result.ID};

    this.headerService.saveReport(data)
      .subscribe((data)=>{
        if (data.message == "ok"){
          alert("Отчет успешно сохранен");
        }
      });
  }
}
