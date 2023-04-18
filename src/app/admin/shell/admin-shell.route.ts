import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../shell/admin-shell.component')
      .then(c => c.AdminShellComponent)
  }
] as Route[];
