function drawMap(chars, x, y, size) {
  // Clear
  while(map.firstChild)
    map.removeChild(map.firstChild)

  // Create new items
  for(let y in chars) {
    map.appendChild(document.createElement("tr"))
    for(let x in chars[y]) {
      map.children[y].appendChild(document.createElement("td"))
      map.children[y].children[x].textContent = chars[y][x]
    }
  }
}