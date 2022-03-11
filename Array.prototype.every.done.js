Array.prototype.everyCustom = function (fn, thisArg) {
    if (typeof fn !== 'function' ) {
        // 这里抛出错误时，不同的浏览器对 fn 位置的标识不同，本处不做详细处理
        throw new TypeError(fn + ' is not a function');
    }

    // 改变 this 的原理主要是通过 call，apply，bind 来改变 fn 内部 this 的指向
    let handler = fn.bind(thisArg);

    for (let i = 0; i < this.length; i++) {
        let result = handler(this[i], i, this);
        
        if (!result) {
            return false;
        }
    }

    return true;
}