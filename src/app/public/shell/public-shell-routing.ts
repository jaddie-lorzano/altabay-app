import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  // {
  //   path: ':id',
  //   loadChildren: () =>
  //     import('../client-detail/client-detail.module').then(
  //       (m) => m.ClientDetailPageModule
  //     ),
  // },
  // {
  //   path: ':id/survey',
  //   loadChildren: () =>
  //     import('../client-survey/client-survey.module').then(
  //       (m) => m.ClientSurveyPageModule
  //     ),
  // },
] as Route[];
