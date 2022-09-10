import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToLogin() {
      this.route.navigate(['/login']);
  }

}
