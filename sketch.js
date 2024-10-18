function setup() {// configurações
  createCanvas(400, 400);// criar tela 
}

function draw() {// configurações do desenho
  background(220);
}let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Caminhante", "Caminho", "Caminha"];
  
  return random(palavras);//retorno da palavra
}

function inicializaCores() {//iniciar cor
  background("white");//cor da tela
  fill("black");//cor do texto
  textSize(64);//tamanhop do texto
  textAlign(CENTER, CENTER);//lugar da palavra
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);//seguir o mouse
  let parcial = palavra.substring(0, quantidade);
  return parcial;//retorno do texto
}

function draw() {//configuracões
  
  inicializaCores();//cores

  let texto = palavraParcial(0, width);//desenhar texto
    
  text(texto, 200, 200);//lugar do texto
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    console.log("Modo noturno não é necessário neste momento.");
  }
}

modoNoturno(15);
modoNoturno(20);