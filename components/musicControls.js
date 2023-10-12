class MusicControls {
    audioSection = document.querySelector('#audio-section');

    constructor() {
        this.audios = {
            tree: new Audio('./assets/Floresta.wav'),
            rain: new Audio('./assets/Chuva.wav'),
            store: new Audio('./assets/Cafeteria.wav'),
            fire: new Audio('./assets/Lareira.wav'),
        };
        this.isToPlay = null;
        this.configAudios();
    }

    configAudios() {
        for (let audio in this.audios) {
            this.audios[audio].loop = true;
        }
    }

    startListening() {
        this.audioSection.addEventListener(
            'click',
            this.handleAudioSectionClick.bind(this)
        );
    }

    handleAudioSectionClick(event) {
        const button = event.target;
        if (!button.matches('button')) {
            return;
        }
        this.isToPlay = !button.classList.contains('active');
        this.pauseMusic();
        if (this.isToPlay) {
            button.classList.add('active');
            this.playMusic(button.dataset.audio);
        }
    }

    playMusic(audio) {
        this.audios[audio].play();
    }

    pauseMusic() {
        Array.from(this.audioSection.children).forEach((element) => {
            element.classList.remove('active');
            this.audios[element.dataset.audio].pause();
        });
    }
}

export default MusicControls;
