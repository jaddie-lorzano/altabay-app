import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./public/shell/public-shell-routing'),
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
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
