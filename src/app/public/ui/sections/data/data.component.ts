import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSectionContent } from 'src/app/public/interfaces/section.content.model';

@Component({
  selector: 'section-data',
  standalone: true,
  imports: [CommonModule],
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
