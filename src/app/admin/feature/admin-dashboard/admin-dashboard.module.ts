import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardPage } from './admin-dashboard.page';
import { AdminPageRoutingModule } from './admin-dashboard.routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [AdminDashboardPage],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ]
})
export class AdminDashboardModule { }
