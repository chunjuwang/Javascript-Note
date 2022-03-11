Array.prototype.reduceRightCustom = function (fn, initialValue) {
    // 经过测试，该方法并不是使用 initialValue === undefined 来判断是否传递了 initialValue 参数
    // 所以我们使用 arguments 长度来判断 initialValue 参数是否存在

    let startIndex;
    let prevValue;

    // reduce 的核心难点就在于是否提供了 initialValue 这个参数
    // 如果提供了，那么从数组的最后一个元素开始遍历
    // 如果没有提供，那么将数组的最后一个元素当作初始值，并从倒数第二个元素开始遍历
    // 注意遍历的方向时从右至左
    
    if (arguments.length < 2) {
        prevValue = this[this.length - 1];
        startIndex = this.length - 2;
    } else {
        prevValue = initialValue;
        startIndex = this.length - 1;
    }

    for (let i = startIndex; i > -1; i--) {
        prevValue = fn(prevValue, this[i], i, this);
    }

    return prevValue;
}