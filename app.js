console.log("Hello");

function print (a,b) {
    var a=1;
    var b=2;
    console.log(a+b);
    
}

function changeH() {
    var bckC = document.getElementById("my");
    bckC.style.height = "200px";
    console.log("dziala changeH");
    
}

function changeW() {
    var bckC2 = document.getElementById("my2");
    bckC2.style.width = "200px";
    console.log("dziala changeW");
}

function changeByClass() {
    var a = document.getElementsByClassName("second")[0];
    a.style.backgroundColor = "teal";
    console.log("dzialaClass");
    
}