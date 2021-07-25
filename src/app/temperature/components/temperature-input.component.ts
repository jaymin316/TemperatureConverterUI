import { Component, OnInit } from '@angular/core';
import { TemperatureUnit } from '../models/temperature-unit';
import { UnitConverterService } from '../services/unit-converter.service';
import { TemperatureUnitsService } from '../services/temperature-units.service';
import { TemperatureConversion } from '../models/temperature-conversion';

@Component({
  selector: 'app-temperature-input',
  templateUrl: './temperature-input.component.html',
  styleUrls: ['./temperature-input.component.css']
})
export class TemperatureInputComponent implements OnInit {
  title = 'Temperature Input';
  units: TemperatureUnit[];
  temperatureInput: number;
  convertFromID: number;
  convertToID: number;
  convertedTemperatureValue = 0;

  constructor(private temperatureUnitsService: TemperatureUnitsService, private unitConverterService: UnitConverterService) {
    // Initial load and defaults
    this.units = temperatureUnitsService.getTemperatureUnits();
    this.convertFromID = this.units[0].ID;
    this.convertToID = this.units[1].ID;
  }

  ngOnInit() {
    this.unitConverterService.get().subscribe((data: any) => {
      console.log(data);
    });
  }

  inputValueChanged(data) {
    this.temperatureInput = data.value;
  }

  convert() {
    // Only convert if a valid value is entered
    if (this.temperatureInput != null) {
      const payload =  {
        TemperatureInput: this.temperatureInput,
        ConvertFromID: this.convertFromID,
        ConvertToID: this.convertToID
      } as TemperatureConversion;

      this.unitConverterService.convert(payload).subscribe((result: any) => {
        this.convertedTemperatureValue = result;
      });
    }
  }

  onConvertFromChanged(e: any) {
    if (e.value != null) {
        this.convertFromID = e.value;
    }
  }

  onConvertToChanged(e: any) {
    if (e.value != null) {
        this.convertToID = e.value;
    }
  }

}
