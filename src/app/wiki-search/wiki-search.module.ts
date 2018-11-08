import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiResultComponent } from './wiki-result/wiki-result.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WikiResultComponent],
  exports: [WikiResultComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class WikiSearchModule { }
