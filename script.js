
function page1Intro() {
  new Typed('#typed-text', {
    strings: [
      "Hello, I'm Vaidika Kaul",
      "नमस्ते, मैं वैदिका कौल हूँ",         // Hindi 
      "Bonjour, je suis Vaidika Kaul",       // French
      "Hola, soy Vaidika Kaul",      // Spanish
      "こんにちは、ヴァイディカ・カウル です",        // Japanese
      "வணக்கம், நான் வைதிகா கவுல்",           // Tamil
      "హలో, నేను వైదిక కౌల్",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: false,
  });
}

page1Intro()


function page1ImageAnimation() {
  gsap.to(".image-display img", {
    duration: 2,
    display: "block",
    stagger: 1,
    repeat: -1,
    yoyo: true
  })
}

page1ImageAnimation()


function menuAnimation() {
  let tl = gsap.timeline()
  let menu = document.querySelector(".menu")
  let menuIcon = document.getElementById("menu-icon")
  let menuClose = document.querySelector(".menu i")

  tl.to("#menu-icon", {
    display: "none",
    ease: "ease",
    duration: 0.5
  })

  tl.to(menu, {
    y: 0,
    duration: 0.5,
    ease: "ease"
  })

  tl.from(".menu-items ul li a", {
    duration: 0.3,
    y: 50,
  }, "same")

  tl.from(".menu-bottom-left a", {
    duration: 0.2,
    y: 20,
    stagger: 0.2,
    opacity: 0,
    ease: "ease"
  }, "same")

  tl.pause();

  menuIcon.addEventListener("click", function () {
    tl.play();
  })

  menuClose.addEventListener("click", () => {
    tl.reverse();
  })


  let links = document.querySelectorAll(".menu .menu-items ul li a")
  links.forEach((link) => {
    link.addEventListener("click", () => {
      tl.reverse()
    })
  })
}

menuAnimation();

function page2Animation() {

  gsap.to("#page2 .question h1", {
    display: "none",
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2 .question h1",
      scroller: "body",
      start: "top 60%"
    }
  })
  gsap.from("#page2 .about-me", {
    opacity: 0,
    delay: 3,
    stagger: 0.6,
    scrollTrigger: {
      trigger: "#page2 .about-me",
      scroller: "body",
      start: "top 61%"
    }
  })
  gsap.from("#page2 .about-me .line h1", {
    y: 40,
    opacity: 0,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2 .about-me .line h1",
      scroller: "body",
      start: "top 55%",
      // markers: true
    }
  })

}

page2Animation()


function page3Animation(){
  let tl = gsap.timeline();

  tl.from(".page3 h1", {
    fontSize: "20vh",
    duration: 1.5,
    opacity: 0,
    border: "1px solid #101010",
    gap: "70vh",
    ease: "power2.out",
    width: "100%",
    scrollTrigger: {
      trigger: ".page3 h1",
      scroller: "body",
      start: "top 70%",
      markers: true,
      end: "top 40%",
      scrub: 5
    }
  }, "equal")

  
}

page3Animation()