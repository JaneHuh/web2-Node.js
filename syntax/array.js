var arr = ['A','B','C','D'];
console.log(arr[1]); //B
console.log(arr[3]); //D
arr[2] = 3; //Modify
console.log(arr); //-> A B 3 D
console.log(arr.length); //4
arr.push('E'); // 값 끝에 추가
console.log(arr); //-> A B 3 D E
