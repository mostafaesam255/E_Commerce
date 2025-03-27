import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor() {}

  ngOnInit() {}

  sendMessage() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.phone) {
      alert('Please fill in all required fields (Name, Email, Phone).');
      return;
    }
    console.log('Message sent:', this.contactForm);
    this.contactForm = { name: '', email: '', phone: '', message: '' };
  }
}