let updates = [

  {
    image:
      "https://www.rockstargames.com/VI/_next/static/media/Jason_Lucia_Rooftop_With_Logos_landscape.04l3xybfa4~6m.jpg",
    title: "LUCIA & JASON",
    description:
      "Bound by trust and fueled by ambition. In a state built on neon and crime, Lucia and Jason are the deadliest duo on the highway.",
  },

  {
    image:
      "https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_landscape.11_3hd0fr69~j.jpg",
    title: "RAUL BAUTISTA",
    description:
      "Confidence, cunning, and a taste for high-stakes chaos—Raul Bautista is the man who turns Vice City’s biggest risks into bigger payouts.",
  },
  {
    image:
      "https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_landscape.0_b7hszyze6cy.jpg",
    title: "Dre'Quan Priest",
    description:
      "He doesn't chase the spotlight—he controls who steps into it. Behind every track shaking Leonida, Dre'Quan Priest is calling the shots.",
  },
  {
    image:
      "https://www.rockstargames.com/VI/_next/static/media/Boobie_Ike_landscape.0ldnbn87k-8mq.jpg",
    title: "Boobie Ike",
    description:
      "The club pays for the studio, the streets pay for it all—Boobie Ike is Vice City’s undisputed kingpin of nightlife and hustle.",
  },
  {
    image: "https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_landscape.0a-egj5b8yo1q.jpg",
    title: "Brian Heder",
    description: "He survived the drug wars when others sank. Now, from his Keys boatyard, Brian Heder holds the keys to Leonida's coastline—and decides who gets to ride the tide."
},
  {
    image:
      "https://www.rockstargames.com/VI/_next/static/media/Cal_Hampton_landscape.17k7bnt3myg.2.jpg",
    title: "Cal Hampton",
    description:
      "Private tabs open, scanners locked in—Cal Hampton sees the angles everyone else misses.",
  },
];

let currentIndex = 0;

const slider = document.getElementById("slider");
const slideElement = document.querySelector(".slide");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let autoSlideTimer = null;

function showSlide() {
  let slide = updates[currentIndex];

  document.getElementById("currentImage").src = slide.image;
  document.getElementById("current-title").textContent = slide.title;
  document.getElementById("current-description").textContent =
    slide.description;

  slideElement.classList.remove("fade-in");

  void slideElement.offsetWidth;

  slideElement.classList.add("fade-in");
}

function nextSlide() {
  if (currentIndex < updates.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showSlide();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = updates.length - 1;
  }
  showSlide();
}

function startAutoSlide() {
  if (autoSlideTimer !== null) {
    return;
  }
  autoSlideTimer = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = null;
}

slider.addEventListener("mouseenter", stopAutoSlide);

slider.addEventListener("mouseleave", startAutoSlide);

showSlide();
startAutoSlide();
