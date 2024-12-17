import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-guest',
  imports: [
    FormsModule
  ],
  templateUrl: './new-guest.component.html',
  styleUrl: './new-guest.component.css'
})
export class NewGuestComponent {
enteredName: string = '';
@Output() addName = new EventEmitter<string>();

onSubmit() {
  this.addName.emit(this.enteredName);
  this.enteredName = '';
}
}
