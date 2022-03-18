Object.setPrototypeOfCustom = function(object, proto) {
    // 第一个参数必须非 null 和 undefined
    if (object === null || object === undefined) {
        throw new TypeError('Object.setPrototypeOf called on null or undefined');
    }

    // 第二个参数必须使用 object 或者 null 来作为原型对象，function 属于一等 object，所以也可以作为原型
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object or null')
    }

    object.__proto__ = proto;
    return object;
}

// 不同的浏览器的报错描述信息会有所差异，但其含义均为相同，错误信息参照于 chrome 或 firefox