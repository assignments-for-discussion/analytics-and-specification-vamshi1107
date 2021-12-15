function splice(a,s,e){
  var t=[]
  for(var i=s;i<e;i++){
    t.push(a[i])
  }
  return t
}

function divide(a){
    var n=a.length
    var ex=(n%2==0)?0:1
    var m=Math.floor(n/2)
    return [splice(a,0,m),splice(a,m+ex,n)]
}

function median(a){
  var n=a.length
  if(n%2==0){
      return (a[n/2]+a[(n/2)-1])/2
  }
   else{
     return a[parseInt(n/2)]
   }
}

function iqr(v){
  var a=v
  a.sort()
  var [q1,q3]=divide(a)
  return [median(q3)-median(q1),median(q1),median(q3)]
}

function threshold(v){
  var [iq,q1,q3]=iqr(v)
  return [q1-(1.5*iq),q3+(1.5*iq)]
}

function average(numbers) {
  numbers=numbers.filter(number=>!Number.isNaN(number))
  var [lower,upper] = threshold(numbers)
  numbers=numbers.filter(number=>lower<=number && number<=upper)
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average,threshold};

