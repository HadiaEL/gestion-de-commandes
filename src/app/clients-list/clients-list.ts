import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../model/client.model';
import { CLIENTS } from '../model/list-clients';
import { ClientItem } from '../client-item/client-item';

@Component({
  selector: 'app-clients-list',
  imports: [FormsModule, ClientItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="clients">
      <div class="header">
        <h2>Liste des clients</h2>
        <button class="btn btn-add" (click)="openAddForm()">+ Ajouter un client</button>
      </div>

      @if (showForm()) {
        <div class="form-overlay" (click)="cancelEdit()">
          <form class="client-form" (ngSubmit)="saveClient()" (click)="$event.stopPropagation()">
            <h3>{{ editingClient() ? 'Modifier le client' : 'Ajouter un client' }}</h3>

            <label>Nom
              <input type="text" [(ngModel)]="formName" name="name" required />
            </label>

            <label>Email
              <input type="email" [(ngModel)]="formEmail" name="email" required />
            </label>

            <label>Téléphone
              <input type="tel" [(ngModel)]="formPhone" name="phone" />
            </label>

            <div class="form-actions">
              <button type="submit" class="btn btn-save">Enregistrer</button>
              <button type="button" class="btn btn-cancel" (click)="cancelEdit()">Annuler</button>
            </div>
          </form>
        </div>
      }

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (client of clients(); track client.id) {
            <app-client-item
              [client]="client"
              (edit)="openEditForm($event)"
              (delete)="deleteClient($event)"
            />
          }
        </tbody>
      </table>
    </section>
  `,
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
          c.id === editing.id
            ? { ...c, name: this.formName.trim(), email: this.formEmail.trim(), phone: this.formPhone.trim() }
            : c
        )
      );
    } else {
      const maxId = this.clients().reduce((max, c) => Math.max(max, c.id), 0);
      const newClient: Client = {
        id: maxId + 1,
        name: this.formName.trim(),
        email: this.formEmail.trim(),
        phone: this.formPhone.trim(),
      };
      this.clients.update(list => [...list, newClient]);
    }
    this.showForm.set(false);
  }

  deleteClient(client: Client) {
    this.clients.update(list => list.filter(c => c.id !== client.id));
  }

  cancelEdit() {
    this.showForm.set(false);
  }
}
