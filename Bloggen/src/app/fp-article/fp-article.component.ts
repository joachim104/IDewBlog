import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { DatabaseService } from '../database.service';
import { Post } from '../entities/post';

@Component({
  selector: 'app-fp-article',
  templateUrl: './fp-article.component.html',
  styleUrls: ['./fp-article.component.css']
})
export class FpArticleComponent implements OnInit {

  posts : Post[] = [];
  frontpagePost: Post;
  constructor(private router: Router, private databaseService : DatabaseService) { }

  
  // denne her metode bliver kaldt hver gang komponenten er instantieret
  ngOnInit() {
    
    this.databaseService.addPostsToArray().then(list   => {
      // console.log("as", list)
      list.forEach(item => {
        // console.log(item.showOnFrontpage)
      })
      // hvis der er flere der er true er det ikke altid den rigtige der bliver vist
      this.posts = list.filter(item => item.showOnFrontpage === true)
      this.frontpagePost = this.posts[this.posts.length-1];
      // console.log("test", this.frontpagePost)
    }) 
  }

  public navigate (postId) {
    this.router.navigate(['/article-view', postId]);
  }

}
