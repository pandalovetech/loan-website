import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  submitted = false;
  bank = '';

  personInfoForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    maritalStatus: 'Single',
    householdIncome: 200000,
    employer: '',
    creditScore: '600 - 649',
    mortgageBalance: 0,
    autoLoan: 0,
    creditCardDebt: 0,
    studentLoan: 0
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    if (this?.personInfoForm?.controls?.creditScore?.value === '600 - 649') {
      this.bank = 'Family Credit Union';
    } else if (this?.personInfoForm?.controls?.creditScore?.value === '650 - 699') {
      this.bank = 'Dakota Bank';
    } else if (this?.personInfoForm?.controls?.creditScore?.value === '700 - 750') {
      this.bank = 'Bank of Centralia';
    } else {
      this.bank = 'Bank of Centralia';
    }
    this.submitted = true;
  }
}
