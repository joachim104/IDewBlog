import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverViewComponent } from './forever-view.component';

describe('ForeverViewComponent', () => {
  let component: ForeverViewComponent;
  let fixture: ComponentFixture<ForeverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
