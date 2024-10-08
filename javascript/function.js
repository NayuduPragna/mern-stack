function displayInfo(){
    console.log("this is a display function");
}
displayInfo();

//arrow function
const displayInfo1=(a,b)=>//function definition
{
    console.log("sum of two numbers is="+(a+b));
}
displayInfo1(10,20);//function calling

//default parameters
const displayInfo2=(a,b=20)=>//function definition
{
    console.log("sum of two numbers is="+(a+b));
}
displayInfo2(10);