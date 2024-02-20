import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private axiosService: AxiosService) { }

  getAllArticles(): Promise<Article[]> {
    return this.axiosService.request(
      "GET",
      "/articles/all",
      {}
    ).then((response) => {return response.data}).catch(() => {
      return null;
    });
  }
}
