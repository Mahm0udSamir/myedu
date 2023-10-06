import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribePage } from '../../pages/subscribe/subscribe.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {

  component = SubscribePage;
  constructor(private router: Router){}
  onSubscribe() {
    this.router.navigate(['/subscribe']);
  }
}
