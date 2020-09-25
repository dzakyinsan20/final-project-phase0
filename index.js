let indexImage = 0;
let score = 0;
const image = [
  {
    imageFull: "./asset/sasuke.jpg",
    imageCrop: "./asset/sasuke-crop.jpg",
    answear: "sasuke",
    choice1: "sasuke",
    choice2: "itachi",
    choice3: "andika",
    choice4: "shisui",
  },
  {
    imageFull: "./asset/ino.jpg",
    imageCrop: "./asset/ino-crop.jpg",
    answear: "ino",
    choice1: "sunade",
    choice2: "deidara",
    choice3: "ino",
    choice4: "sakura",
  },
  {
    imageFull: "./asset/sarutobi.jpg",
    imageCrop: "./asset/sarutobi-crop.jpg",
    answear: "Hiruzen Sarutobi",
    choice1: "Izuma Sarutobi",
    choice2: "Hiruzen Sarutobi",
    choice3: "Konohamaru",
    choice4: "Mirai Sarutobi",
  },
  {
    imageFull: "./asset/jiraiya.png",
    imageCrop: "./asset/jiraiya-crop.png",
    answear: "Jiraiya",
    choice1: "Kiba",
    choice2: "Izuma ",
    choice3: "Sarutobi",
    choice4: "Jiraiya",
  },
  {
    imageFull: "./asset/patrick.jpg",
    imageCrop: "./asset/patrick-crop.jpg",
    answear: "patrick akatsuki",
    choice1: "konan akatsuki",
    choice2: "konan akatsuki",
    choice3: "kisame akatsuki",
    choice4: "patrick akatsuki",
  },
];

function gererateImage() {
  document.getElementById("stage").innerText = indexImage + 1;
  const imageElement = document.getElementById("srcImg");
  for (let k = 0; k < 4; k++) {
    document.getElementsByName(`answearBtn`)[k].innerText = image[indexImage][`choice${k + 1}`];
    document.getElementsByName(`answearBtn`)[k].value = image[indexImage][`choice${k + 1}`];
  }
  imageElement.src = image[indexImage].imageCrop;
  return image[indexImage].answear;
}

let showImage = gererateImage();

for (let i = 0; i < 4; i++) {
  const cekValueButton = document.getElementsByName(`answearBtn`)[i];
  cekValueButton.addEventListener("click", function () {
    if (image[indexImage].answear === cekValueButton.value) {
      alert("Yosh!! BETULLL");
      score++;
      document.getElementById("score").innerText = score;
      const imageElement = document.getElementById("srcImg");
      imageElement.src = image[indexImage].imageFull;
      for (let j = 1; j <= 4; j++) {
        const disabledBtn = document.getElementById(`buttonId${j}`);
        disabledBtn.disabled = true;
      }
    } else {
      alert("Nani!! salahh...");
      for (let j = 1; j <= 4; j++) {
        const disabledBtn = document.getElementById(`buttonId${j}`);
        disabledBtn.disabled = true;
      }
    }
  });
}

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", function () {
  indexImage++;
  for (let j = 1; j <= 4; j++) {
    const disabledBtn = document.getElementById(`buttonId${j}`);
    disabledBtn.disabled = false;
  }
  gererateImage();
});
