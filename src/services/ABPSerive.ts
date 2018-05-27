import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ABPService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:8081";
  }
  
  checkBlackListCutomer(customerType: any, custId: any) {
    console.log(customerType+"id"+custId)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.get(this.baseUrl + '/test/' + customerType + '/custId/' + custId, headers)
        .map(res => res.json())
        .subscribe(
        res => {
          if (res) {
            resolve(res);
          } else {
            resolve(false);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }
}