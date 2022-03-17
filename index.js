Object.keysCustom = function (o) {
    // Object.getOwnPropertyNames 会忽略 enumerable 的值获取所有的非 Symbol 的自有属性名
    let names = Object.getOwnPropertyNames(o);
    let keys = [];

    for (let i = 0; i < names.length; i++) {
        if (Object.getOwnPropertyDescriptor(o, names[i])['enumerable']) {
            keys.push(names[i]);
        }
    }

    return keys;
}

let s = Symbol();
let o = {
    foo: 'foo value',
    bar: 'bar value',
    [s]: 'Symbol value'
}

Object.defineProperty(o, 'baz', {
    value: 'baz value'
});

for (let key in o) {
    console.log(key);
}
console.log(Object.keysCustom(o));

// for...in... 可以遍历自有属性，不可遍历 Symbol 与 enumable 为 false 的元素
// in 元素单独使用可以判断自身及原型链上的所有的属性
// getOwnPropertyNames 可以遍历所有的非 Symbol 属性
// getOwnPropertySymbols 可以遍历所有的 Symbol 属性


