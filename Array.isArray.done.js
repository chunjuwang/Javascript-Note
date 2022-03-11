Array.isArrayCustom = function (arg) {
    /**
     * ecmascript 6+ 之前，以下代码就可以准确的判断，但是现代规范中需要加些额外判断
     * return Object.prototype.toString.call(arg) === '[object Array]';
     */

    let scope = arg;
    let toStringTag = null;

    // 逐层遍历，找到原型链上第一个 toStringTag 并赋予 null 值将其置于无效状态
    // 现在 toString 方法在查找 toStringTag 时，只会命中原型链上第一个 toStringTag 属性，无论该属性有效或是无效，都将停止查找，这个特性在将来会不会改变犹未可知，需要持续关注
    while (scope !== null) {
        if (Symbol.toStringTag in Object.getOwnPropertySymbols(scope)) {
            toStringTag = scope[Symbol.toStringTag];
            if (typeof toStringTag === 'string') {
                scope[Symbol.toStringTag] = null;
            }
            break;
        } else {
            scope = scope.__proto__;
        }
    }
    
    let is = Object.prototype.toString.call(arg) === '[object Array]';

    // 避免破坏原数据，将其还原
    if (typeof toStringTag === 'string') {
        scope[Symbol.toStringTag] = toStringTag;
    }

    return is;
}