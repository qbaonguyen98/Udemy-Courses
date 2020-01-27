/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*	
CODING CHALLENGES: change the game to these following rules

	1. A player looses his ENTIRE score when he rolls two 6 in a round. Then, it's the next player's turn
	2. Add input field where players can set the winning score
	3. Add another dice to the game. The player loses his ROUND score when one of them is 1
	
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		// 1. Random number
		var dice = Math.floor(Math.random()*6) + 1;

		// 2. Display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		// 3. Update the round score If the rolled number was NOT 1
		if (dice !== 1) {
			// Add to round score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next player turn
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add current score to global score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// Check if a player won the game
		if (scores[activePlayer] >= 50) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none'; 

			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			gamePlaying = false;

		} else {
			// Next player turn
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	gamePlaying = true;
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;

	// Hide the DOM dice at the beginning
	document.querySelector('.dice').style.display = 'none';

	// Reset the DOM scores
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
	activePlayer = (activePlayer)? 0 : 1;

	// Reset current score
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// Toggle active panel 
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// Hide the DOM dice
	document.querySelector('.dice').style.display = 'none';
}