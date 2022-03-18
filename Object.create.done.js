Object.createCustom = function (proto, propertiesDescriptor) {
    let o = {};

    // 在不考虑兼容性的情况下，不推荐 o.__proto__ = proto 这种方式
    // proto 参数接收 null 值，返回一个空对象
    (typeof proto === 'object' || typeof proto === 'function') && Object.setPrototypeOf(o, proto);

    propertiesDescriptor !== undefined && Object.defineProperties(o, propertiesDescriptor);

    return o;
}

// Object.defineProperties() 和 Object.defineProperty() 方法无法在 JavaScript 层面给予实现，将其掌握便好
