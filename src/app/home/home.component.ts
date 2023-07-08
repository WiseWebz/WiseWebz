import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tagline = "We specialize in comprehensive web app development, and services to automate your tasks, turning your ideas into reality."

  constructor() { }

  ngOnInit(): void {
  }

}
