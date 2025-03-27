import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-sign-up',
  imports: [CommonModule, RouterLink],
  templateUrl: './header-sign-up.component.html',
  styleUrl: './header-sign-up.component.css'
})
export class HeaderSignUpComponent {

}
