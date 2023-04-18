import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./public/shell/public-shell.component')
      .then(c => c.PublicShellComponent),
    loadChildren: () => import('./public/shell/public-shell-route')
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/shell/auth-shell.component')
    .then(c => c.AuthShellComponent),
    loadChildren: () => import('./auth/shell/auth-shell.route')
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/shell/admin-shell.component')
    .then(c => c.AdminShellComponent),
    loadChildren: () => import('./admin/shell/admin-shell.route')
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'fullpath'
  },
  // {
  //   path: 'clients',
  //   loadChildren: () =>
  //     import('./clients/feature/client-shell/client-shell.module').then(
  //       (m) => m.ClientShellModule
  //     ),
  // },
  // {
  //   path: 'notes',
  //   loadChildren: () =>
  //     import('./notes/feature/notes-shell/notes-shell.module').then(
  //       (m) => m.NotesShellModule
  //     ),
  // },
] as Route[]
