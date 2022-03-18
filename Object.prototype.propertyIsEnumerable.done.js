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