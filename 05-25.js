//객체와 프로토타입
function A(name, age){
    this.name = name;
    this.age = age;
this.hello = function(){
    console.log("hello");
}
}
const a = new A('usb',00);

function Animal(type, name, sound){
 this.type = type;
 this.name = name;
 this.sound = sound;
 //이곳에 say 함수를 넣어도 되지만 prototype을 이용하면 밖으로 뺄 수 있다
}

Animal.prototype.say = function(){
    console.log(this.sound);
}
Animal.prototype.whatisthis = 1; //whatisthis 는 변수명 - 1로 초기화후 -참조변수를 이용하여 값을 넣어준다
const dog = new Animal('개','바둑이','멍멍');
const cat = new Animal('고양이','나비','야옹');
dog.say();
dog.whatisthis = 10;
console.log(dog.whatisthis);

// 클래스
/* class Animal{
    constructor(type, name, sound){
        console.log("생성자다");
        this.type= type;
        this.name= name;
        this.sound= sound;
    }
    say(){
        console.log("Hello");
    }
}

class Dog extends Animal{
    constructor(name, sound){
        super('개',name,sound);
    }
} */

// 비구조화 할당 - 구조분해
const obj = {a:1, b:2};

/* const{aa,bb}=obj; */
function print({aa, bb}){//obj의 값을 넘겨 받음
console.log(aa);
console.log(bb);
}

//배열의 비구조화 할당 - 배열의 값을 차례대로 넣음
const arr = [1,2,3];
const [one, two, three] = arr;
console.log(one);

const obj2 = {
    state:{
        information:{
        name: 'uhs',
        language: ['korean','english','japanese']
    }
    },
    value5
}


const {name, languate} = obj2.state.infomation;
const {value5} = obj2;
const v = {
    name:name,
    language:language,
    value5:value5
}
console.log(v);

/* const{
    state:{
        information:{naem, language}
        
    },
    value6
} = obj3;
const v2 = {
    name,
    languate,
    value6
} */