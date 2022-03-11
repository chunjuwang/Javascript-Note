Array.prototype.indexOfCustom = function (element) {
    // 如果 element 不传参，[1, undefined, 2], 包含 undefined 的数组将会返回其下标位置，与原生 indexOf 行为相同
    for (let i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return i;
        }
    }

    return -1;
}