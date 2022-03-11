Array.prototype.toStringCustom = function () {
    // 这个比较简单，就直接借用 join 方法来实现吧
    return this.join(",");
}