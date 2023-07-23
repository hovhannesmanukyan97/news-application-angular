import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  needUpdate$:Subject<any> = new Subject()
  allList:any[]=[];
  newsList:any[]=[];

  constructor(private http:HttpClient) { }

  getAllLists():Observable<any>{

    return this.http.get(`${environment.API_URL}posts`).pipe(
      tap((x:any)=> {
        this.setList(x)
        this.allList = x
      })
    )
  }

  getListDetails(id:number):Observable<any>{
    return this.http.get(`${environment.API_URL}posts/${id}`)
  }

  getList(){
    return this.allList;
  }

  setList(list:any){
    this.needUpdate$.next(list)
  }

  getUserById(id:number) {
    return this.http.get(`${environment.API_URL}users/${id}`)

  }
}
