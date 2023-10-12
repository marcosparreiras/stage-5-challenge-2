class TimerControls {
    timerControlsSection = document.querySelector('#timer-controls');

    constructor(timer) {
        this.timer = timer;
        this.actions = {
            play: this.playHandler.bind(this),
            pause: this.pauseHandler.bind(this),
            reset: this.resetHandler.bind(this),
            minus: this.minusHandler.bind(this),
            plus: this.plusHandler.bind(this),
        };
    }

    startListening() {
        this.timerControlsSection.addEventListener(
            'click',
            this.controlsClickHandler.bind(this)
        );
    }

    controlsClickHandler(event) {
        const button = event.target;
        if (!button.matches('button')) {
            return;
        }
        this.actions[button.dataset.action]();
    }

    playHandler() {
        document.documentElement.classList.add('running');
        this.timer.play();
    }

    pauseHandler() {
        document.documentElement.classList.remove('running');
        this.timer.pause();
    }

    resetHandler() {
        document.documentElement.classList.remove('running');
        this.timer.reset();
    }

    minusHandler() {
        this.timer.addTime(-5);
    }

    plusHandler() {
        this.timer.addTime(5);
    }
}

export default TimerControls;
