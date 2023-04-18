import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../ui/footer/footer.component";
import { RouterModule } from '@angular/router';
import { ContentService } from 'src/app/shared/data-access/content.service';

@Component({
    selector: 'app-public-shell',
    standalone: true,
    templateUrl: './public-shell.component.html',
    styleUrls: ['./public-shell.component.scss'],
    imports: [
      CommonModule,
      NavBarComponent,
      FooterComponent,
      RouterModule
    ]
})
export class PublicShellComponent {

  constructor (
    private content: ContentService,
  ) {}
  public footer: string = '© 2023 by Altabay Solutions.';
  public nav = this.content.navigationContent
}
