"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
function Entity(name) {
    return function (target) {
        Object.defineProperty(target.prototype, "tableName", {
            value: name,
            enumerable: true
        });
        return target;
    };
}
exports.Entity = Entity;
