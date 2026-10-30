import { Routes } from '@angular/router';
import { Home as HomeComponent } from './pages/home/home';
import { FruitDetail as FruitDetailComponent } from './pages/fruit-detail/fruit-detail';
import { NotFound as NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fruit/:name',
    component: FruitDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];