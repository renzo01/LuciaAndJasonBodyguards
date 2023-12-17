/// <reference path=".config/vc.d.ts" />

var tommy = new Player(0);

var shanyAutosCoords = {
    x : -1019.6777954101563,
    y : -906.2648315429688,
    z : 14.417823791503906,
}

var DELORAN_ID = 211
var LUCIA_ID = 24;
var JASON_ID =73;

var deloreanCoords = {
    x : -1076.094482421875,
    y : -863.5663452148438,
    z : -12.290136337280273
}

// Text.DisplayWith2Numbers(0.0, 1.0,'x :',tommyCoords.x,0);

// const frontShinyAutosCoords = {
//     x : 16040.00,
//     y : 173560.00,
//     z : 27832.00
// }
var sphere = Sphere.Create(shanyAutosCoords.x,shanyAutosCoords.y,shanyAutosCoords.z,1.00);
sphere.remove();

loadModel(DELORAN_ID);

var delorean = Car.Create(DELORAN_ID,deloreanCoords.x,deloreanCoords.y,deloreanCoords.z);
delorean.changeColor(1,2);
delorean.setProofs(false,false,true,false,false);
delorean.setDrivingStyle(2);
loadModel(JASON_ID);
var jason = Char.CreateInsideCar(delorean,7,73);
jason.addAmmo(27,99999999999);
jason.setCurrentWeapon(27);
loadModel(LUCIA_ID);
var lucia = Char.CreateAsPassenger(delorean,7,24,1);
jason.addAmmo(23,99999999999);
jason.setCurrentWeapon(23);
delorean.gotoCoordinates(shanyAutosCoords.x,shanyAutosCoords.y,shanyAutosCoords.z);
if((delorean.getCoordinates().x === shanyAutosCoords.x) &&
(delorean.getCoordinates().y === shanyAutosCoords.y) &&
(delorean.getCoordinates().z === shanyAutosCoords.z)){
    jason.followPlayer(tommy);
    lucia.followPlayer(tommy);
}

// delorean.markAsNoLongerNeeded();
// Streaming.MarkModelAsNoLongerNeeded(DELORAN_ID);

while(true){
    wait(250)
    var tommyCoords = tommy.getCoordinates();
    var strTommyCoordsX = tommyCoords.z.toString();
    Text.ClearPrints();
    // Text.PrintNow(strTommyCoordsX,10000,1);
    // Text.PrintNow(strTommyCoordsX.substring(7,strTommyCoordsX.length),10000,1);
    Text.PrintNow(strTommyCoordsX.substring(14,strTommyCoordsX.length),10000,1);
}
// Text.PrintBig(tommyCoords.x+''+tommyCoords.y+''+tommyCoords.z, 600000, 2);
// var marker = Blip.AddForCoord(
//     tommyCoords.x,
//     tommyCoords.y, 
//     tommyCoords.z
// );


function loadModel(ModelID) {
	Streaming.RequestModel(ModelID);
	while (!Streaming.HasModelLoaded(ModelID)) {
		wait(250);
	}
}
