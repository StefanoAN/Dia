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

let currentLyricIndex = 0;
const lyricElement = document.getElementById('lyrics');
const audio = document.getElementById('background-audio');
const playButton = document.getElementById('play-button');

function displayNextLyric() {
    if (currentLyricIndex < lyrics.length) {
        lyricElement.innerText = lyrics[currentLyricIndex].text;
        const duration = lyrics[currentLyricIndex].duration * 1000; // Convertir a milisegundos
        currentLyricIndex++;
        const card = document.getElementById('card');
        card.style.transform = 'scale(1.1)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 500);
        card.style.backgroundColor = getRandomColor();
        setTimeout(displayNextLyric, duration);
    } else {
        document.body.classList.add('finished');
    }
}

function getRandomColor() {
    const colors = ['rgba(255, 173, 173, 0.7)', 'rgba(255, 214, 165, 0.7)', 'rgba(253, 255, 182, 0.7)', 'rgba(202, 255, 191, 0.7)', 'rgba(155, 246, 255, 0.7)', 'rgba(160, 196, 255, 0.7)', 'rgba(189, 178, 255, 0.7)', 'rgba(255, 198, 255, 0.7)'];
    return colors[Math.floor(Math.random() * colors.length)];
}

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    setTimeout(displayNextLyric, 7000); // Espera de 7 segundos antes de mostrar las letras
});
