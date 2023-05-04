import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  /* 
  este bloque de codigo es usando directamente formControl. Se declara
  un objeto del tipo formControl para engancharlo (binding) con el tag
  de html: 

  public nombre:FormControl = new FormControl('');
  public apellido:FormControl = new FormControl('');
  public edad:FormControl = new FormControl(0);
  public direccion:FormControl = new FormControl(''); 
  */

  public contactForm: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    phone: new FormGroup({
      type: new FormControl(''),
      number: new FormControl('')
    }),
    edad: new FormControl(0),
    direccion: new FormControl('')
  });


}
