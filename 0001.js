/*
 * 根据数组中的值，构造如下形式的对象
 * {a:{b:{c:{d:{f:{e:{f:{g:{h:{}}}}}}}}}}
 * */

const array = ["a", "b", "c", "d", "e", "f", "g", "h"];
function reducer(accumulator, currentValue, currentIndex) {
    let obj = {};
    if (currentIndex === 1) {
        //初始化
        obj = {};
        obj[accumulator] = {};
    } else {
        obj[currentValue] = accumulator;
    }
    return obj;
}
console.log(array.reverse().reduce(reducer));