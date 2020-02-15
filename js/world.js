function generateWorld(width, height, elevation, smoothing) {
  // Initial random values
  let world = []
  for(let y = 0; y < height; y++) {
    world.push([])
    for(let x = 0; x < width; x++)
      world[y].push(Math.floor(Math.random() * elevation))
  }

  for(let i = 0; i < smoothing; i++) {
    let newWorld = []
    for(let y in world) {
      newWorld.push([])
      for(let x in world) {
        newWorld[y].push(0)

        // Identify surrounding
        let surrounding = []
        if(x > 0) surrounding.push(world[y][x - 1])
        if(y > 0) surrounding.push(world[y - 1][x])
        if(x < width - 1) surrounding.push(world[y][parseInt(x) + 1])
        if(y < height - 1) surrounding.push(world[parseInt(y) + 1][x])
        if(x > 0 && y > 0) surrounding.push(world[y - 1][x - 1])
        if(x > 0 && y < height - 1) surrounding.push(world[parseInt(y) + 1][x - 1])
        if(x < width - 1 && y > 0) surrounding.push(world[y - 1][parseInt(x) + 1])
        if(x < width - 1 && y < height - 1) surrounding.push(world[parseInt(y) + 1][parseInt(x) + 1])

        // Update cell
        for(let i in surrounding) {
          newWorld[y][x] += surrounding[i]
        }
        newWorld[y][x] /= surrounding.length
      }
    }

    // Find max and min
    let max = 0
    let min = elevation
    for(let y in newWorld) {
      for(let x in newWorld) {
        if(newWorld[y][x] > max) max = newWorld[y][x]
        if(newWorld[y][x] < min) min = newWorld[y][x]
      }
    }

    // Update world
    for(let y in newWorld) {
      for(let x in newWorld[y]) {
        world[y][x] = Math.round(newWorld[y][x] * elevation / (max - min) - min)
      }
    }
  }

  return world
}