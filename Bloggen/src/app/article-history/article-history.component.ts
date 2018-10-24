import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Post } from '../entities/post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-history',
  templateUrl: './article-history.component.html',
  styleUrls: ['./article-history.component.css']
})

@Injectable()
export class ArticleHistoryComponent {

  public posts: Post[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService) { }
  // denne her metode bliver kaldt hver gang komponenten er instantieret




  goToSpecificArticle(articleId) {
    this.router.navigate(['/article', articleId])
  }

}
