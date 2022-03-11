Array.prototype.pushCustom = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }

    return this.length;
}

Array.prototype.pushCustom = function () {
    // 如果你实现了 splice，也可以直接使用下面的方式
    // 但是，实际上 push 方法的实现方式要比 splice 简单很多，使用 splice 并不是一个好方式
    // 而且该方法使用了 es6 的扩展运算符，兼容性很差
    Array.prototype.splice.apply(this, [this.length, 0, ...arguments]);

    return this.length;
}