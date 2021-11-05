var one = [ "", "one ", "two ", "three ", "four ",
            "five ", "six ", "seven ", "eight ",
            "nine ", "ten ", "eleven ", "twelve ",
            "thirteen ", "fourteen ", "fifteen ",
            "sixteen ", "seventeen ", "eighteen ","nineteen " ];
var ten = [ "", "", "twenty ", "thirty ", "forty ",
            "fifty ", "sixty ", "seventy ", "eighty ", "ninety " ];

 function numberToWord(n){
    var str="";
    if(n>19){
        str=str+ten[parseInt(n/10)]+one[n%10];
       // console.log(str);
    }
    else {
        str =str+one[n];
       // console.log(str);
    }
    if(n1=0){
        str+=s;
    }
    return str;

}

function convertToWord(n){
    var out="";
    out+=numberToWord(parseInt(n/10000000),"crore");
    out+=numberToWord(parseInt((n/100000)%100),"lakh");
    out+=numberToWord(parseInt((n/1000)%100),"thousand");
    out+=numberToWord(parseInt((n/100)%10),"hundred");
    if(n>100 && n%100>0){
        out+="and";
    }
    out+=numberToWord(parseInt(n%100),"");
    return out;
}
var n=123456;
console.log(convertToWord(n));