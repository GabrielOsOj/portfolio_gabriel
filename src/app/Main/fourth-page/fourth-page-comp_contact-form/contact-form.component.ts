import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailSvService } from '../fourth-page-services/email/email-sv.service';
import { MessageIf } from '../fourth-page-models/message-data-if';
import { IconSvService } from '../../../Core/services/icons/icon-sv.service';
import { FormOpenCloseService } from '../fourth-page-services/form-open_close/form-open-close.service';

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
  closeIcon: string = "";

  commonsValidators: Array<any>;

  constructor(private emailSv: EmailSvService, private closeModalSv:FormOpenCloseService , private iconSv:IconSvService) {

    this.closeIcon = iconSv.getUtilityIcon({name:"cross"});
    
    this.commonsValidators = [
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
    this.emailSv.sendMessage({
      name:this.userName.value,
      email:this.userEmail.value,
      message:this.userMessage.value
    });
  }

  public closeModal():void{
    this.closeModalSv.closeFormModal()
  }
}
