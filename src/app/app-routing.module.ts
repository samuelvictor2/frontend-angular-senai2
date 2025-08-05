import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

// Product
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

// FormaPagamento
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';

// Fornecedor
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';

// Cliente
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

// Venda
import { VendaCreateComponent } from './components/venda/venda-create/venda-create.component';
import { VendaReadComponent } from './components/venda/venda-read/venda-read.component';

// Login
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Guard para proteger rotas (exemplo, você pode criar um AuthGuard)

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },

  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'products', component: ProductCrudComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: ProductCreateComponent, canActivate: [AuthGuard] },
  { path: 'products/update/:proId', component: ProductUpdateComponent, canActivate: [AuthGuard] },
  { path: 'products/delete/:proId', component: ProductDeleteComponent, canActivate: [AuthGuard] },

  { path: 'fpagamentos', component: FormaPagamentoCrudComponent, canActivate: [AuthGuard] },
  { path: 'fpagamentos/create', component: FormaPagamentoCreateComponent, canActivate: [AuthGuard] },
  { path: 'fpagamentos/delete/:fpgId', component: FormaPagamentoDeleteComponent, canActivate: [AuthGuard] },
  { path: 'fpagamentos/update/:fpgId', component: FormaPagamentoUpdateComponent, canActivate: [AuthGuard] },

  { path: 'fornecedores', component: FornecedorReadComponent, canActivate: [AuthGuard] },
  { path: 'fornecedores/create', component: FornecedorCreateComponent, canActivate: [AuthGuard] },
  { path: 'fornecedores/update/:forId', component: FornecedorUpdateComponent, canActivate: [AuthGuard] },
  { path: 'fornecedores/delete/:forId', component: FornecedorDeleteComponent, canActivate: [AuthGuard] },

  { path: 'clientes', component: ClienteCrudComponent, canActivate: [AuthGuard] },
  { path: 'clientes/read', component: ClienteReadComponent, canActivate: [AuthGuard] },
  { path: 'clientes/create', component: ClienteCreateComponent, canActivate: [AuthGuard] },
  { path: 'clientes/update/:cliId', component: ClienteUpdateComponent, canActivate: [AuthGuard] },
  { path: 'clientes/delete/:cliId', component: ClienteDeleteComponent, canActivate: [AuthGuard] },

  { path: 'vendas', component: VendaCreateComponent, canActivate: [AuthGuard] },
  { path: 'vendas/read', component: VendaReadComponent, canActivate: [AuthGuard] },

  // Rota coringa (se ninguém bater, vai para home)
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
