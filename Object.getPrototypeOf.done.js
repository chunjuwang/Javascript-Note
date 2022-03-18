Object.getPrototypeOfCustom = function (object) {
    if (object === null || object === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    // 即便是标量类型，也会自动转换为包装类型
    return object.__proto__;
}