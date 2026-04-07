let btns = document.querySelectorAll("button")

for (i of btns){
    i.onclick = print;
    i.onmouseenter = pprint;
    
}

function print(){
    alert("clicked")
}

function pprint(){
    console.log("Mouse giooen ");
}


let div = document.querySelector("div");

div.addEventListener("load" , function(){
    console.log("Dive clicked");
    alert("page is reloded")
});


