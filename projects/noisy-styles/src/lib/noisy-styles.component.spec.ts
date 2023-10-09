import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoisyStylesComponent } from './noisy-styles.component';

describe('NoisyStylesComponent', () => {
  let component: NoisyStylesComponent;
  let fixture: ComponentFixture<NoisyStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoisyStylesComponent]
    });
    fixture = TestBed.createComponent(NoisyStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
