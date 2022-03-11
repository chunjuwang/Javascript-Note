Array.prototype.reduceCustom = function (fn, initialValue) {
    // 经过测试，该方法并不是使用 initialValue === undefined 来判断是否传递了 initialValue 参数
    // 所以我们使用 arguments 长度来判断 initialValue 参数是否存在

    let startIndex;
    let prevValue;

    // reduce 的核心难点就在于是否提供了 initialValue 这个参数
    // 如果提供了，那么从数组的第一个元素开始遍历
    // 如果没有提供，那么将数组的第一个元素当作初始值，并从第二个元素开始遍历
    
    if (arguments.length < 2) {
        prevValue = this[0];
        startIndex = 1;
    } else {
        prevValue = initialValue;
        startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
        prevValue = fn(prevValue, this[i], i, this);
    }

    return prevValue;
}