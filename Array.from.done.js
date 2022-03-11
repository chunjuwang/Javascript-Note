Array.fromCustom = function (arrayLike, mapFn, thisArg) {
    let array = [];

    if (arrayLike[Symbol.iterator]) {
        // 如果 iterator 不符合规范，错误将由 for...of... 接管并抛出
        // 也可以在这里自己实现一个用来检测 iterator 是否符合标准的工具
        for (let value of arrayLike) {
            array.push(value);
        }
    } else if (arrayLike.length !== null && arrayLike.length !== undefined && !Number.isNaN(Number(arrayLike.length))) { // 要体会好这里的 !Number.isNaN(Number(arrayLike.length))
        for (let index = 0; index < arrayLike.length; index++) {
            array.push(arrayLike[index]);
        }
    }

    // 如果 arrayLike 参数既不是伪数组也不是具有遍历器的类型，from 方法将返回一个空数组

    if (mapFn && mapFn instanceof Function) {
        thisArg === undefined && (thisArg = array);

        array = array.map(mapFn, thisArg);
    }

    return array;
}