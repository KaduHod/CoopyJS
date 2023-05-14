"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_inMemory_1 = __importDefault(require("./model.inMemory"));
const models_decorator_1 = require("../decorators/models.decorator");
let MusclePortionModel = class MusclePortionModel extends model_inMemory_1.default {
    constructor(id, name, image, muscle_group_id) {
        super();
        this.id = id;
        this.name = name;
        this.image = image;
        this.muscle_group_id = muscle_group_id;
    }
};
MusclePortionModel = __decorate([
    (0, models_decorator_1.Entity)("MusclePortion"),
    __metadata("design:paramtypes", [Number, String, Object, Number])
], MusclePortionModel);
exports.default = MusclePortionModel;
