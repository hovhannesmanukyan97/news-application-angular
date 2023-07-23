import {Component, OnInit, OnDestroy} from '@angular/core';
import {NewsService} from "../services/news/news.service";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {ListItemComponent} from "../list-item/list-item.component";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, ListItemComponent]
})
export class NewsListComponent implements OnInit, OnDestroy {
  public news: any[] = []
  private destroy$: Subject<void> = new Subject()

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getNews();
    this.newsService.needUpdate$
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.news = res;
      })
  }

  getNews() {
    this.newsService.getAllLists()
      .pipe(takeUntil(this.destroy$))
      .subscribe(news => {
        this.news = news;
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
