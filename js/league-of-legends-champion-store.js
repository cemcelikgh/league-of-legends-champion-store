const showcase = document.querySelector('#showcase');
const classButtons = document.querySelector('#class-buttons');

const classes = ['all', 'assassins', 'fighters', 'mages', 'marksmen', 'supports', 'tanks'];

async function loadButtons() {
//  <button type="button" id="all" class="btn">All</button>
  classes.forEach(clss => {
    let btn = document.createElement('button');
    btn.type = 'button';
    btn.id = `${clss}`;
    btn.className = 'btn';
    btn.innerText = `${clss.slice(0, 1).toUpperCase()}${clss.slice(1)}`;
    classButtons.appendChild(btn);
  });
  return;
}

(async () => {
  await loadButtons();
  document.querySelector('#all').addEventListener('click', showAllChampions);
  document.querySelector('#assassins').addEventListener('click', showAssassins);
  document.querySelector('#fighters').addEventListener('click', showFighters);
  document.querySelector('#mages').addEventListener('click', showMages);
  document.querySelector('#marksmen').addEventListener('click', showMarksmen);
  document.querySelector('#supports').addEventListener('click', showSupports);
  document.querySelector('#tanks').addEventListener('click', showTanks);
})();

async function loadAllChampions() {
//  <div class="frame champion fighter tank">
//    <div>
//      <img src="./assets/aatrox.jpg" alt="Aatrox">
//    </div>
//    <div class="champion-info d-flex justify-content-between">
//      <div class="champion-name">
//        Aatrox
//      </div>
//      <div class="champion-price d-flex flex-column justify-content-evenly">
//        <div class="be-price"><img src="./assets/blue_essence.png" alt="blue_essence"> 4800</div>
//        <div class="rp-price"><img src="./assets/riot_point.png" alt="blue_essence"> 880</div>
//      </div>
//    </div>
//  </div>
  champions.forEach(champion => {
    let champ = document.createElement('div');
    champ.className = `frame champion ${champion.classes}`;
    champ.innerHTML = `<div>
  <img src='./assets/${champion.image}' alt='${champion.name}'>
</div>
<div class='champion-info d-flex justify-content-between'>
  <div class='champion-name'>
    ${champion.name}
  </div>
  <div class='champion-price d-flex flex-column justify-content-evenly'>
    <div class='be-price'><img src='./assets/blue_essence.png' alt='blue_essence'> ${champion.BE}</div>
    <div class='rp-price'><img src='./assets/riot_point.png' alt='blue_essence'> ${champion.RP}</div>
  </div>
</div>`;
  showcase.appendChild(champ);
  });
  return;
}

let allChampions;
let assassins;
let fighters;
let mages;
let marksmen;
let supports;
let tanks;

(async () => {
  await loadAllChampions();
  allChampions = document.querySelectorAll('.champion');
  assassins = document.querySelectorAll('.assassin');
  fighters = document.querySelectorAll('.fighter');
  mages = document.querySelectorAll('.mage');
  marksmen = document.querySelectorAll('.marksman');
  supports = document.querySelectorAll('.support');
  tanks = document.querySelectorAll('.tank');
})();

function showAllChampions() {
  allChampions.forEach(champion => {
    champion.setAttribute('style', 'display: block');
  });
}

function hideAllChampions() {
  allChampions.forEach(champion => {
    champion.setAttribute('style', 'display: none!important');
  });
}

function showAssassins() {
  hideAllChampions();
  assassins.forEach(champion => {
    champion.setAttribute('style', 'display: block');
  });
}

function showFighters() {
  hideAllChampions();
  fighters.forEach(champion => {
    champion.setAttribute('style', 'display: block');
  });
}

function showMages() {
  hideAllChampions();
  mages.forEach(champion => {
    champion.setAttribute('style', 'display: block');
  });
}

function showMarksmen() {
  hideAllChampions();
  marksmen.forEach(champion => {
    champion.setAttribute('style', 'display: block');
  });
}

function showSupports() {
  hideAllChampions();
  supports.forEach(champion => {
    champion.setAttribute('style', 'display: block');
  });
}

function showTanks() {
  hideAllChampions();
  tanks.forEach(champion => {
    champion.setAttribute('style', 'display: block');
  });
}