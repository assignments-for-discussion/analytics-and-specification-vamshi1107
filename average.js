
function average(numbers) {
  numbers=numbers.filter(number=>!Number.isNaN(number))
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
