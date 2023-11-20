// https://www.codewars.com/kata/59126992f9f87fd31600009b/solutions/javascript
// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

functio function whoseMove(lastPlayer, win) {
    return lastPlayer === "white" && win === true ? "white" : lastPlayer === "black" && win === "false" ? "white" : "black"
}