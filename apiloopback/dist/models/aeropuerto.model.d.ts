import { Entity } from '@loopback/repository';
export declare class Aeropuerto extends Entity {
    id?: string;
    nombre: string;
    ciudad: string;
    pais: string;
    coordX: string;
    coordY: string;
    siglas: string;
    tipo: string;
    constructor(data?: Partial<Aeropuerto>);
}
export interface AeropuertoRelations {
}
export declare type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
