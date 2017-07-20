/**
 * Created by xxx on 17-7-19.
 */
"use strict";

var array=[5,6,7,8,9];

function a(array) {
    for(var i in array){
        return i;  //返回的是字符串‘0’
    }
}
function b(array) {
    for(var item of array){
        return item;
    }

}
console.log(a(array));
console.log(b(array));