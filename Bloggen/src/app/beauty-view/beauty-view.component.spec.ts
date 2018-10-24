import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyViewComponent } from './beauty-view.component';

describe('BeautyViewComponent', () => {
  let component: BeautyViewComponent;
  let fixture: ComponentFixture<BeautyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
