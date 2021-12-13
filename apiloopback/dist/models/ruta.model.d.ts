import { Entity } from '@loopback/repository';
export declare class Ruta extends Entity {
    id?: string;
    tiempoEstimado: string;
    origen: string;
    destino: string;
    constructor(data?: Partial<Ruta>);
}
export interface RutaRelations {
}
export declare type RutaWithRelations = Ruta & RutaRelations;
