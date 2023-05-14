"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const muscleGroup_model_1 = __importDefault(require("./models/muscleGroup.model"));
let test = new muscleGroup_model_1.default(1, 'oi', 'oi');
console.log({ test });
for (const key in test) {
    console.log({ key }, test[key]);
}
console.log(test['hasManyArgs'].targetEntity.toString());
// console.log(test.isPrototypeOf(InMemoryModel))
