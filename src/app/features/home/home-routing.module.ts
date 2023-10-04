import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SubscribePage } from './pages/subscribe/subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'subscribe',
    component: SubscribePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
