import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repaso1 } from './repaso1';

describe('Repaso1', () => {
  let component: Repaso1;
  let fixture: ComponentFixture<Repaso1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Repaso1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Repaso1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
