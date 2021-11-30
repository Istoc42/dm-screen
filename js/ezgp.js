let cpRaw = 0
let spRaw = 0
let epRaw = 0
let gpRaw = 0
let ppRaw = 0

let cpConverted = 0
let spConverted = 0
let epConverted = 0
let goldConverted = 0
let ppConverted = 0

let gpOutput = cpConverted + spConverted + epConverted + goldConverted + ppConverted

// Get value of cp
document.getElementById('cpInput').addEventListener('input', function (e) {
  cpRaw = e.target.value
  console.log('Entered: ' + cpRaw + 'cp')
  cpConverted = cpRaw / 100
  console.log(cpRaw + 'cp is ' + cpConverted + 'gp')
  gpOutput = cpConverted + spConverted + epConverted + goldConverted + ppConverted
  let gpRound = Math.floor((gpOutput + Number.EPSILON) * 100) / 100
  console.log('Rounded down to ' + gpRound)
  document.getElementById('gpOutput').innerHTML = gpRound
  console.log('Total: ' + document.getElementById('gpOutput').innerHTML + 'gp')
})

// Get value of sp
document.getElementById('spInput').addEventListener('input', function (e) {
  spRaw = e.target.value
  console.log('Entered: ' + spRaw + 'sp')
  spConverted = spRaw / 10
  console.log(spRaw + 'sp is ' + spConverted + 'gp')
  gpOutput = cpConverted + spConverted + epConverted + goldConverted + ppConverted
  let gpRound = Math.floor((gpOutput + Number.EPSILON) * 100) / 100
  document.getElementById('gpOutput').innerHTML = gpOutput
  console.log('Total: ' + document.getElementById('gpOutput').innerHTML + 'gp')
})

// Get value of ep
document.getElementById('epInput').addEventListener('input', function (e) {
  epRaw = e.target.value
  console.log('Entered: ' + epRaw + 'ep')
  epConverted = epRaw / 5
  console.log(epRaw + 'ep is ' + epConverted + 'gp')
  gpOutput = cpConverted + spConverted + epConverted + goldConverted + ppConverted
  let gpRound = Math.floor((gpOutput + Number.EPSILON) * 100) / 100
  document.getElementById('gpOutput').innerHTML = gpOutput
  console.log('Total: ' + document.getElementById('gpOutput').innerHTML + 'gp')
})

// Get value of gp
document.getElementById('gpInput').addEventListener('input', function (e) {
  gpRaw = e.target.value
  console.log('Entered: ' + gpRaw + 'ep')
  goldConverted = gpRaw / 1
  console.log(gpRaw + 'gp is ' + goldConverted + 'gp')
  gpOutput = cpConverted + spConverted + epConverted + goldConverted + ppConverted
  let gpRound = Math.floor((gpOutput + Number.EPSILON) * 100) / 100
  document.getElementById('gpOutput').innerHTML = gpOutput
  console.log('Total: ' + document.getElementById('gpOutput').innerHTML + 'gp')
})

// Get value of pp
document.getElementById('ppInput').addEventListener('input', function (e) {
  ppRaw = e.target.value
  console.log('Entered: ' + ppRaw + 'pp')
  ppConverted = ppRaw * 10
  console.log(ppRaw + 'pp is ' + ppConverted + 'gp')
  gpOutput = cpConverted + spConverted + epConverted + goldConverted + ppConverted
  let gpRound = Math.floor((gpOutput + Number.EPSILON) * 100) / 100
  document.getElementById('gpOutput').innerHTML = gpOutput
  console.log('Total: ' + document.getElementById('gpOutput').innerHTML + 'gp')
})

// Add up converted values
document.getElementById('gpOutput').innerHTML = gpOutput
console.log('Total: ' + gpOutput)
// Output gp total in output div
