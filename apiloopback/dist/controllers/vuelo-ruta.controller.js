"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueloRutaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VueloRutaController = class VueloRutaController {
    constructor(vueloRepository) {
        this.vueloRepository = vueloRepository;
    }
    async getRuta(id) {
        return this.vueloRepository.rutaFk(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vuelos/{id}/ruta', {
        responses: {
            '200': {
                description: 'Ruta belonging to Vuelo',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Ruta) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloRutaController.prototype, "getRuta", null);
VueloRutaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VueloRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VueloRepository])
], VueloRutaController);
exports.VueloRutaController = VueloRutaController;
//# sourceMappingURL=vuelo-ruta.controller.js.map