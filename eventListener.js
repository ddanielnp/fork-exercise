document.querySelector('#button').addEventListener('click', getColor)

var background = document.querySelector('body')
var red = random()
var green = random()
var blue = random()
var color = rgb(red, green, blue)

function random () {
  return Math.floor(Math.random()*255)
}

function getColor() {
  document.body.style.backgroundColor = 'color'
}


var button = document.querySelector('button')
var body = document.querySelector('body')

button.addEventListener('click', function () {
  body.style.backgroundColor = colorChanger()
})

//timeout interval

// function afterTimeout() {
//   alert('This is after 5 seconds')
// }
// function repeatEvery5Seconds() {
//   alert('repeat')
// }
//
// setTimeOut(afterTimeout, 5000)


function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function colorChanger() {
  var r = (0, 255)
  var g = (0, 255)
  var b = (0, 255)
  var o = Math.random()


}
