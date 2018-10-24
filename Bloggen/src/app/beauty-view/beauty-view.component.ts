import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-beauty-view',
  templateUrl: './beauty-view.component.html',
  styleUrls: ['./beauty-view.component.css']
})
export class BeautyViewComponent implements OnInit {

  posts : Post[] = []; 
  beautyPosts : Post[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {

    this.databaseService.addPostsToArray().then(list   => {
      this.posts = list;
      // console.log("all categorys array", this.posts);

      for (let i = 0; i < this.posts.length; i++){
        if (this.posts[i].category === 'Beauty' ){
          this.beautyPosts.push(this.posts[i]);
        }
        // console.log("beauty posts array:" , this.beautyPosts);
      }
    }) 
  }
}
