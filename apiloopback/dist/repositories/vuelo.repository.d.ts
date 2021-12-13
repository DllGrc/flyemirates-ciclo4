import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Vuelo, VueloRelations, Ruta } from '../models';
import { RutaRepository } from './ruta.repository';
export declare class VueloRepository extends DefaultCrudRepository<Vuelo, typeof Vuelo.prototype.id, VueloRelations> {
    protected rutaRepositoryGetter: Getter<RutaRepository>;
    readonly rutaFk: BelongsToAccessor<Ruta, typeof Vuelo.prototype.id>;
    constructor(dataSource: MongoDataSource, rutaRepositoryGetter: Getter<RutaRepository>);
}
