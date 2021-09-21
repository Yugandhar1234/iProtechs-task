import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  public reactForm = this.formBuilder.group({
    name:['',[Validators.minLength(5),Validators.required]],
    email: ['', [Validators.email,Validators.required] ],
    phone:['',[Validators.minLength(10),Validators.required]],
    password: ['',[Validators.minLength(8),Validators.required]],
    confirmPas: ['',[Validators.minLength(8),Validators.required]]
  });

  public isEmpty:boolean;
  public isSubmitted:boolean;
  
  ngOnInit(): void { }

  public getname() {
    return this.reactForm.get('name');
  }
  public getemail() {
    return this.reactForm.get('email');
  }
  public getPhone(){
    return this.reactForm.get('phone');
  }
  public getpassword() {
    return this.reactForm.get('password');
  }
  public getconfirmPas(){
    return this.reactForm.get('confirmPas');
  }


  // submitRegisterData
  public submitRegister(){
    let user = {
      name : this.getname().value,
      email : this.getemail().value,
      phone : this.getPhone().value,
      password : this.getpassword().value,
      course : this.getconfirmPas().value
    };
    if(user.name !== '' && user.email !== '' && user.password !== '' && user.course !== ''){
      this.isEmpty = false;
      console.log(user);
      this.isSubmitted = true; 
    }
    else{
      this.isEmpty = true;
      this.isSubmitted = false;
    }
  }

}
