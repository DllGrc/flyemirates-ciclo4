import { Ruta, Aeropuerto } from '../models';
import { RutaRepository } from '../repositories';
export declare class RutaAeropuertoController {
    rutaRepository: RutaRepository;
    constructor(rutaRepository: RutaRepository);
    getAeropuerto(id: typeof Ruta.prototype.id): Promise<Aeropuerto>;
}
