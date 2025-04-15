import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortEducationComponent } from './short-education.component';

describe('ShortEducationComponent', () => {
  let component: ShortEducationComponent;
  let fixture: ComponentFixture<ShortEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
