// https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/javascript
// Create a function which answers the question "Are you playing banjo?".

function arwYouPlayingBanjo(name) {
    return name[0].toLowerCase() == "r" ? `${name} plays banjo` : `${name} does not play banjo`;
}