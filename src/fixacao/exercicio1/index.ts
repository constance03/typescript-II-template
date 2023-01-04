/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/


//Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
// nome, que é uma string;
// idade, que é um número;
// corFavorita, que é uma string.

type TPessoa = {
  nome: string
  idade: number
  corFavorita: ARCO_IRIS
}

//Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso

enum ARCO_IRIS {
  VIOLETA = "VIOLETA",
  VERMELHO = "VERMELHO",
  AMARELO = "AMARELO",
  LARANJA = "LARANJA",
  VERDE = "VERDE",
  AZUL = "AZUL", 
  ANIL = "ANIL"
}

const pessoa1: TPessoa = { 
  nome: "Maria",
  idade: 25,
  corFavorita: ARCO_IRIS.VIOLETA 
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
//que todos os objetos tenham as mesmas propriedades.

const pessoa2: TPessoa = { 
  nome: "Veronica",
  idade: 25,
  corFavorita: ARCO_IRIS.AZUL 
}

const pessoa3: TPessoa = { 
  nome: "Bruno",
  idade: 26,
  corFavorita: ARCO_IRIS.ANIL
}

const pessoa4: TPessoa = { 
  nome: "Matheus",
  idade: 26,
  corFavorita: ARCO_IRIS.VERDE
}

const arrayPessoas: TPessoa[] = [pessoa1, pessoa2, pessoa3, pessoa4]
console.table(arrayPessoas);
