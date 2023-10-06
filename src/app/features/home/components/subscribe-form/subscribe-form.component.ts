import { SubscribeFormModel } from './../../models/subscribe.form.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MONTHS, TOPICS, YEARS } from '../../constants/subscribe-form.constant';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
})
export class SubscribeFormComponent {
  @Output('isSubmit') isSubmit: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  subscribeForm!: FormGroup;
  months: string[] = MONTHS;
  years: number[] = YEARS;
  topics: string[] = TOPICS;
  selectedTopics: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.subscribeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      childName: ['', Validators.required],
      dayOfBirth: ['', Validators.required],
      monthOfBirth: ['', Validators.required],
      yearOfBirth: ['', Validators.required],
      grade: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  toggleItemSelection(item: string) {
    if (this.selectedTopics.includes(item)) {
      this.selectedTopics = this.selectedTopics.filter((i) => i !== item);
    } else {
      this.selectedTopics.push(item);
    }
  }

  onSubmit() {
    this.isSubmit.next(true);
  }
}
