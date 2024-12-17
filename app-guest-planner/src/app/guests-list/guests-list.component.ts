import { Component } from '@angular/core';
import {NewGuestComponent} from './new-guest/new-guest.component';
import {GuestComponent} from './guest/guest.component';
import {Guest} from './guest/guest.model';

@Component({
  selector: 'app-guests-list',
  imports: [
    NewGuestComponent,
    GuestComponent
  ],
  templateUrl: './guests-list.component.html',
  styleUrl: './guests-list.component.css'
})
export class GuestsListComponent {
guests: Guest[] = [];
isAddingGuest = false;

  onStartAddGuest() {
    this.isAddingGuest = true;
  }

  onCloseAddGuest() {
    this.isAddingGuest = false;
  }

onAddName (guestName: string) {
  const guest: Guest = {
    id: Math.random().toString(),
    name: guestName,
  }
  this.guests.push(guest);
  this.isAddingGuest = false;
}
}
