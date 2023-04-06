import { Component, Input } from '@angular/core';
import { ServicesContent } from 'src/app/models/section.content.model';

@Component({
  selector: 'section-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  @Input() content!: ServicesContent;

  public get id() { return this.content.id; }
  public get header() { return this.content.header }
  public get title() { return this.content.title }
  public get cards() { return this.content.cards }


}
