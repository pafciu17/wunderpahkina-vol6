const fs = require('fs')

const handleSolution = (input) => {
  for(i in input) {
    console.log(input[i])
  }
}

fs.readFile('input.txt', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    const input = data.toString().split("\n")
    handleSolution(input)
  }
})
