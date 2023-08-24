// const sos = `Whiskey Hotel Four Tango Dash Alpha Romeo Three Dash Yankee Oscar Uniform Dash Sierra One November Kilo India November Golf Dash Four Bravo Zero Uniform Seven`
// const flagFormat = `TFCCTF{RE5UL7-H3R3}`

// let sos_S = sos.split(' ')
// let fs = []
// const num = {
//   Four: 4,

//   Dash: '-',
//   Three: 3,
//   One: 1,
//   Seven: 7,
// }

// console.log(num.get('Four'))
// for (let key of sos_S) {
//   //   fs.push(key.slice(0, 1))
//   if (num[key] == undefined) {
//     fs.push(key.slice(0, 1))
//   } else {
//     fs.push(num[key])
//   }
// }

// console.log(fs.join(''))

let counter = 0

const giveMeDigits = number => {
  let mynumb = number.toString()

  const mySet1 = new Set()

  for (let i = 0; i < mynumb.length; i++) {
    mySet1.add(mynumb[i])
  }

  return mySet1.size == 2 ? true : false
}

for (let i = 100; i <= 999; i++) {
  if (i.toString().includes(0) == false) {
    giveMeDigits(i) == true && (counter += 1)
  }
}
console.log(counter)
