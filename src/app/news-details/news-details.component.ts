import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "../services/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {forkJoin, map, Subject, switchMap, takeUntil, withLatestFrom} from "rxjs";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
  standalone: true
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  public detail: any = {}
  private destroy$: Subject<void> = new Subject()

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}): any => {
        return this.getDetail(id).pipe(
          switchMap((data: any) => {
            return this.newsService.getUserById(data.userId).pipe(
              map((x) => {
                data['user'] = x
                return data
              })
            )
          })
        )
      }),
      takeUntil(this.destroy$)
    ).subscribe(detail => {
      console.log(detail)
      this.detail = detail;
    })
  }

  getDetail(id: number) {
    return this.newsService.getListDetails(id)
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
