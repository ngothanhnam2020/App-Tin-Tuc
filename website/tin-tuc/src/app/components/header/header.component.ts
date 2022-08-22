import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private topicService : TopicService) { }

  topics: any;
  searchName: any;
  searchForm: FormGroup = new FormGroup({
      name: new FormControl(),
  }); 

  ngOnInit(): void {

    this.topicService.getAll().subscribe(res =>{
      
      this.topics = res
    
    });

  }

}
