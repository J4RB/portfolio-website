import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    });
  }

  onSend() {
    this.http.post('/api/send-email', this.contactForm.value).subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
      complete: () => this.contactForm.reset()
    });
    this.contactForm.reset();
  }
}
