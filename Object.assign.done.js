Object.assignCustom = function (target) {
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];
        
        if (source === null || source === undefined) {
            continue;
        }

        let names = Object.getOwnPropertyNames(source);
        let symbols = Object.getOwnPropertySymbols(source);
        let properties = [].concat(names, symbols);

        properties.forEach(function (property) {
            Object.getOwnPropertyDescriptor(source, property)['enumerable'] && (target[property] = source[property]);
        });
    }

    return target;
}
// 可能有的人会考虑到一些特殊的对象，如下方的案例，其实不必做过多处理，因为内置的其他引用类型，其内部的属性都是不可遍历或者并未开放的
// Object.assign({}, new RegExp('123'), new Date(), function(){}, null, undefined, 12, true)