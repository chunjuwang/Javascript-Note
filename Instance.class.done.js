// class Parent {
    
// }

// class Children extends Parent {
//     constructor () {
//         super();
//     }
// }

// 上述 es6 语法转化为 es5 语法如下

function Parent () {

}

function Children () {
    // 经典继承
    Parent.call(this)
}

// 原型继承
Children.prototype = new Parent();
// 静态方法继承
Children.__proto__ = Parent;