Object.prototype.hasOwnPropertyCustom = function (prop) {
    // 该方法可以命中所有的自有属性，包括 Symbol 类型，并且忽略属性描述对象的 enumerable 值
    let names = Object.getOwnPropertyNames(this);
    let symbols = Object.getOwnPropertySymbols(this);

    if (symbols.includes(prop) || names.includes(String(prop))) {
        return true;
    } else {
        return false;
    }
}