/*Name: Arif Wright
  Date: 12/2/13
  Assignment: The Duel Part 1
*/

// Self-executing function
(function(){
	var player1 = {name:"Kabal", health:100, damage:20};
	var player2 = {name:"Kratos", health:100, damage:20};
	var button = document.getElementById('nextButton');
	var round = 0;
	
	var fight = function fight(){
			var minDamage1 = player1.damage * .5;
			var minDamage2 = player2.damage * .5;
			var f1 = Math.floor(Math.random()* (player1.damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()* (player2.damage - minDamage2) + minDamage2);
			//inflcit damage
			player1.health -= f1;
			player2.health -= f2;
				
			var results = winnerCheck();
			
		
			if(results === "No Winner"){
				round++;
				document.getElementById('round').innerHTML = '*ROUND '+round+' OVER*';
			}
			else{
				document.getElementById('round').innerHTML = results;
			}
			
			if(player1.health > 1 && player2.health > 1){
				document.getElementById('nextButton').innerHTML = 'FIGHT!';
				button.addEventListener('click', fight, false);
				document.getElementById('kabal').innerHTML = '<p>'+player1.name+': '+player1.health+ '</p>';
				document.getElementById('kratos').innerHTML = '<p>'+player2.name+': '+player2.health+'</p>';
			}
			else{
				document.getElementById('nextButton').innerHTML = 'DONE!';
				button.removeEventListener('click', fight, false);
				document.getElementById('kabal').innerHTML = '<p>'+player1.name+': '+player1.health+'</p>';
				document.getElementById('kratos').innerHTML = '<p>'+player2.name+': '+player2.health+'</p>';
			}	
				
	};
	
	function winnerCheck(){
		var result = "No Winner";
		if(player1.health < 1 && player2.health < 1){
			var result = "Both Players Die";	
		}
		else if(player1.health < 1){
			var result = player2.name+" Wins!!";
		}
		else if(player2.health < 1){
			var result = player1.name+" Wins!!";
		}
		return result;
		
	};

	document.getElementById('nextButton').innerHTML = 'FIGHT!';
	button.addEventListener('click', fight, false);
	

})();