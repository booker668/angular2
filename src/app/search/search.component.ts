import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionService } from '../_services/questionnaire.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  questionnaire: any;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.questionService.getquestionnairebytitle(params.get('title')).subscribe(data => {
        // console.log(data);
        this.questionnaire=data
      }, error => { });
    });
  }
  goBack(): void {
    this.location.back();
  }

}
