import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Client } from '../../model/client.model';

@Component({
  selector: 'app-new-client-item',
  imports: [FormsModule],
  templateUrl: './new-client-item.html',
  styleUrls: ['./new-client-item.css'],
})
export class NewClientItem implements OnInit {
  @Input() editClient: Client | null = null;
  @Output() closeNewClient = new EventEmitter();
  @Output() submitNewClient = new EventEmitter<{ newClient: Omit<Client, 'clientId'> }>();
  @Output() submitEditClient = new EventEmitter<Client>();

  entredClientName = '';
  entredClientEmail = '';
  entredClientPhone = '';

  isEditMode = false;

  ngOnInit() {
    if (this.editClient) {
      this.isEditMode = true;
      this.entredClientName = this.editClient.name;
      this.entredClientEmail = this.editClient.email;
      this.entredClientPhone = this.editClient.phone;
    }
  }

  onClose() {
    this.closeNewClient.emit();
  }

  onSubmit() {
    if (!this.entredClientName.trim() || !this.entredClientEmail.trim()) return;

    if (this.isEditMode && this.editClient) {
      this.submitEditClient.emit({
        clientId: this.editClient.clientId,
        name: this.entredClientName.trim(),
        email: this.entredClientEmail.trim(),
        phone: this.entredClientPhone.trim(),
      });
    } else {
      this.submitNewClient.emit({
        newClient: {
          name: this.entredClientName.trim(),
          email: this.entredClientEmail.trim(),
          phone: this.entredClientPhone.trim(),
        },
      });
    }
  }
}
