import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.css']
})
export class ArticleGridComponent implements OnInit {

  posts: Post[] = [];
  articleGridPosts: Post[] = [];

  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {

    // Her fylder vi posts array ud med alle artikler og putter efterfølgende de 3 senest uploaded artikler ind i articleGridPosts arrayet.
    this.databaseService.addPostsToArray().then(list => {
      this.posts = list;
      // console.log(this.posts);
      this.articleGridPosts =  this.posts.slice(this.posts.length - 3);
      // console.log("heeey", this.articleGridPosts);
    })
  }

  private navigate (postId) {

    this.router.navigate(['/article-view', postId]);

  }
}

