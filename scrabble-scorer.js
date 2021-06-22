// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const simplePointStructure = {
  1:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  };

const bonusVowels = {
  1:['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'],
  3:['A','E','I','O','U']
}

/*function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}*/

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! ");
   let userInput = input.question("Enter a word to score: ");
   //console.log(scrabbleScore(userInput));
   return userInput;
};

let simpleScore = function(word){
  word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i <= word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += Number(pointValue);
		 }
 
	  }
	}
	return letterPoints;
};

let vowelBonusScore = function(word){
   word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in bonusVowels) {
 
		 if (bonusVowels[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += Number(pointValue);
		 }
 
	  }
	}
	return letterPoints;
};

let scrabbleScore = function (word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += Number(pointValue);
		 }
 
	  }
	}
	return letterPoints;
};

let simpleScoreObject = {name: "Simple Score", description: "Each letter is worth 1 point.", scoringFunction: simpleScore};

let bonusVowelsObject = {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scoringFunction: vowelBonusScore};

let scrabbleObject = {name: "Scrabble", description: "The traditional scoring algorithm.", scoringFunction: scrabbleScore};

const scoringAlgorithms = [simpleScoreObject,bonusVowelsObject,scrabbleObject];

function scorerPrompt() {
   let userInput2 = input.question("Which scoring alogorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system \nEnter 0, 1, or 2: ");
    
    if (userInput2 === "0"){
      return scoringAlgorithms[0].scoringFunction;
    } else if (userInput2 === "1"){
      return scoringAlgorithms[1].scoringFunction;
    } else if (userInput2 === "2"){
      return scoringAlgorithms[2].scoringFunction;
    }

}
function transform(object) {
for (item in object){
  let newObject = {}
  //console.log(item)
  //console.log(oldPointStructure[item])
  for (i = 0; i < object[item].length; i++){
    //console.log(oldPointStructure[item][i])
    newObject[object[item][i]] = item
    
  } 
}
}

//console.log(oldPointStructure[1].length);
//console.log(oldPointStructure[1][0]);




  /* console.log(key + ' '+ oldPointStructure[key])
   console.log(oldPointStructure[key
   ][1])
    console.log(oldPointStructure[key])*/
 

    //console.log(item + ','+ oldPointStructure[item])
    //for (i = 0; i < item.length ; i++){
     // newObject[i] += item
    //}

 // console.log(newObject)
  //console.log(oldPointStructure)
 // };

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let promptOutput = initialPrompt();
   let scorerPromptOutput = scorerPrompt();
   let finalScore = scorerPromptOutput(promptOutput)
   console.log(`Score for ${promptOutput} : ${finalScore}`)
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

