import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {
  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    if(confirm("Are sure you want to logout?")){
    this.authentocationService.logOut();
    this.router.navigate(['login']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
