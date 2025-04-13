// Extra Ejercicio POO 3 - Il sogno di volare
const civilPlanes = [
  "images/avion-civil-1.jpg",
  "images/avion-civil-2.jpg",
  "images/avion-civil-3.jpg",
  "images/avion-civil-4.jpg",
  "images/avion-civil-5.jpg",
];

const militaryPlanes = [
  "images/avion-militar-1.jpg",
  "images/avion-militar-2.jpg",
  "images/avion-militar-3.jpg",
  "images/avion-militar-4.jpg",
  "images/avion-militar-5.jpg",
];

const civilHelicopters = [
  "images/helicoptero-civil-1.jpg",
  "images/helicoptero-civil-2.jpg",
  "images/helicoptero-civil-3.jpg",
  "images/helicoptero-civil-4.jpg",
  "images/helicoptero-civil-5.jpg",
];

const militaryHelicopters = [
  "images/helicoptero-militar-1.jpg",
  "images/helicoptero-militar-2.jpg",
  "images/helicoptero-militar-3.jpg",
  "images/helicoptero-militar-4.jpg",
  "images/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilImages;
    this.militaryImages = militaryImages;
  }

  getRandomCivil() {
    const index = Math.floor(Math.random() * this.civilImages.length);
    return this.civilImages[index];
  }

  getRandomMilitary() {
    const index = Math.floor(Math.random() * this.militaryImages.length);
    return this.militaryImages[index];
  }

  getAll() {
    return [...this.civilImages, ...this.militaryImages];
  }
}

class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery() {
    const section = document.createElement("section");
    document.body.appendChild(section);
    this.gallery = section;
  }

  clearGallery() {
    this.gallery.innerHTML = "";
  }

  createImageTag(imageUrl) {
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    picture.appendChild(img);
    return picture;
  }

  paintSingleImage(imageUrl) {
    this.clearGallery();
    const tag = this.createImageTag(imageUrl);
    this.gallery.appendChild(tag);
  }

  paintMultipleImages(imageArray) {
    this.clearGallery();
    imageArray.forEach((url) => {
      const tag = this.createImageTag(url);
      this.gallery.appendChild(tag);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const helicopters = new Gallery(civilHelicopters, militaryHelicopters);
  const planes = new Gallery(civilPlanes, militaryPlanes);
  const painter = new Painter();

  window.helicopters = helicopters;
  window.planes = planes;
  window.painter = painter;
});
