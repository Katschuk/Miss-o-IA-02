const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você percebe que um colega de classe está sendo isolado e alvo de piadas ofensivas em um grupo de mensagens da escola. Qual atitude você considera mais eficaz para enfrentar essa situação?",
        alternativas: [
            {
                texto: "Reportar as mensagens anonimamente à direção da escola e oferecer apoio privado à vítima.",
                afirmacao: "Você age com empatia e responsabilidade, buscando canais oficiais para proteger quem está vulnerável sem se expor desnecessariamente."
            },
            {
                texto: "Intervir diretamente no grupo, repreendendo os agressores e defendendo o colega publicamente.",
                afirmacao: "Você possui um forte senso de justiça imediata e coragem, posicionando-se de forma direta contra o preconceito e a hostilidade."
            }    
        ]
    },
    {
        enunciado: "Para erradicar o cyberbullying a longo prazo no ambiente escolar, qual dessas estratégias institucionais você acredita que traz melhores resultados práticos?",
        alternativas: [
            {
                texto: "Criar palestras obrigatórias sobre empatia digital e incluir o uso responsável das redes sociais no currículo das aulas.",
                afirmacao: "Você acredita no poder da educação preventiva e na conscientização contínua como as melhores ferramentas para mudar comportamentos."
            },
            {
                texto: "Implementar canais rígidos de denúncia e aplicar punições severas no regimento interno da escola para quem comete a agressão.",
                afirmacao: "Você prioriza a ordem e a segurança imediata, defendendo que regras claras e consequências firmes são essenciais para manter o respeito mútuo."
            }    
        ]
    },
    {
        enunciado: "Muitas vezes, as vítimas de cyberbullying sofrem em silêncio por medo ou vergonha. Na sua opinião, qual é o principal sinal de alerta que a comunidade escolar deve observar?",
        alternativas: [
            {
                texto: "Mudanças repentinas no comportamento do aluno, como isolamento social, queda brusca nas notas e recusa em ir à escola.",
                afirmacao: "Você demonstra um perfil extremamente observador e sensível às mudanças emocionais, entendendo que o sofrimento psicológico reflete na rotina."
            },
            {
                texto: "Uso excessivo ou reação de extrema ansiedade e irritabilidade sempre que o jovem interage com o celular ou computador.",
                afirmacao: "Você tem uma visão analítica sobre a relação dos jovens com a tecnologia, identificando que o comportamento digital costuma ser o primeiro reflexo de um problema virtual."
            }    
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Perfil de Conscientização Digital:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
