const text = ["Web Designer", "UI Designer", "UX Designer", "AI/ML Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1200); // wait before next word
  } else {
    setTimeout(type, 150);
  }
})();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".profile-pic img", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".intro", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  delay: 0.3,
  ease: "power4.out"
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  opacity: 0,
  x: -100,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  opacity: 0,
  x: 100,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".skill-box", {
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top 80%"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.3,
  ease: "back.out(1.7)"
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 85%"
  },
  opacity: 0,
  y: 80,
  duration: 1.2,
  stagger: 0.4,
  ease: "power4.out"
});

gsap.from(".contact-info p", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out"
});
