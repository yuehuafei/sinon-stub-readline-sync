/**
 * Created by xxx on 17-7-19.
 */
'use strict';
//数不允许重复
var inputNum=require('readline-sync');
function getInputNumber(){
try{
    var getInputNum =inputNum.question('请输入一个数字不重复的四位数：');
    return "你输入的数字为"+getInputNum;
}catch (e){
    throw e;
}
}
//console.log(getInputNumber());
console.log(isNaN("123"));