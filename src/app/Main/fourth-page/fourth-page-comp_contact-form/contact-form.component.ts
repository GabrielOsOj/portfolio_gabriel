import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailSvService } from '../fourth-page-services/email/email-sv.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm: FormGroup;
  userName: FormControl;
  userEmail: FormControl;
  userMessage: FormControl;

  commonsValidators:Array<any>;

  constructor(private emailSv:EmailSvService) {

    this.commonsValidators =[
      Validators.required,
      Validators.minLength(1),
    ]

    this.userName = new FormControl('',
      this.commonsValidators
    );
    this.userEmail = new FormControl('',
      this.commonsValidators.concat(Validators.email)
    );

    this.userMessage = new FormControl('',
      this.commonsValidators.concat(Validators.maxLength(120))
    );

    this.contactForm = new FormGroup({
      userName: this.userName,
      userEmail: this.userEmail,
      userMessage: this.userMessage
    })

  }

  public handleSubmit() {
    this.emailSv.sendMessage(this.contactForm.value);
  }

}
