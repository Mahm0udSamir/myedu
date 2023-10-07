import { Component, ViewChild } from '@angular/core';
import { SubscribeFormModel } from '../../models/subscribe.form.model';
import { SubscribeFormComponent } from '../../components/subscribe-form/subscribe-form.component';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage {
  @ViewChild('subscribeForm') subscribeForm!: SubscribeFormComponent;

  constructor(private _toastController: ToastController, private _router: Router) {}

  onSubmitClicked(isClicked?: boolean) {
    const { valid, value } = this.subscribeForm.subscribeForm;
    if (isClicked && valid) {
      const subscribeFormBody: SubscribeFormModel = {
        ...value,
        topics: this.subscribeForm.selectedTopics,
      };

      console.log(subscribeFormBody);
      this.presentToast('Subscribe successes see logs');
      this._router.navigate(['/'])
    }
  }

  async presentToast(message: string) {
    const toast = await this._toastController.create({
      message,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
