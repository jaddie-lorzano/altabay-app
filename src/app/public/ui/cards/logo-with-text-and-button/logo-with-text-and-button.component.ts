import { Component, Input } from '@angular/core';
import { LogoTextAndButtonCard } from 'src/app/models/card.model';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'card-logo-with-text-and-button',
  templateUrl: './logo-with-text-and-button.component.html',
  styleUrls: ['./logo-with-text-and-button.component.scss']
})
export class LogoWithTextAndButtonComponent {
  @Input() card!: LogoTextAndButtonCard;

  onButtonClick(link: Link) {
    window.open(link.url, '_blank');
  }

}
