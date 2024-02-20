function playAudio(audio) {
    // If the audio is playing, stop it, and reset the playback position
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        // Play the audio if it is not already playing
        audio.play();
    }
}

function playCorrectChoiceAudio() {
    const audio = document.getElementById('dhol-beat-audio');
    playAudio(audio);
}

function playWrongChoiceAudio() {
    const audio = document.getElementById('soft-warning-buzzer');
    playAudio(audio);
}

export function vibrateCorrect() {
    // Vibrate with a pattern: several short bursts to mimic the feeling of confetti
    if ("vibrate" in window.navigator) {
        navigator.vibrate([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
    }
    playCorrectChoiceAudio();
}

export function vibrateWrong() {
    // Vibrate with a single, longer burst to indicate a wrong choice
    if ("vibrate" in window.navigator) {
        navigator.vibrate(500);
    }
    playWrongChoiceAudio();
}