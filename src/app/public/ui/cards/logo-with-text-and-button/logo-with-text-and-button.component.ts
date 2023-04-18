import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoTextAndButtonCard } from 'src/app/public/interfaces/card.model';
import { Link } from 'src/app/shared/interfaces/link.model';

@Component({
  selector: 'card-logo-with-text-and-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-with-text-and-button.component.html',
  styleUrls: ['./logo-with-text-and-button.component.scss']
})
export class LogoWithTextAndButtonComponent {
  @Input() card!: LogoTextAndButtonCard;

  onButtonClick(link: Link) {
    window.open(link.url, '_blank');
  }
}
