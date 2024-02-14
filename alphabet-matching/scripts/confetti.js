const elSelector = 'confetti';

export function showCelebration() {
    // Show the confetti container
    document.getElementById(elSelector).style.display = 'block';

    (async () => {
        await tsParticles.load({
            id: elSelector,
            options: {
                preset: "confetti",
            },
        });
    })();

    // Set a timeout to hide the confetti container
    setTimeout(function () {
        document.getElementById(elSelector).style.display = 'none';
    }, 2000);
}

export function init() {
    document.getElementById(elSelector).style.display = 'none';
}


