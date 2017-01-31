import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class AccordionService {

  constructor(private http:Http) {

  }

  getAccordions():Observable<any> {
    return this.http.get("https://api.github.com/users").map((res:Response)=> res.json())
      .catch((error:any)=> Observable.throw(error.json || "server error"));

  }

}
