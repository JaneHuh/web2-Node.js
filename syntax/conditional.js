var args = process.argv;
console.log(args[2]); //nodejs rumtime 위치,  실행시킨 파일 경로, 입력값
console.log('A');
console.log('B');
if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');
