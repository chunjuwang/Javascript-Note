Array.prototype.shiftCustom = function () {
    let element = this[0];

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }

    this.length = this.length - 1;

    return element;
}

Array.prototype.shiftCustom = function () {
    // 注意下方的 concat，要规避 this 是非标准数组的情况
    // 以后凡是遇到 concat 都要注意该问题
    // let temp = [].concat(this);
    let temp = this.map(function(v) {
        return v;
    });

    this.length = 0;

    let element = temp[0];

    for (let i = 1; i < temp.length; i++) {
        this[this.length] = temp[i];
    }

    return element;
}

Array.prototype.shiftCustom = function () {
    // 如果你实现了 splice，也可以直接使用下面的方式
    // 但是，实际上 shift 方法的实现方式要比 splice 简单很多，使用 splice 并不是一个好方式
    return this.splice(0, 1)[0];
}