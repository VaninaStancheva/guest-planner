import { Component, Input } from '@angular/core';
import {Guest} from './guest.model';

@Component({
  selector: 'app-guest',
  imports: [],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.css'
})
export class GuestComponent {
@Input ({required: true}) guestName!: Guest;
}
