let score = 0;

$(document).ready(function () { 



const addPoints = function() {
  
  $('.worm').click(function() {
    score++;
    console.log('hi there')
    $('#score').text(score)
  })
}

  $("#start").click(function () {
    let timer2 = "1:00";
    let interval = setInterval(function () {
      let timer = timer2.split(":");

      let minutes = parseInt(timer[0], 10);
      let seconds = parseInt(timer[1], 10);
      --seconds;
      minutes = seconds < 0 ? --minutes : minutes;
      seconds = seconds < 0 ? 59 : seconds;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      $("#countdown").html(minutes + ":" + seconds);
      if (seconds > 0) {
        createMole();
      }

      if (minutes < 0) clearInterval(interval);

      if (seconds <= 0 && minutes <= 0) clearInterval(interval);
      timer2 = minutes + ":" + seconds;
      createMole();
      addPoints();
    }, 1000);

    setTimeout(function () {
      alert("TIME UP!");
      location.reload();
    }, 60000);
  });
});

function createMole() {
  let wormElement = $(`.worm`)

  if (wormElement) {
    wormElement.removeClass('worm')
  }

  let randomPosition = Math.floor(Math.random() * 9);
  let randomWormHole = $(`#${randomPosition}`);
  randomWormHole.addClass("worm");

 
}


