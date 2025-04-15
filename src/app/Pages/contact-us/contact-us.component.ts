import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    CardModule,
    ToastModule,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    
  }

  // basic frontend form
  // onSubmit() {
  //   if (this.contactForm.valid) {
  //     console.log('Sending message to: rishikeskgaikwad243@gmail.com');
  //     console.log(this.contactForm.value);

  //     this.messageService.add({
  //       severity: 'success',
  //       summary: 'Message Sent',
  //       detail: 'Your message has been sent successfully!',
  //     });

  //     this.contactForm.reset();
  //   }
  // }

  // redirecting to gmail/outlook whichever is available on the system
  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, phone, subject, message } = this.contactForm.value;
      const mailSubject = encodeURIComponent(subject);
      const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
      
      window.location.href = `mailto:divyeshgawad130@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  
      this.messageService.add({
        severity: 'success',
        summary: 'Message Sent',
        detail: 'Opening email ...',
      });
  
      this.contactForm.reset();
    }
  }
}

