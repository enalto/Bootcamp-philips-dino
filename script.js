const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
var isJumping = false;
var position = 0;

function handleKeyUp(event) {
  console.log(event);
  if (event.keyCode === 32 || event.keyCode === 38) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  //  let position = 0;
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      // descendo
      let downInterval = setInterval(() => {
        if (position <= 40) {
          clearInterval(downInterval);
          isJumping = false;
        }
        position -= 20;
        dino.style.bottom = position + "px";
      }, 20);
    } else {
      // subindo
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

(function createCactus() {
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  const cactus = document.createElement("div");
  cactus.style.left = 1000 + "px";
  cactus.classList.add("cactus");
  background.appendChild(cactus);

  let leftInvertal = setInterval(() => {
    if (cactusPosition <= -50) {
      clearInterval(leftInvertal);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 50 && position < 50) {
      clearInterval(leftInvertal);
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  // cria novo cactus num intervalo aleatorio
  setTimeout(createCactus, randomTime);
})();

//createCactus()

document.addEventListener("keyup", handleKeyUp);

/* 
document.addEventListener('keyup', function(){
    console.log('pressionou algo');
}); */
