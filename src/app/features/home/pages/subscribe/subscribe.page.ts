import { Component, ViewChild } from '@angular/core';
import { SubscribeFormModel } from '../../models/subscribe.form.model';
import { SubscribeFormComponent } from '../../components/subscribe-form/subscribe-form.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage {
  @ViewChild('subscribeForm') subscribeForm!: SubscribeFormComponent;

  onSubmitClicked(isClicked?: boolean) {
    const { valid, value } = this.subscribeForm.subscribeForm;
    if (isClicked && valid) {
      const subscribeFormBody: SubscribeFormModel = {
        ...value,
        topics: this.subscribeForm.selectedTopics,
      };

      console.log(subscribeFormBody);
    }
  }
}
