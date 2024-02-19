import alphabets, {getAlphabetImageSrc} from './alphabets.js';
import {showCelebration} from './confetti.js';
import {vibrateCorrect, vibrateWrong} from './vibrate.js';

function pickFourRandomAlphabets(pastAlphabets) {
    const remaining = alphabets.filter(a => !pastAlphabets.includes(a));
    const choices = [];

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * remaining.length);
        const randomItem = remaining[randomIndex];
        choices.push(randomItem);
        remaining.splice(randomIndex, 1);
    }

    return choices;
}

function selectRandomAlphabet(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export function gameController() {
    return {
        score: 0,
        currentAlphabetIndex: 0,
        guessCount: 0,
        alphabet: null,
        alphabetImageSrc: '',
        flipped: [],
        choices: [],
        init() {
            this.nextSelection();
        },
        nextSelection() {
            const alphabet = alphabets[this.currentAlphabetIndex];
            this.currentAlphabetIndex = (this.currentAlphabetIndex + 1) % alphabets.length;

            const remaining = alphabets.filter(a => a !== alphabet);
            const choices = [alphabet];

            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * remaining.length);
                const randomItem = remaining[randomIndex];
                choices.push(randomItem);
                remaining.splice(randomIndex, 1);
            }

            // Shuffle the choices array
            for (let i = choices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [choices[i], choices[j]] = [choices[j], choices[i]];
            }

            this.guessCount = 0;
            this.flipped = [];
            this.alphabet = alphabet;
            this.alphabetImageSrc = getAlphabetImageSrc(alphabet);
            this.choices = choices;
        },
        onChoice(alphabet) {
            this.flipped.push(alphabet);
            const correct = alphabet === this.alphabet;
            if (correct || this.flipped.length >= 4) {
                // Increase the score based on the guess count
                if (this.guessCount === 0) {
                    this.score += 30;
                } else if (this.guessCount === 1) {
                    this.score += 20;
                } else if (this.guessCount === 2) {
                    this.score += 10;
                }
                showCelebration();
                vibrateCorrect();
                setTimeout(() => {
                    this.nextSelection();
                }, 2000);
            } else {
                vibrateWrong();
            }
            this.guessCount++;
        },
        get scoreDigits() {
            let scoreStr = this.score.toString();
            while (scoreStr.length < 4) {
                scoreStr = '0' + scoreStr;
            }
            return scoreStr.split('');
        },
        hasNotFlipped(alphabet) {
            return !this.flipped.includes(alphabet);
        },
        hasFlippedCorrectly(alphabet) {
            return this.flipped.includes(alphabet) && alphabet === this.alphabet;
        },
        hasFlippedIncorrectly(alphabet) {
            return this.flipped.includes(alphabet) && alphabet !== this.alphabet;
        }
    }
}