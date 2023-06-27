//alert("Hello");
function handleclick()
{
    var buttonclicked=this.innerHTML;
    makesound(buttonclicked);
    buttonanimation(buttonclicked);
 
}
var buttonarray=document.querySelectorAll("button");
console.log(buttonarray);
for(var i=0;i<buttonarray.length;i++)
{
    buttonarray[i].addEventListener("click",handleclick);
}
document.addEventListener("keydown",function(event)
{
    makesound(event.key);
    buttonanimation(event.key);
})
function makesound(key)
{
    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var crash=new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;
        case "s":
            var crash=new Audio("sounds/snare.mp3");
            crash.play();
            break;
        case "d":
            var crash=new Audio("sounds/tom-1.mp3");
            crash.play();
            break; 
        case "j":
            var crash=new Audio("sounds/tom-2.mp3");
            crash.play();
            break; 
        case "k":
            var crash=new Audio("sounds/tom-3.mp3");
            crash.play();
            break; 
        case "l":
            var crash=new Audio("sounds/tom-4.mp3");
            crash.play();
            break;
        default:
            console.log(key);
            break;
    }
}
function buttonanimation(key1)
{
    var activebutton=document.querySelector("."+key1);
    if(activebutton)
    {
        activebutton.classList.add("pressed");
    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    },100);
    }
    else{
        console.log(activebutton);
    }
}