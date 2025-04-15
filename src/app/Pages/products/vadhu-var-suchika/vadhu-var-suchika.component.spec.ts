import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadhuVarSuchikaComponent } from './vadhu-var-suchika.component';

describe('VadhuVarSuchikaComponent', () => {
  let component: VadhuVarSuchikaComponent;
  let fixture: ComponentFixture<VadhuVarSuchikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VadhuVarSuchikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VadhuVarSuchikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
