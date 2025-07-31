import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  erro = false;
  sucesso = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.sucesso = true;
      this.erro = false;

      // Mostra a mensagem por 1 segundo, depois redireciona
      setTimeout(() => {
        this.router.navigate(['/vendas/create']);
      }, 1000);
    } else {
      this.erro = true;
      this.sucesso = false;
    }
  }
}
