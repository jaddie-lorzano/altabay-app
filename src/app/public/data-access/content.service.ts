import { Injectable } from '@angular/core';
import { Navigation } from 'src/app/models/nav.model';
import landingPage from 'src/assets/content/landing-page.content.json';
import navigation from 'src/assets/content/navigation.content.json';
import { LandingPage } from 'src/app/models/pages.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public get landingPageContent(): LandingPage {
    return {
      topHero: landingPage.topHero,
      services: landingPage.services,
      data: landingPage.data,
      about: landingPage.about,
      testimonials: landingPage.testimonials,
      cta: landingPage.cta
    }
  }

  public get navigationContent(): Navigation {
    return {
      menu: navigation.menu,
      viewSlots: navigation.viewSlots,
      logo: navigation.logo,
    }
  }
}
