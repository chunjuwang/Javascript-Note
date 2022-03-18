Object.isCustom = function(x, y) {
    // MDN 使用的这种实现方式，非常的巧妙
    if (x === y) {
        // 这里主要用来判断值相同但是有可能是 0 的情况
        // -0 === +0 为 true，这是 Object.is 与 === 号的区别
        // 如果 x 为 0，那么通过 1 / -0 -> -Infinity, 1 / +0 -> Infinity 来区别
      return x !== 0 || 1 / x === 1 / y;
    } else {
        // 根据 NaN 不等于 NaN 的特性
      return x !== x && y !== y;
    }
};