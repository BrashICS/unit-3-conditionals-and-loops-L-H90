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

document.getElementById("fantasy_sword").addEventListener("mouseover", sword_hover)
document.getElementById("fantasy_sword").addEventListener("mouseleave", sword_out)


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
    let choice_eb = prompt(`Do you stand strong and fight or do you cower in the face of an eternal GOD?  *type 1* or 2`)

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
    play()
} 
else if (selection == 2) {  
    alert(" Who cares about options, right?") 
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

function play() {

}

function sword_hover() {
document.getElementById("sword_info").textContent = "sword"
}
function sword_out() {
    document.getElementById("sword_info").textContent = ""
}

function average(n) {
    let avg = 0;
    let count = 1;

    while (count <= n) {
        avg = avg + Number(prompt(`Please enter value ${count}/${n}`));
        count++;
    }
;
    avg = round(avg / n, 1)
    console.log(`The average is ${avg}`);
}

function random_until (min, max, stop) {
    if (max <= min) {
        return -1;
    }

    if (stop > max || stop < min) {
        return -1;
    }
    let aqua = randInt(min, max);

    while (aqua != stop) {
        console.log(aqua)
        aqua =randInt(min, max);
    }
     return stop;
}

function string_thing () {
let my_string = "Strings are powerful!";
let one_char = my_string[my_string.length - 1];
console.log(one_char);
}

function string_flip (str) {
  let output = "";
  let x = str.length - 1
  while (x >= 0) {
    output = output + (str[x])
  }
}

function dragons_goblins(str) {

    let dragons = 0
    let goblins = 0 

    let i = 0
    while (i < str.length) {
        if (str[i] == "d") {
            dragons = dragons + 1;
        } else if (str[i] == "g") {
            goblins = goblins + 1
        }
    }
}


function random_color() {
    let random_color = randInt(1, 10)
        if (random_color = 1 ) {
            alert("red")
        } else if (random_color = 2 ) {
            alert("orange")
        } else if (random_color = 3 ) {
            alert ("yellow") 
        }
            else if (random_color = 4 ) {
            alert("green") 
        }
            else if (random_color >= 4 ) {
            alert("wtv, you dont get a color. im too lazy too type it out")
        }
    
  }
            
  function build_string() {
    let output = "";
    let input;
    do {
      input = prompt("Enter a string of text or a single 'q' to quit: ");
      output += input;
    
    } while (input.toLowerCase() != "q");
  
    return output;
  }

  function printOddNum() {


  }
// first try, no do while.
function negative_only() {
    let user_input = +(prompt("Please enter a negative number")) 
    if (user_input >=  0 ) {
        console.log("Try again.")
    }  else if (user_input < 0) {
        console.log("Thats a negative number, good job!")
    }

}

function negative_only2() {
    let input;
    
    do {
        input = +prompt("please enter a negative number.")
    } while (input > -1 || isNaN(input)) {
        console.log(`${input}`)
    }
}

function factorial(n) {
    let product = 1;
    let count = 1;
   do {
    product *= count;
    count++;
   } while (count <= n)

    console.log(`${product}`)
   
}



function count_up (start, stop) {

    for (let x =start; x <= stop; ++x) {
        console.log(`${x}`)
    }

}

function count_down (start, stop) {
    for (let x = start; x>= stop; --x) {
        console.log(`${x}`)
    }
}

function print_chars (str, step) {
    for (let i = 0; i < str.length -1; i += step ){
        console.log(str[i])
    }
}

function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


function count4(begin, end) {
    let sum = 0;
    for (let d = begin; d <= end; d++) {
        if (d % 4 === 0) {
            sum += d;
        }
    }
    return sum;
}

function sum_divisible (n, x) {

}