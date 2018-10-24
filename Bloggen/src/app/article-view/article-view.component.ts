import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  constructor(private databaseService: DatabaseService, private router: Router, private route: ActivatedRoute,
    private contetfulService : ContentfulService) { }
    private post : Post;
    
    ngOnInit() {  
      
    const postId = this.route.snapshot.paramMap.get('id');
    this.contetfulService.getArticle(postId).then(result => {
      // console.log("post", result.sys.id);
      this.post = {
        id: result.sys.id,
        title: result.fields.title,
        description: result.fields.description,
        text: result.fields.text,
        imageUrl: result.fields.image.fields.file.url,
        frontpageUrl: result.fields.hasOwnProperty("frontpageImage") ? result.fields.frontpageImage.fields.file.url : "",
        date: "", // skriv noget her oBS obs obs !!!!!
        category: result.fields.category,
        showOnFrontpage: result.fields.showOnFrontpage
      }
    })
    // console.log(postId)
  }
}
