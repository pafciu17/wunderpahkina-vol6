const R = require('ramda')

const getBiggestDimension = (index, currentMin, currentValue) => {
  if (index >= currentMin) {
    return currentMin
  } else if (currentMin > currentValue) {
    return R.max(currentValue, index)
  } else {
    return R.min(currentMin, currentValue)
  }
}

const getSquareStaringAtIndex0 = input => {
  const { min } = R.reduce((a, b) => ({
    index: a.index + 1,
    min: getBiggestDimension(a.index, a.min, b)
  }), {
    index: 0,
    min: Infinity
  }, input)

  if (min > input.length) {
    return input.length
  } else {
    return min
  }
}

const calculateSquareAreaStartingAtIndex0 = input => Math.pow(getSquareStaringAtIndex0(input), 2)

module.exports = {
  calculateSquareAreaStartingAtIndex0
}
