import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {

  constructor(private http: HttpClient){
    this.loadGetPost();
  }
  posts: any[] = [];
  loadGetPost(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts: any)=> {
      this.posts = posts;
    })
  }
  loadPostPost(){
    this.http.post('https://jsonplaceholder.typicode.com/posts',{}).subscribe((posts: any)=> {
      this.posts = posts;
    })
  }
  ngOnInit(): void {
  }

}
