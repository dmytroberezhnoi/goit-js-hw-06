const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

// 1 спосіб
const makeImagesCard = ({ url, alt }) =>
  `<li class="image-list-item">
  <img src="${url}" alt="${alt} class="img-item">
  </li>`;

const markup = images.map((data) => makeImagesCard(data)).join("");
galleryList.insertAdjacentHTML("afterbegin", markup);

// 2 спосіб
// images.forEach((image) => {
//   galleryList.insertAdjacentHTML(
//     "beforeend",
//     `<li class="image-list-item"><img src="${image.url}" alt="${image.alt} class="img-item"></li>`
//   );
// });
