import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortHealthcareComponent } from './short-healthcare.component';

describe('ShortHealthcareComponent', () => {
  let component: ShortHealthcareComponent;
  let fixture: ComponentFixture<ShortHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortHealthcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
