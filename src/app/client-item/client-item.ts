import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-client-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <tr>
      <td>{{ client().id }}</td>
      <td>{{ client().name }}</td>
      <td>{{ client().email }}</td>
      <td>{{ client().phone }}</td>
      <td class="actions">
        <button class="btn btn-edit" (click)="edit.emit(client())">✏️ Modifier</button>
        <button class="btn btn-delete" (click)="confirmDelete()">🗑️ Supprimer</button>
      </td>
    </tr>
  `,
  styleUrl: './client-item.css',
  host: { style: 'display: contents' },
})
export class ClientItem {
  client = input.required<Client>();
  edit = output<Client>();
  delete = output<Client>();

  confirmDelete() {
    if (confirm(`Supprimer le client "${this.client().name}" ?`)) {
      this.delete.emit(this.client());
    }
  }
}
