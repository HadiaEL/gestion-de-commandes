import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modale',
  imports: [],
  templateUrl: './delete-modale.html',
  styleUrl: './delete-modale.css',
})
export class DeleteModale {
  @Input({required: true }) itemName!: string;
  @Input({required: true }) itemType!: string; 
  @Output() confirm=  new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
