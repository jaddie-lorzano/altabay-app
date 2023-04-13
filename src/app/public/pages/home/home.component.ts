import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeroComponent } from "../../ui/sections/top-hero/top-hero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        TopHeroComponent
    ]
})
export class HomeComponent {

}
