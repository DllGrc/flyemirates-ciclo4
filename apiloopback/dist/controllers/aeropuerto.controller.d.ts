import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Aeropuerto } from '../models';
import { AeropuertoRepository } from '../repositories';
export declare class AeropuertoController {
    aeropuertoRepository: AeropuertoRepository;
    constructor(aeropuertoRepository: AeropuertoRepository);
    create(aeropuerto: Omit<Aeropuerto, 'id'>): Promise<Aeropuerto>;
    count(where?: Where<Aeropuerto>): Promise<Count>;
    find(filter?: Filter<Aeropuerto>): Promise<Aeropuerto[]>;
    updateAll(aeropuerto: Aeropuerto, where?: Where<Aeropuerto>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Aeropuerto>): Promise<Aeropuerto>;
    updateById(id: string, aeropuerto: Aeropuerto): Promise<void>;
    replaceById(id: string, aeropuerto: Aeropuerto): Promise<void>;
    deleteById(id: string): Promise<void>;
}
