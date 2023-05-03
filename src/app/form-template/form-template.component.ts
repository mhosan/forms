import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  
  ngOnInit(): void {
    this.usuarios = [
      {
        nombre: "Juan",
        apellido: "Perez",
        edad: 88,
        direccion: "calle 1 nro. 23"
      },
      {
        nombre: "Carlos",
        apellido: "Martinez",
        edad: 33,
        direccion: "calle 41 nro. 123"
      },
      {
        nombre: "Pedro",
        apellido: "Lopez",
        edad: 28,
        direccion: "calle 13 nro. 233"
      }
    ];
  }

  public usuarios: Usuarios[]=[];
  public model: Usuarios ={nombre: '', apellido: '', edad: 0, direccion: ''};
  
  enviar(){
    this.usuarios.push(this.model)
    alert(JSON.stringify(this.usuarios));
    this.model = {nombre: '', apellido: '', edad: 0, direccion: ''};
    
  }
}
