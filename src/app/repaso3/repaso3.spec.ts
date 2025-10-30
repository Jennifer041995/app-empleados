import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repaso3 } from './repaso3';

describe('Repaso3', () => {
  let component: Repaso3;
  let fixture: ComponentFixture<Repaso3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Repaso3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Repaso3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
