///////////////////////////////////////////
/////////inner-Scene Functions/////////////
///////////////////////////////////////////


////////////////////////////////////////////////////////////preScene///////////////////////////////////////////////////////////
function preScene_nameAct(){
	nameEntered = true;
	userName = nameInput.value()
	print(userName)
}
function preScene_diceAct(){
	if(diceButtonClicked < 4){
		rollDice();
		diceButtonClicked+=1;
	}else{
		print("Error: user tryed to roll dice an extra time - request denied")
	}
}
function preScene_defInputAct(){
	statDefence = defInput.value();
	print(statDefence)
	//truelist+=true
}
function preScene_sneakInputAct(){
	statStelth = sneakInput.value();
	print(statStelth)
	//truelist+=true
	}
function preScene_attackInputAct(){
	statAttack = attackInput.value();
	print(statAttack)
	//truelist+=true
}
function preScene_charmInputAct(){
	statCrisma = charmInput.value();
	print(statCrisma)
	//truelist+=true
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
function Scene3_0_option3Act(){
	if(checkStats(statCharm, 1)){
		
	}else{
		sceneDeath():
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
	option1 = createA("#","");
    createElement('br');
	option2 = createA("#","");
    createElement('br');
	option3 = createA("#","");
    createElement('br');
	option4 = createA("#","");``
    createElement('br');
	restart = createA("https://mlquadri.github.io/mlquadri.github.io/p5/index2.html#","");
	//sideImage = createImg("image location");
}

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
	if(incentive > 0){
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
