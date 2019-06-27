/**
 * 写一个函数，两个参数都要用到
 * 
 */

function getValue(obj, props) {
    
    return obj[props[0]][props[1]];
}

let v = getValue({
    a: {
        b: 123,
        c: 78
    }
}, ["a", "c"]);

console.log(v);