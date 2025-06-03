function nameTyping(){
  new Typed('#typed-text', {
    strings: [
      "Hey, I'm Vaidika Kaul",
      "Bonjour, je suis Vaidika Kaul",
      "Hola, soy Vaidika Kaul",
      "Hallo, ich bin Vaidika Kaul",
      "Ciao, sono Vaidika Kaul",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
    backDelay: 1000,
    showCursor: true,
    cursorChar: ''
  });
}

nameTyping()