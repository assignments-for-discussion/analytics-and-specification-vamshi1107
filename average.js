function average(numbers) {
  numbers=numbers.filter(number=>!Number.isNaN(number))
  if(numbers.length>2){
      numbers.sort((a,b)=>a-b)
      var n=numbers.length
      var q1=numbers[Math.floor((n+1)*0.25)]
      var q3=numbers[Math.floor((n+1)*0.75)]
      var iq=q3-q1
      var [lower,upper] = [q1-(1.5*iq),q3+(1.5*iq)]
      numbers=numbers.filter(number=>lower<=number && number<=upper)
  }
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}
module.exports = {average}