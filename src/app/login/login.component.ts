import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(e){
    e.preventDefault();
  }
  login(){
    let credentials = {
      username: (document.getElementById("username") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value
    }
    this.authService.login(credentials).subscribe(data => {
      console.log(data);
      localStorage.setItem("token", data["jwt"]);
      localStorage.setItem("username", data["user"]["username"]);
      this.router.navigate(["/menu"]);      
      this.toastr.success("Bienvenido " + credentials.username);
    }, error => {
      
      this.toastr.error("Usuario o contraseña invalidos")
      console.error(error);
    });
  }

}
