const scriptURL = "https://script.google.com/macros/s/AKfycbysfCBS6fVKMce1xtyczWOrf3kFCwS3EHwO40-sJEAA2qUMY_ZiFjbir4_4CuokYh1u/exec";
const form = document.forms["air isi ulang"];
const kirim = document.querySelector(".kirim");
const loading = document.querySelector(".loading");
const alertX = document.querySelector(".alertX");
const alertBtn = document.querySelector(".alertBtn");
const humburger = document.querySelector("#humburger");
const navbar = document.querySelector(".navbar");
const iconSearch = document.querySelector(".iconSearch");
const search = document.querySelector(".search");
const profil = document.querySelector(".profil");
const dP = document.querySelector(".detailProfil");
const iconX = document.querySelector(".iconX");
const iP = document.querySelector(".identitasProfil");
const dProdukM = document.querySelector(".detailProdukM");
const dProdukB = document.querySelector(".detailProdukB");
const dProdukR = document.querySelector(".detailProdukR");
const dM = document.querySelector(".detailMineral");
const dB = document.querySelector(".detailBio");
const dR = document.querySelector(".detailRo");
const dMBoxM = document.querySelector(".M");
const dMBoxB = document.querySelector(".B");
const dMBoxR = document.querySelector(".R");
const iconXM = document.querySelector(".iconXM");
const iconXB = document.querySelector(".iconXB");
const iconXR = document.querySelector(".iconXR");

// testing search start
const tombolSearch = document.querySelector(".tombolSearch");
const iFsearch = document.querySelector(".iFsearch");

search.addEventListener("click", (e) => {
  tombolSearch.classList.add("active");
});

iFsearch.addEventListener("click", (e) => {
  tombolSearch.classList.toggle("active");
  search.focus();
  e.preventDefault();
});
// testing search end

// iconSearch.addEventListener("click", (e) => {
//   search.classList.toggle("active");
//   search.focus();
//   e.preventDefault();
// });

humburger.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
  e.preventDefault();
});

profil.addEventListener("click", (e) => {
  dP.style.display = "flex";
  e.preventDefault();
});

iconX.addEventListener("click", (e) => {
  dP.style.display = "none";
  e.preventDefault();
});

dP.addEventListener("click", (e) => {
  if (!iP.contains(e.target)) {
    dP.style.display = "none";
  }
});

dProdukM.addEventListener("click", (e) => {
  dM.style.display = "flex";
  e.preventDefault();
});

dProdukB.addEventListener("click", (e) => {
  dB.style.display = "flex";
  e.preventDefault();
});

dProdukR.addEventListener("click", (e) => {
  dR.style.display = "flex";
  e.preventDefault();
});

dM.addEventListener("click", (e) => {
  if (!dMBoxM.contains(e.target)) {
    dM.style.display = "none";
  }
});

dB.addEventListener("click", (e) => {
  if (!dMBoxB.contains(e.target)) {
    dB.style.display = "none";
  }
});

dR.addEventListener("click", (e) => {
  if (!dMBoxR.contains(e.target)) {
    dR.style.display = "none";
  }
});

iconXM.addEventListener("click", (e) => {
  dM.style.display = "none";
  e.preventDefault();
});

iconXB.addEventListener("click", (e) => {
  dB.style.display = "none";
  e.preventDefault();
});

iconXR.addEventListener("click", (e) => {
  dR.style.display = "none";
  e.preventDefault();
});

document.addEventListener("click", function (event) {
  if (!humburger.contains(event.target) && !navbar.contains(event.target)) {
    navbar.classList.remove("active");
  }

  // if (!iconSearch.contains(event.target) && !search.contains(event.target)) {
  //   search.classList.remove("active");
  // }

  // testing search start
  if (!tombolSearch.contains(event.target)) {
    tombolSearch.classList.remove("active");
  }
  // testing search end
});

form.addEventListener("submit", (e) => {
  kirim.style.display = "none";
  loading.style.display = "inline";
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      kirim.style.display = "inline";
      loading.style.display = "none";
      alertX.style.display = "flex";
      setTimeout(() => {
        alertX.style.display = "none";
      }, 3500);
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

alertBtn.addEventListener("click", (e) => {
  alertX.style.display = "none";
  e.preventDefault();
});
