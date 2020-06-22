import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login :FormGroup;
Login :any;
Ischecked :boolean = false;
  constructor(private fb : FormBuilder ) {

   
    this.login = this.fb.group({
      Login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      agree: false
    });
   }

  ngOnInit(): void {
  }

}
