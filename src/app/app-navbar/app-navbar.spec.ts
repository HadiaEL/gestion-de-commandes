import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppNavbar } from './app-navbar';

describe('AppNavbar', () => {
  let component: AppNavbar;
  let fixture: ComponentFixture<AppNavbar>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNavbar],
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
    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Accueil');
    expect(links[1].textContent).toContain('Commandes');
  });
});
