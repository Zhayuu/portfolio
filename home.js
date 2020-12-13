window.addEventListener("DOMContentLoaded",(event) => {
    alert("Welcome to Zeyu's home");
    console.log('dom fullyloaded and parsed');

    var name = prompt("what's your name ?");
    console.log("name is ", name);
    alert("Welcome"+ name);

    let a, b;
    a = prompt("enter the first number:");
    b = prompt("enter the second number:");
    alert("The sum of yur two numbers is:", sum(a,b));

    document.getElementById("b1").addEventListener("click",function(){
        console.log("step2");//step 2
    });
    //step 1
    console.log("step1");
});

function sum(a, b){
    return a+b;
}