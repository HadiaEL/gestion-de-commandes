import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { type Client } from '../../model/client.model';
import { DeleteModale } from '../../shared/delete-modale/delete-modale';

@Component({
  selector: 'app-client-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DeleteModale],
  templateUrl: './client-item.html',
  styleUrl: './client-item.css',
  host: { style: 'display: contents' },
})
export class ClientItem {
  @Input({required: true }) client!: Client;
  @Output() edit = new EventEmitter<Client>()
  @Output() delete = new EventEmitter<Client>();

  showDeleteModal = false;

  openDeleteModal() {
    this.showDeleteModal = true;
  }

  onConfirmDelete() {
    this.delete.emit(this.client);
    this.showDeleteModal = false;
  }

  onCancelDelete() {
    this.showDeleteModal = false;
  }
}
