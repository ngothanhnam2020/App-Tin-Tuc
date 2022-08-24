import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// search module
import { NewsService } from 'src/app/services/news.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private newsService: NewsService, private topicService: TopicService) { }

  dataSearch: any;
  searchForm: FormGroup = new FormGroup({
    name : new FormControl(),
  });
  topics: any;

  ngOnInit(): void {
    this.topicService.getAll().subscribe(data => {
      this.topics = data;
    });
  }

  

  onSearch(){
    this.newsService.search(this.searchForm.value.name).subscribe(data =>{
      this.dataSearch = data;
    })
  }
}
