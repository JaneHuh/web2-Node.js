var f = function(){
  console.log(1+1);
  console.log(1+2);
}
var a = [f];
a[0]();

var o = {
  func:f //프로퍼티
}
o.func();
