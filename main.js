'use strict';
//数不允许重复
var inputNum=require('readline-sync');


function randomNumber(){
    var str="";
    while(str.length<4){
        var tempNum=parseInt(Math.random()*10).toString();
        if(str.indexOf(tempNum)===-1){
            str+=tempNum;
        }
    }
    return str;

}
function getInputNumber() {

    var getInputNum =inputNum.question('请输入一个数字不重复的四位数：');
   return getInputNum;
}

//console.log(getInputNumber());

//console.log(randomNumber());
function guessNumber() {
    var right=0;
    var onlyValueRight=0
    const systemNum=this.randomNumber();
    const number=this.getInputNumber();
    for(var i=0;i<number.length;i++) {
        if (number[i] == systemNum[i]) {
            right++;
        }
        for(var j=0;j<number.length;j++){
            if(i!=j&&number[i]==systemNum[j]){
                onlyValueRight++;
            }
        }
    }
    console.log("系统输出的是："+systemNum);
    console.log("输入为"+number);
    console.log("游戏结果为："+right+'A'+onlyValueRight+'B');
    return right+'A'+onlyValueRight+'B';
}

module.exports.randomNumber=randomNumber;
module.exports.guessNumber=guessNumber;
module.exports.getInputNumber=getInputNumber;


//console.log(guessNumber());
/*
console.log(guessNumber('5678'));
console.log(guessNumber('4567'));
console.log(guessNumber('3456'));
console.log(guessNumber('4320'));
console.log(guessNumber('4321'));
console.log(guessNumber('1567'));
console.log(guessNumber('1562'));
console.log(guessNumber('1362'));
console.log(guessNumber('1342'));
console.log(guessNumber('1256'));
console.log(guessNumber('1253'));
console.log(guessNumber('1243'));
console.log(guessNumber('1235'));
console.log(guessNumber('1234'));
*/
