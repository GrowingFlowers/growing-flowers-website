import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortRealEstateComponent } from './short-real-estate.component';

describe('ShortRealEstateComponent', () => {
  let component: ShortRealEstateComponent;
  let fixture: ComponentFixture<ShortRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortRealEstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
