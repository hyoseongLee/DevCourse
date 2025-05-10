let error = new Error ("대장 에러 객체")
let syntaxError = new SyntaxError("구문에러 발생")
let referencedError = new ReferenceError ("대입 에러 발생!")

console.log(error.name)
console.log(error.message)

console.log(SyntaxError.name)
console.log(SyntaxError.message)

console.log(ReferenceError.name)
console.log(ReferenceError.message)