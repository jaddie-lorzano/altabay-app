import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/feature/home-shell/home-shell.module').then((m) => m.HomePageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/feature/admin-shell/admin-shell.module').then(
        (m) => m.AdminShellModule
      ),
  },
  // {
  //   path: 'notes',
  //   loadChildren: () =>
  //     import('./notes/feature/notes-shell/notes-shell.module').then(
  //       (m) => m.NotesShellModule
  //     ),
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
