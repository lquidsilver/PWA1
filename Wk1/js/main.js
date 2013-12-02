/*Name: Arif Wright
  Date: 12/2/13
  Assignment: The Duel Part 1
*/

// Self-executing function
(function(){

	console.log("FIGHT!!!");
	//player's name
	var playerOneName = "Kobal";
	var playerTwoName = "Kratos";
	//player's health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	//player's damage
	var playerOneDamage = 20;
	var playerTwoDamage = 20;
	
	var round = 0;
	
	function fight(){
		alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
		for(var i=0; i < 10; i++){
			var minDamage1 = playerOneDamage * .5;
			var minDamage2 = playerTwoDamage * .5;
			var f1 = Math.floor(Math.random()* (playerOneDamage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()* (playerTwoDamage - minDamage2) + minDamage2);
			//inflcit damage
			playerOneHealth -= f1;
			playerTwoHealth -= f2;
			
		};
		var results = winnerCheck();
		if(results === "No Winner"){
			round++;
			alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
		};
		else{
			alert(results);
			break;
		};
	};
	
	function winnerCheck(){
		var result = "No Winner";
		if(playerOneHealth<1 && playerTwoHealth<1){
			result = "Both Players Die";	
		};
		else if(playerOneHealth<1){
			var result = playerTwoName+" Wins!!"
		};
		else if(playerTwoHealth<1){
			var result = playerOneName+" Wins!!"
		};
		return result;
		
	};
	
	/******* The program gets started below *******/
	fight();

})();