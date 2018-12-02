
//FUNÇÃO DO PERSONAGEM
function Personagem() {
	
	//PROPRIEDADES DO ZÉ CARIOCA
	this.y = height/2 + 50;
	this.x = 200;

	//MECANICA DO JOGO
	this.gravidade = 0.6;
	this.lift = -15;
	this.velocidade = 0;


	//FAZ O DISPLAY DO ZÉ CARIOCA
	this.show = function() { 
	
		if (isOver === false) {
            //IMAGEM DO ZÉ CARIOCA
            image( ps, this.x - 100, this.y - 110 );
        } else {
            //IMAGEM DO ZÉ CARIOCA QUEIMADO
            image(ps1, this.x - 100, this.y - 110);
        }
    }

   	

	//O QUE FAZ O ZÉ CARIOCA PULAR
	this.up = function() {

		this.velocidade += this.lift;
	
	}

	//ATUALIZA O MOVIMENTO
	this.update = function() {
	
		this.velocidade += this.gravidade;
		this.velocidade *= 0.9;
		this.y += this.velocidade;	

		if(this.y > height){
			this.y = height;
			this.velocidade = 0;

		}
		if(this.y < 0){
			this.y = 0;
			this.velocidade = 0;

		}
	}
}
