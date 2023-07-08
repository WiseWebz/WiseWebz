import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit {

  colorRgb = ["242", "247", "252"]

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    let element = document.querySelector('.navbar-on-scroll') as HTMLElement;
    let alpha: any = 0;
    element.style.backgroundImage = "none"; 
    if (window.scrollY > element.clientHeight) {
      alpha = (scrollY / element.clientHeight) * 5;
      alpha = String(alpha);
      if (alpha.split('.')[0] == "0") {
        alpha = 0;
      }
      else {
        alpha = 1;
      }
    }
    element.style.backgroundColor = "rgba("
    .concat(this.colorRgb[0], ", ")
    .concat(this.colorRgb[1], ", ")
    .concat(this.colorRgb[2], ", ")
    .concat(String(alpha), ")");
  }
  
  constructor() {}

  ngOnInit(): void {
  }

}
