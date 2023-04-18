import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesContent } from 'src/app/public/interfaces/section.content.model';
import { LogoWithTextAndButtonComponent } from "../../cards/logo-with-text-and-button/logo-with-text-and-button.component";

@Component({
    selector: 'section-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    imports: [CommonModule, LogoWithTextAndButtonComponent]
})
export class ServicesComponent {
  @Input() content!: ServicesContent;

  public get id() { return this.content.id; }
  public get header() { return this.content.header }
  public get title() { return this.content.title }
  public get cards() { return this.content.cards }
}
