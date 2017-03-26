const fs = require('fs')
const R = require('ramda')
const { calculateSquareAreaStartingAtIndex0 } = require('./utils')

const findMax = R.reduce(R.max, 0)

const solve = input => {
  const calculateSizePerSection = (element, index) => {
    const section = R.slice(index, index + element, input)
    return calculateSquareAreaStartingAtIndex0(section)
  }
  return R.compose(
    findMax,
    R.addIndex(R.map)(calculateSizePerSection)
  )(input)
}

fs.readFile('input.txt', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    const input = R.map(parseInt, data.toString().split("\n"))
    const result = solve(input)
    console.log(`Maximal size: ${result} unit^2`)
  }
})
