import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenucomboPage } from './menucombo.page';

describe('MenucomboPage', () => {
  let component: MenucomboPage;
  let fixture: ComponentFixture<MenucomboPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucomboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
