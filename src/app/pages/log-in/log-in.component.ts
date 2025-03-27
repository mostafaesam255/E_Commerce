import { Component } from '@angular/core';
import { HeaderSignUpComponent } from "../../components/header-sign-up/header-sign-up.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-log-in',
  imports: [HeaderSignUpComponent, FooterComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

}
