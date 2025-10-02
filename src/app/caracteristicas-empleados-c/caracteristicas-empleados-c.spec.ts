import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleadosC } from './caracteristicas-empleados-c';

describe('CaracteristicasEmpleadosC', () => {
  let component: CaracteristicasEmpleadosC;
  let fixture: ComponentFixture<CaracteristicasEmpleadosC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasEmpleadosC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasEmpleadosC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
