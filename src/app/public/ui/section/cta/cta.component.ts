import { Component, Input } from '@angular/core';
import { ContactContent } from 'src/app/models/section.content.model';

@Component({
  selector: 'section-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {

  @Input() content!: ContactContent;

  public get id(): string { return this.content.id };
  public get header(): string { return this.content.header };
  public get title(): string { return this.content.title };
  public get address(): string { return this.content.address };
  public get emailAddress(): string { return this.content.email };
  public get mailto(): string { return `mailto:${this.emailAddress}` };
  public get facebook() { return this.content.socialMedia['facebook'] }
  public get linkedIn() { return this.content.socialMedia['linkedIn'] }
  public get bgImage(): string { return `url(${this.content.bgImage})` }

}
