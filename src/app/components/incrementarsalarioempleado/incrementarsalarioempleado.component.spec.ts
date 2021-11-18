import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementarsalarioempleadoComponent } from './incrementarsalarioempleado.component';

describe('IncrementarsalarioempleadoComponent', () => {
  let component: IncrementarsalarioempleadoComponent;
  let fixture: ComponentFixture<IncrementarsalarioempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementarsalarioempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementarsalarioempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
