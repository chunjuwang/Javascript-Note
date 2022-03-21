Array.prototype.flatCustom = function (depth) {
    let container = [];

    depth === undefined && (depth = 1);

    Number.isNaN(Number(depth)) && (depth = 0);

    console.log(depth);

    for (let i = 0; i < this.length; i++) {
        if (Object.prototype.toString.call(this[i]) === '[object Array]' && depth > 0) {
            this[i].flatCustom(depth - 1).forEach(function (v) {
                container.push(v);
            });
        } else {
            container.push(this[i]);
        }
    }

    return container;
}

let arr = [1, [2, [5, 6, [99]]]];

console.log(arr.flatCustom(1));
console.log(arr.flat(0));
console.log(arr);
