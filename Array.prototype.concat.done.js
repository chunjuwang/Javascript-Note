Array.prototype.concatCustom = function () {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        array.push(this[i]);
    }

    for (let i = 0; i < arguments.length; i++) {
        // concat 会拆解一层维度的数组参数
        if (Array.isArray(arguments[i])) {
            for (let m = 0; m < arguments[i].length; m++) {
                array.push(arguments[i][m]);
            }
        } else {
            array.push(arguments[i]);
        }
    }

    return array;
}