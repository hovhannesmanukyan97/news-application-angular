import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NewsService} from "../services/news/news.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports:[
    RouterModule
  ]
})
export class HeaderComponent {
  constructor(private newsListService:NewsService) {
  }
  searchNews(event:any) {
    const searchValue = event.target.value.toLowerCase();
    const list = this.newsListService.getList();
    console.log(list)
    const filtered = list.filter((x:any)=> {
      return x.title.toLowerCase().includes(searchValue)
    });
    console.log((filtered))
    if(filtered) {
      this.newsListService.setList(filtered);
    }
  }

  clearInput(){

  }
}
