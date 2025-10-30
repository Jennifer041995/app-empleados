import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasoInicio } from './repaso-inicio';

describe('RepasoInicio', () => {
  let component: RepasoInicio;
  let fixture: ComponentFixture<RepasoInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepasoInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepasoInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
