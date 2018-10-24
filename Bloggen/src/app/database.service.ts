import { Injectable } from '@angular/core';
import { Post } from './entities/post';
import { Router } from '@angular/router';
import { ContentfulService } from './contentful.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  posts: Post[];

  constructor(private router: Router, private contentfulService: ContentfulService) { }
  
  public addPostsToArray() : Promise <Post[]>{
    let posts: Post[] = [];
    return new Promise ((resolve) => {
    this.contentfulService.getArticles()
      .then((articles) => {
        //this.articles = articles
        let post: Post;
        // console.log(articles)
        articles.forEach((article) => {
          console.log("artic", article)
          let date = moment(article.fields.date).locale('da').format('LL')
          console.log(date)
          console.log(article.sys.id, "id")

          // console.log(article.fields.date.format('DD-MM-YYYY'))
          post = {
            id: article.sys.id,
            title: article.fields.title,
            description: article.fields.description,
            text: article.fields.text,
            imageUrl: article.fields.image.fields.file.url,
            frontpageUrl: article.fields.hasOwnProperty("frontpageImage") ? article.fields.frontpageImage.fields.file.url : "",
            date: date,
            category: article.fields.category,
            showOnFrontpage: article.fields.showOnFrontpage
          }
          posts.push(post);
        });
        resolve(posts);
        // console.log("Array efter addToArray()", posts);
      }).catch(err => {
        console.log("err", err)
      })
    })
  }
}
