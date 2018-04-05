import { Component } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { FormControl } from '@angular/forms';

import { placeholderChars, alphabetic, digit } from './constants';

const defaultValues = {
  placeholderChar: placeholderChars.whitespace,
  guide: true,
  pipe: null,
  keepCharPositions: false,
  help: null,
  placeholder: null
};

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: ['./masks.component.scss']
})
export class MasksComponent {

  myModel: string;
  modelWithValue: string;
  formControlInput: FormControl = new FormControl();
  mask: Array<string | RegExp>;

  choices = [{
    name: 'US phone number',
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholder: '(555) 495-3947'
  }, {
    name: 'US phone number with country code',
    mask: ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholder: '+1 (555) 495-3947'
  }, {
    name: 'Date',
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    placeholder: '25/09/1970'
  }, {
    name: 'Date (auto-corrected)',
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: createAutoCorrectedDatePipe(),
    placeholder: 'Please enter a date',
  }, {
    name: 'US dollar amount',
    mask: createNumberMask(),
    placeholder: 'Enter an amount',
  }, {
    name: 'US dollar amount (allows decimal)',
    mask: createNumberMask({allowDecimal: true}),
    placeholder: 'Enter an amount',
  }, {
    name: 'Percentage amount',
    mask: createNumberMask({suffix: '%', prefix: ''}),
    placeholder: 'Enter an amount',
  }, {
    name: 'Email',
    mask: emailMask,
    placeholder: 'john@smith.com',
  }, {
    name: 'US zip code',
    mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/],
    placeholder: '94303',
  }, {
    name: 'Canadian postal code',
    mask: [alphabetic, digit, alphabetic, ' ', digit, alphabetic, digit],
    pipe: (conformedValue) => ({value: conformedValue.toUpperCase()}),
    placeholder: 'K1A 0B2'
  }];

  constructor() {
    this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.myModel = '';
    this.modelWithValue = '5554441234';
    this.formControlInput.setValue('5555551234');
  }
}
