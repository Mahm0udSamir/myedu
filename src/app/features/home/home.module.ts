import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { StepsComponent } from './components/steps/steps.component';
import { HomePage } from './pages/home/home.page';
import { SubscribePage } from './pages/subscribe/subscribe.page';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { SummaryComponent } from './components/summary/summary.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [HomePage, IntroComponent, StepsComponent, SubscribePage, SubscribeFormComponent, SummaryComponent],
})
export class HomePageModule {}
