import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeroContent } from 'src/app/public/interfaces/section.content.model';

@Component({
  selector: 'section-top-hero',
  standalone: true,
  imports: [CommonModule],
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
