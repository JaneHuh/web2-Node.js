var fs = require('fs'); //'fs' module을 불러와 fs 변수에

/*
//readFileSync //
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8'); //동기
console.log(result);
console.log('C');
//ABC
*/


console.log('A');
// 함수를 세 번째 인자로 줘야한다.
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){ // 비동기. 선호
    console.log(result);
});
console.log('C');
//ACB
