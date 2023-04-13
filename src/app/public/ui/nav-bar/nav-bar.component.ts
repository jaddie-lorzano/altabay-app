import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../../interfaces/nav.model';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() content!: Navigation;

  public get navMenu() { return this.content.menu };
  public get link() { return this.content?.viewSlots};
  public get logoUrl() { return this.content?.logo};
  public showSpan: boolean = false;

  onButtonClick(url?: string) {
    if (url) window.location.href = url
  }
}
