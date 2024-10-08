console.log("this is firstline of code")

const myFunction=()=>{
    let sum=0;
 for(let i=1;i<=1000000;i++){
    sum=sum+i;
 }
 setTimeout(()=>{             //for asynchronous execution (not in sequence)
   console.log(sum);
 },5000)//5000 millisec
}
myFunction();

console.log("this is secondline of code")