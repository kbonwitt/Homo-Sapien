// /*
// Title: Simpsons Bullies
// -----------------------
// You are a forager that wakes u[ in a mysterious world, and you have to find out what is going on, while also trying to survive.
// ----------
// /*
// Title: Simpsons Bullies
// -----------------------
// You are a forager that wakes u[ in a mysterious world, and you have to find out what is going on, while also trying to survive.
// ----------
// ----------
// Homo Sapien
// ----------
// ----------
//
// Characters
// ----------
// Attributes
// ----------
// - You (hero)
//   - ways to stand up to Mammoth / Wolves
//   -picking food ()
//
// - Neandrathal
//   - gives advice, helps against wolves
//
// - Mammoth
//   - attacks you individual mammoth, attack or run
//
// -Wolves
//   - attacks you in a pack, (attack or run)
//
// -Sapiens
//   -You've found a tribe very similar to you! You win.
//
// Wins and Losses
// ----------------
// - Win: stand up to mammoth, run from wolves, eats grapes, drinks water from dirty puddle
// - Lose:  runs from mammoth, attacks wolves, eats leaves, doesn't drink water
// */

function caveQuestion() {
  var caveAnswer = prompt("You wake up in a myterious, cave, not knowing anythng that has happened before you and will happen ahead. Do you walk out? (Y/N)");
  if (caveAnswer ==="Y") {
    alert("You walk out to a sunny day, in a sandy desert.");
    puddleButton();
  }
  else if (caveAnswer === "N") {
    alert("You fall asleep in the cave and wake up some unknown time later...");
    caveQuestion();
  }
  else {
    alert("Make sure to type in the letter Y or N only.");
    caveQuestion();
  }
};

function puddleButton() {
  document.getElementById("hi").src = "https://upload.wikimedia.org/wikipedia/commons/3/34/Rub_al_Khali_002.JPG";
  document.getElementById("continue").onclick = puddleQuestion;

  function puddleQuestion() {
    var puddleAnswer = prompt("You walk out to a dirty, slimy puddle, yet you notice you are very thirsty. Do you drink some of the puddle water? (Y/N)");
    if (puddleAnswer ==="Y") {
      alert("You feel much better, but a little sick to your stomach.");
      mammothButtonD();
    }
    else if (puddleAnswer === "N") {
      alert("You are thirsty, but you continue into the empty desert.");
      mammothButtonND();
    }
    else {
      alert("Make sure to type in the letter Y or N only.");
      puddleQuestion();
    }
  };
}
function mammothButtonND() {
  document.getElementById("hi").src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Columbian_mammoth.jpg";
  document.getElementById("continue").onclick = mammothND;
}

function mammothButtonD() {
  document.getElementById("hi").src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Columbian_mammoth.jpg";
  document.getElementById("continue").onclick = mammothD;
}
function mammothND() {
  var mammothAnswerND = prompt("A pack of mammoths appear. Do you attack or run? (A/R)");
  if (mammothAnswerND ==="A") {
    alert("You attack, despite being weak from dehydration.");
    attackMammoth();
  }
  else if (mammothAnswerND === "R") {
    alert("You are dehydrated, and can't run fast enough. You die.");
    end();
  }
  else {
    alert("Make sure to type in the letter A or R only.");
    mammothND();
  }
};

function mammothD() {
  var puddleAnswer = prompt("A pack of mammoths appear. Do you attack or run? (A/R)");
  if (puddleAnswer ==="A") {
    alert("You go full charge at the mammoths...");
    attackMammoth();
  }
  else if (puddleAnswer === "R") {
    alert("You barely escape the pack.");
    eatButton();
  }
  else {
    alert("Make sure to type in the letter A or R only.");
    mammothD();
  }
};
function attackMammoth(){
  var randomNum = Math.floor((Math.random() * 2) + 1);
  var attackMammothAnswer = prompt("Pick a number 1-2. Choose wisely or the Mammoth will kill you.")
  if (attackMammothAnswer == randomNum){
    alert("You killed them! You move on into the desert, and see some green approaching.")
    eatButton();
  }
  else {
    alert("You weren't quick enough. You died.");
    end();
  }
  }

  function eatButton() {
    document.getElementById("hi").src = "http://www.desertusa.com/desert_photos/IMG_0711.jpg";
    document.getElementById("continue").onclick = eat;
  }

  function eat(){
    var eatQuestion = prompt("You approach a plant. You see a plant with what seems like edible leaves and grapes. Do you eat the grapes, leaves, none, or both? (G/L/N/B)")
    if (eatQuestion=== "G"){
      alert("The grapes were poisonous. You died.")
      end();
    }
    else if (eatQuestion === "L"){
      alert("The leaves do great in filling you up and hydrating you. You go on into the desert fueled up.")
      wolvesButton();
    }
    else if (eatQuestion === "N"){
      alert("You died of starvation.")
      end();
    }
    else if (eatQuestion === "B"){
      alert("The grapes were poisonous. You died.")
      end();
    }
    else{
      alert("Make sure to type in the letters G, L, N, or B only.");
    }
  }
  function wolvesButton() {
    document.getElementById("hi").src = "https://3.bp.blogspot.com/-RqlldROcCKs/TtD1Tq8-y7I/AAAAAAAAJ-I/YZZCsy3b_vM/s1600/vlcsnap-2011-11-07-07h26m55s95.png";
    document.getElementById("continue").onclick = wolves;
  }

  function wolves() {
    var wolvesAnswer = prompt("A pack of wolves appear. Do you attack or run? (A/R)");
    if (wolvesAnswer ==="A") {
      alert("You go full charge at the wolves...");
      attackWolves();
    }
    else if (wolvesAnswer === "R") {
      alert("You run. Your chances look dim...");
      runWolves();
    }
    else {
      alert("Make sure to type in the letter A or R only.");
      wolves();
    }
  };
  function attackWolves(){
    var randomAttackNum = Math.floor((Math.random() * 5) + 1);

    var attackWolveAnswer = prompt("Pick a number 1-5. Choose wisely or the Wolves will kill you.")
    if (attackWolveAnswer == randomAttackNum){
      alert("You killed them! You move on into the desert, and see two paths approaching.")
      path();
    }
    else {
      alert("You weren't quick enough. You died.");
      end();
    }
    }
  function runWolves(){
      var randomWolveNum =Math.floor((Math.random() * 2) + 1);
      var runWolveAnswer = prompt("Pick a number 1-2. Choose wisely or the Wolves will catch you.")
      if (runWolveAnswer == randomWolveNum){
        alert("You escaped from them! You move on into the desert, and see two paths approaching.")
        path();
      }
      else {
        alert("You weren't quick enough. You died.");
        end();
      }
    }
  function path() {
      document.getElementById("hi").src = "http://cdn.c.photoshelter.com/img-get2/I0000yVKBadCkt1c/fit=1000x750/DesertTrek-1882.jpg";
      document.getElementById("continue").onclick = pathAnswer;
    }
    function pathAnswer() {
      var pathQ = prompt("You approach a split in your trail. On the left you see some plant life. On the right you see some figures. Right or left? (L/R)");
      if (pathQ ==="L") {
        alert("You fall into quicksand. You quickly realize you aren't going to make it out alive.");
        end();
      }
      else if (pathQ === "R") {
        alert("You walk that way and begin to notice the figures look a lot like you.");
        win();
      }
      else {
        alert("Make sure to type in the letter A or R only.");
        pathAnswer();
      }
    };
function win() {
    document.getElementById("hi").src = "http://pix.avaxnews.com/avaxnews/28/e6/0000e628_medium.jpeg";
    document.getElementById("continue").onclick = no;
    winAnnounce();
  }
function winAnnounce(){
  var win = alert("You found a tribe of Neandrathals and they take you in. They treat you as their own and you are now safe. You survivie. Congratulations!")
}
function end(){
  var endAnswer = alert("You died. Refresh to restart.");
  document.getElementById("hi").src = "file:///Users/keithbon/Desktop/homo-sapien/end.png";
  document.getElementById("continue").onclick = no;
}
function no(){
  location.reload();
}
// SchoolYardKid.prototype.randomResponse = function() {
// var randomNum = Math.floor((Math.random() * 3) + 1);
// if (randomNum === 1) {
// return this.responses.homework;
// } else if (randomNum === 2) {
// return this.responses.scared;
// else {
// return this.responses.brave;
// }
// };
