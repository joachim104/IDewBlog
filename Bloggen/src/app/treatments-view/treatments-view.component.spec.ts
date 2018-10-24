import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsViewComponent } from './treatments-view.component';

describe('TreatmentsViewComponent', () => {
  let component: TreatmentsViewComponent;
  let fixture: ComponentFixture<TreatmentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
