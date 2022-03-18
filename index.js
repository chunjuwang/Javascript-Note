Object.prototype.propertyIsEnumerableCustom = function (prop) {
    let names = Object.getOwnPropertyNames(this);
    let symbols = Object.getOwnPropertySymbols(this);
    let properties = [].concat(names, symbols);

    let isSymbol = typeof prop === 'symbol';

    prop = isSymbol ? prop : String(prop)

    if (properties.includes(prop) && Object.getOwnPropertyDescriptor(this, prop)['enumerable']) {
        return true;
    } else {
        return false;
    }
}

let s = Symbol();
let o = {
    info: '123',
    // [s]: 'symbol',
    123: 666,
    // 999: 9
}

Object.defineProperty(o, 'Symbol()', {
    value: function(){

    },
    enumerable: false,
    configurable: false
})

console.log(s.toString());

console.log(o.propertyIsEnumerableCustom(s));