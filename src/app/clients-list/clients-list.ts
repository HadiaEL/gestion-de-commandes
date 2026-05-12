import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Client } from '../model/client.model';
import { CLIENTS } from '../model/list-clients';
import { ClientItem } from './client-item/client-item';

@Component({
  selector: 'app-clients-list',
  imports: [FormsModule, ClientItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './clients-list.html',
  styleUrl: './clients-list.css',
})
export class ClientsList {
  protected readonly clients = signal<Client[]>([...CLIENTS]);
  protected readonly showForm = signal(false);
  protected readonly editingClient = signal<Client | null>(null);

  formName = '';
  formEmail = '';
  formPhone = '';

  openAddForm() {
    this.editingClient.set(null);
    this.formName = '';
    this.formEmail = '';
    this.formPhone = '';
    this.showForm.set(true);
  }

  openEditForm(client: Client) {
    this.editingClient.set(client);
    this.formName = client.name;
    this.formEmail = client.email;
    this.formPhone = client.phone;
    this.showForm.set(true);
  }

  saveClient() {
    if (!this.formName.trim() || !this.formEmail.trim()) return;

    const editing = this.editingClient();
    if (editing) {
      this.clients.update(list =>
        list.map(c =>
          c.clientId === editing.clientId
            ? { ...c, name: this.formName.trim(), email: this.formEmail.trim(), phone: this.formPhone.trim() }
            : c
        )
      );
    } else {
      const newClient: Client = {
        clientId: Math.random(),
        name: this.formName.trim(),
        email: this.formEmail.trim(),
        phone: this.formPhone.trim(),
      };
      this.clients.update(list => [...list, newClient]);
    }
    this.showForm.set(false);
  }

  deleteClient(client: Client) {
    this.clients.update(list => list.filter(c => c.clientId !== client.clientId));
  }

  cancelEdit() {
    this.showForm.set(false);
  }
}
