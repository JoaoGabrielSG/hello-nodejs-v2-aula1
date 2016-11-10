function resto(dividendo, divisor){
	return dividendo%divisor;
}

console.log(resto(5,2));
	
	
var resto_diferente = function(dividendo, divisor){
	return dividendo%divisor;
}

console.log(resto_diferente(5,3));


function calcula_resto(resto, dividendo, divisor){

	return resto(dividendo, divisor);
}

console.log(calcula_resto(resto, 10, 7));
