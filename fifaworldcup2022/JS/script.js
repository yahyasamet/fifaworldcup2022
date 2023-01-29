function $(id) {
  return document.getElementById(id);
}

var countDownDate = new Date("Dec 18, 2022 16:00:00").getTime();

var x = setInterval(function () {

  var agora = new Date().getTime();

  var distancia = countDownDate - agora;

  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  const d = "DAYS"
  const h = "HOURS"
  const m = "MINUTES"
  const s = "SECONDS"

  $("days").innerHTML = " " + dias + "<h6><br>" + d + "</h6>";

  $("hours").innerHTML = horas + "<h6><br>" + h + "</h6>";

  $("minutes").innerHTML = minutos + "<h6><br>" + m + "</h6>";

  $("seconds").innerHTML = segundos + "<h6><br>" + s + "</h6>"


  if (distancia < 0) {
    clearInterval(x);
    alert("welcom to the  world cup !!")
  }
}, 1000);

function mudarFundo() {

  const td = document.getElementsByClassName('tabela')
  const img = document.getElementsByClassName('hover')
  const body = document.body;
  const infoEstadio = document.getElementsByClassName('infos')
  body.classList.toggle("lightBG");
  const iconeMobile = $("icn-mobile");
  const icone = $("icn");
  let x = 1;

  var fundoEscuro = true;

  if(icone.innerHTML === "dark_mode"){
    fundoEscuro === false;
    x = 0;
  }else{
    fundoEscuro === true;
  }

  console.log(icone.innerHTML)
  const imgsA = ["Imgs/Grupos/Grupo A.png", "Imgs/Grupos 2/Grupo A.png"];
  const imgsB = ["Imgs/Grupos/Grupo B.png", "Imgs/Grupos 2/Grupo B.png"];
  const imgsC = ["Imgs/Grupos/Grupo C.png", "Imgs/Grupos 2/Grupo C.png"];
  const imgsD = ["Imgs/Grupos/Grupo D.png", "Imgs/Grupos 2/Grupo D.png"];
  const imgsE = ["Imgs/Grupos/Grupo E.png", "Imgs/Grupos 2/Grupo E.png"];
  const imgsF = ["Imgs/Grupos/Grupo F.png", "Imgs/Grupos 2/Grupo F.png"];
  const imgsG = ["Imgs/Grupos/Grupo G.png", "Imgs/Grupos 2/Grupo G.png"];
  const imgsH = ["Imgs/Grupos/Grupo H.png", "Imgs/Grupos 2/Grupo H.png"];
  console.log(imgsA[0])
  console.log(imgsA[1])
  switch (icone.innerHTML) {
    case "light_mode":
    icone.innerHTML = "dark_mode";
    iconeMobile.innerHTML = "dark_mode";
    $('A').src = imgsA[x];
    $('B').src = imgsB[x]
    $('C').src = imgsC[x]
    $('D').src = imgsD[x]
    $('E').src = imgsE[x]
    $('F').src = imgsF[x]
    $('G').src = imgsG[x]
    $('H').src = imgsH[x]
    fundoEscuro = true;
    break;
    case "dark_mode":
    icone.innerHTML = "light_mode";
    iconeMobile.innerHTML = "light_mode";
    $('A').src = imgsA[x];
    $('B').src = imgsB[x]
    $('C').src = imgsC[x]
    $('D').src = imgsD[x]
    $('E').src = imgsE[x]
    $('F').src = imgsF[x]
    $('G').src = imgsG[x]
    $('H').src = imgsH[x]
    break;
    
}

}

const btnMobile = document.getElementById('btn-mobile');
const gruposUl = document.getElementsByClassName('grupos-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);