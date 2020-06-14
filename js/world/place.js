class Place {
  constructor(elevation) {
    this.elevation = elevation
  }

  getChar() {
    switch(this.elevation) {
      case 0:
      return "."
      case 1:
      return "Y"
      case 2:
      return "\""
      case 3:
      return "n"
      case 4:
      return "A"
    }
  }
}