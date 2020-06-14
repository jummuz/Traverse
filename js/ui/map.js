function drawMap(chars, xPos, yPos, size) {
  // Clear
  while(map.firstChild)
    map.removeChild(map.firstChild)

  // Create new items
  let xTile = xPos - Math.floor(size / 2)
  let yTile = yPos - Math.floor(size / 2)
  for(let y = 0; y < size; y++) {
    map.appendChild(document.createElement("tr"))
    for(let x = 0; x < size; x++) {
      map.children[y].appendChild(document.createElement("td"))

      // Draw nifty diamond map
      if(Math.abs(xPos - xTile) + Math.abs(yPos - yTile) <= Math.floor(size / 2)) {
        // Draw tile if it is on the map
        if(chars[yTile] && chars[yTile][xTile]) {
          map.children[y].children[x].textContent = chars[yTile][xTile];
        } else {
          map.children[y].children[x].textContent = "."
        }
      }
        
      xTile++
    }

    xTile = xPos - Math.floor(size / 2)
    yTile++
  }
}