import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userProfile: UserProfile = {
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimelll@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  constructor() {}

  ngOnInit() {}

  // دالة لحفظ التغييرات
  saveChanges() {
    if (this.userProfile.newPassword && this.userProfile.newPassword !== this.userProfile.confirmNewPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    console.log('Profile updated:', this.userProfile);
  }

  cancel() {
    this.userProfile = {
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimelll@gmail.com',
      address: 'Kingston, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    };
  }
}