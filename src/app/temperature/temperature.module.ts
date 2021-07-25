import { NgModule } from '@angular/core';
import { DxButtonModule, DxNumberBoxModule, DxSelectBoxModule, DxValidatorModule } from 'devextreme-angular';
import { TemperatureInputComponent } from './components/temperature-input.component';
import { TemperatureUnitsService } from './services/temperature-units.service';
import { UnitConverterService } from './services/unit-converter.service';

@NgModule({
    exports: [
        TemperatureInputComponent
    ],
    declarations: [
        TemperatureInputComponent
    ],
    imports: [
        DxButtonModule,
        DxNumberBoxModule,
        DxSelectBoxModule,
        DxValidatorModule
    ],
    providers: [
        TemperatureUnitsService,
        UnitConverterService
    ]
})

export class TemperatureModule {

}
