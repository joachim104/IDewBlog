import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-hair-view',
  templateUrl: './hair-view.component.html',
  styleUrls: ['./hair-view.component.css']
})
export class HairNailsViewComponent implements OnInit {

  posts : Post[] = []; 
  hairNailsPosts : Post[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {

    this.databaseService.addPostsToArray().then(list   => {
      this.posts = list;
      // console.log("all categorys array", this.posts);

      for (let i = 0; i < this.posts.length; i++){
        if (this.posts[i].category === 'Hair & Nails' ){
          this.hairNailsPosts.push(this.posts[i]);
        }
        // console.log("hair nails array:" , this.hairNailsPosts);
      }
    }) 
  }

}
