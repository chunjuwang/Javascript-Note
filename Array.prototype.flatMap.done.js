// Array.prototype.flatMap(fn) 方法其实是 flat(1) 和 map(fn) 和封装，对 map 方法的结果进行一次一维降维操作
Array.prototype.flatMapCustom = function (fn, thisArg) {
    return this.map(fn, thisArg).flat(1);
}

Array.prototype.flatMapCustom = function (fn, thisArg) {
    if (typeof fn !== 'function' ) {
        // 这里抛出错误时，不同的浏览器对 fn 位置的标识不同，本处不做详细处理
        throw new TypeError(fn + ' is not a function');
    }

    // 改变 this 的原理主要是通过 call，apply，bind 来改变 fn 内部 this 的指向
    let handler = fn.bind(thisArg);

    const array = [];

    for (let i = 0; i < this.length; i++) {
        let result = handler(this[i], i, this);

        if (Object.prototype.toString.call(result) === '[object Array]') {
            result.forEach(function(v) {
                array.push(v);
            });
        } else {
            array.push(result);
        }
    }

    return array;
}