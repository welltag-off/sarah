var paroles = [  
"Dix-huit ans, un moment magique dans la vie,", 
 "Un passage de l'adolescence à l'âge adulte, une étape décisive.",  
 "Tu as grandi si vite, Sarah,",  
 "Je suis fier de la personne merveilleuse que tu es devenue.",  
 "<br>",  
 "Tu as toujours été là pour moi,",  
 "Dans les bons moments comme dans les mauvais.",  
 "Tu as essuyé mes larmes, tu as partagé mes rires,",  
 "Tu m'as donné une épaule sur laquelle m'appuyer.",  
 "<br>",  
 "Nous avons eu tant d'aventures ensemble,",  
 "Des projects, des soirées, des moments inoubliables.",  
 "Tu as toujours su me faire rire,",  
 "Même dans les moments les plus sombres de ma vie.",  
 "<br>",  
 "Notre amitié est un trésor,",  
 "Elle est forte et indestructible.",  
 "Tu es ma confidente, mon soutien,",  
 "Ma meilleure amie pour l'éternité.",  
 "<br>",  
 "Aujourd'hui, pour ton anniversaire,",  
 "Je te souhaite tout le bonheur du monde.",  
 "Que ta vie soit remplie de succès, d'amour et de joie,",  
 "Que tu atteignes tous tes objectifs, tous tes rêves.",  
 "<br>",  "Tu es une personne incroyablement spéciale,",  
 "Et je m'estime si chanceux de t'avoir dans ma vie.",  
 "Joyeux anniversaire, ma petite étoile,",  
 "Je t'aime plus que tout, pour l'éternité, ma meilleure amie. <3",
 "<h2 class='author'>-Raphael</h2>"
];

var index = 0;
var lampe = document.getElementById("lampe");
var msc = document.getElementById("msc");
var mot = document.getElementById("mot");
var prl = document.getElementById("poeme");
var musique = document.getElementById("musique");

prl.classList.add("hide");
msc.classList.add("hide");
mot.classList.add("hide");


lampe.addEventListener("click", function() {
  msc.classList.toggle("hide");
  lampe.classList.add("hide");
  document.body.style.backgroundColor = "#7f2aeecc"; 
});


msc.addEventListener("click", function() {
  mot.classList.toggle("hide");
  msc.classList.add("hide");
  musique.play(); 
});

mot.addEventListener("click", function() {
  mot.classList.add("hide");
  prl.classList.toggle("hide");
  function poeme() {
  var nouvelleLigne = document.createElement("h1");
  nouvelleLigne.innerHTML = paroles[index];
  document.getElementById("poeme").appendChild(nouvelleLigne);
  index++;
  if (index >= paroles.length) {
    clearInterval(interval);
  }
  window.scrollTo(0, document.body.scrollHeight);
}
var interval = setInterval(poeme, 3000);
});