function drawResources() {
  // Clear
  while(resources.firstChild)
    resources.removeChild(resources.firstChild)
  
  // Add new list
  for(let i in player.resources) {
    let div = document.createElement("div")
    div.textContent = i + " x" + player.resources[i]
    resources.appendChild(div)
  }
}