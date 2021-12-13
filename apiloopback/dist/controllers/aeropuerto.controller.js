"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AeropuertoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AeropuertoController = class AeropuertoController {
    constructor(aeropuertoRepository) {
        this.aeropuertoRepository = aeropuertoRepository;
    }
    async create(aeropuerto) {
        return this.aeropuertoRepository.create(aeropuerto);
    }
    async count(where) {
        return this.aeropuertoRepository.count(where);
    }
    async find(filter) {
        return this.aeropuertoRepository.find(filter);
    }
    async updateAll(aeropuerto, where) {
        return this.aeropuertoRepository.updateAll(aeropuerto, where);
    }
    async findById(id, filter) {
        return this.aeropuertoRepository.findById(id, filter);
    }
    async updateById(id, aeropuerto) {
        await this.aeropuertoRepository.updateById(id, aeropuerto);
    }
    async replaceById(id, aeropuerto) {
        await this.aeropuertoRepository.replaceById(id, aeropuerto);
    }
    async deleteById(id) {
        await this.aeropuertoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/aeropuertos'),
    (0, rest_1.response)(200, {
        description: 'Aeropuerto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Aeropuerto) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aeropuerto, {
                    title: 'NewAeropuerto',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/aeropuertos/count'),
    (0, rest_1.response)(200, {
        description: 'Aeropuerto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Aeropuerto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/aeropuertos'),
    (0, rest_1.response)(200, {
        description: 'Array of Aeropuerto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Aeropuerto, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Aeropuerto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/aeropuertos'),
    (0, rest_1.response)(200, {
        description: 'Aeropuerto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aeropuerto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Aeropuerto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Aeropuerto, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/aeropuertos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Aeropuerto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aeropuerto, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Aeropuerto, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/aeropuertos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aeropuerto PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aeropuerto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Aeropuerto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/aeropuertos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aeropuerto PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Aeropuerto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/aeropuertos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aeropuerto DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoController.prototype, "deleteById", null);
AeropuertoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AeropuertoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AeropuertoRepository])
], AeropuertoController);
exports.AeropuertoController = AeropuertoController;
//# sourceMappingURL=aeropuerto.controller.js.map