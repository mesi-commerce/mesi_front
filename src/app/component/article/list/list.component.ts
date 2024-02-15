import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  articles: Article[] = [];

	constructor(private articleService:ArticleService) {
	}

  ngOnInit() {
    this.loadArticles();
  }

  async loadArticles() {
    try {
      this.articles = await this.articleService.getAllArticles();
    } catch (error) {
      console.error("Erreur lors de la récupération des articles", error);
    }
  }

}
