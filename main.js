const a = 10;
var b = 20;

function plus(a,b){
    return a+b;
}



var c = 20;


console.log(plus(a,b));

let plus2 = function(a,b){
  return a+b;
};

plus2(a,b);

b=function(){
  if(a==1){
    var result = "success";
  }
  console.log(result);
};

b(1);

b=[];