Array.prototype.sliceCustom = function (start, end) {
    Number.isNaN(Number(start)) && (start = 0);
    Number.isNaN(Number(end)) && (end = this.length);

    // 如果参数是反向下标，将其转为正向
    start < 0 && (start = start + this.length);
    end < 0 && (end = end + this.length);

    // 转为正向下标依然越界，则在左边界置零
    start < 0 && (start = 0);
    end < 0 && (end = 0);

    // 转为正向下标依然越界，则在右边界重置边界值
    start > this.length - 1 && (start = end = this.length - 1);
    end > this.length && (end = this.length);

    // 如果起始下标大于终止下标，则认为二者在合法范围内是相等的，即跳过下方循环代码
    start > end && (end = start);

    let array = [];

    for (let i = start; i < end; i++) {
        array[array.length] = this[i];
    }

    return array;
}