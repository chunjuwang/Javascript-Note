Array.prototype.reverseCustom = function () {
    for (let i = 0; i < this.length - 1 - i; i++) {
        let left = this[i];
        let right = this[this.length - 1 - i];

        this[this.length - 1 - i] = left;
        this[i] = right;
    }

    return this;
}

Array.prototype.reverseCustom = function () {
    let temp = []

    // 如果使用 concat 方法快速拷贝元素，那么使用 call，apply，bind 方式在非纯属组数据上调用 reverseCustom 时，将会出现错误
    // let temp = [].concat(this);
    // 快速拷贝数组方法很多，这里依然使用最原始的遍历拷贝

    for (let i = 0; i < this.length; i++) {
        temp[i] = this[i];
    }

    for (let i = this.length - 1; i > -1; i--) {
        this[i] = temp[this.length - 1 - i];
    }

    return this;
}

