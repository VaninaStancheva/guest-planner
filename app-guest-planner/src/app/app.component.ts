import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {GuestComponent} from './guests-list/guest/guest.component';
import {GuestsListComponent} from './guests-list/guests-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, GuestComponent, GuestsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-guest-planner';
}
