import "./style.css";
import hero_bg from "./assets/alev-takil-7ojyp-IXW7w-unsplash.jpg";
import "./script.js";

document.querySelector("#app").innerHTML = `
<div class="preloader">
  <div class="preloader-bg"></div>
  <div class="preloader-grid"></div>
  <div class="progress-marker"><p>25</p></div>
</div>

<nav>
  <div class="nav-logo">
    <a href="#">Frme</a>
  </div>
  <div class="nav-links">
    <a href="#">Work</a>
    <a href="#">Studio</a>
    <a href="#">Process</a>
    <a href="#">Contact</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-bg">
    <img src="${hero_bg}" alt="">
  </div>
  <div class="hero-title">
    <h1>Frme</h1>
  </div>
  <div class="hero-subtitle">
    <h3>Shaping the world of digital expression</h3>
  </div>
</section>
`;
