import {Component, Output, EventEmitter, Input} from '@angular/core';
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
@Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

onSubmit() {
  this.addName.emit(this.enteredName);
  this.enteredName = '';
}
}
