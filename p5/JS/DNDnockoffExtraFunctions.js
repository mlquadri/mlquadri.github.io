///////////////////////////////////////////
/////////inner-Scene Functions/////////////
///////////////////////////////////////////

////////////////////////////////////////////////////////////preScene///////////////////////////////////////////////////////////
function preScene_nameAct(){
	nameEntered = true;
	userName = nameInput.value()
}
function preScene_diceAct(){
	if(diceButtonClicked < 4){
		diceList[diceButtonClicked] = rollDice(startingStatCap);
		print("Diced Rolled "+(diceButtonClicked+1)+" times and you got a "+diceList[diceButtonClicked]+" on the last roll");
		alert(diceList[diceButtonClicked]);
		diceButtonClicked+=1;
	}else{
		print("Error: user tryed to roll dice an extra time: request denied")
		alert("You can only roll 4 times")
	}
}
function preScene_randomStatsAct(){
	statDefence = rollDice(startingStatCap);
	statStelth = rollDice(startingStatCap);
	statAttack = rollDice(startingStatCap);
	statCharm = rollDice(startingStatCap);
	diceButtonClicked = 4;
	diceList[0] = statDefence;
	diceList[1] = statStelth;
	diceList[2] = statAttack;
	diceList[3] = statCharm;
	randomStats.hide();
	dice.hide();
	defInput.hide();
	attackInput.hide();
	charmInput.hide();
	sneakInput.hide();
	print("Attack: "+statAttack+"\nDefence: "+statDefence+"\nCharm: "+statCharm+"\nSneak: "+statStelth);
}
function preScene_defInputAct(){
	statDefence = int(defInput.value());
}
function preScene_sneakInputAct(){
	statStelth = int(sneakInput.value());
	}
function preScene_attackInputAct(){
	statAttack = int(attackInput.value());
}
function preScene_charmInputAct(){
	statCharm = int(charmInput.value());
}

function preScene_option1Act(){
	if( (diceButtonClicked >= 4) && (nameEntered) ){
		trueList = [false, false, false, false];
		statList = [statDefence, statStelth, statAttack, statCharm];
		for (var i = 0; i < 4; i++){
			if(diceList[i] == statList[0]){
				trueList[i] = true;
				statList[0] = -99;
			}else if(diceList[i] == statList[1]){
				trueList[i] = true;
				statList[1] = -99;
			}else if(diceList[i] == statList[2]){
				trueList[i] = true;
				statList[2] = -99;
			}else if(diceList[i] == statList[3]){
				trueList[i] = true;
				statList[3] = -99;
			}else{
				print("Error: Inputed values do not equal rolled numbers: "+(diceList[i])+" not found");
				alert( "A non-rolled was used, please only use the number rolled: "+(diceList[0])+", "+(diceList[1])+", "+(diceList[2])+", "+(diceList[3]))
			}
		}
		if( (trueList[0] == true) && (trueList[1] == true) && (trueList[2] == true) && (trueList[3] == true) ){
			Scene1();
		}else{
			print("Error: can not continue to scene1");
		}
	}else if(nameEntered){
		print("Error: can not continue to scene1: didn't get 4 dice numbers \n diceButtonClicked = "+diceButtonClicked);
		alert("Please get 4 dice numbers, so far youve rolled "+diceButtonClicked+" dices");
	}else if(diceButtonClicked >= 4){
		print("Error: can not continue to scene1: no name name entered \n name ="+nameEntered);
		alert("Please enter a Name");
	}else{
		print("Error: can not continue to scene1 \n name = "+nameEntered+"\n diceButtonClicked = "+diceButtonClicked);
	}
}

function preScene_hide(){
	nameInput.hide();
	dice.hide();
	defInput.hide();
	attackInput.hide();
	charmInput.hide();
	sneakInput.hide();
}

///////////////////////////////////////////////////////////////Scene2_0///////////////////////////////////////////////////////////////
function Scene2_0_option1Act(){
	Scene3_0();
}
function Scene2_0_option2Act(){
	Scene3_0();
}
function Scene2_0_option3Act(){
	Scene3_0();
}
function Scene2_0_option4Act(){
	if(checkStats(statCharm, 1)){
		Scene2_0();
	}else{
		Scene2_0();
	}
}

///////////////////////////////////////////////////////////////Scene2_1///////////////////////////////////////////////////////////////
function Scene2_1_option1Act(){
	if(checkStats(statAttack, 1)){
		Scene3_0()
	}else{
		sceneDeath();
	}
}
function Scene2_1_option2Act(){
	if(checkStats(statDefence, 1)){
		incentive+=1;
		Scene2_1()
	}else{
		incentive-=1;
		Scene2_1();
	}
}
function Scene2_1_option3Act(){
	if(checkStats(statCharm, 1)){
		Scene3_0();
	}else{
		sceneDeath();
	}
}
function Scene2_1_option4Act(){
	if(checkStats(statStelth, 1)){
		Scene1();
	}else{
		sceneDeath();
	}
}

///////////////////////////////////////////////////////////////Scene3_0///////////////////////////////////////////////////////////////
function Scene3_0_option1Act(){
	if(checkStats(statAttack, 1)){
		
	}else{
		sceneDeath();
	}
}
function Scene3_0_option2Act(){
	if(checkStats(statDefence, 1)){
		incentive+=1;
		Scene3_0();
	}else{
		incentive-=1;
		Scene3_0();
	}
}
function Scene3_0_option4Act(){
	if(checkStats(statStelth, 1)){
		
	}else{
		
	}
}

///////////////////////////////////////////////////////////////sceneDeath///////////////////////////////////////////////////////////////
function sceneDeath_hide(){
	nameInput.hide();
	dice.hide();
	defInput.hide();
	attackInput.hide();
	charmInput.hide();
	sneakInput.hide();
	option1.hide();
	option2.hide();
	option3.hide();
	option4.hide();
}

///////////////////////////////////////////
//////////Non-Scene Functions//////////////
///////////////////////////////////////////

function setUpTags(){
	title = createP("");
    createElement('br');
	screenBody = createP("");
    createElement('br');
    nameInput = createInput(); 
    createElement('br');
	dice = createA("#","");
    createElement('br');
    defInput = createInput();
    createElement('br');
    attackInput = createInput();
    createElement('br');
    charmInput = createInput();
    createElement('br');
    sneakInput = createInput();
    createElement('br');
    randomStats = createA("#","");
    createElement('br');
	option1 = createA("#","");
    createElement('br');
	option2 = createA("#","");
    createElement('br');
	option3 = createA("#","");
    createElement('br');
	option4 = createA("#","");``
    createElement('br');
	restart = createA("index2.html","Try Agian"); 
	restart.hide();
	//sideImage = createImg("image location");
}

//CheckIncentive
function checkIncentive(){return (incentive >= 0);}

//dice rolled
function rollDice(dNum){
	num = randrange(0, dNum);
	return num;
}

function randrange(maxInt, minInt){
  min = Math.ceil(maxInt);
  max = Math.floor(minInt);
  return Math.floor(Math.random() * (max - min)) + min;
}

//CheckStats
function checkStats(statType, level){
	if(incentive > 0){
		print("incentive check: passed");
		if(statType = "def"){
			print("statType (def) check: passed");
			if( (statDefence+incentive+armor) > level){
				print("final check: passed");
				return true;
			}else{
				print("final check: failed: "+(statDefence+incentive+armor)+">"+level);
				return false;
			}
		}else if(statType = "attac"){
			print("statType (attac) check: passed");
			if((statAttack+incentive+weapon) > level){
				print("final check: passed");
				return true;
			}else{
				print("final check: failed: "+(statAttack+incentive+armor)+">"+level);
				return false;
			}
		}else if(statType = "sneak"){
			print("incentive (sneak) check: passed");
			if( (statStelth+incentive+shoes) > level){
				print("final check: passed");
				return true;
			}else{
				print("final check: failed: "+(statStelth+incentive+armor)+">"+level);
				return false;
			}
		}else if(statType = "charm"){
			print("incentive (charm) check: passed");
			if( (statCharm+incentive+charm) > level){
				print("final check: passed");
				return true;
			}else{
				print("final check: failed: "+(statCharm+incentive+armor)+">"+level);
				return false;
			}
		}else{
			print("Error: checkStats statType: "+statType+" is not an exepted value");
			return false;
		}
	}else if(randrange(0, 1) == 1){
		print("incentive check: failed");
		print("random check: passed");
		if(statType = "def"){
			if( (statDefence+armor) > level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "attac"){
			if( (statAttack+weapon) > level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "sneak"){
			if( (statStelth+shoes) > level){
				return true;
			}else{
				return false;
			}
		}else if(statType = "charm"){
			if( (statCharm+charm) > level){
				return true;
			}else{
				return false;
			}
		}else{
			print("Error: checkStats statType: "+statType+" is not an exepted value");
			return false;
		}
	}else{
		print("incentive check: failed");
		print("random check: failed");
		return false;
	}
}
