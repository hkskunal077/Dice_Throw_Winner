# Dice_Throw_Winner

On the main page, when it refreshes it randomly assigns random dice number to two players, player A and player B.

The player who gets the higher number is the winner, or it may be a draw.

Random numbers are generated within a range say (1-a) by using
var randomNumber = Math.floor(Math.random()*6) + 1;
