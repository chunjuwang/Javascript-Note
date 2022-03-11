Array.ofCustom = function (...args) {
    return [...args];
}

Array.ofCustom = function (...args) {
    return [].concat(args);
}

Array.ofCustom = function (...args) {
    return Array.prototype.slice.call(args);
}


Array.ofCustom = function () {
    return [...arguments];
}

Array.ofCustom = function () {
    return Array.prototype.slice.call(arguments);
}

Array.ofCustom = function (...args) {
    let array = [];
    for (let i = 0; i < args.length; i++) {
        array.push(args[i])
    }
    return array;
}

// 注意 Array.prototype.concat 方法的只能剥开一层 Array 类型的数据，arguments 是类数组对象，因此该方法为错误实现
// Array.ofCustom = function () {
//     return [].concat(arguments);
// }