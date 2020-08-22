import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username = "";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
