Object.prototype.isPrototypeOfCustom = function (object) {
    let proto = Object.getPrototypeOf(object);
    while (proto !== null) {
        if (this === proto) {
            return true;
        } else {
            proto = Object.getPrototypeOf(proto);
        }
    }

    return false;
}