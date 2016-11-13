var lista = [];

lista.push(4, 2, "terra", 40, "perigo");

console.log(lista);

lista.pop();

lista.shift();

console.log(lista);

lista.unshift(4);

console.log(lista.length);

var nova_lista = lista.map(function(numero){
	return numero * 3;
});

console.log("nova_lista: ", nova_lista);



mapa = {a:1, b:2, c:3, d:4, e:5};

for(let x in mapa){
	console.log(x)
}

for(let y in mapa){
	console.log(mapa[y])
}

console.log("a"in mapa);
console.log("u" in mapa);


