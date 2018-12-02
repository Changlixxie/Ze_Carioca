//VARIAVEIS CRIADAS PARA A MECANICA E DESENVOLVIMENTO DO JOGO
var personagem;
var score = 0;
var maxScore = 0;
var gameOverFrame = 0;
var isOver = false;
var isStarted = false;
var arvores = [];
var ps, bg, ps1;


function preload(){
	
	ps = loadImage('teste.png');
	bg = loadImage('j.png');
	ps1 = loadImage('testeperdeuqueimadozecarioca.png');

}

//FUNÇÃO SETUP PARA MONTAR A LÓGICA DO JOGO
function setup() {

	createCanvas(1000,750);
	textStyle(BOLD);
	fill(255, 204, 0);
	frameRate(60);
	personagem = new Personagem();
	arvores.push(new Arvores());
	noLoop();

}

//FUNÇAO PARA COMPLEMENTAR O SETUP, QUE CHAMA AS IMAGENS DO PRELOAD
function draw() {
	//background(0);
	image(bg ,0 ,0);
	fill(139, 105, 20);
	
	
	//TELA INICIAL DO JOGO
	if (isStarted === false) {

		textSize(55);
		textAlign(CENTER,CENTER);
		fill(0);
		text('ZÉ CARIOCA\nNA FLORESTA DEVASTADA',width/2,height/2-40);
		textSize(30);
		text('Ele está desesperado\naperte espaço logo para começar', width/2, height/2 + 90);
	}
	
	for(var i = arvores.length-1; i >= 0; i--){
	
		arvores[i].update();
		arvores[i].show();
		
		if (arvores[i].passa(personagem)) {
			score++;
			console.log("PASSOU");
		}
		
		if (arvores[i].colide(personagem)) {
			gameOver()
			console.log("COLIDIU");
		}

		if (arvores[i].offscreen()) {
			arvores.splice(i, 1);
		}
	}
	
	personagem.update();
	personagem.show();
	
	//PUXA O SCORE PARA A CANVAS 
	showScores();

	if((frameCount - gameOverFrame) % 60 == 0){
		arvores.push(new Arvores());
	}
	//FUNÇÃO QUE IMPRIME SEU SCORE QUANDO VOCÊ PERDE A PARTIDA
	if(isOver ===true) {
		textSize(30);
		fill(0);
		textAlign(CENTER,CENTER);
		text('Score final: ' + maxScore, width/2, height/2 + 150);
	}


} 

//FUNÇÃO QUE MOSTRA A PONTUAÇÃO DO JOGADOR DURANTE O JOGO
function showScores() {
  
  textSize(30);
  fill(0);
  textAlign(CENTER,CENTER);
  text(score, width/2 , height/2 - 200);

}

//FUNÇÃO DE FIM DE JOGO
//FAZ COM QUE IMPRIMA NA TELA "GAME OVER"
function gameOver() {

	textSize(50);
	textAlign(CENTER,CENTER);
	fill(0);
	text("FIM DE JOGO", width/2, height/2 - 40);
	textSize(30);
	text("Tente Novamente", width/2, height/2 + 40);
	textAlign(LEFT, BASELINE);
	maxScore = max(score, maxScore);
	isOver = true;
	noLoop();

}

//FUNÇÃO QUE FAZ COM QUE O JOGO REINICIE, REDEFININDO O VALOR DE TODAS AS VARIAVEIS
function reset() {
  
  isOver = false;
  score = 0;
  arvores = [];
  personagem = new Personagem();
  arvores.push(new Arvores());
  gameOverFrame = frameCount -1;
  loop();
}

//MOVIMENTA O PERSONAGEM
function keyPressed() {
	
	if (key === ' ' && isOver === false ) {
		if(isStarted === false){
		isStarted = true;
		loop();
	}
	personagem.up();
	}
	if (isOver) {
			personagem.up();
			reset();
		}
}

