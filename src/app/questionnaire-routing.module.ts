import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './_guards/index';
import { MyqusetionnaireComponent } from './myqusetionnaire/myqusetionnaire.component';
// import { HeplpageComponent } from './heplpage/heplpage.component';
import { UpdatequestionnaireComponent } from './updatequestionnaire/updatequestionnaire.component';
import { SearchComponent } from './search/search.component';
import { OptionComponent } from './option/option.component';
import { MenuComponent } from './menu/menu.component';

const questionnaireRoutes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'questionnaire',
        component: MyqusetionnaireComponent,
        canActivate: [AuthGuard],
      
      },
      {
        path: 'option',
        component: OptionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'updatequestionnaire/:id',
        component: UpdatequestionnaireComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'search/:title',
        component: SearchComponent,
        canActivate: [AuthGuard]

      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(questionnaireRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionnaireRoutingModule { }
