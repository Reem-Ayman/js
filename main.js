//1- average//
function aver(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12){
    return ((num1+num2+num3+num4+num5+num6+num7+num8+num9+num10+num11+num12)/12);
}
console.log(aver(1,2,3,4,5,6,7,8,9,10,11,12)); 


// 2-triangle's area//
function tri(base,height){
    return ((0.5*12)*6);
}
console.log(tri(12,6)); 

// 3-age//
function year(num1){
    return num1*365
}
console.log(year(26)); 

//4- addition//
function sum(n1,n2){
    return n1+n2
}
console.log( sum(10,20));

//5- array//
const siblings=["reem","ramy","ali","ayman","asmaa","rania","arwa","samia","salma","nabila","mohammed"]
console.log(siblings[1]);


// 6-fullname//
function myName(){
    document.getElementById("fullname").innerHTML=`Reem Ayman Farouk`
    return "Reem Ayman Farouk";
}
console.log(myName());

// 7- hours convert to secs//
function converts(number1){
    return number1 *60
}
console.log(converts(12));


// 8-condition//

function moreThan(num1,num2,num3,num4){
    const total=num1+num2+num3+num4;
    if (total>350){
        console.log(true);
    }else{
        console.log(false);
    }


}

console.log(moreThan(100,100,100,100));