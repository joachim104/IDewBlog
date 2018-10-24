import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleGridComponent} from './article-grid/article-grid.component';
import { ArticleHistoryComponent} from './article-history/article-history.component';
import { FpArticleComponent} from './fp-article/fp-article.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { TreatmentsViewComponent } from './treatments-view/treatments-view.component';
import { SkincareViewComponent } from './skincare-view/skincare-view.component';
import { HairNailsViewComponent } from './hair-view/hair-view.component';
import { BeautyViewComponent} from './beauty-view/beauty-view.component';
import { ForeverViewComponent} from './forever-view/forever-view.component';
import { TreatmentsArticleComponent } from './treatments-article/treatments-article.component';



const routes: Routes = [

  { path: '', redirectTo: '/fp-article', pathMatch: 'full' },
  { path: 'article-grid', component: ArticleGridComponent },
  { path: 'article-history', component: ArticleHistoryComponent },
  { path: 'fp-article', component: FpArticleComponent },
  { path: 'article-view/:id', component: ArticleViewComponent },
  { path: 'treatments-view', component: TreatmentsViewComponent },
  { path: 'skincare-view', component: SkincareViewComponent},
  { path: 'hair-view', component: HairNailsViewComponent},
  { path: 'beauty-view', component: BeautyViewComponent},
  { path: 'forever-view', component: ForeverViewComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
