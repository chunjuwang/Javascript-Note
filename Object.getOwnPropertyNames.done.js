Object.getOwnPropertyNamesCustom = function (object) {
    // 实际上 getOwnPropertySymbols 和 getOwnPropertyNames 都是已经比较底层的方法并开放给了用户
    // 我们无法通过现有的 api 再对这两个方法在进行 JavaScript 语言层面的实现

    // 该方法获取所有的非 Symbol 自有属性，不进行寻链操作，同时忽略属性描述对象的 enumerable 值
}