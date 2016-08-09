var beginningSenarios = ["You wake up in the middle of the street surrounded by Zombies!", "Your campsite was invaded by Zombies!", "Some freaking Zombies are on top of you trying to bite your face off!", "Your family just got eaten alive by Zombies and you run away!" ];
$( document ).ready(function() {
    console.log( "ready!" );
function randomNumber (range) {
    return Math.round( Math.random() * range );
}

alert( beginningSenarios[ randomNumber( beginningSenarios.length - 1 ) ] );

var weaponList = ["Sword", "Rubber Chicken", "Baseball Bat", "Crossbow", "YoYo", "Pan", "Poo", "Pistol", "Water Gun", "Spoon", "Fork", "Grenade", "Bazooka!", "Whip", "Rifle", "Corn on the Cob"];

var weapon = prompt("Choose your weapon", weaponList[ randomNumber( weaponList.length - 1) ]);
alert("In the moment of despiration you see a " + weapon + " !" + " You take the " + weapon + " and attempt to slater the Zombies with it " + " !");

alert("Know you make a choice are you going to let the Zombies kill you or are you going to kill it with your new " + weapon + " !");

var survive = randomNumber(2);

if(survive === 0) {
    alert("The Zombies eaten your brains and your " + weapon + " !");
    alert("You Lose!!!!!!!!!!!!!!!");
    alert("Better luck next time!");
    alert("Game by Benjamin Fairbourne");
    alert("Now refresh the page!")
} else if ( survive > 0) {
    alert("You demolish the stupid Zombies with your " + weapon + " , and you are safe!");
    alert("You Win!!!!!!!!!!");
    alert("Play Again!");
    alert("Game by Benjamin Fairbourne")
}
function customAlert(msg) {
var alertDiv = "<div style='position: relative; top: 200px; left: 200px;'>"+msg+"</div>";
document.getElementsByTagName('body')[0].appendChild(alertDiv);
}
});    

/*weaponList[ randomNumber( weaponList.length - 1) ];*/