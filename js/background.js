<<<<<<< HEAD
const images = ["01.jpg","02.jpg","03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src= `img/${chosenImage}`;

=======
const images = ["01.jpg","02.jpg","03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src= `img/${chosenImage}`;

>>>>>>> bd23901fd39a1042b9feca637747a0b064a4530b
document.body.appendChild(bgImage);