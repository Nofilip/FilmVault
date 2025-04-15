import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedFilmsComponent } from './related-films.component';

describe('RelatedFilmsComponent', () => {
  let component: RelatedFilmsComponent;
  let fixture: ComponentFixture<RelatedFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedFilmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
