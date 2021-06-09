Ex1:
function Hello(){
    console.log("Hello world")
}
Ex2:
function Add(A, B){
    return A+B;
}
x = Add(3,4)
7
x = Add("x",4)
"x4"
x = Add("x", "y")
"xy"
Ex3:
const birthday= new Date('July 31, 2001 00:15:08');
var d = new Date();
age = d.getFullYear() - birthday.getFullYear();
Ex4:
function leap(year){
    if (year%4!=0){
        console.log("Oke");
        return "Common";
    } else if (year%100!=0){
        console.log("Oke1");
        return "Leaf";
    } else if (year%400!=0){
        console.log("Oke2");
        return "Common";
    } else{
        console.log("Oke3");
        return "Leaf";
    }
}