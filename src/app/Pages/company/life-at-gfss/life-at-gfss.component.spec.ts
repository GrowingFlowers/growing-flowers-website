import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtGFSSComponent } from './life-at-gfss.component';

describe('LifeAtGFSSComponent', () => {
  let component: LifeAtGFSSComponent;
  let fixture: ComponentFixture<LifeAtGFSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeAtGFSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeAtGFSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
