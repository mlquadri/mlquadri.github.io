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
		print("roll exepted: "+diceList[diceButtonClicked]+" returned \n"+(3 - (diceButtonClicked))+" rolls left");
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
function preScene_defInputAct(){statDefence = int(defInput.value());}
function preScene_sneakInputAct(){statStelth = int(sneakInput.value());}
function preScene_attackInputAct(){statAttack = int(attackInput.value());}
function preScene_charmInputAct(){statCharm = int(charmInput.value());}
function preScene_difficultyMultiplyerSliderAct(){difficultyMultiplyer = int(difficultyMultiplyerSlider.value());}
function preScene_option1Act(){
	if( !(difficultyMultiplyer > 0) ){
		difficultyMultiplyer = 1
	}
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
				alert( "Please only use numbers you've rolled, or press the Random Stats buttons. So far you've rolled: "+(diceList[0])+", "+(diceList[1])+", "+(diceList[2])+", "+(diceList[3]))
				return;
			}
		}
		if( (trueList[0] == true) && (trueList[1] == true) && (trueList[2] == true) && (trueList[3] == true) ){
			Scene1();
		}else{
			print("Error: can not continue to scene1");
		}
	}else if(nameEntered){
		print("Error: can not continue to scene1: didn't get 4 dice numbers \ndiceButtonClicked = "+diceButtonClicked);
		alert("Please roll 4 dice or click the Random Stat button, so far youve rolled "+diceButtonClicked+" dices");
	}else if(diceButtonClicked >= 4){
		print("Error: can not continue to scene1: no name entered \nname = "+nameEntered);
		alert("Please enter a name");
	}else{
		print("Error: can not continue to scene1: didn't get 4 dice numbers and no name entered\nname = "+nameEntered+"\ndiceButtonClicked = "+diceButtonClicked);
		alert("Please enter a name and Stats");
	}
}

function preScene_hide(){
	nameInput.hide();
	dice.hide();
	defInput.hide();
	attackInput.hide();
	charmInput.hide();
	sneakInput.hide();
	randomStats.hide();
	difficultyMultiplyerSlider.hide();
}

///////////////////////////////////////////////////////////////Scene2_0///////////////////////////////////////////////////////////////
function Scene2_0_option1Act(){
	if(gold >= price){
		gold -= price;
		weapon += 1;
		alert("You gained a weapon");
		print("weapon = "+weapon+"\ngold = "+gold);
		Scene3_0();
	}else{
		alert("You only have "+gold+" gold so the merchent left");
		Scene3_0();
	}
}
function Scene2_0_option2Act(){
	if(gold >= price){
		gold -= price;
		armor += 1;
		alert("You gained armor"+"\ngold = "+gold);
		print("armor = "+armor);
		Scene3_0();
	}else{
		alert("You only have "+gold+" gold");
		Scene3_0();
	}
}
function Scene2_0_option3Act(){
	if(gold >= price){
		gold -= price;
		shoes += 1;
		alert("You gained thief shoes");
		print("shoes = "+shoes+"\ngold = "+gold);
		Scene3_0();
	}else{
		alert("You only have "+gold+" gold");
		Scene3_0();
	}
}
function Scene2_0_option4Act(){
	if( (checkStats("charm", (1 * difficultyMultiplyer)))&&(price > 0) ){
		price -= 1;
		alert("You talked down the price");
		print("price = "+price+"\ngold = "+gold);
		Scene2_0();
	}else{
		price += 1;
		alert("You annoyed the merchent and he rased the price by 1 gold");
		print("price = "+price+"\ngold = "+gold);
		Scene2_0();
	}
}

///////////////////////////////////////////////////////////////Scene2_1///////////////////////////////////////////////////////////////
function Scene2_1_option1Act(){
	if(checkStats("attack", (1 * difficultyMultiplyer))){
		Scene3_0()
	}else{
		sceneDeath();
	}
}
function Scene2_1_option2Act(){
	if(checkStats("def", (1 * difficultyMultiplyer))){
		incentive+=1;
		Scene2_1()
	}else{
		incentive-=1;
		Scene2_1();
	}
}
function Scene2_1_option3Act(){
	if(checkStats("charm", (1 * difficultyMultiplyer))){
		if(gold >= difficultyMultiplyer){
			gold -= difficultyMultiplyer;
			print("gold = "+gold)
			alert("You talked the bandit in to leting you go, but it cost you. You now only have "+gold+" gold");
		}
		Scene3_0();
	}else{
		sceneDeath();
	}
}
function Scene2_1_option4Act(){
	if(checkStats("sneak", (1 * difficultyMultiplyer))){
		Scene1();
	}else{
		sceneDeath();
	}
}

///////////////////////////////////////////////////////////////Scene3_0///////////////////////////////////////////////////////////////
function Scene3_0_option1Act(){
	if(checkStats("attack", (3 * difficultyMultiplyer))){
		Scene4_0();
	}else{
		sceneDeath();
	}
}
function Scene3_0_option2Act(){
	if( (checkStats("def", (3 * difficultyMultiplyer)))&&(incentive < difficultyMultiplyer) ){
		incentive+=1;
		Scene3_0();
	}else{
		incentive-=1;
		Scene3_0();
	}
}
function Scene3_0_option4Act(){
	if(checkStats("sneak", (3 * difficultyMultiplyer))){
		Scene4_0();
	}else{
		
	}
}

///////////////////////////////////////////////////////////////Scene4_0///////////////////////////////////////////////////////////////
function Scene4_0_option1Act(){
	if(checkStats("attack", (5 * difficultyMultiplyer))){
		Scene5_0()
	}else{
		sceneDeath();
	}
}
function Scene4_0_option2Act(){
	if(checkStats("attack", (5 * difficultyMultiplyer))){
		Scene5_1()
	}else{
		sceneDeath();
	}
}
function Scene4_0_option3Act(){
	if(checkStats("charm", (8 * difficultyMultiplyer))){
		Scene5_2()
	}else{
		sceneDeath();
	}
}
function Scene4_0_option4Act(){
	if(checkStats("sneak", (5 * difficultyMultiplyer))){
		Scene5_3()
	}else{
		sceneDeath();
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
	difficultyMultiplyerSlider = createInput();
    createElement('br');
	option1 = createA("#","");
    createElement('br');
	option2 = createA("#","");
    createElement('br');
	option3 = createA("#","");
    createElement('br');
	option4 = createA("#","");
    createElement('br');
	restart = createA("P5-Scene_Game.html","Try Agian"); 
	restart.hide();
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
		if(statType == "def"){
			print("statType (def) check: passed");
			if( (statDefence+incentive+armor) > level){
				print("final check: passed");
				return true;
			}else{
				print("final check: failed: "+(statDefence+incentive+armor)+">"+level);
				return false;
			}
		}else if(statType == "attack"){
			print("statType (attac) check: passed");
			if((statAttack+incentive+weapon) > level){
				print("final check: passed");
				return true;
			}else{
				print("final check: failed: "+(statAttack+incentive+armor)+">"+level);
				return false;
			}
		}else if(statType == "sneak"){
			print("incentive (sneak) check: passed");
			if( (statStelth+incentive+shoes) > level){
				print("final check: passed");
				return true;
			}else{
				print("final check: failed: "+(statStelth+incentive+armor)+">"+level);
				return false;
			}
		}else if(statType == "charm"){
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
		if(statType == "def"){
			if( (statDefence+armor) > level){
				return true;
			}else{
				return false;
			}
		}else if(statType == "attac"){
			if( (statAttack+weapon) > level){
				return true;
			}else{
				return false;
			}
		}else if(statType == "sneak"){
			if( (statStelth+shoes) > level){
				return true;
			}else{
				return false;
			}
		}else if(statType == "charm"){
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