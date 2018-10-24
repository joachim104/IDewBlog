import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairNailsViewComponent } from './hair-view.component';

describe('HairNailsViewComponent', () => {
  let component: HairNailsViewComponent;
  let fixture: ComponentFixture<HairNailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairNailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairNailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
