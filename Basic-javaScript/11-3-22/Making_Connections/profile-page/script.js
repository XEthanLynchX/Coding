var counterReq = 2
var counterConnections = 418;


var myName = document.querySelector("#myName")

var connectionReq = document.querySelector("#connectionReq")
var myConnections = document.querySelector("#myConnections")

function nameChange() {
    myName.innerText = "Paige Shelly";
}

function acceptIt(id) {
   var element = document.querySelector(id)
   counterReq--
   counterConnections++
   myConnections.innerText = counterConnections
   connectionReq.innerText = counterReq
   element.remove();
}


function closeIt(id) {
    var element = document.querySelector(id)
    counterReq--
    connectionReq.innerText = counterReq
    element.remove();
}


