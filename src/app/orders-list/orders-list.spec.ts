import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersList } from './orders-list';
import { ORDERS } from '../model/list-orders';

describe('OrdersList', () => {
  let component: OrdersList;
  let fixture: ComponentFixture<OrdersList>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersList],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
    el = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the section title', () => {
    const h2 = el.querySelector('h2');
    expect(h2?.textContent).toContain('Liste des commandes');
  });

  it('should render a table with headers', () => {
    const headers = el.querySelectorAll('th');
    expect(headers.length).toBe(6);
    expect(headers[0].textContent).toContain('ID');
    expect(headers[1].textContent).toContain('Client');
    expect(headers[2].textContent).toContain('Produit');
    expect(headers[3].textContent).toContain('Quantité');
    expect(headers[4].textContent).toContain('Total');
    expect(headers[5].textContent).toContain('Statut');
  });

  it('should render one row per order', () => {
    const rows = el.querySelectorAll('tbody tr');
    expect(rows.length).toBe(ORDERS.length);
  });

  it('should display the first order client name', () => {
    const firstRow = el.querySelector('tbody tr');
    const tds = firstRow?.querySelectorAll('td');
    expect(tds?.[1].textContent?.trim()).toBe(ORDERS[0].client);
  });
});
