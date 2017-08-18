(function() {
  let startingPopulation =200;
  let birthRate = .1;
  let numberOfWeeks = 5;



  let newPopulation = ((startingPopulation * birthRate)* numberOfWeeks)+startingPopulation

  let text = "There will be " + newPopulation + " Cherokee Hares after " + numberOfWeeks + " weeks."

  console.log(text)


})()
