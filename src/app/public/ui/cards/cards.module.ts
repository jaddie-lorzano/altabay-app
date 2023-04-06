import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoWithTextAndButtonComponent } from './logo-with-text-and-button/logo-with-text-and-button.component';



@NgModule({
  declarations: [
    LogoWithTextAndButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoWithTextAndButtonComponent
  ]
})
export class CardsModule { }
