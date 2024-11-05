/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame () {
let userName = prompt("Whats your name?")
alert(`Hello ${userName}! Welcome to your Adventure!`)

let room_1 = prompt("Will you enter the cold throne of the Lich King OR the Elden Beasts eternal domain? *type 1 or 2* ")

if (room_1 == 1) {
    lich_king()
}
 if (room_1 == 2) {
    elden_beast()
 }

}
function lich_king() {

        alert(`As you walk into the cold and icy throne, you look up to be completely frozen by the mear presence of the Lich King... He stares at you. He swings his Eternal Rune Long Sword, slicing you in half. Forever to be damned to the Shadow realm.`)
    
}

function elden_beast() {
 
    alert(`you are met with an eternal GOD. The Elden Beast. Forever powerful, ruling the Lands in between. A tarnished of your kind is a worthy opponent. It notices your strength. You are granted a choice.`)
    let choice_eb = prompt(`${userName}... Do you stand strong and fight or do you cower in the face of an eternal GOD?  *type 1* or 2`)

    if (choice_eb == 1) {
        fight()
    }
     if (choice_eb == 2) {
        cower()
     }
}


function fight() {
alert(`
     The Elden Beast is impressed. But you are no Match. You are tattered and beaten to the point of unconciousness, but your will stands STRONG. You die standing, a true tarnished warrior indeed. The Ring wasnt meant for you after all.. You are met with candy in heaven!
     `)
}

function cower() {
alert(` You run away in pure fear, the Elden beast was dissapointed. The Elden beast swung its eternal sword of Light and incinertates you, making all your efforts and struggles for nothing. Be fr bro, all those bosses and u gave up? smh. You get no candy.`)
}

function menu() {
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit
    `
    let selection = Number(prompt(msg));
    
if (selection == 1) {
} 
else if (selection == 2) {  
     
} 
else if (selection == 3) { 
    alert(" There are no DLC's Available. ")  
 }  
 else if (selection == 4) {
    alert(" There are no Updates currently." )
} 
 else if (selection == 5) {
    alert(" Ok, Cya!")
}

}