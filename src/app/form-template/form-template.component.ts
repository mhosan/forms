import { Component, OnInit } from '@angular/core';
import { Usuarios, ContactPhone, PhoneType } from '../models/usuarios';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  public usuarios: Usuarios[] = [];
  //public contactPhone: ContactPhone ={type: PhoneType.mobile , number: 0} 
  ngOnInit(): void {
    const contactPhone: ContactPhone = { type: PhoneType.mobile, number: 0 }
    this.usuarios = [
      {
        nombre: "Juan",
        apellido: "Perez",
        edad: 88,
        direccion: "calle 1 nro. 23",
        phone: [{ type: PhoneType.home, number: 88 },
        { type: PhoneType.mobile, number: 55 },
        { type: PhoneType.work, number: 455 }
        ]
      },
      {
        nombre: "José",
        apellido: "Martinez",
        edad: 128,
        direccion: "calle 44 nro. 500",
        phone: [{ type: PhoneType.home, number: 65 }]
      },
      {
        nombre: "Carlos",
        apellido: "Lopez",
        edad: 33,
        direccion: "calle 72 nro. 57",
        phone: [{ type: PhoneType.home, number: 345 }]
      }
    ];
  }
  public model: Usuarios = { nombre: '', apellido: '', edad: 0, direccion: '', phone: [{ type: PhoneType.home, number: 0 }] };

  enviar() {
    this.usuarios.push(this.model)
    alert(JSON.stringify(this.usuarios));
    this.model = { nombre: '', apellido: '', edad: 0, direccion: '', phone: [{ type: PhoneType.home, number: 0 }] };

  }
}
