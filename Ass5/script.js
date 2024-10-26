function playSound(note) {
  const audio = new Audio(`sounds/${note}.wav`);
  audio.currentTime = 0; 
  audio.play().catch(error => console.error('Ошибка воспроизведения:', error));
}


document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note');
    playSound(note);
  });
});


document.addEventListener('keydown', event => {
  const note = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-note="${note}"]`);
  if (keyElement) {
    keyElement.click();
  }
});
