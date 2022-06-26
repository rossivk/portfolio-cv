window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// let tl = gsap.timeline();

// tl.from(".hamburger-lines", { duration: 1, opacity: 0, y: -200, ease: "back" });

// tl.from(".github, .twitter, .linkedin", { duration: 1, delay: -0.5, opacity: 0, x: 200, stagger: 0.25, ease: "bounce" });

const tl = new TimelineMax();
const socialIcons = document.querySelectorAll(".github, .twitter, .linkedin, .hamburger-lines");

let delayAnimation = 1;

tl.from(".tittle", 3, {
  scale: 0.1,
  ease: Back.easeOut
});

tl.from(".nav-container .logo", 3, {
  delay: delayAnimation - 0.9,
  x: -300,
  ease: Bounce.easeOut
});

tl.staggerFrom(socialIcons, 2, {
  y: -400,
  ease: Bounce.easeOut
}, 0.05);

// tl.from(".hamburger-lines", 2, {
//   delay: delayAnimation - 0.9,
//   x: 250,
//   ease: Bounce.easeOut
// });