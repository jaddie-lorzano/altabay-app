import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { NavBarModule } from '../../ui/nav-bar/nav-bar.module';
import { HomePageRoutingModule } from './home.page.routing.module';
import { SectionModule } from '../../ui/section/section.module';
import { FooterModule } from '../../ui/footer/footer.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    NavBarModule,
    FooterModule,
    SectionModule,
    HomePageRoutingModule,
  ]
})
export class HomeModule { }
