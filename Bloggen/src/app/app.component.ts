import { Component, OnInit } from '@angular/core';
import { ArticleViewComponent } from './article-view/article-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = 'Bloggen';
  public currentSite : number;
  constructor (private articleView : ArticleViewComponent) {}

  ngOnInit(): void {  
  }


  }


