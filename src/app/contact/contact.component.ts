import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  disableSubmit: Boolean = false;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  enableSubmit(submit: Boolean) {
    this.disableSubmit = submit;
  }
}
