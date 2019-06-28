
let data1 = [
    {date: "ccc", room: "ddd", key: "key6"},
    {date: "aaa", room: "eee", key: "key1"},
    {date: "bbb", room: "eee", key: "key3"},
    {date: "bbb", room: "eee", key: "key4"},
    {date: "aaa", room: "eee", key: "key88"},
    {date: "ccc", room: "ddd", key: "key5"},
    {date: "aaa", room: "eee", key: "key2"},
    {date: "aaa", room: "eee", key: "key45"}
];

let red = data1.reduce((acc, cur, index, arr) => {
    let findEle = acc.find(function (ele) {
        return ele.date == cur.date && ele.room == cur.room;
    });
    if (findEle) {
        findEle.key = findEle.key + "," + cur.key;
    } else {
        acc.push(cur);
    }
    return acc;
}, []); 

console.log(red);

