function fixStart(s){
     var c = s.charAt(0);
	 alert("The result: "+ c + s.slice(1).replace(new RegExp(c, 'g'), '*'));
	 return c + s.slice(1).replace(new RegExp(c, 'g'), '*');	
}