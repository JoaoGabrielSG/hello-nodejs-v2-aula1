let g = 10;
var a = 20;
let b = 20;
let r = 40;
let i = 50;
const e = 60;
const l = 70;

if (a == b){
	console.log("igual");
}else{
	console.log("diferente");
}

if (a === b){
        console.log("igual");
}else{
        console.log("diferente");
}
switch(b){

	case 20:
		console.log("igual a 20");
		break;
	
	case 30:
		console.log("igual a 30");
		break;

	default:
		console.log("Diferente de 20 e 30");
		break;
}

for(let j = 0; j < g; j++){
	console.log("j mais 1");
	console.log(j);
}

while(g++ < a){

	console.log("g");

}


do{
	g--;	
}while(g > 0);

