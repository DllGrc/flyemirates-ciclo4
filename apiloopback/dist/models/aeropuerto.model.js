"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aeropuerto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Aeropuerto = class Aeropuerto extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "ciudad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "pais", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "coordX", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "coordY", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "siglas", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Aeropuerto.prototype, "tipo", void 0);
Aeropuerto = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Aeropuerto);
exports.Aeropuerto = Aeropuerto;
//# sourceMappingURL=aeropuerto.model.js.map