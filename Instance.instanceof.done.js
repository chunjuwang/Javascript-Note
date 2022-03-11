function instanceofCustom (instance, constructor) {
    // constructor 必须是对象，并且是函数对象
    // 经过验证，判断构造关系的本质是通过原型对象来判断的，跟 prototype.constructor 属性无关，因此，使用 prototype.constructor 属性进行的实现是不准确的
    if (typeof constructor !== 'object' || constructor === null) {
        throw new TypeError("Right-hand side of 'instanceof' is not an object")
    } 

    if (typeof constructor !== 'function') {
        throw new TypeError("Right-hand side of 'instanceof' is not callable")
    }

    let prototype = constructor.prototype;
    
    while (prototype !== null) {
        if (instance.__proto__ === prototype) {
            return true;
        } else {
            prototype = prototype.__proto__;
        }
    }

    return false;
}

