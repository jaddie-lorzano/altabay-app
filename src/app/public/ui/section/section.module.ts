import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeroComponent } from './top-hero/top-hero.component';
import { CtaComponent } from './cta/cta.component';
import { DataComponent } from './data/data.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [
    TopHeroComponent,
    CtaComponent,
    DataComponent,
    ServicesComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    TopHeroComponent,
    CtaComponent,
    DataComponent,
    ServicesComponent,
    TestimonialsComponent
  ]
})
export class SectionModule { }
