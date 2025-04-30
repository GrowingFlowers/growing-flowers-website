import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    ReactiveFormsModule,
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  jobs = [
    {
      title: 'Software Intern (Fresher)',
      description: 'Join our internship program designed for freshers passionate about coding.',
      location: 'Pune, MH',
      experience: '0 years (Internship)',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Java', 'Basic Angular']
    },
    {
      title: 'Junior Software Engineer (Fresher)',
      description: 'Kickstart your career by working on real-world projects.',
      location: 'Pune, MH',
      experience: '0-1 year',
      technologies: ['Java', 'Angular', 'Git', 'SQL', 'Basic DSA']
    },
    {
      title: 'Frontend Developer',
      description: 'Craft dynamic and responsive web interfaces using Angular.',
      location: 'Pune, MH',
      experience: '2+ years',
      technologies: ['Angular', 'PrimeNG', 'HTML', 'CSS', 'TypeScript']
    },
    {
      title: 'Backend Developer',
      description: 'Develop scalable server-side applications using Java and Node.js.',
      location: 'Pune, MH',
      experience: '3+ years',
      technologies: ['Java', 'Node.js', 'MongoDB', 'SQL', 'Spring Boot']
    },
    {
      title: 'UI/UX Designer',
      description: 'Design intuitive, user-centered interfaces.',
      location: 'Pune, MH',
      experience: '1-3 years',
      technologies: ['Figma', 'Adobe XD', 'Illustrator', 'HTML/CSS', 'Angular']
    },
    {
      title: 'IT Support',
      description: 'Provide technical assistance across platforms.',
      location: 'Pune, MH',
      experience: '1-2 years',
      technologies: ['Windows/Linux', 'Networking', 'Java', 'Android', 'Cloud Basics']
    },
  ];

  displayDialog = false;
  applicationForm: FormGroup;
  jobOptions: { label: string; value: string }[] = [];
  selectedJob: any;
  resumeError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      position: ['', Validators.required],
      resume: [null, Validators.required],
    });
  }

  apply(job: any) {
    this.selectedJob = job;
    this.jobOptions = this.jobs.map(j => ({ label: j.title, value: j.title }));
    this.applicationForm.patchValue({
      position: job.title,
      resume: null,
    });
    this.resumeError = false;
    this.displayDialog = true;
  }

  onFileUpload(event: any) {
    const file = event.files[0];
    if (file) {
      this.applicationForm.patchValue({ resume: file });
      this.resumeError = false;
    }
  }

  submitApplication() {
    if (!this.applicationForm.value.resume) {
      this.resumeError = true;
    }

    if (this.applicationForm.valid && !this.resumeError) {
      const { name, email, phone, position } = this.applicationForm.value;

      const subject = `Application for ${position}`;
      const body =
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A` +
        `Phone: ${phone}%0D%0A` +
        `Position: ${position}%0D%0A%0D%0A` +
        `Note: Resume attached separately (upload not supported via mailto).`;

      const mailtoLink = `mailto:divyesh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      this.displayDialog = false;
      this.applicationForm.reset();
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
