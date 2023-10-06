import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { StepsComponent } from './components/steps/steps.component';
import { HomePage } from './pages/home/home.page';
import { SubscribePage } from './pages/subscribe/subscribe.page';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { SummaryComponent } from './components/summary/summary.component';
import { StepComponent } from './components/steps/step/step.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  declarations: [HomePage, IntroComponent, StepsComponent, SubscribePage, SubscribeFormComponent, SummaryComponent, StepComponent],
})
export class HomePageModule {}
