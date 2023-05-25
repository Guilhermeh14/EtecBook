import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor (private fb: FormBuilder) {}
    
    ngOnInit(): void {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
    }

    checkName(){
      return this.registerForm.controls['name'].dirty && this.registerForm.controls['name'].errors?.['required'];
    }
    
    checkEmail(){
      return this.registerForm.controls['email'].dirty && this.registerForm.controls['email'].errors?.['required'];
    }

    checkEmailValid(){
      return this.registerForm.controls['email'].dirty && this.registerForm.controls['email'].errors?.['email'];
    }

    checkPassword() {
      return this.f['password'].dirty && this.f['password'].errors?.['minLength'];
    }

}



