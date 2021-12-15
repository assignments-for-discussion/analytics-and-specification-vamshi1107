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

function sort(v){
  var a=v
  var t;
  for(var i=0;i<a.length;i++){
     for(var j=0;j<a.length-i-1;j++){
          if(a[j]>a[j+1]){
            t=a[j]
            a[j]=a[j+1]
            a[j+1]=t
          }
     }
  }
  return a
}

function median(a){
  var n=a.length
  return (n%2==0) ? (a[n/2]+a[(n/2)-1])/2 : a[parseInt(n/2)]
}

function iqr(v){
  var a=sort(v)
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
