class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.imagem = imagem;

    this.frameAtual = 0;
    this.veloc_y = 0;

    this.variacaoY = variacaoY;

    this.yInicial = height - this.altura - this.variacaoY;
    
    this.y = this.yInicial;
    this.veloc_x = width / 100;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.qntPulos = 2;
    this.alturaDoPulo = -30;
    this.invencivel = false;
  }

  pula() {
    if (this.qntPulos > 0) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.qntPulos--;
      somDoPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.qntPulos = 2;
    }
  }
  
  direita() {
    if (velocidade_atual > 0)
      // if (this.x < (width - this.x))
      if (this.x < width)
        this.x += this.veloc_x;
  }

  esquerda() {
    if (velocidade_atual > 0)
      if (this.x > 0)
        this.x -= this.veloc_x;
  }

  tornarInvencivel() {
    this.invencivel = true;
    this.isBlinking = true;
    setTimeout(() => {
      this.invencivel = false
      this.stopBlinking()
    }, 2000)
  }
  
  
   estaColidindo(inimigo) {
     
    let precisaoAlt = 0.8;
    let precisaoLar = 0.8;
    let precisao = 0.7;
     
     if (this.invencivel) {
      return false;
    }
    
    // noFill();
    // rect(this.x, this.y, this.largura, this.altura)
    // circle(inimigo.x + inimigo.largura/2+15, inimigo.y + inimigo.altura/2, inimigo.largura*precisao)

    const colisao = collideRectCircle(
      this.x, 
      this.y, 
      this.largura, 
      this.altura, 
      inimigo.x + inimigo.largura/2+15, 
      inimigo.y + inimigo.altura/2, 
      inimigo.largura*precisao
    );
    
    return(colisao);
   }

}