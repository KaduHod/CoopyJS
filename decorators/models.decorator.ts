export function Entity(name: string) {
    return function (target: any) {
      Object.defineProperty(target.prototype, "tableName", {
        value: name,
        enumerable: true
      })
      return target
    }
}