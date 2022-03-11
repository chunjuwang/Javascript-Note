Array.prototype.popCustom = function () {
    if (this.length === 0) {
        return undefined;
    }

    let element = this[this.length - 1];
    this.length = this.length - 1;

    return element;
}

Array.prototype.popCustom = function () {
    // 如果你实现了 splice，也可以直接使用下面的方式
    // 但是，实际上 pop 方法的实现方式要比 splice 简单很多，使用 splice 并不是一个好方式
    return this.splice(this.length - 1, 1)[0];
}

