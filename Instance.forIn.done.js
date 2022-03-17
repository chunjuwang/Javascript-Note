function forIn (o, fn) {
    let keys = Object.keys(o);
    for (let i = 0; i < keys.length; i++) {
        fn(keys[i]);
        // for...in... 主要是为了遍历出 key，所以 fn(keys[i]) 即可
        // fn(o[keys[i]], keys[i]);
    }
}