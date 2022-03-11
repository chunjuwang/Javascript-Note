Array.prototype.lastIndexOfCustom = function (element) {
    // 如果 element 不传参，[1, undefined, 2], 包含 undefined 的数组将会返回其下标位置，与原生 lastIndexOf 行为相同
    for (let i = this.length - 1; i > -1; i--) {
        if (this[i] === element) {
            return i;
        }
    }

    return -1;
}