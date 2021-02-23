import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  data : any;

  constructor(private http:HttpClient) {
    let api = 'http://localhost:8080';
    http.get(api).subscribe( (x) => {
      this.data = x;
    } );
  }

  ngOnInit(): void {

  }

}
