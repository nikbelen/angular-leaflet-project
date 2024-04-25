import { Component, inject } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  applyForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/map';

        // #docregion preserve
        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
        // #enddocregion preserve
      }
    });
  }

  submitApplication() {
    this.authService.submitApplication(
      this.applyForm.value.login ?? '',
      this.applyForm.value.password ?? '',
    );
    this.login();
    
  }
}
