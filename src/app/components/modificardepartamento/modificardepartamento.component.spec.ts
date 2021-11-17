import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardepartamentoComponent } from './modificardepartamento.component';

describe('ModificardepartamentoComponent', () => {
  let component: ModificardepartamentoComponent;
  let fixture: ComponentFixture<ModificardepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificardepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
