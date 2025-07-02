import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FileUploadService } from '../../Services/FileUpload/file-upload.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule,
    DropdownModule,
    ButtonModule,
    FileUploadModule,
    CardModule,
    ToastModule],
    providers: [MessageService],  
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.css'
})
export class TrainingsComponent implements OnInit {

  registrationForm!: FormGroup;
  fileUpload!: FormGroup;
  genders = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' }
  ];
  technologies = [
    { icon: 'pi pi-cog', title: 'Backend', details: 'Java, Spring Boot' },
    { icon: 'pi pi-desktop', title: 'Frontend', details: 'HTML5, CSS3, Angular, React' },
    { icon: 'pi pi-database', title: 'Database', details: 'SQL, MongoDB' },
    { icon: 'pi pi-cloud', title: 'Cloud & DevOps', details: 'AWS EC2, S3, Docker' },
    { icon: 'pi pi-android', title: 'Mobile', details: 'Kotlin, Jetpack Compose' },
    { icon: 'pi pi-github', title: 'Version Control', details: 'Git, GitHub' },
  ];

  // New features array
  features = [
    'Live interactive classes with industry experts',
    'Hands-on projects simulating real-world scenarios',
    'Dedicated doubt-clearing sessions',
    'Comprehensive interview preparation',
    'Access to exclusive resources and materials',
    'ONE COMPLETE APPLICATION DEVELOPMENT FOR PRACTICE USING ABOVE ALL TECHNOLOGIES'
  ];

  constructor(
    private fb: FormBuilder,
    private registrationFormService: FileUploadService,
     private messageService: MessageService
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      qualification: ['', Validators.required],
      passOutYear: ['', [Validators.required, Validators.min(2020), Validators.max(2026)]],
      location: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: [null, Validators.required],
      fileId: [''],
    });

    this.fileUpload = this.fb.group({
      image: [null, Validators.required]
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files?.[0];
    if (file) {

      const formData = new FormData();

  
    // Append the file
    formData.append('image', file);
      // this.registrationForm.patchValue({ image: file });

      this.registrationFormService.uploadFile(formData).subscribe((data:any) => {
        if (data) {
          debugger;
          console.log('File uploaded successfully', data);
          this.registrationForm.controls['fileId'].setValue(data); // Assuming the response contains fileId
          console.log('Patched fileId:', data);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Leave request saved successfully.' });
        }
      })
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'File upload failed. Please try again.' });
    }

      
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      this.registrationFormService.submitCandidate(this.registrationForm.value).subscribe((data:any) => {
        if (data) {
          console.log('Registration submitted successfully', data);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registration submitted successfully.' });
          this.registrationForm.controls['fileId'].reset(); // Reset fileId after successful submission
          this.registrationForm.reset();
        }
      }, error => {
        console.error('Error submitting registration', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Registration submission failed. Please try again.' });
      });
    } else {
      // Mark all fields as touched to display validation errors
      this.registrationForm.markAllAsTouched();
      alert('Please fill out all required fields correctly.');
    }
  }

}
