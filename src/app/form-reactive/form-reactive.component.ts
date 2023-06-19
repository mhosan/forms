import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HourService } from '../services/hour.service';
import { filter, map, tap, zip } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit{
  constructor(private hourService: HourService ){}
  
  ngOnInit(): void {
    const contact = localStorage.getItem('contact');
    if(contact){
      this.contactForm.setValue(JSON.parse(contact));
    }
    //Los form reactivos exponen una api basada en observables para habilitar la subscripción.
    //La funcion zip combina eventos de varios observables, emite un nuevo valor en cada cambio del formulario
    //en un array con el estado en la posicion 0 y el valor del formulario en la posicion 1.
    //map se utiliza para transformar los valores de un flujo de observables en nuevos valores, mientras que la función
    //tap se utiliza para realizar acciones secundarias con los valores de un flujo de observables sin modificarlos.  
      zip(this.contactForm.statusChanges, this.contactForm.valueChanges).pipe(
        filter(([state, value])=> state == 'VALID'),
        map(([state, value])=> value),
        tap(data =>{console.log(data)})
      ).subscribe(formValue =>{
        localStorage.setItem('contact', JSON.stringify(formValue));
      });
  }

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
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    picture: new FormControl('assets/dos.jpg'),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormGroup({
      type: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required])
    }),
    edad: new FormControl(0),
    direccion: new FormControl('')
  });

  addImage(event: any) {
    const file = event.target.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
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

  get apellido() {
    return this.contactForm.get('apellido');
  }

  /*
  cuando hay grupos anidados, como por ejemplo phone que está anidado dentro de contactForm, para poder
  referenciarlos en el html, en las validaciones, hay que armar un getter como el siguiente:
   */
  get phoneForm() {
    return this.contactForm.get('phone') as FormGroup;
  }

  addItem(){
    alert(JSON.stringify(this.contactForm.value));
    this.contactForm.reset({
      picture:'assets/dos.jpg'
    });
  }

}
