/**
 * Created by xxx on 17-7-19.
 */
'use strict';
var inputNum=require('readline-sync');
var stuScoArr=[];

function main(){
    var flag=1;
    while(flag){
        console.log("================================================");
        console.log("1.添加学生");
        console.log("2.生成成绩单");
        console.log("3.退出");
        var getInputNum =inputNum.question("请输入你的选择(1~3):");//输入的是字符串
        switch(parseInt(getInputNum)){
            case 1: addStudent();break;
            case 2: print();break;
            case 3: flag=0;break;
        }
    }

}

function addStudent() {
    var getStudentInfo=inputNum.question("请输入学生信息（学号 姓名 数学 语文 英语 编程），按回车提交：\n");
    var strs=getStudentInfo.split(" ");
    stuScoArr.push(strs);
    console.log("学生"+strs[1]+"的成绩已被录入");
}

function calculAndExpan(stuScoArr) {
    for(var i=0;i<stuScoArr.length;i++)
    {   var avg=0,sum=0;
        for(var j=2;j<stuScoArr[i].length;j++)
        {
            sum+=parseInt(stuScoArr[i][j]);
        }
        avg=sum/4;
        stuScoArr[i].push(avg);
        stuScoArr[i].push(sum);
    }
}
function avg(stuScoArr){
    var classAvgSco,sum=0;
    for(var i=0;i<stuScoArr.length;i++){
        sum+=parseFloat(stuScoArr[i][6]);
    }
    classAvgSco=sum/stuScoArr.length;
    return classAvgSco;
}
function mid(stuScoArr) {
    var classmidSco=0;
    var arr=[];
    for(var i=0;i<stuScoArr.length;i++)
    {
        arr.push(stuScoArr[i][7]);
    }
    arr.sort();
    if(arr.length%2==1)
    {
        classmidSco=arr[parseInt((arr.length-1)/2)];
    }
    else classmidSco=(arr[arr.length/2]+arr[arr.length/2-1])/2;
    return classmidSco;
}
function print() {
    calculAndExpan(stuScoArr);
    var classAvgSco=avg(stuScoArr);
    var classmidSco=mid(stuScoArr);
    console.log("成绩单");
    console.log("学号 |"+"姓名|"+"数学|"+"语文|"+"英语|"+"编程|"+"平均分|"+"总分 |");
    console.log("====================================");
    for(var i=0;i<stuScoArr.length;i++)
    {   var str="";
        for(var j=0;j<stuScoArr[i].length;j++)
        {
            str+=stuScoArr[i][j]+"  |";
        }
        console.log(str);
    }
    console.log("====================================");
    console.log("全班总平均分："+classAvgSco.toFixed(2));
    console.log("全班总分中位数："+classmidSco.toFixed(2));
}
main();