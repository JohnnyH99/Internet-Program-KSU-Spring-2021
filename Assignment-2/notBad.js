function notBad(input){
  
   var indexOfNot = input.indexOf("not");
   var indexOfBad = input.indexOf("bad");
   var replacement = "good ";
   if(indexOfNot!=-1 && indexOfBad!=-1 && indexOfNot<indexOfBad){
   var newInput = input.substr(0, indexOfNot) + replacement+ input.substr(indexOfBad + replacement.length);
   alert(input.substr(0, indexOfNot) + replacement+ input.substr(indexOfBad + replacement.length));
   return newInput
   }
   alert(input);
   return input;
}
