import { Component, OnInit } from '@angular/core';
import { ArticleViewComponent } from './article-view/article-view.component';
import { DatabaseService } from './database.service';
import { Post } from './entities/post';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as $ from 'jquery';

// import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = 'Bloggen';
  posts: Post[] = [];
  postForm: FormGroup;
  showDropdown: boolean = false;
  

  constructor(private router: Router, private articleView: ArticleViewComponent, private databaseService: DatabaseService, private fb: FormBuilder) {
    this.initForm();
  }

  initForm(): FormGroup {
    return this.postForm = this.fb.group({
      searchControl: [null]
    })
  }

  selectPost(id) {
    this.postForm.patchValue({ "search": id });
    this.showDropdown = false;
  }

  private navigate (postId) {
    this.router.navigate(['/article-view', postId]);
  }

  ngOnInit(): void {
    let bool = false;
    $('.input-field').click(e => {
      bool = true;
      console.log("test clicked");
    })
    
    $(document).click((e) => {
      if (bool) {
        console.log("lelel")
        this.showDropdown = true;
        bool = false;      
      } else {
        this.showDropdown = false;      
        console.log('uoujadksak');
      }
      var container = $(".searchit");

    });

    this.databaseService.addPostsToArray().then(list => {
      this.posts = list;

      // $(".test").click(function (e) {
      //   console.log("køre det")
      //   var container = $(".test");

      //   if (!container.is(e.target)) {
      //     console.log('heyehey')
      //     $('.test').hide();
      //     container.removeClass('test');
      //   }
      // });

    });
  }

  openDropdown() {
    this.showDropdown = true;
  }

  closeDropdown() {
    // this.showDropdown = !this.showDropdown;
    this.showDropdown = false;
  }

  getSearchValue() {
    return this.postForm.value.searchControl;
  }

}


