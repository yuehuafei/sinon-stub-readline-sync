/**
 * Created by xxx on 17-7-19.
 */
"use strict";

const sinon=require("sinon");
const readlineSync = require('readline-sync');
const  guessNumberModule=require('./main');

function testGuessNumber1() {
    const systemNum=sinon.stub(guessNumberModule,"randomNumber").returns("1234");
    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('5678');
    const result=guessNumberModule.guessNumber();
    if(result=='0A0B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber2() {
    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('5671');
    const result=guessNumberModule.guessNumber();
    if(result=='0A1B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber3() {
    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('5612');
    const result=guessNumberModule.guessNumber();
    if(result=='0A2B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber4() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('5421');
    const result=guessNumberModule.guessNumber();
    if(result=='0A3B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber5() {
    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('4321');
    const result=guessNumberModule.guessNumber();
    if(result=='0A4B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber6() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1678');
    const result=guessNumberModule.guessNumber();

    if(result=='1A0B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber7() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1378');
    const result=guessNumberModule.guessNumber();
    if(result=='1A1B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber8() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1328');
    const result=guessNumberModule.guessNumber();
    if(result=='1A2B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber9() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1423');
    const result=guessNumberModule.guessNumber();
    if(result=='1A3B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber10() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1256');
    const result=guessNumberModule.guessNumber();
    if(result=='2A0B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber11() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1245');
    const result=guessNumberModule.guessNumber();
    if(result=='2A1B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber12() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1243');
    const result=guessNumberModule.guessNumber();
    if(result=='2A2B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber13() {

    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1235');
    const result=guessNumberModule.guessNumber();
    if(result=='3A0B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
function testGuessNumber14() {
    const number=sinon.stub(guessNumberModule,'getInputNumber').returns('1234');
    const result=guessNumberModule.guessNumber();
    if(result=='4A0B'){
        console.log('testPassed');
    }
    else{
        console.log('testFailed');
    }
    number.restore();
}
testGuessNumber1();
testGuessNumber2();
testGuessNumber3();
testGuessNumber4();
testGuessNumber5();
testGuessNumber6();
testGuessNumber7();
testGuessNumber8();
testGuessNumber9();
testGuessNumber10();
testGuessNumber11();
testGuessNumber12();
testGuessNumber13();
testGuessNumber14();

