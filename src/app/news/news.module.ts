import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './components/news/news.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    NewsComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
  ],
})
export class NewsModule {
}
