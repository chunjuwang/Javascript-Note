Array.prototype.includesCustom = function (element) {
    // 如果 element 不传参，[1, undefined, 2], 包含 undefined 的数组将会返回 true，与原生 includes 行为相同
    for (let i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return true;
        }
    }

    return false;
}