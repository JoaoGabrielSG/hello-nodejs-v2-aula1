class Animal{
	constructor(nome){
		this.nome = nome;
		this.posicao_x = 0;
		this.posicao_y = 0;
	}

	walk(walk_x, walk_y){
		this.posicao_x += walk_x;
		this.posicao_y += walk_y;
	}
}

class Dog extends Animal{
	constructor(nome, raca){
		super(nome);
		this.raca = raca;
	}

	start_kidding(){
		this.kidding = true;
	}

	stop_kidding(){
		this.kidding = false;
	}
}


let s = new Dog("Dogão", "Poodle");
s.walk(5,0);
s.start_kidding();

console.log(s);
console.log(s.posicao_x);

console.log(s instanceof Dog);
console.log(s instanceof Animal);
