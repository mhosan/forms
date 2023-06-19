import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HourService {

  constructor() { 
    setInterval(()=>{
      HourService.actualizarHora();
    }, 1000);
  }

  static actualizarHora(): void {
    const reloj: HTMLElement | null = document.getElementById("reloj");
    const fecha: Date = new Date();
      let horas: number | string = fecha.getHours();
      let minutos: number | string = fecha.getMinutes();
      let segundos: number | string= fecha.getSeconds();
      horas = (horas < 10) ? 0 + horas : horas;
      minutos = (minutos < 10) ? 0 + minutos : minutos;
      segundos = (segundos < 10) ? 0 + segundos : segundos;
      const horaCompleta: string = horas + ":" + minutos + ":" + segundos;
      if (reloj) { 
      reloj.innerHTML = horaCompleta;
    }
    }
}
