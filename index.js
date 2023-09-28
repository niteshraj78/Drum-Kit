var noofdrums = document.querySelectorAll(".drum").length;
for(var i=0;i<noofdrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
           var buttonInnerHTML=this.innerHTML;
           makeSound(buttonInnerHTML);
           buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
})



function buttonAnimation(currentkey)
{
    var button= document.querySelector("."+currentkey);
    button.classList.add("pressed");

    setTimeout(function()
    {
        button.classList.remove("pressed");
    },100)


}

function makeSound(key)
{
    switch(key)
    {
      case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
      break;
          
      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
     break;

     case "s":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
     break;

     case "d":
         var tom4= new Audio("sounds/tom-4.mp3");
         tom4.play();
     break;

     case "j":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
     break;

     case "k":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
     break;

     case "l":
         var snare = new Audio("sounds/Re live the moment when ...�𝘂𝗱𝗶𝗼 𝗶𝘀 𝗻𝗼𝘁 .mp3");
         snare.play();
     break;

     default:
         console.log(key);



    }
}






























/*

var noofDrums = document.querySelectorAll(" .drum").length;

for(var i=0;i<noofDrums;i++)
{
    document.querySelectorAll(" .drum")[i].addEventListener("click",function(){
         var buttonInnerHTML = this.innerHTML;
         makeSound(buttonInnerHTML);

         buttonAnimation(buttonInnerHTML);
         
});

}


function makeSound(key)
{

    switch(key){

        case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
         break;

         case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
         break;

         case "s":
             var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
         break;

         case "d":
             var tom4= new Audio("sounds/tom-4.mp3");
             tom4.play();
         break;

         case "j":
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
         break;

         case "k":
             var kick = new Audio("sounds/gimmethatedit-19072022-0001.mp3");
             kick.play();
         break;

         case "l":
             var snare = new Audio("sounds/Re live the moment when ...�𝘂𝗱𝗶𝗼 𝗶𝘀 𝗻𝗼𝘁 .mp3");
             snare.play();
         break;

         default:
             console.log(key);
         

      }


}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);

});


function buttonAnimation(currentkey)
{
    var activebutton=document.querySelector("."+currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    },100);


}*/