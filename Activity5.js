var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

function displayResults()
{
	var average = 0;
	var highestscore= 0;
	var x= 0;

	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);

		if(scores[i] > highestscore)
		{
			x= i;
			highestscore = scores[i];

		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> Highest Score = "+names[x]+" with a score of "+ scores[x];
};



function addScore()
{
	if(document.getElementById("name").value != '' && document.getElementById("score").value >= 0 && document.getElementById("score").value <= 100){
		names.push(document.getElementById("name").value);
		scores.push(parseInt(document.getElementById("score").value));
	}
	else {
		alert("You need to give name and valid score");
	}
};

function displayScores()
{
	var tempScore = '<table><tr><td><b>Name</b></td><td><b>Score</b></td></tr>';
	for(var i=0;i<scores.length;i++)
	{
		tempScore += "<tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>";
	}

	document.getElementById("scores_table").innerHTML="<h2> Scores </h2>"+tempScore + "</table>"
};

