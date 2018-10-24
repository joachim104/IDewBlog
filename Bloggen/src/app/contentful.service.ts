import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client =  createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token   
  });

  constructor() { }

  getArticles(query?: object): Promise<Entry<any>[]> {
        return this.client.getEntries(Object.assign({
      content_type: 'post'
    }, query))
    .then((res) => res.items);
  }

  getArticle(articleId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'post'
    }, {'sys.id': articleId}))
    .then(res => res.items[0]);
  }
}
