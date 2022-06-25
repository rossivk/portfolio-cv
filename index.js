window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// let tl = gsap.timeline();

// tl.from(".hamburger-lines", { duration: 1, opacity: 0, y: -200, ease: "back" });

// tl.from(".github, .twitter, .linkedin", { duration: 1, delay: -0.5, opacity: 0, x: 200, stagger: 0.25, ease: "bounce" });

const tl = new TimelineMax(),
  bouncy = document.querySelectorAll(".github, .twitter, .linkedin")

tl.staggerFrom(bouncy, 3, {
  y: -400,
  ease: Bounce.easeOut
}, 0.05);

tl.from(".hamburger-lines", 3, {
  delay: +1.5,
  x: 250,
  ease: Bounce.easeOut
}, 0.05);