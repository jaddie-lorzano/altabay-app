import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../shell/auth-shell.component')
      .then(c => c.AuthShellComponent)
  }
] as Route[];
