import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpArticleComponent } from './fp-article.component';

describe('FpArticleComponent', () => {
  let component: FpArticleComponent;
  let fixture: ComponentFixture<FpArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
