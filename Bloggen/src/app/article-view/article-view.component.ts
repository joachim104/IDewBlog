import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ContentfulService } from '../contentful.service';
import * as moment from 'moment';
import * as $ from 'jquery';


@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  initialViewCheck = false

  constructor(private databaseService: DatabaseService, private router: Router, private route: ActivatedRoute,
    private contetfulService: ContentfulService) { }
  private post: Post;

  ngOnInit() {
    console.log("test")
    this.route.params.subscribe(params => {
      this.getPost();
    });

    // console.log(postId)
  }

  getPost() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.contetfulService.getArticle(postId).then(result => {
      let date = moment(result.fields.date).locale('da').format('LL')
      // console.log("post", result.sys.id);
      this.post = {
        id: result.sys.id,
        title: result.fields.title,
        description: result.fields.description,
        text: result.fields.text,
        imageUrl: result.fields.image.fields.file.url,
        frontpageUrl: result.fields.hasOwnProperty("frontpageImage") ? result.fields.frontpageImage.fields.file.url : "",
        date: date, // skriv noget her oBS obs obs !!!!!
        category: result.fields.category,
        showOnFrontpage: result.fields.showOnFrontpage
      }
    }).then(() => {

      // const img = $('.text')
      // console.log(img)
    })
  }

  ngAfterViewChecked() {

    if (!this.initialViewCheck) {
      this.initialViewCheck = true;
    }

    // Centrerer billeder fra blogindlæg
    let image = $('img');
    if (image.length > 0) {
      image.css({ marginLeft: "auto", marginRight: "auto", display: "block" })
      image.attr('width', '50%');
    }
  }
  ;
}
