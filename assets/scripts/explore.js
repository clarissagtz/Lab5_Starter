// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
let voices = [];
const voiceSelect = document.querySelector('select');


function populateVoiceList() {
  voices = synth.getVoices();
  console.log('tHis is voices inside populate function ', voices.length);

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function init() {
  // TODO
  const voice= document.getElementById('voice-select');
  const button = document.querySelector('button');
  const texttospeak = document.getElementById("text-to-speak");
  const image = document.querySelector("img");


  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  button.addEventListener('click', () => {
    const talking = new SpeechSynthesisUtterance(texttospeak.value);
    const selectedOption = voice.selectedOptions[0].getAttribute('data-name');

    //no voice has been seleceted 
    if (selectedOption == null){
      return;
    }
    
    console.log("this was selected: " , selectedOption);

    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
          talking.voice = voices[i];
      }
    }
  
  synth.speak(talking);

  //CHANGE FACE WHEN TALKING 
  talking.addEventListener('end', () => {
    image.src = "assets/images/smiling.png";
  });
  image.src = "assets/images/smiling-open.png";

  });
}