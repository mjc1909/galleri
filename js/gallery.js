let gallery = document.querySelector('.gallery-wrapper')

let images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',

    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',

    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',

    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
];

images.forEach(image => {
    gallery.innerHTML += `<img src="${image}" class="img">`
})