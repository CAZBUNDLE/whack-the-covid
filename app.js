"use strict"

let result = 0
let hitPosition
let numberOfgoes=10

const square =document.querySelectorAll(".square")//want all not just one 
const mole = document.querySelector(".mole")//only one mole to be used 
const button = document.getElementById("myBtn")
const score = document.querySelectorAll("#score")

// const attemptLeft=document.querySelector("#attempts-left")  
// // # is used to element with an ID..
// const score=document.querySelector("#score")




function randomSquare(){
    
    square.forEach(square => {
        square.classList.remove("mole")
        //class list - jv property allowing a fresh state 
    })

    
    
    
    let randomMove = square[Math.floor(Math.random() * 16)+1]
    randomMove.classList.add("mole")   
// //     //The classList property returns the class name(s) of an element, as a DOMTokenList object. 
// //     //This property is useful to add, remove and toggle CSS classes on an element. 

    hitPosition=randomMove.id
}


// //now i need a timer 
 function moveMole(){
    let timed=null                      
    timed=setInterval(randomSquare, 500) //set the Time using set interval to show a mole ever 
    button.style.visibility = 'hidden';
} 








  

// size of gris in maths . rnacom functon 

// const sizeOfgrid-19
