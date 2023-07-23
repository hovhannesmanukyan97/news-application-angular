import {Route} from "@angular/router";

export const DASHBOARD_ROUTES: Route[] = [
  {path: '', loadComponent: () => import('../dashboard/dashboard.component').then(c => c.DashboardComponent),
  children:[
    {path: '', loadComponent: () => import('../news-list/news-list.component').then(c => c.NewsListComponent)},
    {path: 'details/:id', loadComponent: () => import('../news-details/news-details.component').then(c => c.NewsDetailsComponent)},
  ]
  },
  // ...
  {path:'',redirectTo:'',pathMatch:'full'}
];
