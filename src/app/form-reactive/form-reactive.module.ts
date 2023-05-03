import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormReactiveComponent } from './form-reactive.component';



@NgModule({
  declarations: [
    FormReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormReactiveComponent
  ]
})
export class FormReactiveModule { }
