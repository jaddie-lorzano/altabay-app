import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../pages/home/home.component')
      .then(c => c.HomeComponent)
  },
  {
    path: 'forms',
    loadChildren: () => import('../forms/forms.route')
  }
] as Route[];
