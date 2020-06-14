let x = 50
let y = 50

window.addEventListener("keydown", function(e) {
  switch(e.keyCode) {
    case 37:
    x--
    break
    case 38:
    y--
    break
    case 39:
    x++
    break
    case 40:
    y++
    break
  }

  drawMap(world.chars, x, y, 7)
})

let world = new World(100, 100, 4, 3)
log("You wake up in a bed of roses.")
drawResources()