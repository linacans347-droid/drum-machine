let isOn = true;

const powerSwitch = document.getElementById("power-switch");
const volumeSlider = document.getElementById("volume-slider");
const display = document.getElementById("display");

powerSwitch.addEventListener("change", () => {
  isOn = powerSwitch.checked;

  if (!isOn) {
    display.innerText = "POWER OFF";
  } else {
    display.innerText = "POWER ON";
  }
});

function playSound(idKey) {
  if (!isOn) {
    display.innerText = "POWER OFF";
    return;
  }

  const audio = document.getElementById(idKey);

  if (audio) {
    audio.currentTime = 0;
    audio.play();

    audio.volume = volumeSlider.value;

    const buttonId = audio.parentElement.id;
    display.innerText = buttonId.replace(/-/g, ' ');

    const pad = audio.parentElement;

    pad.classList.add('active');

    setTimeout(() => {
      pad.classList.remove('active');
    }, 150);
  }
}

document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', () => {
    const audioKey = pad.querySelector('.clip').id;
    playSound(audioKey);
  });
});

document.addEventListener('keydown', (event) => {
  playSound(event.key.toUpperCase());
});