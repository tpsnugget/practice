

// var module = {
//   x: 42,
//   getX: function() {
//     console.log(this.x)
//     return this.x
//   },  myBindFunction: function() {
//     this.getX.bind(this)
//     console.log('I am in the myBindFunction')
//     this.myNewGetX.bind(this)
//   },
//   myNewGetX: function() {
//     console.log('I am in the myNewGetFunction')
//     var unboundGetX = module.getX
//     console.log(this.x)
//     console.log(this)
//     console.log(unboundGetX())
//   }
// }

// // var unboundGetX = module.getX
// // console.log(unboundGetX())

// // module.myNewGetX()

// module.myBindFunction()
// module.myNewGetX()

var module = {
  x: 42,
  getX: function() {
    // console.log(this)
    // console.log(this.x)
    return this.x
  },
  updateX: function(num) {
    this.x = num
    this.myConsoleLog()
  },
  myConsoleLog: function() {
    console.log('I am in myConsoleLog function')
  }
}
var mygetX = module.getX.bind(module)
var runMyConsoleLog = module.myConsoleLog.bind(module)

var myX = mygetX()
console.log(myX)

module.updateX(33)

mygetX()
runMyConsoleLog()