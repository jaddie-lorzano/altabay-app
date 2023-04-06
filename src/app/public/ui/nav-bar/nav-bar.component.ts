import { Component, Input } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Navigation } from 'src/app/models/nav.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() content!: Navigation;

  public get navMenu() { return this.content.menu };
  public get link() { return this.content?.viewSlots};
  public get logoUrl() { return this.content?.logo};
  public showSpan: boolean = false;
  public hideMenu: boolean = false;
  private isMobileView: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      this.isMobileView = result.matches
    });
  }

  onButtonClick(url?: string) {
    if (url) window.location.href = url
  }
  toggleMenu() {
    if (this.isMobileView) {
      this.hideMenu = !this.hideMenu
    }
    this.hideMenu = false
    console.log(`
    hideMenu(): ${this.hideMenu}
    isMobileView(): ${this.isMobileView}
    `)
  }
}

