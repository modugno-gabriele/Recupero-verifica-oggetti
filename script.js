const canzone1 = {
    titolo: "Hello",
    info: "Hello è un singolo della cantautrice britannica Adele, pubblicato il 23 ottobre 2015"
}
const canzone2 = {
    titolo: "Skyfall",
    info: "Skyfall è un singolo del 2012 di Adele, theme song del 23º capitolo della serie cinematografica di James Bond"
}
const canzone3 = {
    titolo: "Rolling in the deep",
    info: "Rolling in the Deep è un singolo della cantante britannica Adele, pubblicato il 29 novembre 2010"
}

function  mostrainfo(){
    document.getElementById("info").innerHTML = "caratteristiche della canzone <br>" +
    "titolo: "+ canzone1.titolo + "<br>" +
    "informazioni: " + canzone1.info + "<br>" ;
}