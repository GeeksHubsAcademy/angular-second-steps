import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products;
  // public products:Array<object>;
  constructor(public httpClient: HttpClient) {//inyección de dependencias, inyectamos httpClient como dependecia del HomeComponent
  }
  //  public httpClient;
  //  constructor(HttpClient) {
  //   this.httpClient = new HttpClient();
  //  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.httpClient.get('http://localhost:3000/products')
      .subscribe(
        res => {
          this.products = res;
        },
        error => console.error(error)
      );
  }
}