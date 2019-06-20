import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  firstFn() {
    this.http
      .post('api/test/', '5')
      // .post(environment.apiEndpointBase + '/test/', '5')
      .toPromise()
      .then(res => {
        console.log(res);
      });
  }

  secondFn() {
    this.http
      .get('api/getcust')
      // .get(environment.apiEndpointBase + '/getcust')
      .toPromise()
      .then(res => {
        console.log(res);
      });
  }
}
