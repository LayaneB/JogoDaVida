# Jogo Da Vida Versão One Piece

**Objetivo do Projeto**

  Criado na 2ª etapa do processo seletivo da Captalys Tech. Nessa fase, os candidatos devem implementar sua própria versão do Jogo da Vida, criado pelo matemático John Horton Conway em 1970.

**Nível de Conhecimento Técnico**

html, css, js e React: básico.

**Status:** Em desenvolvimento.

**Pendências:** 
* Parte funcional do game;
* Inclusão das peças do tabuleiro: ilhas, akuma no mi e piratas.
* A implementação atual não se encontra em um estágio funcional!

**Instalação:**

1. Git Clone
2. npm install
3. npm run start

## Regras do Jogo
Inicialmente o tabuleiro é composto, quase totalmente, por blocos de água (representando os oceanos) e por uma faixa central de terra, representando a red line.

O jogador deverá então definir quais blocos de água serão transformados em terra para formar as ilhas. Nesse processo, os jogadores deverão escolher o ou os tipos de ilha que deseja formar, são elas: 


* Ilha whole cake: pode ter mais de 3 vizinhos porém não mais que 7;
* Ilha Rusukaina: ninguém sobrevive aqui; 
* lha Kuraigana: ilha solitária, só pode haver um pirata nessa ilha; 
* Ilha Momoiro assim q cair aqui recebe um vizinho, se chegar a 5 morre;
* Marinford: se tiver um grupo maior que 4 é considerado ataque e todos os membros são massacrados; de 2 a 3 considerado invasão, e eles são aprisionados na ilha; 1 é considerado infiltração bem sucedida, nada acontece;
*	Laugh Tale: Só pode existir um único bloco dessa ilha, o primeiro pirata que passar por ela nunca mais morrerá de solidão;
* No mar, são válidas as [regras do jogo da vida original](https://pt.wikipedia.org/wiki/Jogo_da_vida);
*	Na red line são válidas todas as [regras do jogo original](https://pt.wikipedia.org/wiki/Jogo_da_vida) exceto a regra de morte por solidão.


O jogador também poderá distribuir ao longo do tabuleiro akuma no mis. Cada pirata só pode possuir uma e, se a possuir, perde as habilidades de nadar. Assim, se este pirata estiver em um bloco de água, ele morre imediatamente.

Após decidir as localizações e tipos das ilhas, o jogador irá “povoar” o mundo e só então que o jogo poderá ser iniciado.

No arquivo Desafio Captalys, em pdf, as regras do jogo estão ilustradas a fim de melhorar a visualização e compreensão das mesmas.

