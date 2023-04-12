import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { TopHeroComponent } from "../../ui/sections/top-hero/top-hero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        NavBarComponent,
        FooterComponent,
        TopHeroComponent
    ]
})
export class HomeComponent {

}
