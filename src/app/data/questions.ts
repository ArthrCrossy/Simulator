export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    category: "Legislação de Trânsito",
    question: "Segundo o Código de Trânsito Brasileiro, qual a velocidade máxima permitida para vias locais?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation: "Em vias locais, a velocidade máxima é de 30 km/h, conforme estabelecido no CTB."
  },
  {
    id: 2,
    category: "Direção Defensiva",
    question: "O que é direção defensiva?",
    options: [
      "Dirigir com pressa para evitar congestionamentos",
      "Dirigir de forma a evitar acidentes, apesar das ações incorretas dos outros",
      "Dirigir apenas em vias de alta velocidade",
      "Dirigir com farol alto durante o dia"
    ],
    correctAnswer: 1,
    explanation: "Direção defensiva é a forma de conduzir que permite reconhecer antecipadamente situações de perigo."
  },
  {
    id: 3,
    category: "Sinalização",
    question: "Qual o significado da placa de regulamentação de cor vermelha com uma faixa diagonal?",
    options: [
      "Pare obrigatório",
      "Proibido estacionar",
      "Sentido proibido",
      "Proibido ultrapassar"
    ],
    correctAnswer: 1,
    explanation: "A placa vermelha circular com faixa diagonal indica proibido estacionar."
  },
  {
    id: 4,
    category: "Primeiros Socorros",
    question: "Em caso de acidente com vítimas, qual deve ser a primeira providência?",
    options: [
      "Remover a vítima do local",
      "Sinalizar o local do acidente",
      "Dar água à vítima",
      "Movimentar a vítima para verificar ferimentos"
    ],
    correctAnswer: 1,
    explanation: "A primeira providência é sinalizar o local para evitar novos acidentes."
  },
  {
    id: 5,
    category: "Legislação de Trânsito",
    question: "A partir de quantos pontos na CNH o condutor tem a habilitação suspensa?",
    options: ["10 pontos", "20 pontos", "30 pontos", "40 pontos"],
    correctAnswer: 3,
    explanation: "A suspensão da CNH ocorre quando o condutor atinge 40 pontos no período de 12 meses."
  },
  {
    id: 6,
    category: "Meio Ambiente",
    question: "Qual atitude contribui para a preservação do meio ambiente no trânsito?",
    options: [
      "Acelerar e frear bruscamente",
      "Manter o motor regulado",
      "Usar buzina constantemente",
      "Trafegar sempre em alta velocidade"
    ],
    correctAnswer: 1,
    explanation: "Manter o motor regulado reduz a emissão de poluentes e economiza combustível."
  },
  {
    id: 7,
    category: "Direção Defensiva",
    question: "A distância de segurança entre veículos deve ser:",
    options: [
      "Sempre a mesma, independente da velocidade",
      "Maior quanto maior for a velocidade",
      "Menor em dias chuvosos",
      "Desnecessária em vias urbanas"
    ],
    correctAnswer: 1,
    explanation: "Quanto maior a velocidade, maior deve ser a distância de segurança entre os veículos."
  },
  {
    id: 8,
    category: "Sinalização",
    question: "As placas de advertência têm qual formato e cor predominante?",
    options: [
      "Circular, vermelha",
      "Quadrada, azul",
      "Quadrada, amarela",
      "Retangular, verde"
    ],
    correctAnswer: 2,
    explanation: "As placas de advertência são quadradas na posição de losango, com fundo amarelo."
  },
  {
    id: 9,
    category: "Legislação de Trânsito",
    question: "É permitido dirigir usando fones de ouvido?",
    options: [
      "Sim, desde que seja em apenas um ouvido",
      "Sim, em qualquer situação",
      "Não, é uma infração",
      "Sim, apenas em rodovias"
    ],
    correctAnswer: 2,
    explanation: "Dirigir usando fones de ouvido é infração média, pois prejudica a atenção no trânsito."
  },
  {
    id: 10,
    category: "Primeiros Socorros",
    question: "Em caso de sangramento intenso, o que fazer?",
    options: [
      "Fazer torniquete imediatamente",
      "Comprimir o ferimento com pano limpo",
      "Aplicar gelo diretamente na ferida",
      "Dar líquidos à vítima"
    ],
    correctAnswer: 1,
    explanation: "O correto é fazer compressão direta no ferimento com pano limpo para estancar o sangue."
  },
  {
    id: 11,
    category: "Direção Defensiva",
    question: "Ao dirigir sob chuva intensa, o condutor deve:",
    options: [
      "Aumentar a velocidade para chegar logo ao destino",
      "Reduzir a velocidade e aumentar a distância de segurança",
      "Manter a mesma velocidade",
      "Acender as luzes de neblina traseiras"
    ],
    correctAnswer: 1,
    explanation: "Em chuva forte, deve-se reduzir a velocidade e aumentar a distância do veículo da frente."
  },
  {
    id: 12,
    category: "Legislação de Trânsito",
    question: "A ultrapassagem pela direita é permitida quando:",
    options: [
      "O veículo da frente estiver em velocidade reduzida",
      "O veículo da frente sinalizar que vai virar à esquerda",
      "Em qualquer situação em vias urbanas",
      "Nunca é permitida"
    ],
    correctAnswer: 1,
    explanation: "A ultrapassagem pela direita é permitida quando o veículo da frente indica conversão à esquerda."
  },
  {
    id: 13,
    category: "Sinalização",
    question: "A faixa amarela contínua no meio da pista indica:",
    options: [
      "Ultrapassagem permitida",
      "Ultrapassagem proibida",
      "Estacionamento regulamentado",
      "Área de pedestres"
    ],
    correctAnswer: 1,
    explanation: "A linha amarela contínua separa fluxos opostos e indica que ultrapassagem é proibida."
  },
  {
    id: 14,
    category: "Meio Ambiente",
    question: "Jogar lixo pela janela do veículo:",
    options: [
      "É permitido em rodovias",
      "É infração média",
      "É permitido se for biodegradável",
      "Não é regulamentado"
    ],
    correctAnswer: 1,
    explanation: "Jogar lixo pela janela é infração média e prejudica o meio ambiente."
  },
  {
    id: 15,
    category: "Primeiros Socorros",
    question: "Uma vítima em estado de choque deve:",
    options: [
      "Ser mantida em pé",
      "Ser deitada com as pernas elevadas",
      "Receber água gelada",
      "Ser movimentada constantemente"
    ],
    correctAnswer: 1,
    explanation: "A vítima em choque deve ser deitada com pernas elevadas para melhorar a circulação."
  },
  {
    id: 16,
    category: "Legislação de Trânsito",
    question: "Ao avistar um ônibus parado no ponto com sinalização indicando saída, o condutor deve:",
    options: [
      "Acelerar para passar antes do ônibus",
      "Reduzir a velocidade e dar passagem",
      "Buzinar para alertar o motorista",
      "Manter a velocidade"
    ],
    correctAnswer: 1,
    explanation: "O condutor deve reduzir a velocidade e dar passagem ao ônibus que sinaliza sua saída."
  },
  {
    id: 17,
    category: "Direção Defensiva",
    question: "O uso do cinto de segurança é obrigatório:",
    options: [
      "Apenas em rodovias",
      "Apenas para o motorista",
      "Para todos os ocupantes do veículo",
      "Apenas em viagens longas"
    ],
    correctAnswer: 2,
    explanation: "O cinto de segurança é obrigatório para todos os ocupantes do veículo, em qualquer via."
  },
  {
    id: 18,
    category: "Sinalização",
    question: "As placas azuis e retangulares são de:",
    options: [
      "Advertência",
      "Regulamentação",
      "Indicação",
      "Obras"
    ],
    correctAnswer: 2,
    explanation: "Placas azuis retangulares são de indicação, fornecendo informações úteis aos condutores."
  },
  {
    id: 19,
    category: "Legislação de Trânsito",
    question: "A Carteira Nacional de Habilitação (CNH) tem validade de:",
    options: [
      "5 anos para condutores de qualquer idade",
      "10 anos para condutores até 50 anos",
      "5 anos para condutores acima de 65 anos",
      "Validade variável conforme a idade"
    ],
    correctAnswer: 3,
    explanation: "A validade da CNH varia: 10 anos (até 50 anos), 5 anos (50-70 anos) e 3 anos (acima de 70)."
  },
  {
    id: 20,
    category: "Primeiros Socorros",
    question: "No atendimento a vítimas de acidente, deve-se:",
    options: [
      "Atender primeiro as vítimas que gritam",
      "Atender primeiro as vítimas inconscientes",
      "Dar água para todas as vítimas",
      "Remover capacetes de motociclistas"
    ],
    correctAnswer: 1,
    explanation: "Vítimas inconscientes têm prioridade, pois podem ter comprometimento das vias aéreas."
  },
  {
    id: 21,
    category: "Direção Defensiva",
    question: "O condutor defensivo deve:",
    options: [
      "Confiar que os outros motoristas seguirão as regras",
      "Estar sempre atento e prever situações de perigo",
      "Dirigir acima da velocidade para evitar ser ultrapassado",
      "Usar o celular apenas em semáforos"
    ],
    correctAnswer: 1,
    explanation: "O condutor defensivo antecipa perigos e age preventivamente, não confiando apenas nos outros."
  },
  {
    id: 22,
    category: "Sinalização",
    question: "A placa R-1 (PARE) indica que o condutor deve:",
    options: [
      "Reduzir a velocidade apenas",
      "Parar completamente antes da faixa",
      "Parar apenas se houver tráfego",
      "Buzinar antes de prosseguir"
    ],
    correctAnswer: 1,
    explanation: "A placa PARE obriga o condutor a parar completamente o veículo antes de prosseguir."
  },
  {
    id: 23,
    category: "Legislação de Trânsito",
    question: "Dirigir sob efeito de álcool com concentração igual ou superior a 0,34 mg/L no ar alveolar é:",
    options: [
      "Infração grave",
      "Infração gravíssima",
      "Crime de trânsito",
      "Infração leve"
    ],
    correctAnswer: 2,
    explanation: "Dirigir com concentração de álcool igual ou superior a 0,34 mg/L é crime previsto no CTB."
  },
  {
    id: 24,
    category: "Meio Ambiente",
    question: "Para economizar combustível e reduzir a poluição, deve-se:",
    options: [
      "Acelerar e frear constantemente",
      "Manter velocidade constante",
      "Deixar o motor ligado em paradas longas",
      "Encher o tanque pela manhã"
    ],
    correctAnswer: 1,
    explanation: "Manter velocidade constante reduz o consumo de combustível e a emissão de poluentes."
  },
  {
    id: 25,
    category: "Primeiros Socorros",
    question: "Em caso de queimadura, deve-se:",
    options: [
      "Aplicar pasta de dente",
      "Furar as bolhas",
      "Resfriar com água corrente",
      "Aplicar manteiga"
    ],
    correctAnswer: 2,
    explanation: "O correto é resfriar a queimadura com água corrente por cerca de 10 minutos."
  },
  {
    id: 26,
    category: "Direção Defensiva",
    question: "Ao sentir sono durante a direção, o condutor deve:",
    options: [
      "Abrir os vidros e continuar",
      "Aumentar o volume do som",
      "Parar em local seguro e descansar",
      "Tomar café e continuar dirigindo"
    ],
    correctAnswer: 2,
    explanation: "A única solução eficaz para o sono é parar em local seguro e descansar adequadamente."
  },
  {
    id: 27,
    category: "Sinalização",
    question: "A sinalização horizontal tracejada de cor amarela indica:",
    options: [
      "Proibido estacionar",
      "Ultrapassagem permitida",
      "Separação de fluxos de mesmo sentido",
      "Área de pedestres"
    ],
    correctAnswer: 1,
    explanation: "A linha amarela tracejada indica que a ultrapassagem é permitida no trecho."
  },
  {
    id: 28,
    category: "Legislação de Trânsito",
    question: "Trafegar com farol queimado é infração:",
    options: [
      "Leve",
      "Média",
      "Grave",
      "Gravíssima"
    ],
    correctAnswer: 2,
    explanation: "Trafegar com farol queimado é infração grave, pois compromete a segurança."
  },
  {
    id: 29,
    category: "Primeiros Socorros",
    question: "Ao prestar socorro, o número do SAMU é:",
    options: [
      "190",
      "192",
      "193",
      "911"
    ],
    correctAnswer: 1,
    explanation: "O número do SAMU (Serviço de Atendimento Móvel de Urgência) é 192."
  },
  {
    id: 30,
    category: "Direção Defensiva",
    question: "Ao aproximar-se de uma faixa de pedestres com pessoas aguardando para atravessar, o condutor deve:",
    options: [
      "Acelerar para passar primeiro",
      "Reduzir velocidade e parar se necessário",
      "Buzinar para que os pedestres aguardem",
      "Desviar para outra faixa"
    ],
    correctAnswer: 1,
    explanation: "O condutor deve reduzir a velocidade e parar, dando prioridade aos pedestres."
  }
];
