import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private topicService : TopicService) { }

  topics: any;

  ngOnInit(): void {

    this.topicService.getAll().subscribe(res =>{
      
      this.topics = res
    
    });
  }

}
