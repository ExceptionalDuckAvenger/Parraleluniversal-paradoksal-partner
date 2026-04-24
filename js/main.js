document.querySelector(".cirkel1").addEventListener("mouseover", mouseoverHead);
function mouseoverHead() {
  console.log("mouseoverHead");
  document.querySelector(".cirkel1").style.fill = "blue";
}

document.querySelector(".cirkel1").addEventListener("mouseout", mouseoutHead);
function mouseoutHead() {
  console.log("mouseoutHead");
  document.querySelector(".cirkel1").style.fill = "red";
}

document.querySelector(".cirkel1").addEventListener("click", clickHead);
function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text h2").textContent = "Hoved er vigtig!";
  document.querySelector(".info-text .placeholder").innerHTML = "<p>Det er muligvis desserter med ingredienser der er uspiselige for en selv, men som der bliver benyttet i flere retter rundt om hele den parallelle planet. Nogle muligheder kunne være en gelatine med særlige ingredienser som ikke bliver benyttet i vores univers, hvilket kunne inkludere levende organismer.</p>       <img src='img/logoinfografikmad.png' alt='mad'>";

  document.querySelector("#requirement").textContent = "Bla bla bla";
}

document.querySelector(".cirkel2").addEventListener("mouseover", mouseoverHead2);
function mouseoverHead2() {
  console.log("mouseoverHead2");
  document.querySelector(".cirkel2").style.fill = "blue";
}

document.querySelector(".cirkel2").addEventListener("mouseout", mouseoutHead2);
function mouseoutHead2() {
  console.log("mouseoutHead2");
  document.querySelector(".cirkel2").style.fill = "red";
}

document.querySelector(".cirkel2").addEventListener("click", clickHead2);
function clickHead2() {
  console.log("clickHead2");
  document.querySelector(".info-text h2").textContent = "Hoved er vigtig!";
  document.querySelector(".info-text .placeholder").innerHTML = "<p>Hvad ville man have af muligheder blandt monstrøse mutanter? Der er mutanter med skarpe tænder, der er mutanter med tentakler, der er mutanter med øjne på stilke, der er mutanter med mere end 4 lemmer, der er mutanter dækket af skæl samt mutanter med flere forskelige træk som ikke er blevet nævnt.</p>       <img src='img/logoinfografikmutant.png' alt='mutant'>";

  document.querySelector("#requirement").textContent = "Bla bla bla";
}

document.querySelector(".cirkel3").addEventListener("mouseover", mouseoverHead3);
function mouseoverHead3() {
  console.log("mouseoverHead3");
  document.querySelector(".cirkel3").style.fill = "blue";
}

document.querySelector(".cirkel3").addEventListener("mouseout", mouseoutHead3);
function mouseoutHead3() {
  console.log("mouseoutHead3");
  document.querySelector(".cirkel3").style.fill = "red";
}

document.querySelector(".cirkel3").addEventListener("click", clickHead3);
function clickHead3() {
  console.log("clickHead3");
  document.querySelector(".info-text h2").textContent = "Hoved er vigtig!";
  document.querySelector(".info-text .placeholder").innerHTML = "<p>Steder hvor man kunne have en date kunne være på en bakketop tæt ved en radioaktiv sø, i en grotte som er beboet af andre muterede væsner eller på en cafe i byen. </p>       <img src='img/logoinfografikbord.png' alt='bord'>";

  document.querySelector("#requirement").textContent = "Bla bla bla";
}

function headHighLight() {}

function headHighLight() {}

function cirkel1() {
  console.log("headInfo");

  document.querySelector("#efficiency").classList.remove("hide");
  cument.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector(".info-text > h2").textContent = "hovedet!";
  document.querySelector(".info-text > article > p").textContent = "";
  document.querySelector("#efficiency").innerHTML;
}

function cirkel2() {
  document.querySelector("#efficiency").classList.remove("hide");
  cument.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector("#requirement").addEventListener("click", cleanup);

  document.querySelector(".info-text > h2").textContent = "hovedet!";
  document.querySelector(".info-text > article > p").textContent = "";
  document.querySelector("#efficiency").innerHTML;
}

function cirkel3() {
  document.querySelector("#efficiency").classList.remove("hide");
  cument.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector(".info-text > h2").textContent = "hovedet!";
  document.querySelector(".info-text > article > p").textContent = "";
  document.querySelector("#efficiency").innerHTML;
}

function cleanup() {
  console.log("cleanup");
}
