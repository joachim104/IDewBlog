import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-forever-view',
  templateUrl: './forever-view.component.html',
  styleUrls: ['./forever-view.component.css']
})
export class ForeverViewComponent implements OnInit {

  posts: Post[] = [];
  foreverPosts: Post[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {

    this.databaseService.addPostsToArray().then(list => {
      this.posts = list;
      // console.log("all categorys array", this.posts);

      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].category === 'Forever Good') {
          this.foreverPosts.push(this.posts[i]);
        }
        // console.log("forevergood posts array:", this.foreverPosts);
      }
    })
  }

}
