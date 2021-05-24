console.log("➖➖➖➖➖➖start➖➖➖➖➖➖➖");
//🌺push 실습🌺

const arr = [1,2,3,4,5,6,7];


//🌺일반 for문 사용🌺
/* for(let i=0; i<arr.length; i++){
    suqred.push(arr[i]*arr[i]);
} */



//🌺화살표 함수 사용🌺
/* arr.forEach(n =>{
    suqred.push(n*n);
})
console.log(suqred); */



//🌺map 사용🌺
// const s = n => n*n; ⬇
const suqred = arr.map(n => n*n);
console.log(suqred);


console.log("➖➖➖➖➖➖➖➖➖➖➖➖➖");


//indexOf 실습
const animals = ['dog', 'cat', 'horse', 'rabbit'];
const index = animals.indexOf('cat');
console.log(index);

console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖');



//findIndex, filter 배열값을 찾는데 조건을 붙일수 있음
const todoList = [
    {id: 1, text:"숙제", done:true},
    {id: 2, text:"공부", done:false},
    {id: 3, text:"게임", done:false}
]
const index2 = todoList.findIndex(todo => todo.id === 3);
console.log(index2);

const tasksNotDone = todoList.filter(todo => todo.done === false);
console.log(tasksNotDone);



console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖');



/*🥕*/      const numbers = [1,2,3,4,5];      /*🥕*/

const index1 = numbers.indexOf(3);
numbers.splice(index1, 1);
console.log(numbers);


console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖');



//push:오른쪽(끝) 추가
//unshift:왼쪽(시작) 추가
//pop:오른쪽(끝) 추출(삭제x)
//shift: 왼쪽(시작) 추출

numbers.push(6);
numbers.unshift(0); //0을 추가
console.log(numbers);
const value1 = numbers.pop();
console.log(value1);
const value2 = numbers.shift();
console.log(value2);


console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖➖');


//join 실습 : 배열의 인덱스를 구분할 값을 정하는 함수
console.log(numbers);
console.log(numbers.join());
console.log(numbers.join('   '));
console.log(numbers.join(',   '));


console.log('➖➖➖➖➖➖✨✨➖➖➖➖➖➖➖');

let sum= numbers.reduce((accumulator, current)=> accumulator + current,0);
console.log(sum);

const avg = numbers.reduce((acc,curr,index3,array) => {
    if(index3 === array.lenght - 1){
        return(acc + curr) / array.lenght;
    }
    return acc + curr;
},0);

console.log(avg);

const alphabets = ['a','a','a','b','c','c','d','e'];
const counts = alphabets.reduce((acc,curr)=>{
if(acc[curr]){ //acc에 a라는 글자가 있다면// acc['a']  또는 acc.a 와 같음
    acc[curr] += 1;
}else{
  acc[curr] = 1;
}
return acc;
}, {});
console.log(counts);