const obj1 = {}
const obj2 = {message : "안빔"}

console.log(isEmpty(obj1))
console.log(isEmpty(obj2))

function isEmpty(obj) {
    if(obj.constructor === Object)
    if(Object.keys(obj).length===0) {
        return true;
    } else{
        return false;
    }
}