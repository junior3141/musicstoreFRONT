import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './componente/categories/category/category.component';
import { ProductComponent } from './componente/products/product/product.component';
import { GuardarProductComponent } from './componente/products/guardar-product/guardar-product.component';
import { EditarProductComponent } from './componente/products/editar-product/editar-product.component';
import { GuardarCategoryComponent } from './componente/categories/guardar-category/guardar-category.component';
import { EditarCategoryComponent } from './componente/categories/editar-category/editar-category.component';
import { MostrarCategoryComponent } from './componente/categories/mostrar-category/mostrar-category.component';
import { MostrarCategoryProductsComponent } from './componente/categories/mostrar-category-products/mostrar-category-products.component';
import { ShoppingCartComponent } from './componente/shoppingCart/shopping-cart/shopping-cart.component';
import { LoginComponent } from './componente/user/login/login.component';
import { RegistrarUsuarioComponent } from './componente/user/registrar-usuario/registrar-usuario.component';
import { UserComponent } from './componente/user/user/user.component';
import { EditarUserComponent } from './componente/user/editar-user/editar-user.component';
import { OrderComponent } from './componente/order/order/order.component';
import { OrderDetalleComponent } from './componente/order/order-detalle/order-detalle.component';

const routes: Routes = [
  {path:'', redirectTo:'app-root',pathMatch:'full'},
  {path:'categorias', component:CategoryComponent},
  {path:'productos', component:ProductComponent},
  {path:'productos/guardar-producto', component:GuardarProductComponent},
  {path:'productos/editar-producto/:id', component:EditarProductComponent},
  {path:'categorias/guardar-categoria', component:GuardarCategoryComponent},
  {path:'categorias/editar-categoria/:id', component:EditarCategoryComponent},
  {path:'mostrar-categoria', component:MostrarCategoryComponent},
  {path:'mostrar-categoria/product/:id', component:MostrarCategoryProductsComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path:'login', component:LoginComponent},
  {path:'login/registrar-usuario', component:RegistrarUsuarioComponent},
  {path:'usuarios', component:UserComponent},
  {path:'usuarios/editar-usuario/:id', component:EditarUserComponent},
  {path:'pedidos', component:OrderComponent},
  {path:'pedidos/detalle/:id', component:OrderDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
