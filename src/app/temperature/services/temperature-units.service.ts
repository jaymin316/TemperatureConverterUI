import { Injectable } from '@angular/core';
import { TemperatureUnit } from '../models/temperature-unit';

const temperatureUnits: TemperatureUnit[] = [{
    ID: 1,
    Name: 'Fahrenheit'
}, {
    ID: 2,
    Name: 'Celsius'
}, {
    ID: 3,
    Name: 'Kelvin'
}];

@Injectable()
export class TemperatureUnitsService {
    getTemperatureUnits(): TemperatureUnit[] {
        return temperatureUnits;
    }
}
