import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private newsService: NewsService, private topicService: TopicService) { }

  id: number = 0;
  newsList: any;
  topic: any;
  topics: any;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id']; //nhận id topic được gửi từ header

    //lấy tất cả các topic 
    this.topicService.getAll().subscribe(topics =>{
      this.topics = topics;
    });

    //lấy cái topic bằng id được gửi
    this.topicService.getById(this.id).subscribe(topic => {
      this.topic = topic;
    });

    //lấy tất cả các news bằng id topic được gửi đến
    this.newsService.getByTopic(this.id).subscribe(data => {
      this.newsList = data;
    });

  }

}
