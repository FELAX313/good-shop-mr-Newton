let advert = document.createElement('img');
 

// Gets a random number between 1 and 3 
// Change 3 to however many images in assets folder that
// you want to randomly pick between

// Need to add this into interval function

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

setInterval(() => {
  advert.src='./assets/image_' + getRandomNumber() + '.jpg';
  document.getElementById('advert').innerHTML = ''
  document.getElementById('advert').appendChild(advert)
}, 2000);

setTimeout(() => {
  alert('BUY BILL"S LEMONS!!!')
}, 10000);

// Need to add products to all image areas. 
// Can also swithc products at intervals. 

let product_1 = document.createElement('img');
product_1.src='./assets/product_1.jpg'
document.getElementById('container_1').appendChild(product_1);

let product_2= document.createElement('img');
product_2.src='./assets/product_2.jpg'
document.getElementById('container_2').appendChild(product_2);

let product_3= document.createElement('img');
product_3.src='./assets/product_3.jpg'
document.getElementById('container_3').appendChild(product_3);

let product_4= document.createElement('img');
product_4.src='./assets/product_4.jpg'
document.getElementById('container_4').appendChild(product_4);

let product_5= document.createElement('img');
product_5.src='./assets/product_5.jpg'
document.getElementById('container_5').appendChild(product_5);

let product_6= document.createElement('img');
product_6.src='./assets/product_6.jpg'
document.getElementById('container_6').appendChild(product_6);

// Add a new product (rocket) purely via JavaScript so no HTML changes are required.
// Place the rocket image at ./assets/rocket.jpg (or change the path below).


// Audio assets
const sound = new Audio('./assets/wakanda.mp3');
const hello = new Audio('./assets/socialcredit.mp3');
// corrected filename: assets contains 'rickroll.mp3'
const laugh = new Audio('./assets/rickroll.mp3');

// Play helper: rewind and play, with a safe promise catch
function playAudio(audio) {
  if (!audio) return;
  try {
    audio.currentTime = 0;
  } catch (err) {
    // some browsers may throw if audio not ready; ignore
  }
  const p = audio.play();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}

// Map keys to sounds. q -> laugh, w -> wakanda, e -> hello
document.addEventListener('keydown', (e) => {
  // Don't trigger while typing in text inputs
  const active = document.activeElement && document.activeElement.tagName;
  if (active === 'INPUT' || active === 'TEXTAREA') return;

  const key = (e.key || '').toLowerCase();
  if (key === 'q') playAudio(laugh);
  else if (key === 'w') playAudio(sound);
  else if (key === 'e') playAudio(hello);
});