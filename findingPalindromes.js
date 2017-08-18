(function() {
  let word = "dawg";
  let wordArray = word.split("");
  let reversedWordArray = wordArray.reverse();
  let reversedWord = reversedWordArray.join("");

  if (word == reversedWord) {

    console.log("True");
  }

  else {
    console.log("False");
  }

  //console.log(word);
  //console.log(wordArray);
  //console.log(reversedWordArray);

})()
