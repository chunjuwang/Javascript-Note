function newCustom (constructor, args) {
    // new 操作符在内存中创建对象
    const o = {};

    // 使该对象继承于构造函数的原型
    o.__proto__ = constructor.prototype;

    // 在新对象的执行上下文中调用构造函数
    const result = constructor.apply(o, args);

    // 如果构造函数本身产出了对象类型，那么将该对象作为最终产物产生
    return typeof result === 'object' || typeof result === 'function' ? result : o;
}