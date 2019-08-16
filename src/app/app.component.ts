import { Component } from '@angular/core';
import { HeroesService } from './heroes/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroesService]
})
export class AppComponent {
  title = 'Heroes';
}
