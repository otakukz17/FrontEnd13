const randomDogButton = document.getElementById('random-dog-button');
const dogContainer = document.getElementById('dog-container');

randomDogButton.addEventListener('click', fetchRandomDog);

function fetchRandomDog() {
    fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(data => {
        const url = data.url;

        if(url.endsWith('.mp4')) {
            dogContainer.innerHTML = `<video style="width: 500px;" controls><source src="${url}" type="video/mp4"></video>`;
        } else {
            dogContainer.innerHTML = `<img style="width: 500px;" src="${url}" alt="Random Dog">`;
        }
    })
    .catch(error => {
        console.error('Ошибка при получении случайно собачки', error);
    });
}