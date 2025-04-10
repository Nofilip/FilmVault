import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSpotComponent } from './hidden-spot.component';

describe('HiddenSpotComponent', () => {
  let component: HiddenSpotComponent;
  let fixture: ComponentFixture<HiddenSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenSpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
