import { Component, Input, OnInit } from '@angular/core';
import { TestimonialsContent } from 'src/app/models/section.content.model';

@Component({
  selector: 'section-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  currentIndex!: number;

  @Input() content!: TestimonialsContent;

  ngOnInit() {
    this.currentIndex = 0;
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 8000);
  }

  public get id() { return this.content.id; }
  public get header() { return this.content.header }
  public get testimonials() { return this.content.entries }
}
