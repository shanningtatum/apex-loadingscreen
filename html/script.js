import app from "./firebase.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const polaroidDiv = document.querySelectorAll(".polaroid-square");
const polaroidFrame = document.querySelectorAll(".polaroid-frame");
const tempArray = [];
const photos = [];

// generate numbers first then just grab them from the db?
//

const getPhotos = () => {
  const database = getDatabase(app);
  const dbRef = ref(database, "Approved");

  get(dbRef).then((response) => {
    const data = response.val();

    for (let key in data) {
      photos.push(data[key]);
    }

    generateNumber();
    generateImages();
  });
};

const generateNumber = () => {
  for (let i = 0; i < 8; i++) {
    const genNum = randomizer();
    if (tempArray.includes(genNum)) {
      i--;
    } else {
      tempArray.push(genNum);
    }
  }
};

const generateImages = () => {
  for (let i = 0; i < 8; i++) {
    const polaroidImg = document.createElement("img");
    const polaroidCaption = document.createElement("p");
    polaroidCaption.textContent = `"${photos[tempArray[i]].photoCaption}"`;

    polaroidImg.classList.add("polaroid-img");
    polaroidImg.setAttribute("src", photos[tempArray[i]].photoLink);
    polaroidImg.setAttribute("draggable", false);
    polaroidDiv[i].append(polaroidImg);
    polaroidFrame[i].append(polaroidCaption);
  }
};

const randomizer = () => {
  const randomNum = Math.floor(Math.random() * photos.length);
  return randomNum;
};

getPhotos();
