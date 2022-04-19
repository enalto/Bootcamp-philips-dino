const dino = document.querySelector(".dino");

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    //console.log(event);
    jump();
  }
}

function jump() {
  let position = 0;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      // descendo
      let downInterval = setInterval(()=>{
          if(position<=40){
            clearInterval(downInterval);
          }
          position -= 20;
          dino.style.bottom = position + "px";
      }, 20)
    } else {
        // subindo
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

document.addEventListener("keyup", handleKeyUp);

/* 
document.addEventListener('keyup', function(){
    console.log('pressionou algo');
}); */
