import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ArticleGridComponent } from './article-grid/article-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleHistoryComponent } from './article-history/article-history.component';
import { FpArticleComponent } from './fp-article/fp-article.component';
import { ContentfulService } from './contentful.service';
import { ArticleViewComponent } from './article-view/article-view.component';
import { DatabaseService } from './database.service';
import { TreatmentsViewComponent } from './treatments-view/treatments-view.component';
import { SkincareViewComponent } from './skincare-view/skincare-view.component';
import { HairNailsViewComponent} from './hair-view/hair-view.component';
import { BeautyViewComponent } from './beauty-view/beauty-view.component';
import { ForeverViewComponent } from './forever-view/forever-view.component';
import { TreatmentsArticleComponent } from './treatments-article/treatments-article.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticleGridComponent,
    ArticleHistoryComponent,
    FpArticleComponent,
    ArticleViewComponent,
    TreatmentsViewComponent,
    SkincareViewComponent,
    HairNailsViewComponent,
    BeautyViewComponent,
    ForeverViewComponent,
    TreatmentsArticleComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [ContentfulService, ArticleHistoryComponent, DatabaseService, ArticleViewComponent],
  bootstrap: [AppComponent]
})

export class AppModule { 

  constructor (private databaseService : DatabaseService) {
    // this.databaseService.addPostsToArray();
    // console.log("hey", this.databaseService.posts)
  }

}
