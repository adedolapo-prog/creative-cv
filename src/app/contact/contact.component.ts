import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  model = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.model);
    // Implement your form submission logic here
  }
  constructor() {}

  ngOnInit(): void {}
}
