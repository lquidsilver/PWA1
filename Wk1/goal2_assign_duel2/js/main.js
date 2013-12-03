/*Name: Arif Wright
  Date: 12/2/13
  Assignment: The Duel Part 1
*/

// Self-executing function
(function(){
	var playerOne = ["Kobal",100,20];
	var playerTwo = ["Kratos",100,20];
	
	var round = 0;
	
	function fight(){
		alert(playerOne[0]+":"+playerOne[1]+" *START* "+playerTwo[0]+":"+playerTwo[1]);
		for(var i=0; i < 10; i++){
			var minDamage1 = playerOne[2] * .5;
			var minDamage2 = playerTwo[2] * .5;
			var f1 = Math.floor(Math.random()* (playerOne[2] - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()* (playerTwo[2] - minDamage2) + minDamage2);
			//inflcit damage
			playerOne[1] -= f1;
			playerTwo[1] -= f2;
		
			var results = winnerCheck();
		
			if(results === "No Winner"){
				round++;
				alert(playerOne[0]+":"+playerOne[1]+" *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[1]);
			}
			else{
				alert(results);
				break;
			}
		};
	};
	
	function winnerCheck(){
		var result = "No Winner";
		if(playerOne[1] < 1 && playerTwo[1] < 1){
			var result = "Both Players Die";	
		}
		else if(playerOne[1] < 1){
			var result = playerTwo[0]+" Wins!!";
		}
		else if(playerTwo[1] < 1){
			var result = playerOne[0]+" Wins!!";
		}
		return result;
		
	};
	
	/******* The program gets started below *******/
	fight();

})();