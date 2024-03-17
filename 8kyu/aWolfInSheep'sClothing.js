// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf')
    return position === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
}