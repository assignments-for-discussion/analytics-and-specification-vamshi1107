function iqr(v){
  var a=v
  a.sort((a,b)=>a-b)
  var n=a.length
  var q1=a[Math.floor((n + 1)*0.25)]
  var q3=a[Math.floor((n + 1)*0.75)]
  return [q3-q1,q1,q3]
}

function threshold(v){
  var [iq,q1,q3]=iqr(v)
  return [q1-(1.5*iq),q3+(1.5*iq)]
}

function average(numbers) {
  numbers=numbers.filter(number=>!Number.isNaN(number))
  if(numbers.length>2){
      var [lower,upper] = threshold(numbers)
      numbers=numbers.filter(number=>lower<=number && number<=upper)
  }
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average,threshold,iqr};