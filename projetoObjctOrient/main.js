const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d'); /*um fundo para ser criado o gravico canvas*/

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max){
     const num = math.floor(math.randow() * (max - min + 1)) + min;
/*usa dois números como argumentos e retorna um número aleatório no intervalo entre os dois.*/

       return num;
}

function Ball(x, y, velX, velY, color, size){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;

    /* definem as propriedades que cada bola precisa para funcionar em nosso programa:*/
}

Ball.prototype.draw = function(){
    ctx.beginPath(); 
 /*declara q quero  desenhar 1 forma no grafico.*/
    ctx.fillStyle = this.color;
    /* definir a cor q queremos que a forma seja */
    ctx.arc(this.x, this.y, this.size, 0,2 * math.PI); /* traçar uma forma de arco no grafico*/
    ctx.fill(); /*terminar de desenhar o caminho que começou com beginPath(), e preencher uma área que ocupa com a cor que especificamos anteriormente em fillStyle.*/
}

let testBall = new Ball(50, 100, 4, 4, 'blue', 10);

testBall.x
testBall.size
testBall.color
testBall.draw()

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }
