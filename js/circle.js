var draw = SVG('drawing').size(1000, 1000)

var circ = draw.circle(100).fill('dodgerblue')

  circ.animate().after(function() {
    this.animate().move(500)
    this.animate().move(500,500)
    this.animate().move(0,500)
    this.animate().move(0,0)

  })