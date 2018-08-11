$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
					
				}
			}
		}
	};
	
var correct = 0;
var wrong = 0;
var monica = "https://www.youtube.com/embed/HWJmVAQJK58"
var q1 = {
	question : 'Whats the popular phrase used when fans want the 2 car drift battle to start?',
	possibleAnswers : [
				 'A. Go!',
				 'B. Send It!',
				 'C. Battle Start!',
				 'D. 3, 2, 1, DRIFT!'],
	flags : [false, true, false, false],
	answer : 'B. Send It!'
};

var q2 = {
	question: 'In the Formula Drift Series, what front wheel drive car was converted to rear wheel drive so that it could compete in the series?',
	possibleAnswers: [
				 'A. Honda Civic',
				 'B. Hyundai Veloster',
				 'C. Ford Focus',
				 'D. Toyota Corolla'],
	flags : [false, false, false, true],
	answer : 'D. Toyota Corolla'
};

var q3 = {
	question : 'In "grassroots drifting" what country origin do most people prefer cars from?',
	possibleAnswers : [	
				 'A. America',
				 'B. Japan',
				 'C. Germany',
				 'D. Austrailia'],
	flags : [false, true, false, false],
	answer : 'B. Japan'
};

var q4 = {
	question : 'What tv show was extremely popular for highlighting tons of cars in wacky fashions?',
	possibleAnswers : [
				 'A. Top Gear',
				 'B. Pimp My Whip',
				 'C. Gearz',
				 'D. Nascar'],
	flags : [true, false, false, false],
	answer : 'A. Top Gear'
};

var q5 = {
	question : 'Who is the popular rally car driver which has his own series called Gymkhana?',
	possibleAnswers : [
				 'A. Odi Bachkis',
				 'B. Ken Block',
				 'C. Taylor Ray',
				 'D. Keiichi Tsuchiya'],
	flags : [false, true, false, false],
	answer : 'B. Ken Block'
};

var questionArray = [q1, q2, q3, q4, q5];

function loadQuestion(questionSelection) {
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

function setup() {
	index = 0;
	$('.question').append('<button class="btn btn-secondary" id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
		 loadQuestion(index);
		 $(".monica").html("<div>");
	});
}		

function getAnswer() {

	$('.answerchoice').on('click', function() {
		index++;
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("RIGHT!!! SUPER JDM TYTE!");
}

function answerWrong() {
	wrong++;
	alert("WRONG!!! NOT JDM TYTE YO!");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " : Correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " : Wrong</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 }else if (correct !== 5) {
 	$(".answerchoice").hide();
	 showScore();
	$(".monica").html("<iframe width=560 height=315 " + " src= " + "https://www.youtube.com/embed/PIMn_9Mpebc" + " frameborder=0 allow=autoplay; encrypted-media >" + "</iframe>");
	setup();
	correct = 0;
	wrong = 0;
	
}else {
	$(".answerchoice").hide();
	showScore();
	$(".monica").html("<iframe width=560 height=315 " + " src= " + "https://www.youtube.com/embed/HQ6p18SBDU8" + " frameborder=0 allow=autoplay; encrypted-media >" + "</iframe>");
	setup();
	correct = 0;
	wrong = 0;
}

});

});
