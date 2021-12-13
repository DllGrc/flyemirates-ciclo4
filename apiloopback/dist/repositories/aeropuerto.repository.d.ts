import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Aeropuerto, AeropuertoRelations } from '../models';
export declare class AeropuertoRepository extends DefaultCrudRepository<Aeropuerto, typeof Aeropuerto.prototype.id, AeropuertoRelations> {
    constructor(dataSource: MongoDataSource);
}
