import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  articles: Article[] = [];
  allArticles: Article[] = [];
  totalArticles = 0;

  pageIndex = 0;
  pageSize = 10;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(
    private articleService:ArticleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadArticles();
  }

  async loadArticles() {
    try {
      this.allArticles = await this.articleService.getAllArticles();
      this.articles = this.allArticles.slice(0,10);
      this.totalArticles = this.allArticles.length;
    } catch (error) {
      console.error("Erreur lors de la récupération des articles", error);
    }
  }

  changePage(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.allArticles.length) {
      endIndex = this.allArticles.length;
    }
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.articles = this.allArticles.slice(startIndex, endIndex);
  }

  navigateToAddArticle() {
    this.router.navigate(['/add-article']);
  }
}
