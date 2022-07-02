var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}

module.exports = M; //약속된 객체, m이 가리키는 객체를 밖에서도 사용할 수 있다
