import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repaso2 } from './repaso2';

describe('Repaso2', () => {
  let component: Repaso2;
  let fixture: ComponentFixture<Repaso2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Repaso2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Repaso2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
