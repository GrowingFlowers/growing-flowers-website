import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDreamPropertyComponent } from './my-dream-property.component';

describe('MyDreamPropertyComponent', () => {
  let component: MyDreamPropertyComponent;
  let fixture: ComponentFixture<MyDreamPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDreamPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDreamPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
