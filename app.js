// function genrate(){
   // console.log(document.querySelector("#array1"));
   let call;
    async function genrate(n,speed) {
   // "use strict";
    async function genarr() {
        document.querySelector("#array1").innerHTML = "";
        var randomArray = new Array();
    console.log(randomArray);
    for (var i = 0; i < n; i++) {
        var randomNum = Math.abs(Math.floor(Math.random() *( (1 - 100 + 1) + 1)));
        randomArray.push(parseInt(randomNum));
    }
    return randomArray;
}

    let arr = await genarr();
    console.log(arr);
    const arrayNode = document.querySelector("#array1");
    newFunction();
    for (const element of arr) {
        const node = document.createElement("div");
        node.className = "bar";
        node.setAttribute("bar_height", String(element));
        node.style.height = `${3.8 * element}px`;
        arrayNode.appendChild(node);
    }
    // new object of class to make functions calls
    call = new algo(n,speed);

}

async function newarray(){
    var arr_size=document.querySelector("#arr_sz"); 
    var no_of_bar=arr_size.value;
    var fast=document.querySelector("#speed").value;
    console.log(fast);
    genrate(no_of_bar,fast);
}
 async function selectionSort() {
    await call.SelectionSort();
}

async function quick_Sort(){
    await call.quick();
}

async function insertion_Sort(){
    await call.insertion();
}

async function bubble_Sort(){
    await call.bubble();
}

const merge_Sort = async () => {
    await call.merge();
};

// 
// debugging purpose
function newFunction() {
    console.log(document.querySelector("#array1"));
}


 //var a = document.querySelector("#b3");
 //console.log(a);
 document.querySelector("#arr_sz").addEventListener("input",newarray);
 document.querySelector("#b").addEventListener("click", newarray);
 document.querySelector("#b3").addEventListener("click", selectionSort);
 document.querySelector("#b1").addEventListener("click", merge_Sort);
 document.querySelector("#b2").addEventListener("click", quick_Sort);
 document.querySelector("#b5").addEventListener("click", bubble_Sort);
 document.querySelector("#b4").addEventListener("click", insertion_Sort);