// 实现原理请参照 Array.prototype.keysCustom()
Array.prototype.valuesCustom = function () {
    const _this = this;
    let index = 0;

    // 该方法返回一个对象，该对象必须具有可遍历性，因此该对象必须拥有正确的 [Symbol.iterator] 属性
    return {
        next() {
            return {
                value: _this[index],
                done: (index++ < _this.length ? false : true)
            }
        },
    
        [Symbol.iterator] () {
            return this;
        }
    }
}