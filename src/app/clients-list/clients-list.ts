import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { type Client } from '../model/client.model';
import { CLIENTS } from '../model/list-clients';
import { ClientItem } from './client-item/client-item';
import { NewClientItem } from './new-client-item/new-client-item';

@Component({
  selector: 'app-clients-list',
  imports: [ClientItem, NewClientItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './clients-list.html',
  styleUrl: './clients-list.css',
})
export class ClientsList {
  protected readonly clients = signal<Client[]>([...CLIENTS]);
  protected readonly editingClient = signal<Client | null>(null);
  protected readonly isAddingClient = signal(false);
  protected readonly isEditingClient = signal(false);

  onStartAddingClient() {
    this.isAddingClient.set(true);
  }

  onCloseAddingClient() {
    this.isAddingClient.set(false);
    this.isEditingClient.set(false);
    this.editingClient.set(null);
  }

  onNewClientSubmitted(event: { newClient: Omit<Client, 'clientId'> }) {
    const newClient: Client = {
      clientId: Math.max(...this.clients().map(c => c.clientId)) + 1,
      name: event.newClient.name,
      email: event.newClient.email,
      phone: event.newClient.phone,
    };
    this.clients.update(list => [...list, newClient]);
    this.isAddingClient.set(false);
  }

  openEditForm(client: Client) {
    this.editingClient.set(client);
    this.isEditingClient.set(true);
  }

  onEditClientSubmitted(updatedClient: Client) {
    this.clients.update(list =>
      list.map(c =>
        c.clientId === updatedClient.clientId ? updatedClient : c
      )
    );
    this.isEditingClient.set(false);
    this.editingClient.set(null);
  }

  deleteClient(client: Client) {
    this.clients.update(list => list.filter(c => c.clientId !== client.clientId));
  }
}
