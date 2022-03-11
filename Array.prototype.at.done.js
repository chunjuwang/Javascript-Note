Array.prototype.atCustom = function (index) {
    // 该方式尚在实验阶段，firefox 已经实现该方法， chrome 暂时未实现，其他浏览器未测试，需要持续关注
    const len = this.length;

    index < 0 && (index = len + index);

    return this[index];
}