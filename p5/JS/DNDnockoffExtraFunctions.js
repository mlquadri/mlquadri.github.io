///////////////////////////////////////////
//////////Non-Scene Functions//////////////
///////////////////////////////////////////

function randrange(maxInt, minInt){
  min = Math.ceil(maxInt);
  max = Math.floor(minInt);
  return Math.floor(Math.random() * (max - min)) + min;
}

//dice rolled
function rollDice(dNum){
	num = randrange(0, dNum);
	createP(num);
	//add num to an aray
}

//CheckIncentive
function checkIncentive(){
	return (incentive >= 0);
}

//CheckStats
function checkStats(statType, level){
	if(incentive >= 0){
		if(statType = "def"){
			if( (statDefence+incentive+armor) >= level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "attac"){
			if( (statAttack+incentive+weapon) >= level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "sneak"){
			if( (statStelth+incentive+shoes) >= level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "charm"){
			if( (statCharm+incentive+charm) >= level){
				return true;
			}else{
				return false;
			}
		}else{
			print("Error: checkStats statType: "+statType+" is not an exepted value");
			return false;
		}
	}else if(randrange(0, 1) == 1){
		if(statType = "def"){
			if( (statDefence+armor) >= level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "attac"){
			if( (statAttack+weapon) >= level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "sneak"){
			if( (statStelth+shoes) >= level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "charm"){
			if( (statCharm+charm) >= level){
				return true;
			}else{
				return false;
			}
		}else{
			print("Error: checkStats statType: "+statType+" is not an exepted value");
			return false;
		}
	}else{
		return false;
	}
}