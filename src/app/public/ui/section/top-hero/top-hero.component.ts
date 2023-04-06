import { Component, Input } from '@angular/core';
import { TopHeroContent } from 'src/app/models/section.content.model';

@Component({
  selector: 'section-top-hero',
  templateUrl: './top-hero.component.html',
  styleUrls: ['./top-hero.component.scss']
})
export class TopHeroComponent {

  @Input() content!: TopHeroContent;

  public get id() { return this.content.id; }
  public get title() { return this.content.title }
  public get subtitle() { return this.content.subtitle }
  public get button() { return this.content.button }
  public get bgImage() { return `url(${this.content.bgImage})` }

  onButtonClick(url: string) {
    window.location.href = url;
  }

}
