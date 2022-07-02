var testFolder = './data'; //파일 위치 x 실행위치 o     "./": 현재 디렉토리
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist); //['CSS', 'HTML', "JavaScript"] : 파일의 목록 배열으로 전달
})
