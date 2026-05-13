import './css/service.css'

// navigation bar 
import { navBar } from './navbar'
navBar()



const popup = document.getElementById("pricingPopup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const overlay = document.querySelector(".pricing-popup__overlay");

openBtn.addEventListener("click", () => {
  popup.classList.add("active");
  document.body.style.overflow = "hidden";
});

const closePopup = () => {
  popup.classList.remove("active");
  document.body.style.overflow = "auto";
};

closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});



const pricingModal = document.getElementById("pricingModal");
const openPricingModal = document.getElementById("openIroningModal");
const closePricingModal = document.getElementById("closePricingModal");

openPricingModal.addEventListener("click", () => {
  pricingModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closePricingModal.addEventListener("click", () => {
  pricingModal.classList.remove("active");
  document.body.style.overflow = "auto";
});

pricingModal.addEventListener("click", (e) => {
  if(e.target === pricingModal){
    pricingModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});


const dryCleaningModal = document.getElementById("dryCleaningModal");
const openDryCleaningModal = document.getElementById("openDryCleaningModal");
const closeDryCleaningModal = document.getElementById("closeDryCleaningModal");

openDryCleaningModal.addEventListener("click", () => {
  dryCleaningModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeDryCleaningModal.addEventListener("click", () => {
  dryCleaningModal.classList.remove("active");
  document.body.style.overflow = "auto";
});

dryCleaningModal.addEventListener("click", (e) => {
  if(e.target === dryCleaningModal){
    dryCleaningModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});


const fabricCarePricingModal = document.getElementById(
  'fabricCarePricingModal'
);

const openFabricCarePricing = document.getElementById(
  'openFabricCarePricing'
);

const closeFabricCarePricing = document.getElementById(
  'closeFabricCarePricing'
);

openFabricCarePricing.addEventListener('click', () => {
  fabricCarePricingModal.classList.add('active');
});

closeFabricCarePricing.addEventListener('click', () => {
  fabricCarePricingModal.classList.remove('active');
});

fabricCarePricingModal.addEventListener('click', (event) => {

  if(event.target === fabricCarePricingModal){
    fabricCarePricingModal.classList.remove('active');
  }

});