import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tagline: string = 'Love is like a brick. You can build a house, or you can sink a dead body.';

  constructor() {}

  ngOnInit() {}
}
