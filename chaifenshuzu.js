/**
 * Created by xxx on 17-7-19.
 */
'use strict';
function flatten(collection,bool) {
    var result=[];
    //去掉一重
    if(bool==true){
        for(var i=0;i<collection.length;i++){
            if(collection[i].length==undefined){
                result.push(collection[i]);
            }
            else{
                for(var item of collection[i]){
                    result.push(item);
                }
            }
        }
    }
    //去掉多重
    else {
        var arr1 = (collection + '').split(',');//将数组转字符串后再以逗号分隔转为数组
       result = arr1.map(function (x) {
            return Number(x);
        });

    }
    return result;
}
var collection=[1,[2],[3,[[4]]],[5,6]]
console.log(flatten(collection,true));
console.log(flatten(collection,false));

//console.log(typeof (null));