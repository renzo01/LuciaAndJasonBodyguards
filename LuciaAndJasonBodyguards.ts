/// <reference path=".config/vc.d.ts" />
Debugger.On();
var tommy = new Player(0);

var shanyAutosCoords = {
    x : -1020.6777954101563,
    y : -906.2648315429688,
    z : 14.417823791503906,
}

var DELORAN_ID = 211
var LUCIA_ID = 24;
var JASON_ID =73;

var F2_KEY = 113;

var deloreanCoords = {
    x : -1076.094482421875,
    y : -863.5663452148438,
    z : -12.290136337280273
}

var firstTime = true;
var sphere = Sphere.Create(shanyAutosCoords.x,shanyAutosCoords.y,shanyAutosCoords.z,1.00);
while (true) {
    wait(250);
    // if(firstTime){
        if(firstTime && tommy.getCoordinates().x <= shanyAutosCoords.x){
            sphere.remove();
            var timeTravelExplosition = Fx.AddExplosion(deloreanCoords.x,deloreanCoords.y,deloreanCoords.z,1);
            loadModel(DELORAN_ID);
            var delorean = Car.Create(DELORAN_ID,deloreanCoords.x,deloreanCoords.y,deloreanCoords.z);
            delorean.changeColor(1,2);
            delorean.setProofs(false,false,true,false,false);
            delorean.setDrivingStyle(2);
            loadModel(JASON_ID);
            var jason = Char.CreateInsideCar(delorean,7,73);
            jason.setCurrentWeapon(27);
            jason.addAmmo(27,99999999999);
            jason.addArmor(100);
            loadModel(LUCIA_ID);
            var lucia = Char.CreateAsPassenger(delorean,7,24,1);
            lucia.setCurrentWeapon(23);
            lucia.addAmmo(23,99999999999);
            lucia.addArmor(100);
            delorean.gotoCoordinates(shanyAutosCoords.x,shanyAutosCoords.y,shanyAutosCoords.z);
            firstTime = false;
        }
        // firstTime = false;
    // }
}


// delorean.setForwardSpeed(75.00);
// delorean.setCruiseSpeed(90.00);

function loadModel(ModelID) {
	Streaming.RequestModel(ModelID);
	while (!Streaming.HasModelLoaded(ModelID)) {
		wait(250);
	}
}

