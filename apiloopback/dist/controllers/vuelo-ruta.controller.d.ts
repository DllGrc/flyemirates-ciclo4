import { Vuelo, Ruta } from '../models';
import { VueloRepository } from '../repositories';
export declare class VueloRutaController {
    vueloRepository: VueloRepository;
    constructor(vueloRepository: VueloRepository);
    getRuta(id: typeof Vuelo.prototype.id): Promise<Ruta>;
}
