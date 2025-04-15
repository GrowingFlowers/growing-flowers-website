import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeVibestarComponent } from './be-vibestar.component';

describe('BeVibestarComponent', () => {
  let component: BeVibestarComponent;
  let fixture: ComponentFixture<BeVibestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeVibestarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeVibestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
