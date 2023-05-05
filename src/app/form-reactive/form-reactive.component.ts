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
    picture: new FormControl(''),
    apellido: new FormControl(''),
    phone: new FormGroup({
      type: new FormControl(''),
      number: new FormControl('')
    }),
    edad: new FormControl(0),
    direccion: new FormControl('')
  });

  addImage(event:any){
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) =>{
      //En un formulario por template se actualizaria directamente el tag del form con
      //el archivo de imagen leido, pero en forms reactivos no, ya que los estados en forms 
      //reactivos son inmutables. Y detectar un cambio en el form react es mas rapido y eficiente
      //que en forms por template, donde hay que recorrer todo el form para ver donde se produjo el cambio.
      //Aqui hay que instanciar un nuevo objeto formulario y cargarle todos los valores de
      //nuevo, y de esa forma se agrega el valor que cambió, pero se deben cargar todos los
      //valores de nuevo!
      //Hay que usar formGroup.setValue, para que reemplace el estado anterior por un nuevo objeto con nuevos
      //datos. Por eso es inmutable: destruye el estado anterior y creo uno nuevo, pero hay que pasar TODOS los
      //datos de nuevo, entonces se usa otro método: patchValue.
      this.contactForm.patchValue({
        picture: reader.result
      });
    };
  }


}
