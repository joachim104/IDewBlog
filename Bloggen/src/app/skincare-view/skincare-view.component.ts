import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-skincare-view',
  templateUrl: './skincare-view.component.html',
  styleUrls: ['./skincare-view.component.css']
})
export class SkincareViewComponent implements OnInit {

  posts : Post[] = []; 
  skincarePosts : Post[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {

    this.databaseService.addPostsToArray().then(list   => {
      this.posts = list;
      // console.log("all categorys array", this.posts);

      for (let i = 0; i < this.posts.length; i++){
        if (this.posts[i].category === 'Skincare' ){
          this.skincarePosts.push(this.posts[i]);
        }
        // console.log("skincare array:" , this.skincarePosts);
      }
    }) 
  }

}
