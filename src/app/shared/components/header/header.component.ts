import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input('allowBack') allowBack: boolean = false;
  
  constructor(private _location: Location) {}

  goBack() {
    console.log('back');
    this._location.back();
  }
}
