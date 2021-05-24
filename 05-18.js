/* JS Object <-> JSON  */
//Object
const ironman = { //literal(값) type
    name : "토니",
    actor : '로버트 다우니 주니어',
    alias : '아이언맨',
    say: function (){
        console.log('Assemble');
    }
}

function print(hero){
    const text = `${hero.alias}`
    console.log(text);
}
//비구조화 할당
function print1({name,actor,alias}){
    console.log(alias);
}
print(ironman);
print1(ironman);
ironman.say();

const number = {
    _a:1,
    _b:2,
    sum: 3,
    calculate(){
        console.log("계산");
        this.sum = this._a + this._b
    },
    get a(){
        console.log('Getter a');
        return this._a;
    },
    set a(value){
        console.log('a값을 변경합니다');
        this._a = value;
        this.calculate();
    }
}
console.log(number.a);

//getter : 값을 긁어감 setter : 값을 바꿈

//배열
const objects = [{name: '멍멍이'}, {name:'양'}];
console.log(objects[1]['name']);

//반복문
let numbers = [1,2,3,4,5,6];
for(let n of numbers){
    console.log(n);
}

//객체+for : 속성 꺼내기

const dog = {
    name : '멍멍이',
    sound:'ㅁ어멍',
    age:2
}
for(let key in dog){
    console.log(`${key}:${dog[key]}`);
}

function sumOf(numbers2){
    let sum = 0;
    /* for(let i=0; i<number.length; i++){
        sum += numbers[i]
    }
    return sum; */

    for(let n2 of numbers2){
        sum += numbers2[n2];
        return sum;
    }
}
const result = sumOf([1,2,3,4,5]);
console.log(result);

//자율 문제
//+문제 배열에 들어있는 숫자중 3보다 큰 것을 반환
const arr = [1,2,3,4,5];
/* for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
} */
console.log(" 일반 함수 사용🌺🌺🌺🌺🌺");
function print(number){
    console.log(number);
}
print(arr);

console.log(" 익명 함수 사용🌺🌺🌺🌺🌺");
arr.forEach(function(n){
    console.log(n);
});
console.log(" 화살표 함수 이용🌺🌺🌺🌺🌺");
arr.forEach(n => {
    console.log(n);
});