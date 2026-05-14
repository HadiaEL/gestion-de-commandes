import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { type Client } from '../../model/client.model';

@Component({
  selector: 'app-client-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './client-item.html',
  styleUrl: './client-item.css',
  host: { style: 'display: contents' },
})
export class ClientItem {
  @Input({required: true }) client!: Client;
  @Output() edit = new EventEmitter<Client>()
  @Output() delete = new EventEmitter<Client>();

  confirmDelete() {
    if (confirm(`Supprimer le client "${this.client.name}" ?`)) {
      this.delete.emit(this.client);
    }
  }
}
