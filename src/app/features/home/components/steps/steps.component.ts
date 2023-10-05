import { Component } from '@angular/core';
import { STEPS } from '../../constants/steps.constant';
import { Step } from '../../models/step.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {

  public steps: Step[] = STEPS;

}
