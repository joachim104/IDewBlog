import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-treatments-view',
  templateUrl: './treatments-view.component.html',
  styleUrls: ['./treatments-view.component.css']
})
export class TreatmentsViewComponent implements OnInit {

  posts : Post[] = []; 
  treatmentposts : Post[] = [];

  constructor(private databaseService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.databaseService.addPostsToArray().then(list   => {
      this.posts = list;
      for (let i = 0; i < this.posts.length; i++){
        if (this.posts[i].category === 'Treatments' ){
          this.treatmentposts.push(this.posts[i]);
        }
        // console.log("treatments array:" , this.treatmentposts);
      }
    }) 
  }

  private navigate (postId) {

    this.router.navigate(['/article-view', postId]);

  }

}
