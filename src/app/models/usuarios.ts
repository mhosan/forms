export interface Usuarios {
    nombre: string,
    apellido: string,
    edad: number,
    direccion: string,
    phone: ContactPhone[]
}

export interface ContactPhone {
    type: PhoneType,
    number: number
}

export enum PhoneType {
    mobile = 'mobile',
    home = 'home',
    work = 'work'
}
