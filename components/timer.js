class Timer {
    minutesSpanEl = document.querySelector('#timer-minutes');
    secondsSpanEl = document.querySelector('#timer-seconds');
    buttonPressAudio = new Audio('./assets/button-press.wav');
    timerFinishAudio = new Audio('./assets/kichen-timer.mp3');

    constructor(minutes, seconds) {
        this.initialTimerMinutes = minutes;
        this.initialTimerSeconds = seconds;
        this.reset();
        this.countdownId = null;
        this.isRunning = false;
    }

    play() {
        this.isRunning = true;
        this.buttonPressAudio.play();
        this.countdown();
    }

    pause() {
        this.isRunning = false;
    }

    reset() {
        this.currentTimerMinutes = this.initialTimerMinutes;
        this.currentTimerSeconds = this.initialTimerSeconds;
        this.isRunning = false;
        this.updateDisplay();
    }

    addTime(timeToAdd) {
        if (this.initialTimerMinutes + timeToAdd <= 0) {
            return;
        }
        this.initialTimerMinutes += timeToAdd;
        this.currentTimerMinutes += timeToAdd;
        this.updateDisplay();
    }

    updateDisplay(minutes, seconds) {
        minutes = minutes ?? this.currentTimerMinutes;
        seconds = seconds ?? this.currentTimerSeconds;
        this.minutesSpanEl.textContent = String(minutes).padStart(2, '0');
        this.secondsSpanEl.textContent = String(seconds).padStart(2, '0');
    }

    countdown() {
        clearTimeout(this.countdownId);
        if (!this.isRunning) {
            return;
        }
        this.currentTimerSeconds--;
        if (this.currentTimerSeconds < 0) {
            this.currentTimerSeconds = 59;
            this.currentTimerMinutes--;
        }
        if (this.currentTimerMinutes < 0) {
            this.timerFinishAudio.play();
            this.reset();
            return;
        }
        this.updateDisplay();
        this.countdownId = setTimeout(() => this.countdown(), 1000);
    }
}

export default Timer;
