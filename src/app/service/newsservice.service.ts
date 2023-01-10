import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  private URL : string = "";
  constructor(private http: HttpClient) {
      this.URL = `${environment.apiURL}/top-headlines?country=in&pageSize=12&apiKey=${environment.newsAPIKEY}`;
  }

  public getAllNews(category: string, page: number) : Observable<any> {
    return this.http.get(this.URL + "&category=" + category + "&page=" + page);
  }
}
