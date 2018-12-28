function theBeatlesPlay(musicians, instruments) {
  var emptyarray = [];
    for (var i = 0; i < musicians.length; i++) {
       emptyarray.push(musicians[i]+ " plays "+ instruments[i]);
  }
    return emptyarray;
}

function johnLennonFacts(facts) {
 var empty = [];
 var  i =0 ;
 while (i < facts.length)
 
 {
   empty.push(facts[i] + "!!!");
   i++;
 }
 return empty;
}
function iLoveTheBeatles(n){
  var emptyarray = [];
  
  do {emptyarray.push('I love the Beatles!')
    n++;
  }
while (n < 15)

  return emptyarray;
  
}
