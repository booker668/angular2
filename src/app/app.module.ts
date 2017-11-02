import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YourAppModule } from './YourAppModule';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { MyqusetionnaireComponent } from './myqusetionnaire/myqusetionnaire.component';
import { HeplpageComponent } from './heplpage/heplpage.component';
import { QuestionService } from './_services/questionnaire.service';
import { UpdatequestionnaireComponent } from './updatequestionnaire/updatequestionnaire.component';
import { SearchComponent } from './search/search.component';
import { OptionComponent } from './option/option.component';
import { MenuComponent } from './menu/menu.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    YourAppModule,
    QuestionnaireRoutingModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyqusetionnaireComponent,
    HeplpageComponent,
    UpdatequestionnaireComponent,
    SearchComponent,
    OptionComponent,
    MenuComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    QuestionService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
