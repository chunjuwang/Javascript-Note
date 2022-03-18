// 该方法正处于试验阶段，暂时 firefox 对其进行了实现
Object.hasOwnCustom = function (object, prop) {
    if (object === null || object === prop) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    // prop 参数位置会做一次 string 转换，null 和 undefined 也是合法的，所以不可以使用 toString 方法
    return object.hasOwnProperty(String(prop))
}