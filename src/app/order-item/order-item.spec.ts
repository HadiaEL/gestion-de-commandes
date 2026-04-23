import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';
import { OrderItem } from './order-item';
import { Order } from '../model/order.model';

describe('OrderItem', () => {
  let component: OrderItem;
  let componentRef: ComponentRef<OrderItem>;
  let fixture: ComponentFixture<OrderItem>;
  let el: HTMLElement;

  const mockOrder: Order = {
    id: 1,
    client: 'Alice Dupont',
    product: 'Laptop HP',
    quantity: 2,
    total: 1799.98,
    status: 'Livrée',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderItem],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItem);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('order', mockOrder);
    await fixture.whenStable();
    el = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the order id', () => {
    const tds = el.querySelectorAll('td');
    expect(tds[0].textContent?.trim()).toBe('1');
  });

  it('should display the client name', () => {
    const tds = el.querySelectorAll('td');
    expect(tds[1].textContent?.trim()).toBe('Alice Dupont');
  });

  it('should display the product', () => {
    const tds = el.querySelectorAll('td');
    expect(tds[2].textContent?.trim()).toBe('Laptop HP');
  });

  it('should display the quantity', () => {
    const tds = el.querySelectorAll('td');
    expect(tds[3].textContent?.trim()).toBe('2');
  });

  it('should display the total with currency', () => {
    const tds = el.querySelectorAll('td');
    expect(tds[4].textContent).toContain('1799.98');
    expect(tds[4].textContent).toContain('€');
  });

  it('should apply livree class for Livrée status', () => {
    const statusTd = el.querySelector('.status');
    expect(statusTd?.classList).toContain('livree');
    expect(statusTd?.textContent?.trim()).toBe('Livrée');
  });

  it('should apply en-attente class for En attente status', async () => {
    componentRef.setInput('order', { ...mockOrder, status: 'En attente' });
    fixture.detectChanges();
    const statusTd = el.querySelector('.status');
    expect(statusTd?.classList).toContain('en-attente');
  });

  it('should apply annulee class for Annulée status', async () => {
    componentRef.setInput('order', { ...mockOrder, status: 'Annulée' });
    fixture.detectChanges();
    const statusTd = el.querySelector('.status');
    expect(statusTd?.classList).toContain('annulee');
  });
});
