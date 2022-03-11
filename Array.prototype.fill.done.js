Array.prototype.fillCustom = function (value, start, end) {
    let len = this.length;

    // 检查是否传参，未传参的话，start 默认值为 0，end 默认值为 len
    Number.isNaN(Number(start)) && (start = 0);
    Number.isNaN(Number(end)) && (end = len);

    // 对反向下标进行方向调整
    start < 0 && (start = start + len);
    end < 0 && (end = end + len);

    // 如果起始下标大于终止下标，那么使 start = end，从而跳过下方 for 循环
    // start > end && !(start = 0) && (end = 0); 与下条语句在结果上等价
    start > end && (start = end);

    // 如果起始下标大于数组长度，那么使 start = end，从而跳过下方 for 循环
    // start >= len && !(start = end = 0); 与下条语句在结果上等价
    // start >= len && (start = end = len); 与下条语句在结果上等价
    start >= len && (start = end);

    for (let i = start; i < end; i++) {
        this[i] = value;
    }

    return this;
}