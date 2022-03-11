# JavaScript 积累笔记

## 实现类

- > ```javascript
  > Array.from(arrayLike, mapFn, thisArg);
  > ```
  >
  > 以下版本未考虑对象属性的 descriptor （描述符对象），即未考虑对象属性的遍历可见性

  ~~~javascript
  Array.fromCustom = function (arrayLike, mapFn, thisArg) {
      let array = [];
  
      if (arrayLike[Symbol.iterator]) {
          // 如果 iterator 不符合规范，错误将由 for...of... 接管并抛出
          for (let value of arrayLike) {
              array.push(value);
          }
      } else if (arrayLike.length !== null && arrayLike.length !== undefined && !Number.isNaN(Number(arrayLike.length))) {
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
  ~~~

  

- > ```javascript
  > Array.prototype.concat(value1[, value2[, ...[, valueN]]]);
  > ```

  ~~~javascript
  Array.prototype.concatCustom = function () {
      let array = [];
  
      for (let i = 0; i < this.length; i++) {
          array.push(this[i]);
      }
  
      for (let i = 0; i < arguments.length; i++) {
          // concat 会拆解一层维度的数组参数
          if (Array.isArray(arguments[i])) {
              for (let m = 0; m < arguments[i].length; m++) {
                  array.push(arguments[i][m]);
              }
          } else {
              array.push(arguments[i]);
          }
      }
  
      return array;
  }
  ~~~

- 