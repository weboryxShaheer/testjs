function aLifo(a1){
         var a2=a1.shift();
         a1.push(a2);
        }
var a1=[1,2,3,4,5];
aLifo(a1);
console.log(a1);