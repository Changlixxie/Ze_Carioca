
function Arvores() {
	
	this.gap = 210;
	this.cima = random(90, 300);
	this.baixo = height - (this.cima + this.gap);
	this.x = width+20;
	this.y = - 1;
	this.w = 100;
	this.velocidadeDasArvores = 20;
	this.passa = false;
	this.highlight = false;

//BATEU, MORREU!!!
	this.colide = function(personagem) {
		
		if(personagem.y - 100 < this.cima || personagem.y + 70 > height - this.baixo){
			if (personagem.x > this.x && personagem.x < this.x + this.w) {
				this.highlight = true;
				this.passa = true;
				return true;
			}
		}
		this.highlight = false;
		return false;

	}
//FUNÇÃO DE CONTAGEM DA A PASSAGEM DO ZÉ CARIOCA, QUE CONTABILIZA NO SCORE DURANTE O JOGO
	this.passa = function(personagem) {
		
		if (personagem.x > this.x && !this.passou) {
			this.passou = true;
			return true;
		} else {
		return false; }
	}


//FUNÇÃO QUE MOSTRA AS ARVORES
	this.show = function() {
		
		rect(this.x, this.y, this.w, this.cima);
		rect(this.x, height-this.baixo, this.w, this.baixo);
			
	}
//ATUALIZA AS ARVORES NO CANVAS
	this.update = function() {

		this.x -= this.velocidadeDasArvores; 
	}

	this.offscreen = function(){
		return (this.x < -this.w)
	}

}