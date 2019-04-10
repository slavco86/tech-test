const tests = [
  ['div'],
  ['h1', 'Text'],
  ['span', 'More', 'Text'],
  ['a', ['b', 'More'], ' Text'],
  ['p', '<b>Text</b>']
]

const reducer = (acc, val, i, arr) => {
  if (arr.length === 1) return `<${val}/>`
  if (Array.isArray(val)) {
    acc += val.reduce(reducer, acc)
  } else {
    acc = i === 0 ? `<${val}>` : (acc += val)
  }
  if (i + 1 === arr.length) {
    acc += `</${arr[0]}>`
  }
  return acc
}

tests.forEach(test => console.info(test.reduce(reducer, '')))

const col1 = 'd32323'
const col2 = '23d344'

function average(col1, col2) {
  const r = Math.round(
    (parseInt(col1.substring(0, 2), 16) + parseInt(col2.substring(0, 2), 16)) /
      2
  )
  const g = Math.round(
    (parseInt(col1.substring(2, 4), 16) + parseInt(col2.substring(2, 4), 16)) /
      2
  )
  const b = Math.round(
    (parseInt(col1.substring(4, 6), 16) + parseInt(col2.substring(4, 6), 16)) /
      2
  )

  return `${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}
console.log(average(col1, col2))
