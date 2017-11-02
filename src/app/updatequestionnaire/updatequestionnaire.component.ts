import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionService } from '../_services/questionnaire.service';

@Component({
  selector: 'app-updatequestionnaire',
  templateUrl: './updatequestionnaire.component.html',
  styleUrls: ['./updatequestionnaire.component.css']
})
export class UpdatequestionnaireComponent implements OnInit {
  questionnaire: any;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  // .switchMap((params: ParamMap) => this.questionService.getquestionnaire(+params.get('id')))
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.questionService.getquestionnaire(params.get('id')).subscribe(data => {
        this.questionnaire=data
      }, error => { });
    });
  }
  update(value:any,value1: any,value2:any): void {
    this.questionService.update(value,value1, value2).subscribe(
      data1 => {

      },
      error => { }
    );
  }
  goBack(): void {
    this.location.back();
  }

}
