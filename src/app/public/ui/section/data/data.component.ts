import { Component, Input } from '@angular/core';
import { DataSectionContent } from 'src/app/models/section.content.model';

@Component({
  selector: 'section-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  @Input() content!: DataSectionContent;

  public get id() { return this.content.id; }
  public get title() { return this.content.title }
  public get numbers() { return this.content.numbers }
  public get bgImage() { return `url(${this.content.bgImage})` }
}
