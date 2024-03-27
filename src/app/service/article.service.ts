import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { Article } from '../model/Article';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private connectedUser:string | null;
  constructor(private axiosService: AxiosService) {
    this.connectedUser = this.axiosService.getConnectedUser();
   }

  getAllArticles(): Promise<Article[]> {
    return this.axiosService.request(
      "GET",
      "/articles/all",
      {}
    ).then((response) => {return response.data}).catch(() => {
      return null;
    });
  }

  getArticleById(articleId: string): Promise<Article | null> {
    return this.axiosService.request(
      "GET",
      `/articles/${articleId}`,
      {}
    ).then((response) => {return response.data}).catch(() => {
      return null;
    });
  }
  
  saveOrUpdateArticle(article: Article): Promise<Article | null> {
    article.vendeur = this.connectedUser ? this.connectedUser : "";
    return this.axiosService.request(
      "POST",
      "/articles/save",
      article
    ).then((response) => {return response.data}).catch(() => {
      return null;
    });
  }
  
  deleteArticleById(articleId: number): Promise<boolean> {
    return this.axiosService.request(
      "DELETE",
      `/articles/${articleId}`,
      {}
    ).then((response) => {return response.data}).catch(() => {
      return false;
    });
  }
  
}
