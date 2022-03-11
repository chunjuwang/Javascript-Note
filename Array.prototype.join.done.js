Array.prototype.joinCustom = function (sep) {
    // 如果未传参或者传入 undefined 作为参数，那么 sep 重置为 ','
    sep === undefined && (sep = ',');
    // 如果显示传入一个 null 作为分隔符，那么将会将参数重置未字符串 'null'
    sep === null && (sep = 'null');

    sep = sep.toString();

    let joinString = '';

    for (let i = 0; i < this.length; i++) {
        // 数据的元素如果是 undefined 或者 null，将会被转化为空字符
        let elementString = this[i] === null || this[i] === undefined ? '' : this[i].toString();
        i < this.length - 1 ? (joinString = joinString + elementString + sep) : (joinString = joinString + elementString);
    }

    return joinString;
}