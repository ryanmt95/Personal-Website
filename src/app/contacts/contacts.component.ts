import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  active = 'Let\'s Chat';

  checkoutForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() {
   }

  ngOnInit() {
  }

  onSubmit(data) {
    if (data.message) {
      let url = "mailto:ryanmtan@gmail.com?body=" + data.message
      window.location.href = url
    } else {
      alert('Empty Message!')
    }
  }
}
