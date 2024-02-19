export function vibrateCorrect() {
    // Vibrate with a pattern: several short bursts to mimic the feeling of confetti
    if (window.navigator.vibrate) {
        navigator.vibrate([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
    }
}

export function vibrateWrong() {
    // Vibrate with a single, longer burst to indicate a wrong choice
    if (window.navigator.vibrate) {
        navigator.vibrate(500);
    }
}