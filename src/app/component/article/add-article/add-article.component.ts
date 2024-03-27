import { Component } from '@angular/core';
import { Article, emptyArticle } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {
  article: Article = emptyArticle;

  constructor(private articleService: ArticleService) {}

  onSubmit() {
    this.articleService.saveOrUpdateArticle(this.article).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error)
    });
  }
}
