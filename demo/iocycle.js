
let x=1;

function print() {
    console.log(x);
    x++
}
setTimeout(print, 0);
setImmediate(print);
print();

setTimeout(() => console.log("timeout 0"), 0);
setImmediate(() => console.log("immediate"));
console.log("sync");
