function aFifo(a1){
  var a2= a1.pop();
    a1.unshift(a2);
}
a1= [1,2,3,4,5]
aFifo(a1);
console.log(a1);