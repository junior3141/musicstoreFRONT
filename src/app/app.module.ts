import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './componente/products/product/product.component';
import { CategoryComponent } from './componente/categories/category/category.component';
import { FormsModule } from '@angular/forms';
import { GuardarProductComponent } from './componente/products/guardar-product/guardar-product.component';
import { EditarProductComponent } from './componente/products/editar-product/editar-product.component';
import { GuardarCategoryComponent } from './componente/categories/guardar-category/guardar-category.component';
import { EditarCategoryComponent } from './componente/categories/editar-category/editar-category.component';
import { MostrarCategoryComponent } from './componente/categories/mostrar-category/mostrar-category.component';
import { MostrarCategoryProductsComponent } from './componente/categories/mostrar-category-products/mostrar-category-products.component';
import {ShoppingCartComponent} from './componente/shoppingCart/shopping-cart/shopping-cart.component';
import { LoginComponent } from './componente/user/login/login.component';
import { RegistrarUsuarioComponent } from './componente/user/registrar-usuario/registrar-usuario.component';
import { UserComponent } from './componente/user/user/user.component';
import { EditarUserComponent } from './componente/user/editar-user/editar-user.component';
import { OrderComponent } from './componente/order/order/order.component';
import { OrderDetalleComponent } from './componente/order/order-detalle/order-detalle.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    GuardarProductComponent,
    EditarProductComponent,
    GuardarCategoryComponent,
    EditarCategoryComponent,
    MostrarCategoryComponent,
    MostrarCategoryProductsComponent,
    ShoppingCartComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    UserComponent,
    EditarUserComponent,
    OrderComponent,
    OrderDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
