function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomEl = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomEl]] = [array[randomEl], array[i]];
    } 

    return array;
}

module.exports = shuffleArray