import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ruta, RutaRelations, Aeropuerto } from '../models';
import { AeropuertoRepository } from './aeropuerto.repository';
export declare class RutaRepository extends DefaultCrudRepository<Ruta, typeof Ruta.prototype.id, RutaRelations> {
    protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>;
    readonly origenFk: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.id>;
    readonly destinoFk: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.id>;
    constructor(dataSource: MongoDataSource, aeropuertoRepositoryGetter: Getter<AeropuertoRepository>);
}
