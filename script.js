const lyrics = [
    { text: "Es un buen tipo mi viejo,\nque anda solo y esperando,\ntiene la tristeza larga,\nde tanto venir andando.", duration: 26 },
    { text: "Yo lo miro desde lejos,\npero somos tan distintos,\nes que creció con el siglo,\ncon tranvía y vino tinto.", duration: 29 },
    { text: "Viejo, mi querido viejo,\nahora ya camina lento,\ncomo perdonando el viento.", duration: 19 },
    { text: "Yo soy tu sangre, mi viejo,\nsoy tu silencio y tu tiempo.", duration: 13 },
    { text: "Él tiene los ojos buenos,\ny una figura pesada,\nla edad se le vino encima,\nsin carnaval ni comparsa.", duration: 25 },
    { text: "Yo tengo los años nuevos,\ny el hombre, los años viejos,\nel dolor lo lleva adentro,\ny tiene historia sin tiempo.", duration: 28 },
    { text: "Viejo, mi querido viejo,\nahora ya camina lento,\ncomo perdonando el viento.", duration: 19 },
    { text: "Yo soy tu sangre, mi viejo,\nsoy tu silencio y tu tiempo.\n\nViejo, mi querido viejo,\nte digo: ¡Feliz día Papá Oscar!", duration: 12 }
];

const images = [
    'Foto.jpeg',
    'Foto1.jpeg',
    'Foto2.jpeg',
    'Foto3.jpeg',
    'Foto4.jpeg',
    'Foto5.jpeg',
    'Foto6.jpeg',
    'Foto7.jpeg',
    'Foto8.jpeg'
];

const backgroundImages = ['Foto.jpeg', 'Foto1.jpeg', 'Foto5.jpeg', 'Foto6.jpeg'];

let currentLyricIndex = 0;
const lyricElement = document.getElementById('lyrics');
const audio = document.getElementById('background-audio');
const playButton = document.getElementById('play-button');
const bodyElement = document.body;
const backgroundContainer = document.getElementById('background-container');

function displayNextLyric() {
    if (currentLyricIndex < lyrics.length) {
        const imageUrl = images[currentLyricIndex + 1];

        if (backgroundImages.includes(imageUrl)) {
            bodyElement.style.backgroundImage = `url(${imageUrl})`;
            bodyElement.style.backgroundSize = 'cover';
            backgroundContainer.innerHTML = '';
        } else {
            bodyElement.style.backgroundImage = '';
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.className = 'background-image';
            backgroundContainer.innerHTML = '';
            backgroundContainer.appendChild(imgElement);
        }

        lyricElement.innerText = lyrics[currentLyricIndex].text;

        const duration = lyrics[currentLyricIndex].duration * 1000; // Convertir a milisegundos

        currentLyricIndex++;
        setTimeout(displayNextLyric, duration);
    } else {
        document.body.classList.add('finished');
    }
}

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    setTimeout(displayNextLyric, 7000); // Espera de 7 segundos antes de mostrar las letras
});

