import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { type Client } from '../../model/client.model';

@Component({
  selector: 'app-client-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './client-item.html',
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
