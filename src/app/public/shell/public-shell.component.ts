import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../ui/footer/footer.component";
import { RouterModule } from '@angular/router';

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

}
