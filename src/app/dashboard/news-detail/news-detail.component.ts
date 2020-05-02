import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from 'src/app/core/services/news.detail.service';
import { INews } from 'src/app/shared/interfaces/INews';

@Component({
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  news: INews[];
  constructor(private newsService:NewsDetailService) { }

  ngOnInit(): void {
    this.listAllNews();
  }
  
  listAllNews(){
    this.newsService.getNewsDetails().subscribe( news => {
      this.news =  news;
    });
  }
}
