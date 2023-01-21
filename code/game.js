//random num
let randomNum = Math.round(Math.random() * 100);


//enter btn
let title = document.getElementById('title');
let enterNum = document.getElementById('enterNumber');
let inputNum = document.getElementById('numberInput');
let gettingFartherAway = document.getElementById('gettingFartherAway');
let hintCold = document.getElementById('hintCold');
let gettingCloser = document.getElementById('gettingCloser');
let hintHot = document.getElementById('hintHot');
let pointCounter = document.getElementById('pointCounter');
let isWin = false;
let points = 0;

enterNum.addEventListener('click', function () {
	let num = Number(inputNum.value);
	points = Number(pointCounter.innerHTML);

    if (randomNum !== num) {
        pointCounter.innerHTML = points - 1;
		pointCounter.style.color = 'red';

		setTimeout(() => {
			pointCounter.style.color = 'rgb(176, 255, 48)';
		}, 1000)
	} else {
        isWin = true;
        title.innerHTML = 'Congratulations you Win 🎉🎉🎉';
		inputNum.style.border = '1px solid rgb(176, 255, 48)';
	}
        
	if (points === 1) {
		title.innerHTML = 'You lose 😭😭😭, but don\' worry';
		inputNum.style.border = '1px solid red';
	}

	if (num > randomNum) {
        gettingCloser.innerHTML = '';
		hintHot.innerHTML = '';

        if (num - randomNum >= 30) {
			gettingFartherAway.innerHTML = 'Freeze ❄️❄️❄️';
            hintCold.innerHTML = 'On your place I will change the direction';
		} else if (num - randomNum >= 15) {
			gettingFartherAway.innerHTML = 'Cold🥶';
			hintCold.innerHTML = 'You are getting far';
		} else {
            gettingFartherAway.innerHTML = 'Cool🤧';
			hintCold.innerHTML = 'Start to distancing';
		}
	} else {
		gettingFartherAway.innerHTML = '';
		hintCold.innerHTML = '';

        if (randomNum - num <= 15) {
			gettingCloser.innerHTML = 'Heat🔥🔥🔥';
			hintHot.innerHTML = 'The circle getting close';
		} else if ((randomNum - num < 15) && (randomNum - num <= 30)) {
			gettingCloser.innerHTML = 'Hot🥵';
			hintHot.innerHTML = 'Getting close';
		} else {
			gettingCloser.innerHTML = 'Warm';
			hintHot.innerHTML = 'You are in write direction';
		}
	}

	if (isWin === true) {
		gettingCloser.innerHTML = '';
		hintHot.innerHTML = '';

		gettingFartherAway.innerHTML = '';
        hintCold.innerHTML = '';
	}
})

//Play again button

let playAgain = document.getElementById('playAgain');

playAgain.addEventListener('click', function () {
	inputNum.value = '';
	pointCounter.innerHTML = 20;
	isWin = false;
	title.innerHTML = 'Guess a number';
	inputNum.style.border = '1px solid rgb(226, 226, 226)';

	gettingCloser.innerHTML = '';
	hintHot.innerHTML = '';

	gettingFartherAway.innerHTML = '';
    hintCold.innerHTML = '';
})