Object.keysCustom = function (o) {
    // Object.getOwnPropertyNames 会忽略 enumerable 的值获取所有的非 Symbol 的自有属性名
    let names = Object.getOwnPropertyNames(o);
    let keys = [];

    // keys 要在 names 的基础上排除不可遍历的元素
    for (let i = 0; i < names.length; i++) {
        if (Object.getOwnPropertyDescriptor(o, names[i])['enumerable']) {
            keys.push(names[i]);
        }
    }

    return keys;
}