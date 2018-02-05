var array = []

for (var i = 0; i < 25; i++) {
  if (i === 1) {
    array[parseInt(i)] = "I am 1 strange loop."
  } else {
    array[parseInt(i)] = `I am ${i} strange loops.`
  }
}