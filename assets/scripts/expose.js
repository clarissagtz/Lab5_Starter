// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornType = document.getElementById('horn-select');
  // console.log(hornType.value);

  const images = document.getElementsByTagName('img');
  // console.log(images) //images 0 and images 1

  const imageHorn = document.querySelector('img');

  //audio:
  const audio = document.querySelector('audio');

  //volume:
  const volume = document.getElementById('volume');
  //icon image volume access image[1] 
  
  //button:
  const  button = document.querySelector('button');


  const jsConfetti = new JSConfetti();

  volume.addEventListener('change', function(e) {
    audio.volume = e.currentTarget.value / 100; // audio must be between [0,1] in order to work -> got errors if not 

    console.log("this is audio.volume ", audio.volume);
    //Change sound icon depending on the volume:
    if(audio.volume == 0){
      console.log("you are at 0 level now ")
      images[1].src = 'assets/icons/volume-level-0.svg'

    }
    else if(audio.volume >= 0.01 && audio.volume < 0.33){
      console.log("you are on 1-33")
      images[1].src = 'assets/icons/volume-level-1.svg'
    }
    else if(audio.volume >= 0.33 && audio.volume < 0.67){
      console.log("between 33 and 67 ")
      images[1].src = 'assets/icons/volume-level-2.svg'
    }
    else if(audio.volume >= 0.67 && audio.volume <= 1){
      images[1].src = 'assets/icons/volume-level-3.svg'
    }
})

  hornType.addEventListener('change', (event) => {
    const currentSelection = event.target.value;
    if(currentSelection == "air-horn" ){
      //update the picture to air horn 
      imageHorn.src = 'assets/images/air-horn.svg';
      audio.src = "./assets/audio/air-horn.mp3";

    }
    if(currentSelection == "car-horn" ){
      //update the picture to car- horn 
      imageHorn.src = 'assets/images/car-horn.svg';
      audio.src = "./assets/audio/car-horn.mp3";

    }
    if(currentSelection == "party-horn" ){
      //update the picture to party-horn 
      imageHorn.src = 'assets/images/party-horn.svg';
      audio.src = "./assets/audio/party-horn.mp3";
    }
    console.log(currentSelection);
  });// end of the event listener 

  button.addEventListener('click', () => {
    audio.play();
    //console.log("horn type value  ", hornType.value)
    if(hornType.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });

}