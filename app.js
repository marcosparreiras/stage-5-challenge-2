import MusicControls from './components/musicControls.js';
import Timer from './components/timer.js';
import TimerControls from './components/timerControls.js';

function app() {
    const musicControls = new MusicControls();
    const timer = new Timer(25, 0);
    const timerControls = new TimerControls(timer);
    timerControls.startListening();
    musicControls.startListening();
}

app();
