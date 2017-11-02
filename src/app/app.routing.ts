import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {MyqusetionnaireComponent} from './myqusetionnaire/myqusetionnaire.component';
import{HeplpageComponent} from'./heplpage/heplpage.component';
import { UpdatequestionnaireComponent } from './updatequestionnaire/updatequestionnaire.component';
import{SearchComponent} from './search/search.component';
import{OptionComponent} from'./option/option.component';
import { MenuComponent } from './menu/menu.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'questionnaire', component: MyqusetionnaireComponent, canActivate: [AuthGuard] },
    // { path: 'updatequestionnaire/:id', component: UpdatequestionnaireComponent, canActivate: [AuthGuard] },
    // { path: 'search/:title', component: SearchComponent, canActivate: [AuthGuard] },
    // { path: 'option', component: OptionComponent, canActivate: [AuthGuard], outlet: 'popup'},
    // { path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    {path:'help',component:HeplpageComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
