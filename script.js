const startButton = document.getElementById("startButton");
const bgMusic = document.getElementById("bgMusic");
const coverPage = document.getElementById("cover");
const mainPage = document.getElementById("main");
const loveText = document.getElementById("loveText");
const heartsContainer = document.getElementById("hearts");

const longText = `
good morning, cintanya dede  
pagi ini, hal pertama yang dede pikirin bukan matahari, bukan sarapan, bukan dunia luar, tapi abang, abang cuda bangun? apa masii guling guling di balik selimut sambil nahan dingin? dede harap abang bangunnya dengan hati yang hangat, kepala yang ringan, dan tubuh yang jauh lebih sehat dari semalam, semoga tidur abang nyenyak ya sayang, semoga semua rasa capek, pusing, dan pilek yang semalem gangguin, udah pelan pelan pergi dan kalau pun belum sepenuhnya, gapapa, pelan pelan aja ya, dede temenin, abang ga sendirian, dede selalu ada di sini, setiap hari, setiap pagi, selalu doain hal yang sama yaitu “semoga abang sehat, semoga abang bahagia selalu, dan dikelilingi dengan hal hal yang baik”, dede tau, pagi hari kadang bisa berat, tubuh masih lelah, pikiran belum siap, tapi hari ini, coba tarik napas pelan pelan yaa sayang, karena abang punya satu hal yang pasti yaitu dede yang selalu sayang sama abang, tanpa jeda, tanpa ragu, dede bangga sama abang, setiap hari abang bangun, bertahan, nyoba semangat walau rasanya ga mudah, buat dede, itu udah hebat banget, abang kuat, abang tulus, abang hebat, abang penyayang dan semua itu bikin dede makin jatuh cinta, lagi dan lagi, pagi ini, semoga semesta baik sama abang, semoga semuanya berjalan lancar dan kalo abang ngerasa capek di tengah hari nanti, abang inget kalo selalu ada dede yang nunggu kabar, yang pengen peluk abang, dan yang selalu sayang sama abang, selamat pagi, satu satunya yang dede cinta.  
sarapan yang cukup yaa, jangan lupa senyum, hari ini bakal indah karena abang yang jalanin  
i love u so much, sayangku🤍
`;

startButton.addEventListener("click", () => {
  coverPage.classList.remove("active");
  mainPage.classList.add("active");
  bgMusic.play();
  typeText(); // mulai ketikan
});

// efek ketikan
let i = 0;
function typeText() {
  if (i < longText.length) {
    loveText.innerHTML += longText.charAt(i);
    i++;
    setTimeout(typeText, 20);
  }
}

// animasi love (versi awal)
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💗";
  const size = 16 + Math.random() * 24;
  heart.style.fontSize = size + "px";
  heart.style.left = Math.random() * 100 + "vw";
  const duration = 4 + Math.random() * 3;
  heart.style.animationDuration = duration + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 200); // love tampil pelan dan kalem