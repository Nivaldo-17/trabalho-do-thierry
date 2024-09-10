const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você lê um artigo sobre a importância da reciclagem e seu impacto na redução de resíduos. Qual é sua reação?",
        alternativas: [
            {
                texto: "Acredita que a reciclagem é essencial, mas se sente desmotivado por não ter acesso a pontos de coleta na sua área.",
                afirmacao: "Você acredita que a reciclagem é essencial, mas se sente desmotivado por não ter acesso a pontos de coleta na sua área."
            },
            {
                texto: "Fica inspirado e decide começar a separar o lixo em casa para contribuir com a causa.",
                afirmacao: "Você fica inspirado e decide começar a separar o lixo em casa para contribuir com a causa."
            }
        ]
    },
    {
        enunciado: "Após participar de uma palestra sobre mudanças climáticas, o que você pensa sobre o futuro do planeta?",
        alternativas: [
            {
                texto: "Sente preocupação com o aquecimento global, mas acha que as pessoas não estão fazendo o suficiente para mudar.",
                afirmacao: "Você sente preocupação com o aquecimento global, mas acha que as pessoas não estão fazendo o suficiente para mudar."
            },
            {
                texto: "Fica esperançoso ao ouvir sobre as inovações tecnológicas que podem ajudar a mitigar os efeitos das mudanças climáticas.",
                afirmacao: "Você fica esperançoso ao ouvir sobre as inovações tecnológicas que podem ajudar a mitigar os efeitos das mudanças climáticas."
            }
        ]
    },
    {
        enunciado: "Você assiste a um documentário sobre a extinção de espécies e suas consequências. O que você sente?",
        alternativas: [
            {
                texto: "Fica triste ao perceber como as ações humanas afetam a biodiversidade e pensa em como pode ajudar.",
                afirmacao: "Você fica triste ao perceber como as ações humanas afetam a biodiversidade e pensa em como pode ajudar."
            },
            {
                texto: "Sente um impulso de se envolver em projetos de conservação e proteção de espécies ameaçadas.",
                afirmacao: "Você sente um impulso de se envolver em projetos de conservação e proteção de espécies ameaçadas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
