const canzone1 = {
    titolo: "Hello",
    info: "Hello è un singolo della cantautrice britannica Adele, pubblicato il 23 ottobre 2015",
    link: "<a href=https://www.youtube.com/watch?v=YQHsXMglC9A>video hello</a>"
}
const canzone2 = {
    titolo: "Skyfall",
    info: "Skyfall è un singolo del 2012 di Adele, theme song del 23º capitolo della serie cinematografica di James Bond",
     link: "<a href=https://www.youtube.com/watch?v=DeumyOzKqgI>video youtube</a>"
}
const canzone3 = {
    titolo: "Rolling in the deep",
    info: "Rolling in the Deep è un singolo della cantante britannica Adele, pubblicato il 29 novembre 2010",
    link: "<a href=https://www.youtube.com/watch?v=rYEDA3JcQqw>video youtube</a>"
}

function  mostrainfo1(){
    document.getElementById("info1").innerHTML = "caratteristiche della canzone <br>" +
    "titolo: "+ canzone1.titolo + "<br>" +
    "informazioni: " + canzone1.info + "<br>" +
    "link: "+ canzone1.link + "<br>" ;

}
function  mostrainfo2(){
    document.getElementById("info2").innerHTML = "caratteristiche della canzone <br>" +
    "titolo: "+ canzone2.titolo + "<br>" +
    "informazioni: " + canzone2.info + "<br>"  +
    "link: "+ canzone2.link + "<br>" ;

}
function  mostrainfo3(){
    document.getElementById("info3").innerHTML = "caratteristiche della canzone <br>" +
    "titolo: "+ canzone3.titolo + "<br>" +
    "informazioni: " + canzone3.info + "<br>" +
    "link: "+ canzone3.link + "<br>" ;

}