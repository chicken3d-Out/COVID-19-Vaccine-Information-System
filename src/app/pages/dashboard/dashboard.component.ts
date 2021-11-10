import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private restapiService: RestApiService) { }
  logout(){
    this.restapiService.logout();
  }
  
  ngOnInit(): void {
  }

}
