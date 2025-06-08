function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp: 0.02,
  multiplier: 0.7,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotive()


function navbarAnimation(){
  gsap.to("nav", {
    // duration: 1.5,
    height: "8vh",
    borderBottom: "1px solid rgba(255, 255, 255, 0.39)",
    scrollTrigger: {
      trigger: "nav",
      scroller: ".main",
      start: "top -10%",
      scrub: 2,
    }
  })
}
navbarAnimation()


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

function featuredProjects(){
  let filterButtons = document.querySelectorAll(".filter-buttons a");
  let projectCards = document.querySelectorAll(".project-card");

console.log(filterButtons)
console.log(projectCards)

filterButtons.forEach((button) => {
  button.addEventListener("click", ()=>{
    const filter = button.getAttribute('data-filter');

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category')
      if (filter === category) {
        card.style.display = 'block';
        gsap.from(card, {
          duration: 0.2,
          opacity: 0
        })
      } else {
        card.style.display = 'none';
      }
    })
  })
})
}

featuredProjects();

function featuredProjectsButton(){
  let button = document.querySelector(".filter-buttons .button")

button.addEventListener('mouseenter', function(){
  gsap.to(button, {
    scale: 1.1,
  })

  gsap.to(".button-text-upper p", {
  y: -10,
  opacity: 0,
  duration: 0.1,
  stagger: { amount: 0.4 },
  ease: "power2.out"
});
gsap.to(".button-text-lower p", {
  y: -18,
  opacity: 1,
  duration: 0.1,
  stagger: { amount: 0.4 },
  ease: "power2.out"
});

})

button.addEventListener('mouseleave', function(){
  gsap.to(button, {
    scale: 1,
  })

  gsap.to(".button-text-upper p", {
  y: 0,
  opacity: 1,
  duration: 0.1,
  stagger: { amount: 0.4 },
  ease: "power2.out"
});
gsap.to(".button-text-lower p", {
  y: 0,
  opacity: 0,
  duration: 0.1,
  stagger: { amount: 0.4 },
  ease: "power2.out"
});

})

}

featuredProjectsButton();


function contactButton(){
  let contactButton = document.querySelector(".contact-button")

contactButton.addEventListener("mouseenter", function(){
  gsap.to(contactButton, {
    scale: 1.04,
  })
  gsap.to(".contact-button .button-text .button-text-upper p", {
    y: -85,
    duration: 0.4,
    stagger: {
      amount: 0.3
    },
    opacity: 0
  })
  gsap.to(".contact-button .button-text .button-text-lower p", {
    y: -86,
    duration: 0.4,
    stagger: {
      amount: 0.3
    },
    opacity: 1
  })
})

contactButton.addEventListener("mouseleave", function(){
  gsap.to(contactButton, {
    scale: 1,
  })
  gsap.to(".contact-button .button-text .button-text-upper p", {
    y: 0,
    duration: 0.4,
    stagger: {
      amount: 0.3
    },
    opacity: 1
  })
  gsap.to(".contact-button .button-text .button-text-lower p", {
    y: 0,
    duration: 0.4,
    stagger: {
      amount: 0.3
    },
    opacity: 0
  })
})
}

contactButton();