import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortMatrimonyComponent } from './short-matrimony.component';

describe('ShortMatrimonyComponent', () => {
  let component: ShortMatrimonyComponent;
  let fixture: ComponentFixture<ShortMatrimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortMatrimonyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortMatrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
