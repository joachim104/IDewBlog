import { TestBed } from '@angular/core/testing';

// import { ContentServiceService } from './content-service.service';
import { ContentfulService } from './contentful.service';

describe('ContentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentfulService = TestBed.get(ContentfulService);
    expect(service).toBeTruthy();
  });
});
