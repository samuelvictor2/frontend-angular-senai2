  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';

  import { HomeComponent } from './views/home/home.component';

  // Product Components
  import { ProductCrudComponent } from './views/product-crud/product-crud.component';
  import { ProductCreateComponent } from './components/product/product-create/product-create.component';
  import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
  import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
  import { ProductReadComponent } from './components/product/product-read/product-read.component';

  // FormaPagamento Components
  import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
  import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
  import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
  import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
  import { FormaPagamentoReadComponent } from './components/formaPagamento/forma-pagamento-read/forma-pagamento-read.component';

  // Fornecedor Components
  import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
  import { FornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
  import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
  import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
  import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';

  // Cliente Components
  import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
  import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
  import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
  import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
  import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

  // Venda Components
  import { VendaCreateComponent } from './components/venda/venda-create/venda-create.component';
  import { VendaReadComponent } from './components/venda/venda-read/venda-read.component';

  // Template Components
  import { HeaderComponent } from './components/template/header/header.component';
  import { NavComponent } from './components/template/nav/nav.component';
  import { FooterComponent } from './components/template/footer/footer.component';

  // Login Component

  // Material Module
  import { MaterialModule } from './app.material.module';

  import { TokenInterceptor } from './services/TokenInterceptor';
  import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';

  // Auth Interceptor (para injetar o token JWT nas requisições)

  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,

      ProductCrudComponent,
      ProductCreateComponent,
      ProductUpdateComponent,
      ProductDeleteComponent,
      ProductReadComponent,

      FormaPagamentoCrudComponent,
      FormaPagamentoCreateComponent,
      FormaPagamentoDeleteComponent,
      FormaPagamentoUpdateComponent,
      FormaPagamentoReadComponent,

      FornecedorCrudComponent,
      FornecedorReadComponent,
      FornecedorCreateComponent,
      FornecedorUpdateComponent,
      FornecedorDeleteComponent,

      ClienteCrudComponent,
      ClienteReadComponent,
      ClienteCreateComponent,
      ClienteUpdateComponent,
      ClienteDeleteComponent,

      VendaCreateComponent,
      VendaReadComponent,

      HeaderComponent,
      NavComponent,
      FooterComponent,

      LoginComponent,
        DashboardComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      MaterialModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
