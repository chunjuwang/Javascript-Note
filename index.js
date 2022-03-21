Array.prototype.flatCustom = function (depth) {
    let container = [];

    depth === undefined && (depth = 1);

    Number.isNaN(Number(depth)) && (depth = 0);

    return container;
}

let arr = [1, [2, [5, 6, [99]]]];

console.log(arr.flat(null));
console.log(arr);
