var btn = document.getElementById("test");

btn.addEventListener("click" ,addTech);

var list = document.getElementById("tech");
var hide=document.getElementById("test");
var hide1=document.getElementById("test1");
function addTech(){
    var x = document.createElement("li")
    x.innerText = "JavaScript";
    document.body.style.backgroundColor="yellow";
   // x.style.backgroundColor="yellow";
    console.log(list.childNodes);
    list.insertBefore(x,list.childNodes[4]);
    hide.style.visibility="hidden";

}

function removeTech(){
   
    list.removeChild(list.firstElementChild)
   
    hide1.style.visibility="hidden";
   
}
