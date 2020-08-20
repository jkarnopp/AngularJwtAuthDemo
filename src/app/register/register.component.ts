import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, User, RegistrationUser } from '../core';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  busy = false;
  userName = '';
  email = '';
  password = '';
  passwordC =''
  loginError = false;
  private subscription: Subscription;
  private user : RegistrationUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(){}

  register(form) {
    // if (!this.userName || !this.password || !this.email || !this.passwordC) {
    //   return;
    // }
    // if (this.passwordC !== this.password) {
    //   return;
    // }

// this.user.userName = this.userName;
// this.user.firstName = this.firstName;
// this.user.email = this.email;
// this.user.password = this.password;

    this.busy = true;
    const returnUrl = '';
    this.authService
      .register(form.value)
      .pipe(finalize(() => (this.busy = false)))
      .subscribe(
        () => {
          this.router.navigate([returnUrl]);
        },
        () => {
          this.loginError = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
