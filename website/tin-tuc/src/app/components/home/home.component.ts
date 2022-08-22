import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private topicService : TopicService, private newsService : NewsService) { }


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
  }

  topics: any;
  news : any;
  newsList : any;
  internationalNews: any;
  businessNews: any;
  educationNews: any;
  culturedNews: any;
  technologyNews: any;
  entertainmentNews: any;
  sportsNews: any;
  healthNews: any;
  travelNews: any;
  carNews: any;

  ngOnInit(): void {

    this.topicService.getAll().subscribe(res =>{
      this.topics = res
    });

    // banner
    this.newsService.getById(1).subscribe(data =>{
      this.news = data
    });

    // new news
    this.newsService.getByTopic(2).subscribe(data =>{
      this.newsList = data
    });

    // International news
    this.newsService.getByTopic(0).subscribe(data =>{
      this.internationalNews = data
    });

    // Business news
    this.newsService.getByTopic(2).subscribe(data =>{
      this.businessNews = data
    });

    // Education news
    this.newsService.getByTopic(4).subscribe(data =>{
      this.educationNews = data
    });

    // Cultured news
    this.newsService.getByTopic(3).subscribe(data =>{
      this.culturedNews = data
    });

    // Technology  news
    this.newsService.getByTopic(5).subscribe(data =>{
      this.technologyNews = data
    });

    // Entertainment news
    this.newsService.getByTopic(6).subscribe(data =>{
      this.entertainmentNews = data
    });

    // Sports news
    this.newsService.getByTopic(7).subscribe(data =>{
      this.sportsNews = data
    });

    // Health news
    this.newsService.getByTopic(8).subscribe(data =>{
      this.healthNews = data
    });

    // Travel news
    this.newsService.getByTopic(9).subscribe(data =>{
      this.travelNews = data
    });

    // Car news
    this.newsService.getByTopic(9).subscribe(data =>{
      this.carNews = data
    });

  }

}
