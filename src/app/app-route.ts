import { Route } from '@angular/router';
import { PublicShellComponent } from './public/shell/public-shell.component';
import { AuthShellComponent } from './auth/shell/auth-shell/auth-shell.component';

export default [
  {
    path: '',
    loadComponent: () => import('./public/shell/public-shell.component')
      .then(c => c.PublicShellComponent),
    loadChildren: () => import('./public/shell/public-shell-route')
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/shell/auth-shell/auth-shell.component')
    .then(c => c.AuthShellComponent),
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
