import { Component } from '@angular/core';
import { ContentService } from '../../data-access/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
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
