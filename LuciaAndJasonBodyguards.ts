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

var RUGER_MODEL_ID = 276;
var RUGER_ID = 27;
var INGRAM_MODEL_ID = 283;
var INGRAM_ID = 24;

var deloreanCoords = {
    x : -1076.094482421875,
    y : -863.5663452148438,
    z : -12.290136337280273
}
tommy.setCoordinates(shanyAutosCoords.x,shanyAutosCoords.y,shanyAutosCoords.z);
var firstTime = true;
var alreadyFollowTommy = false;
var sphere = Sphere.Create(shanyAutosCoords.x,shanyAutosCoords.y,shanyAutosCoords.z,1.00);
while (true) {
    wait(250);
    // if(firstTime){
        if(firstTime && tommy.locateOnFoot2D(shanyAutosCoords.x,shanyAutosCoords.y,10.00,1.00,true)){
            sphere.remove();
            // var timeTravelExplosition = Fx.AddExplosion(deloreanCoords.x,deloreanCoords.y,deloreanCoords.z,1);
            loadModel(DELORAN_ID);
            var delorean = Car.Create(DELORAN_ID,deloreanCoords.x,deloreanCoords.y,deloreanCoords.z);
            delorean.changeColor(1,2);
            delorean.setProofs(false,false,true,false,false);
            delorean.setDrivingStyle(2);
            loadModel(JASON_ID);
            var jason = Char.CreateInsideCar(delorean,7,73);
            // loadModel(RUGER_ID);
            // jason.giveWeapon(RUGER_ID,20);
            jason.addArmor(100);
            loadModel(LUCIA_ID);
            var lucia = Char.CreateAsPassenger(delorean,7,24,1);
            // loadModel(UZI_ID);
            // lucia.giveWeapon(UZI_ID,20);
            lucia.addArmor(100);
            delorean.gotoCoordinates(shanyAutosCoords.x,shanyAutosCoords.y,shanyAutosCoords.z);
            // delorean.markAsNoLongerNeeded();
            firstTime = false;
        }
        if(!alreadyFollowTommy && jason.locateInCar2D(shanyAutosCoords.x,shanyAutosCoords.y,10.00,10.00, true)){
            jason.followPlayer(tommy);
            jason.setPersonality(10);
            loadModel(RUGER_MODEL_ID);
            jason.giveWeapon(RUGER_ID,20000000);
            Streaming.MarkModelAsNoLongerNeeded(RUGER_MODEL_ID);
            lucia.followPlayer(tommy);
            lucia.setPersonality(10);
            loadModel(INGRAM_MODEL_ID);
            lucia.giveWeapon(INGRAM_ID,2000000);
            Streaming.MarkModelAsNoLongerNeeded(INGRAM_MODEL_ID);
            alreadyFollowTommy = true;
        }
        // jason.markAsNoLongerNeeded();
        // lucia.markAsNoLongerNeeded();
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

