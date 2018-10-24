import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareViewComponent } from './skincare-view.component';

describe('SkincareViewComponent', () => {
  let component: SkincareViewComponent;
  let fixture: ComponentFixture<SkincareViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkincareViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincareViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
