import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'DnD Application';
  public today: Date;

  constructor() {}

  ngOnInit() {
    this.today = new Date();
    console.log(this.today);
  }

  public sayHello() {
    console.log('Salute!');
  }


}
