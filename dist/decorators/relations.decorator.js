"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relations = void 0;
var Relations;
(function (Relations) {
    function HasMany(args) {
        return function (target, key) {
            target.hasManyArgs = args;
            return target;
            // Object.defineProperty(target, "hasManyArgs", {
            // enumerable: true,
            // configurable: true
            // })
        };
    }
    Relations.HasMany = HasMany;
    function HasOne() { }
    Relations.HasOne = HasOne;
    function BelongsTo() { }
    Relations.BelongsTo = BelongsTo;
    function BelgonsToMany() { }
    Relations.BelgonsToMany = BelgonsToMany;
    function ManyToMany() { }
    Relations.ManyToMany = ManyToMany;
})(Relations = exports.Relations || (exports.Relations = {}));
