import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppNavbar } from './app-navbar';

describe('AppNavbar', () => {
  let component: AppNavbar;
  let fixture: ComponentFixture<AppNavbar>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNavbar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
    el = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a nav element', () => {
    expect(el.querySelector('nav.navbar')).toBeTruthy();
  });

  it('should display the title', () => {
    const h1 = el.querySelector('h1');
    expect(h1?.textContent).toContain('Gestion de Commandes');
  });

  it('should render navigation links', () => {
    const links = el.querySelectorAll('ul li a');
    expect(links.length).toBe(4);
    expect(links[0].textContent).toContain('Accueil');
    expect(links[1].textContent).toContain('Produits');
    expect(links[2].textContent).toContain('Commandes');
    expect(links[3].textContent).toContain('Clients');
  });
});
