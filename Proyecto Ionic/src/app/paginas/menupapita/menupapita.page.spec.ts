import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenupapitaPage } from './menupapita.page';

describe('MenupapitaPage', () => {
  let component: MenupapitaPage;
  let fixture: ComponentFixture<MenupapitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupapitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
