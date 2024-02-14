import alphabets, {getAlphabetImageSrc} from './alphabets.js';
import {showCelebration} from './confetti.js';

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
        pastAlphabets: [],
        alphabet: null,
        alphabetImageSrc: '',
        flipped: [],
        choices: [],
        init() {
            this.nextSelection();
        },
        nextSelection() {
            if (this.alphabet) {
                this.pastAlphabets.push(this.alphabet);
            }

            const choices = pickFourRandomAlphabets(this.pastAlphabets);
            const alphabet = selectRandomAlphabet(choices);

            this.flipped = [];
            this.alphabet = alphabet;
            this.alphabetImageSrc = getAlphabetImageSrc(alphabet);
            this.choices = choices;
        },
        onChoice(alphabet) {
            this.flipped.push(alphabet);
            const correct = alphabet === this.alphabet;
            if (correct || this.flipped.length >= 4) {
                showCelebration();
                setTimeout(() => {
                    this.nextSelection();
                }, 2000);
            }
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
