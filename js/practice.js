/* global fabric */

let canvas = new fabric.Canvas('c')

//Suspect 1

canvas.add(new fabric.Text('Suspect 1', {
  top: 0,
  left: 400,
  fontSize: 18,
  fontFamily: 'sans-serif',
  fill: '#E5E1E6'
}))

fabric.Image.fromURL('img/suspect_fingerprint_1.png', function(oImg) {
  oImg.scale(0.4).set({
    top: 50,
    left: 400
  })
  canvas.add(oImg)
})

//Suspect 2

canvas.add(new fabric.Text('Suspect 2', {
  top: 0,
  left: 650,
  fontSize: 18,
  fontFamily: 'sans-serif',
  fill: '#E5E1E6'
}))

fabric.Image.fromURL('img/suspect_fingerprint_2.png', function(oImg) {
  oImg.scale(0.4).set({
    top: 50,
    left: 650
  })
  canvas.add(oImg)
})

//Suspect 3

canvas.add(new fabric.Text('Suspect 3', {
  top: 400,
  left: 400,
  fontSize: 18,
  fontFamily: 'sans-serif',
  fill: '#E5E1E6'
}))

fabric.Image.fromURL('img/suspect_fingerprint_3.png', function(oImg) {
  oImg.scale(0.4).set({
    top: 450,
    left: 400
  })
  canvas.add(oImg)
})

//Suspect 4

canvas.add(new fabric.Text('Suspect 4', {
  top: 400,
  left: 650,
  fontSize: 18,
  fontFamily: 'sans-serif',
  fill: '#E5E1E6'
}))

fabric.Image.fromURL('img/suspect_fingerprint_4.png', function(oImg) {
  oImg.scale(0.4).set({
    top: 450,
    left: 650
  })
  canvas.add(oImg)
})

//Suspect 5

canvas.add(new fabric.Text('Suspect 5', {
  top: 800,
  left: 400,
  fontSize: 18,
  fontFamily: 'sans-serif',
  fill: '#E5E1E6'
}))

fabric.Image.fromURL('img/suspect_fingerprint_5.png', function(oImg) {
  oImg.scale(0.4).set({
    top: 850,
    left: 400
  })
  canvas.add(oImg)
})

//Suspect 6

canvas.add(new fabric.Text('Suspect 6', {
  top: 800,
  left: 650,
  fontSize: 18,
  fontFamily: 'sans-serif',
  fill: '#E5E1E6'
}))

fabric.Image.fromURL('img/suspect_fingerprint_6.png', function(oImg) {
  oImg.scale(0.4).set({
    top: 850,
    left: 650
  })
  canvas.add(oImg)
})

// Unknown

canvas.add(new fabric.Text('Unknown Fingerprint from Crime Scene', {
  top: 0,
  left: 0,
  fontSize: 18,
  fontFamily: 'sans-serif',
  fill: '#E5E1E6'
}))

fabric.Image.fromURL('img/unknown_fingerprint.png', function(oImg) {
  oImg.scale(0.4).set({
    top: 50,
    left: 0
  })
  canvas.add(oImg)
})