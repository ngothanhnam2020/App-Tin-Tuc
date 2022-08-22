import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private newsService: NewsService, private topicService: TopicService) { }

  id: number = 0;
  news: News = new News();
  sameCategory: any;
  ralatedNews: any;
  topics: any;
  topicId: any;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this.newsService.getById(this.id).subscribe(data => {
      this.news = data;
    });

    this.newsService.getByTopic(this.news.topic_id).subscribe(data => {
      this.sameCategory = data;
    });
    
    this.topicService.getAll().subscribe(data => {
      this.topics = data;
    });

    this.newsService.getByTopic(this.news.topic_id).subscribe(data => {
      this.ralatedNews = data;
    });

  }

}
