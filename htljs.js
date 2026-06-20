// =========================================
// MADHUBAN RESORT JS IMPLEMENTATION ENGINE
// =========================================

const header = document.querySelector("header");
const menuButton = document.querySelector(".menu-btn");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {

  // Sticky Header
  header.classList.toggle("sticky", window.scrollY > 50);

  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Only apply on mobile/tablet where menu button exists
  if (window.innerWidth <= 992) {

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling Down
      menuButton.classList.add("hide-menu");
    } else {
      // Scrolling Up
      menuButton.classList.remove("hide-menu");
    }

  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// MOBILE MENU HAMBURGER DRAWER SYSTEM
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  
  // Dynamic Icon Swapping effect
  const icon = menuBtn.querySelector("i");
  if(navMenu.classList.contains("active")) {
    icon.className = "fas fa-times";
  } else {
    icon.className = "fas fa-bars";
  }
});

// Close Mobile Navbar layout automatically when clicking anchors
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.querySelector("i").className = "fas fa-bars";
  });
});

// LIGHTBOX ZOOM COMPONENT ENGINE
bookingForm.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const room = document.getElementById("room").value;

  const message =
`🌿 MADHUBAN RESORT BOOKING REQUEST 🌿

Guest Name: ${name}
Email: ${email}
Check-in Date: ${date}
Room Type: ${room}

Please confirm availability.`;

  const whatsappURL =
`https://wa.me/9779865010692?text=${encodeURIComponent(message)}`;

  const confirmBooking = confirm(
    "You will be redirected to WhatsApp to confirm room availability. Continue?"
  );

  if (confirmBooking) {
    window.open(whatsappURL, "_blank");
    bookingForm.reset();
  }
});