import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuburgerPage } from './menuburger.page';

describe('MenuburgerPage', () => {
  let component: MenuburgerPage;
  let fixture: ComponentFixture<MenuburgerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuburgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
