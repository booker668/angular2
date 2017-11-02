import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
// import { Questionnaire } from '../questionnairemodel/questionnaire';
import { QuestionService } from '../_services/questionnaire.service';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { OptionComponent } from '../option/option.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myqusetionnaire',
  templateUrl: './myqusetionnaire.component.html',
  styleUrls: ['./myqusetionnaire.component.css']
})
export class MyqusetionnaireComponent implements OnInit {
  currentUser: User;
  questionnaires: any;
  title: string = '';
  answer: string = '';
  answerRequire: boolean = false;
  titleRequire: boolean = false;
  values = '';
  items: MenuItem[];
  questionnaireid: any;
  currentpage: number = 1;
  findbypage: any;
  totalcount: any;
  questionnairesbypage: any;
  totalpage: any;
  nowpage: number;



  constructor(private userService: UserService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  nextPage(currentpage) {
    if (this.currentpage < this.totalpage) {
      this.currentpage++;
    }

    this.getquestionnairesByPage(this.currentpage);



  }
  prePage(currentpage) {
    if (this.currentpage >= 2) {
      this.currentpage--;
    }

    this.getquestionnairesByPage(this.currentpage);


  }

  getquestionnaires(): void {
    this.questionService.getquestionnairebypage('').subscribe(
      data3 => {
        this.findbypage = data3
        this.totalcount = this.findbypage.totalCount;
        this.questionnairesbypage = this.findbypage.lists;
        this.totalpage = this.findbypage.totalPage;
        this.nowpage = this.findbypage.currPage;

      },
      error => { }
    );
  }
  getquestionnairesByPage(currentpage): void {
    this.questionService.getquestionnairebypage(this.currentpage).subscribe(
      data3 => {
        this.findbypage = data3;
        this.totalcount = this.findbypage.totalCount;
        this.questionnairesbypage = this.findbypage.lists;
        this.totalpage = this.findbypage.totalPage;
        this.nowpage = this.findbypage.currPage;
      },
      error => { }
    );
  }




  delete(q: any): void {
    this.questionService.delete('', q.id).subscribe(
      data => {
        // this.getquestionnairesByPage(this.nowpage);
          this.getquestionnairesByPage(this.nowpage);

      },
      error => { }
    );
  }
  add(value1: any, value2: any): void {
    if (this.answer == '' || !this.answer) {
      this.answerRequire = true;
    } else if (this.title == '' || !this.title) {
      this.titleRequire = true;
    }
    else {
    this.answerRequire = false;
      this.titleRequire = false;
      this.questionService.add(value1, value2).subscribe(
        data1 => {
          // this.getquestionnaires();
          this.getquestionnairesByPage(this.totalpage);

        },
        error => { }
      );
    }
  }

  ngOnInit(): void {
    this.getquestionnaires();
  }


}
