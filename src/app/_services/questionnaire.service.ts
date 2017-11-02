import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  URLSearchParams
} from '@angular/http';
import '../rxjs';
import { Observable } from 'rxjs/Observable';
import { Questionnaire } from '../questionnairemodel/questionnaire';
@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getquestionnaires(_portalHost: string, _plantCode: string): Observable<{}> {
    let params = new URLSearchParams();
    params.set('portalHost', _portalHost);
    params.set('plantCode', _plantCode);
    // return this.http.get('./assets/jsons/test.json').timeout(15000).map(this.extractData).catch(this.handleError);
    return this.http.post('http://localhost:8081/ssm/spring/qusetionnaire', params).timeout(15000).map(this.extractData).catch(this.handleError);
  }
  getquestionnaire(_id: string): Observable<{}> {
    let params = new URLSearchParams();
    params.set('id', _id);
    return this.http.get('http://localhost:8081/ssm/spring/qusetionnaire/getUser', { search: params }).timeout(15000).map(this.extractData).catch(this.handleError);
  }
  getquestionnairebypage(_currentpage: any): Observable<{}> {
    let params = new URLSearchParams();
    params.set('currentPage', _currentpage);
    return this.http.get('http://localhost:8081/ssm/spring/qusetionnaire/main', { search: params }).timeout(15000).map(this.extractData).catch(this.handleError);
  }
  getquestionnairebypagebegin(_portalHost: string, _plantCode: string): Observable<{}> {
    let params = new URLSearchParams();
    params.set('portalHost', _portalHost);
    params.set('plantCode', _plantCode);
    return this.http.get('http://localhost:8081/ssm/spring/qusetionnaire/main', params).timeout(15000).map(this.extractData).catch(this.handleError);
  }
  getquestionnairebytitle(_title: string): Observable<{}> {
    let params = new URLSearchParams();
    params.set('title', _title);
    return this.http.get('http://localhost:8081/ssm/spring/qusetionnaire/Searchbyname', { search: params }).timeout(15000).map(this.extractData).catch(this.handleError);
  }

  delete(_portalHost: string, _id: string): Observable<{}> {
    let params = new URLSearchParams();
    // params.set('portalHost', _portalHost);
    params.set('id', _id);
    // return this.http.get('./assets/jsons/test.json').timeout(15000).map(this.extractData).catch(this.handleError);
    // return this.http.post('http://localhost:8081/ssm/spring/qusetionnaire', params).timeout(15000).map(this.extractData).catch(this.handleError);
    return this.http.get('http://localhost:8081/ssm/spring/qusetionnaire/delete', { search: params }).timeout(15000).map(this.extractData).catch(this.handleError);
  }
  add(_answer: string, _title: string): Observable<{}> {
    let params = new URLSearchParams();
    params.set('title', _title);
    params.set('answer', _answer);
    // return this.http.get('./assets/jsons/test.json').timeout(15000).map(this.extractData).catch(this.handleError);
    // return this.http.post('http://localhost:8081/ssm/spring/qusetionnaire', params).timeout(15000).map(this.extractData).catch(this.handleError);
    return this.http.get('http://localhost:8081/ssm/spring/qusetionnaire/addquestion', { search: params }).timeout(15000).map(this.extractData).catch(this.handleError);
  }
  update(_id:string,_answer: string, _title: string): Observable<{}> {
    let params = new URLSearchParams();
    params.set('id', _id);
    params.set('title', _title);
    params.set('answer', _answer);
    // return this.http.get('./assets/jsons/test.json').timeout(15000).map(this.extractData).catch(this.handleError);
    // return this.http.post('http://localhost:8081/ssm/spring/qusetionnaire', params).timeout(15000).map(this.extractData).catch(this.handleError);
    return this.http.get('http://localhost:8081/ssm/spring/qusetionnaire/updateUser', { search: params }).timeout(15000).map(this.extractData).catch(this.handleError);
  }
  /**
    * [extractData description]
    * @param  {Response} res [description]
    * @return {[type]}       [description]
    */
  private extractData(res: Response) {
    if (res['_body'] == "" || res['_body'] == null) return null;
    let body = res.json();
    // return body.data || {};
    return body || {};
  }

  /**
   * [handleError description]
   * @param  {any}    error [description]
   * @return {[type]}       [description]
   */
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
