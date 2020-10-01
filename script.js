console.log("Hello there!");

// Change the color of one line by click using "if the else"
document.getElementById("p1").addEventListener("click", ()=>{
if(p1.style.color=="red"){
  document.getElementById("p1").style.color= "purple";
 document.getElementById("p2").style.color= "purple";
}
  else{
  document.getElementById("p1").style.color= "red";
    document.getElementById("p2").style.color= "red";
}
})

document.getElementById("p2").addEventListener("click", ()=>{
if(p2.style.color=="red"){
  document.getElementById("p1").style.color= "purple";
 document.getElementById("p2").style.color= "purple";
}
  else{
  document.getElementById("p1").style.color= "red";
    document.getElementById("p2").style.color= "red";
}
})
