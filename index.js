window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// let tl = gsap.timeline();

// tl.from(".hamburger-lines", { duration: 1, opacity: 0, y: -200, ease: "back" });

// tl.from(".github, .twitter, .linkedin", { duration: 1, delay: -0.5, opacity: 0, x: 200, stagger: 0.25, ease: "bounce" });


const socialIcons = document.querySelectorAll(".github, .twitter, .linkedin, .hamburger-lines");

let delayAnimation = 0.5;

gsap.timeline()
  .from("#top", { duration: 0.5, opacity: 0, ease: "back" })
  .from(".tittle", { opacity: 0, scale: 0, ease: "back" })
  .from(".nav-container .logo", { duration: 2, opacity: 0, x: -300, ease: Back.easeOut })
  .from(socialIcons, { duration: 3, stagger: 0.05, y: -400, ease: Bounce.easeOut })
  .from(".top-section-down", { opacity: 0, ease: "back" })

// tl.from(".hamburger-lines", 2, {
//   delay: delayAnimation - 0.9,
//   x: 250,
//   ease: Bounce.easeOut
// });