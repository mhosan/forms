import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormTemplateComponent } from './form-template.component';



@NgModule({
  declarations: [
    FormTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormTemplateComponent
  ]
})
export class FormTemplateModule { }
