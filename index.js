//helpers

function isFunction(obj) {
    return typeof obj == 'function';
}
  
function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || (type === 'object' && !!obj);
}
