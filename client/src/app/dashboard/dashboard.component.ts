import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls: []
})

export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }
  title:string = "移门";
}
