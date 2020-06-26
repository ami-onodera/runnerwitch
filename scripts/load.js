function preload() {
  imagemCenario = loadImage('imagens/cenario/florestamagica.png');
  
   // Cenarios Paralax
      imagemCena_1 = loadImage('imagens/cenario/paralax/layer1.png');
      imagemCena_2 = loadImage('imagens/cenario/paralax/layer2.png');
      imagemCena_3 = loadImage('imagens/cenario/paralax/layer3.png');
      imagemCena_4 = loadImage('imagens/cenario/paralax/layer4.png');
      imagemCena_5 = loadImage('imagens/cenario/paralax/layer5.png');
      imagemCena_6 = loadImage('imagens/cenario/paralax/layer5-2.png');
  //fim cenario paralax
  
  
  imagemPersonagem = loadImage('imagens/personagem/personagem.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  imagemInimigoSegundo = loadImage('imagens/inimigos/gotinha.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemVida = loadImage('imagens/assets/coracao.png');


  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somDoPulo.wav');
  somMorreu = loadSound('sons/gameover.mp3');
  somColisao = loadSound('sons/hurt-sound.mp3');
}