import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsserviceService } from 'src/app/service/newsservice.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent {
  category : string = "General";
  route : string = "";

  newsList : any = [];
  totalResults: number = 0;
  totalPages: number = 0;
  currPage: number = 1;

  prevDisabled = true;
  nextDisabled = false;

  constructor(private newsService : NewsserviceService, private router : Router) {
  }

  ngOnInit(): void {
      this.getNews();
  }

  prevPage() {
    this.currPage -= 1;
    this.newsList = [];
    this.getNews();
  }

  nextPage() {
    this.currPage += 1;
    this.newsList = [];
    this.getNews();
  }

  getNews() {
    this.route = this.router.url;
      if(this.route.length > 1){
        this.category = this.route.substring(1);
      }
      this.newsService.getAllNews(this.category, this.currPage).subscribe(data => {
        console.log(data);
        this.newsList = data.articles;
        this.totalResults = data.totalResults;
        this.totalPages = Math.ceil(this.totalResults/12);
        console.log(this.totalPages);
      });
  }
}
