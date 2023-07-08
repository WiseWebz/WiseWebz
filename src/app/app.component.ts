import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WiseWebz';

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    // let goToTop = document.querySelector('#go-to-top') as HTMLElement;
    // if (window.scrollY > 500) {
    //   goToTop.style.visibility = "visible";
    // } else {
    //   goToTop.style.visibility = "hidden";
    // }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
