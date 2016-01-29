
function myfunction() {
  var firstReplacement = document.getElementById("firstReplacement").value;
  var secondReplacement = document.getElementById("secondReplacement").value;
  var thirdReplacement = document.getElementById("thirdReplacement").value;
  var fourthReplacement = document.getElementById("fourthReplacement").value;
  var fifthReplacement = document.getElementById("fifthReplacement").value;
  var sixthReplacement = document.getElementById("sixthReplacement").value;


//var originalQuote =   '"There is nothing wrong with America that cannot be cured by what is right with America." Bill Clinton'
var editedQuote ="";
editedQuote = '"There is ' + firstReplacement + ' ' + secondReplacement + ' with ' + thirdReplacement + ' that cannot be ' + fourthReplacement + ' by what is ' + fifthReplacement + ' with ' + sixthReplacement + '." Bill Clinton';
console.log(editedQuote);
//alert(editedQuote);
}

