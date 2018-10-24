import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsArticleComponent } from './treatments-article.component';

describe('TreatmentsArticleComponent', () => {
  let component: TreatmentsArticleComponent;
  let fixture: ComponentFixture<TreatmentsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
