import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service' 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void { 
    console.log()
    this._http.getBeer().subscribe(data =>{
      this.brews = data;
      console.log("Beers should go below:")
      console.log(this.brews);
    })
    
  }

}
