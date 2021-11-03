function rotateRight(arr){
    var k=4;
    for(let i=0;i<k;i++){
    var last = arr.pop();
    arr.unshift(last);}
    return arr;}
let arr = [1,2,3,4,5,6];
console.log(rotateRight(arr));
