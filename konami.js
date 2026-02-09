function konamiCode() {
  const keySequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let y = 0;
  document.addEventListener(`keydown`, (keypress) => {
    if (keypress.key === keySequence[y] && y < keySequence.length) {
      y++;
      if (y == keySequence.length) {
        console.log(`you win!`);
      }
    } else {
      y = 0;
    }
  });
}

konamiCode();

// loosely adapted from the real Konami Code in Contra, courtesy of Displaced Gamers' codewalk - https://youtu.be/8LnwsYL7Apk?si=34dtXQ9eJZf2uLgu&t=379
