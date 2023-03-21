import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TravelService } from 'src/app/service/travel/travel.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  travelForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private travelService: TravelService
  ) {
    this.travelForm = this._formBuilder.group({
      departureAirport: [''],
      arrivalAirport: [''],
      departureDate: [''],
      arrivalDate: [''],
    });
  }
  submitTravel() {
    console.log('this.registrationForm', this.travelForm.value);
    this.travelService.create(this.travelForm.value).subscribe({
      next: (response) => console.log('response', response),
      error: (error) => console.log('error', error),
      complete: () => console.log('complete'),
    });
  }
}