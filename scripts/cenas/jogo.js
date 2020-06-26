class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    this.fimDeJogo = false;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(3, 3)

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 100, 30, 110, 125, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);
    
    const inimigoSegundo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 500);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoSegundo);
  }

  keyPressed(key){
  if(!this.fimDeJogo && key === 'ArrowUp'){
    if(personagem.pula());
  } else if(this.fimDeJogo && key === 'Enter'){
    window.location.reload();
  }
}


  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 30));
    }
    
    const inimigo2 = inimigos[3];
    const inimigoVisivel2 = inimigo2.x < -inimigo2.largura;
    inimigo2.velocidade = parseInt(random(5, 25));
    inimigo2.delay = 1500;
    inimigo2.exibe();
    inimigo2.move();

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      somColisao.play();
      personagem.tornarInvencivel();
      
      if (vida.vidas === 0) {
        gameOver(this)
        noLoop();
      }
    }

    if (personagem.estaColidindo(inimigo2)) {
      vida.perdeVida();
      somColisao.play();
      personagem.tornarInvencivel();
      
      if (vida.vidas === 0) {
        gameOver(this)
        noLoop();
      }
    }
  }
}

function gameOver(that) {  
  background('rgba(0%,0%,0%,.80)');
  fill("fff");
  
  textAlign(CENTER);
  textSize(30);
  text(`You scored ${parseInt(pontuacao.pontos)} Points`,
          width / 2,
          height / 2 -80
        );
  
  image(imagemGameOver, width / 2 - 412 / 2, height / 2 - 78 / 2);
  somDoJogo.stop()
  somMorreu.play();
  that.fimDeJogo = true;
  textAlign(CENTER)
  textSize(30);
  text("Press ENTER to play agaiN", width / 2, height/2+150 )   
  
}