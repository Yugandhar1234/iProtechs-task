import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import {catchError,retry} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private  httpClient:HttpClient) { }

  public getAllEmployees():Observable<any>{
    let dataUrl:string = `https://gist.githubusercontent.com/Yugandhar1234/7f5fd798c968806276dd369f1500394f/raw/6fb7ae88d06ac5c4acc639114b306c40427b1ea9/employees`;
    return this.httpClient.get<any>(dataUrl).pipe(
    retry(1),
    catchError(this.handleError)
    );
  }

  public handleError(error:HttpErrorResponse){
    let errorMessage:string = "";

    if(error.error instanceof ErrorEvent){
      // client side error
      errorMessage = error.error.message;
    }
    else{
      // server side error
      errorMessage = `Status : ${error.status}  MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
