/**
 * 写一个方法，修改最内层x的值
 */
let data = {
    a: {
        b: {
            c: {
                d: {
                    //...N层
                    n: {
                        x: '值'
                    }
                }
            }
        }
    }
}

function alterXvalue(obj, value) {
    let keys = Object.keys(obj);
    if (typeof obj[keys[0]] == "object") {
        alterXvalue(obj[keys[0]], value);
    } else {
        obj[keys[0]] = value;
        return value;
    }
}

alterXvalue(data, "最内层的值");
console.log(data);