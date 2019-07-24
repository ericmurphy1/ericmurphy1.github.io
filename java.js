const pics = [
    'Border copy.png', 'cat.png', 'wall.jpg', 'cat1.jpg', 'paint.jpg', 'sushi.jpg', 'water.jpg', 'vintage.jpg', 'piano.jpg', 'elephant.jpg', 'greece.jpg', 'guitar.jpg'
]

const picture = []

for (const pic of pics) {
    picture.push(`
 <img data-full="images/${pic}" src="images/${pic}">`)
}

const $gallery = document.getElementById('eric');
const $overlay = document.getElementById('overlay');
const $modal = document.getElementById('modal');

$gallery.innerHTML = picture.join(' ');

$gallery.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target && e.target.nodeName == "IMG") {
        let image = e.target.getAttribute("data-full");
        $modal.innerHTML = `<image src="${image}">`;
        $overlay.style.display = "block";
    }
});

overlay.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains('overlay')) {
        $overlay.style.display = "none";
    }
});
