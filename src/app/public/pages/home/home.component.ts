import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeroComponent } from "../../ui/sections/top-hero/top-hero.component";
import { ServicesComponent } from '../../ui/sections/services/services.component';
import { OurPartnersComponent } from '../../ui/sections/our-partners/our-partners.component';
import { CtaComponent } from '../../ui/sections/cta/cta.component';
import { DataComponent } from '../../ui/sections/data/data.component';
import { ContentService } from 'src/app/shared/data-access/content.service';
import { TestimonialsComponent } from "../../ui/sections/testimonials/testimonials.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        CtaComponent,
        DataComponent,
        OurPartnersComponent,
        ServicesComponent,
        TopHeroComponent,
        TestimonialsComponent
    ]
})
export class HomeComponent {

  constructor (
    private content: ContentService,
  ) {}
  private landingPage = this.content.landingPageContent;
  public footer: string = '© 2023 by Altabay Solutions.';
  public nav = this.content.navigationContent
  public topHero = this.landingPage.topHero
  public services = this.landingPage.services
  public data = this.landingPage.data
  public about = this.landingPage.about
  public testimonials = this.landingPage.testimonials
  public cta = this.landingPage.cta
}
