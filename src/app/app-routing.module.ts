import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './auth/account/account.component';
import { LoginComponent } from './auth/login/login.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MapPageCenteredComponent } from './map/map-page-centered/map-page-centered.component';
import { MapPageComponent } from './map/map-page/map-page.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Главная'
  },
  {
    path: 'popular',
    component: PopularComponent,
    title: 'Популярные'
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: 'FAQ'
  },
  {
    path: 'map',
    component: MapPageComponent,
    title: 'Карта'
  },
  {
    path: 'map/:id',
    component: MapPageCenteredComponent,
    title: 'Карта'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Вход'
  },
  {
    path: 'account',
    component: AccountComponent,
    title: 'Аккаунт'
  }
];

export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
