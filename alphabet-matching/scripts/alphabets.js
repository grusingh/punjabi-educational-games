const allAlphabets = [
    {
        alphabet: "ੳ",
        images: ['camel']
    },
    {
        alphabet: "ਅ",
        images: ['eye']
    },
    {
        alphabet: "ੲ",
        images: ['engine']
    },
    {
        alphabet: "ਸ",
        images: ['apple']
    },
    {
        alphabet: "ਹ",
        images: ['elephant']
    },
    {
        alphabet: "ਕ",
        images: ['crow']
    },
    {
        alphabet: "ਖ",
        images: ['cucumber']
    },
    {
        alphabet: "ਗ",
        images: ['carrot']
    },
    {
        alphabet: "ਘ",
        images: ['horse']
    },
    {
        alphabet: "ਙ",
        images: []
    },
    {
        alphabet: "ਚ",
        images: ['rat']
    },
    {
        alphabet: "ਛ",
        images: ['umbrella']
    },
    {
        alphabet: "ਜ",
        images: ['airplane']
    },
    {
        alphabet: "ਝ",
        images: ['flag']
    },
    {
        alphabet: "ਞ",
        images: []
    },
    {
        alphabet: "ਟ",
        images: ['tomato']
    },
    {
        alphabet: "ਠ",
        images: ['scorpio']
    },
    {
        alphabet: "ਡ",
        images: ['frog']
    },
    {
        alphabet: "ਢ",
        images: ['shield']
    },
    {
        alphabet: "ਣ",
        images: []
    },
    {
        alphabet: "ਤ",
        images: ['parrot']
    },
    {
        alphabet: "ਥ",
        images: ['carrybag']
    },
    {
        alphabet: "ਦ",
        images: ['tooth']
    }
    ,
    {
        alphabet: "ਧ",
        images: ['earth']
    }
    ,
    {
        alphabet: "ਨ",
        images: ['lemon']
    },
    {
        alphabet: "ਪ",
        images: ['kite']
    },
    {
        alphabet: "ਫ",
        images: ['flower']
    }
    ,
    {
        alphabet: "ਬ",
        images: ['schoolbus']
    },
    {
        alphabet: "ਭ",
        images: ['bear']
    },
    {
        alphabet: "ਮ",
        images: ['fish']
    },
    {
        alphabet: "ਯ",
        images: ['chariot']
    },
    {
        alphabet: "ਰ",
        images: ['roti']
    },
    {
        alphabet: "ਲ",
        images: ['toytop']
    },
    {
        alphabet: "ਵ",
        images: ['velna']
    },
    {
        alphabet: "ੜ",
        images: []
    },
    {
        alphabet: "ਸ਼",
        images: []
    },
    {
        alphabet: "ਖ਼",
        images: ['rabbit']
    },
    {
        alphabet: "ਗ਼",
        images: ['balloon']
    },
    {
        alphabet: "ਜ਼",
        images: []
    },
    {
        alphabet: "ਫ਼",
        images: []
    },
];

const quizAlphabets = allAlphabets
    .map(a => a.alphabet);

export function getAlphabetImageSrc(alphabet) {
    const result = allAlphabets.find(a => a.alphabet === alphabet);
    return result.images.length ? `images/${result.images[0]}.webp` : '';
}

export default quizAlphabets;