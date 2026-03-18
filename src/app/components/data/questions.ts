export interface Question {
    id: number;
    category: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    image?: string;
}

export const categories = [
    { id: 'sinalizacao', name: 'Sinalização', icon: '🚦' },
    { id: 'legislacao', name: 'Legislação', icon: '📋' },
    { id: 'direcao-defensiva', name: 'Direção Defensiva', icon: '🛡️' },
    { id: 'primeiros-socorros', name: 'Primeiros Socorros', icon: '⚕️' },
    { id: 'mecanica', name: 'Mecânica Básica', icon: '🔧' },
];

export const questions: Question[] = [
    {
        id: 1,
        category: 'sinalizacao',
        question: 'O que significa uma placa de trânsito na cor vermelha em formato circular?',
        options: [
            'Advertência de perigo',
            'Indicação de serviço',
            'Regulamentação - proibição',
            'Orientação de destino'
        ],
        correctAnswer: 2,
        explanation: 'Placas vermelhas circulares são de regulamentação e indicam proibição ou restrição.'
    },
    {
        id: 2,
        category: 'legislacao',
        question: 'Qual a velocidade máxima permitida em vias urbanas arteriais?',
        options: ['40 km/h', '50 km/h', '60 km/h', '80 km/h'],
        correctAnswer: 2,
        explanation: 'Em vias arteriais urbanas, a velocidade máxima é de 60 km/h, salvo sinalização em contrário.'
    },
    {
        id: 3,
        category: 'direcao-defensiva',
        question: 'Ao dirigir sob chuva forte, o condutor deve:',
        options: [
            'Aumentar a velocidade para sair logo da chuva',
            'Manter a mesma velocidade',
            'Reduzir a velocidade e aumentar a distância do veículo da frente',
            'Usar apenas as luzes de emergência'
        ],
        correctAnswer: 2,
        explanation: 'Em chuva forte, é essencial reduzir a velocidade e manter distância de segurança devido à diminuição da aderência e visibilidade.'
    },
    {
        id: 4,
        category: 'primeiros-socorros',
        question: 'Em caso de acidente com vítima inconsciente, a primeira atitude deve ser:',
        options: [
            'Mover a vítima para lugar seguro',
            'Verificar se há respiração e batimentos cardíacos',
            'Dar água à vítima',
            'Aplicar torniquete em possíveis ferimentos'
        ],
        correctAnswer: 1,
        explanation: 'A primeira verificação em uma vítima inconsciente deve ser sinais vitais (respiração e batimentos).'
    },
    {
        id: 5,
        category: 'mecanica',
        question: 'A calibragem dos pneus deve ser verificada:',
        options: [
            'Com os pneus quentes, após rodar',
            'Somente quando há perda visível de ar',
            'Com os pneus frios, antes de rodar',
            'Apenas uma vez por ano'
        ],
        correctAnswer: 2,
        explanation: 'A calibragem correta dos pneus deve ser verificada com os pneus frios para obter medição precisa.'
    },
    {
        id: 6,
        category: 'sinalizacao',
        question: 'Uma placa amarela em formato de losango indica:',
        options: [
            'Proibição',
            'Advertência de perigo',
            'Indicação de serviço',
            'Regulamentação'
        ],
        correctAnswer: 1,
        explanation: 'Placas amarelas em formato de losango são placas de advertência, alertando sobre perigos na via.'
    },
    {
        id: 7,
        category: 'legislacao',
        question: 'Dirigir sob efeito de álcool é considerado:',
        options: [
            'Infração leve',
            'Infração média',
            'Infração grave',
            'Infração gravíssima'
        ],
        correctAnswer: 3,
        explanation: 'Dirigir sob influência de álcool é infração gravíssima, com suspensão da CNH e multa.'
    },
    {
        id: 8,
        category: 'direcao-defensiva',
        question: 'A distância de segurança entre veículos deve ser:',
        options: [
            'Sempre de 2 metros',
            'O equivalente a 2 segundos de deslocamento',
            'Metade da velocidade do veículo',
            'Não há regra específica'
        ],
        correctAnswer: 1,
        explanation: 'A regra dos 2 segundos ajuda a manter uma distância segura para reagir a imprevistos.'
    },
    {
        id: 9,
        category: 'primeiros-socorros',
        question: 'Em caso de hemorragia, deve-se:',
        options: [
            'Aplicar torniquete imediatamente',
            'Fazer pressão direta no ferimento',
            'Lavar o ferimento com água',
            'Aplicar gelo no local'
        ],
        correctAnswer: 1,
        explanation: 'A pressão direta no ferimento é a primeira medida para estancar hemorragia externa.'
    },
    {
        id: 10,
        category: 'mecanica',
        question: 'A luz de advertência do sistema de freios acende no painel. O que fazer?',
        options: [
            'Continuar dirigindo normalmente',
            'Parar imediatamente e não usar o veículo',
            'Aumentar a velocidade para testar os freios',
            'Ignorar se os freios parecerem funcionar'
        ],
        correctAnswer: 1,
        explanation: 'Problemas no sistema de freios são extremamente perigosos. O veículo deve ser parado e verificado imediatamente.'
    },
    {
        id: 11,
        category: 'sinalizacao',
        question: 'Uma faixa contínua amarela no centro da pista indica:',
        options: [
            'Proibido estacionar',
            'Proibido ultrapassar',
            'Via preferencial',
            'Área escolar'
        ],
        correctAnswer: 1,
        explanation: 'Linha contínua amarela separa fluxos opostos e proíbe ultrapassagem.'
    },
    {
        id: 12,
        category: 'legislacao',
        question: 'Usar o celular ao volante sem dispositivo viva-voz é:',
        options: [
            'Permitido em vias urbanas',
            'Infração gravíssima',
            'Infração média',
            'Permitido se for rápido'
        ],
        correctAnswer: 1,
        explanation: 'Usar celular ao volante é infração gravíssima com 7 pontos na CNH e multa.'
    },
    {
        id: 13,
        category: 'direcao-defensiva',
        question: 'Ao se aproximar de uma faixa de pedestres, o condutor deve:',
        options: [
            'Acelerar para passar antes dos pedestres',
            'Buzinar para avisar os pedestres',
            'Reduzir a velocidade e dar preferência ao pedestre',
            'Manter a velocidade se não houver ninguém'
        ],
        correctAnswer: 2,
        explanation: 'Pedestres têm preferência na faixa. O condutor deve reduzir velocidade e parar se necessário.'
    },
    {
        id: 14,
        category: 'primeiros-socorros',
        question: 'Para ajudar uma vítima de engasgo, deve-se:',
        options: [
            'Dar água para a pessoa beber',
            'Aplicar a manobra de Heimlich',
            'Dar tapas nas costas fortemente',
            'Deitar a vítima'
        ],
        correctAnswer: 1,
        explanation: 'A manobra de Heimlich é o procedimento correto para desobstruir vias aéreas em caso de engasgo.'
    },
    {
        id: 15,
        category: 'mecanica',
        question: 'O nível do óleo do motor deve ser verificado:',
        options: [
            'Com o motor quente e ligado',
            'Com o motor frio e em superfície plana',
            'Somente na revisão',
            'Uma vez por ano'
        ],
        correctAnswer: 1,
        explanation: 'O óleo deve ser verificado com motor frio, desligado e em superfície plana para medição correta.'
    },
    {
        id: 16,
        category: 'sinalizacao',
        question: 'Placas azuis retangulares indicam:',
        options: [
            'Proibição',
            'Advertência',
            'Indicação de serviços auxiliares',
            'Regulamentação obrigatória'
        ],
        correctAnswer: 2,
        explanation: 'Placas azuis retangulares indicam serviços auxiliares como hospital, telefone, posto de gasolina, etc.'
    },
    {
        id: 17,
        category: 'legislacao',
        question: 'Quantos pontos na CNH levam à suspensão do direito de dirigir?',
        options: ['20 pontos', '30 pontos', '40 pontos', '50 pontos'],
        correctAnswer: 2,
        explanation: 'Ao atingir 40 pontos em 12 meses, o condutor tem o direito de dirigir suspenso.'
    },
    {
        id: 18,
        category: 'direcao-defensiva',
        question: 'Aquaplanagem é:',
        options: [
            'Derrapagem em pista molhada',
            'Perda de contato dos pneus com o solo devido a camada de água',
            'Deslizamento lateral do veículo',
            'Travamento dos freios'
        ],
        correctAnswer: 1,
        explanation: 'Aquaplanagem ocorre quando os pneus perdem contato com o asfalto devido ao acúmulo de água.'
    },
    {
        id: 19,
        category: 'primeiros-socorros',
        question: 'Em caso de queimadura, deve-se:',
        options: [
            'Aplicar pasta de dente',
            'Furar as bolhas',
            'Resfriar com água corrente',
            'Aplicar manteiga ou óleo'
        ],
        correctAnswer: 2,
        explanation: 'Queimaduras devem ser resfriadas com água corrente (não gelada) por 10-15 minutos.'
    },
    {
        id: 20,
        category: 'mecanica',
        question: 'Quando a temperatura do motor está alta, você deve:',
        options: [
            'Abrir o radiador imediatamente',
            'Continuar em velocidade baixa',
            'Parar o veículo e esperar esfriar antes de abrir o radiador',
            'Adicionar água fria no radiador quente'
        ],
        correctAnswer: 2,
        explanation: 'Motor superaquecido pode causar graves danos. Pare o veículo e espere esfriar antes de qualquer intervenção.'
    },
    {
        id: 21,
        category: 'sinalizacao',
        question: 'Semáforo com luz amarela intermitente indica:',
        options: [
            'Parar obrigatoriamente',
            'Atenção, reduza a velocidade',
            'Siga em frente',
            'Via interditada'
        ],
        correctAnswer: 1,
        explanation: 'Amarelo intermitente indica advertência - prossiga com atenção e velocidade reduzida.'
    },
    {
        id: 22,
        category: 'legislacao',
        question: 'É obrigatório o uso de cadeirinha para crianças até:',
        options: ['5 anos', '7 anos e meio', '10 anos', '12 anos'],
        correctAnswer: 2,
        explanation: 'Crianças até 10 anos devem ser transportadas no banco traseiro com dispositivo de retenção adequado.'
    },
    {
        id: 23,
        category: 'direcao-defensiva',
        question: 'Dirigir defensivamente significa:',
        options: [
            'Dirigir sempre abaixo da velocidade permitida',
            'Antecipar situações de perigo e agir preventivamente',
            'Buzinar constantemente para alertar outros',
            'Usar sempre a faixa da esquerda'
        ],
        correctAnswer: 1,
        explanation: 'Direção defensiva é prever e prevenir situações de risco no trânsito.'
    },
    {
        id: 24,
        category: 'primeiros-socorros',
        question: 'O que fazer ao encontrar uma vítima de acidente consciente com suspeita de fratura?',
        options: [
            'Movimentar o membro para testar',
            'Imobilizar e aguardar socorro especializado',
            'Tentar colocar o osso no lugar',
            'Aplicar gelo e liberar a vítima'
        ],
        correctAnswer: 1,
        explanation: 'Em suspeita de fratura, imobilize a região e aguarde socorro especializado. Não movimente o membro afetado.'
    },
    {
        id: 25,
        category: 'mecanica',
        question: 'A luz de advertência da bateria acesa indica:',
        options: [
            'Bateria com pouca carga',
            'Problema no sistema elétrico/alternador',
            'Necessidade de trocar a bateria',
            'Fusível queimado'
        ],
        correctAnswer: 1,
        explanation: 'A luz da bateria geralmente indica problema no alternador, que não está carregando adequadamente.'
    },
    {
        id: 26,
        category: 'sinalizacao',
        question: 'Linha tracejada branca na pista indica:',
        options: [
            'Proibido ultrapassar',
            'Permitido ultrapassar com segurança',
            'Acostamento',
            'Área de estacionamento'
        ],
        correctAnswer: 1,
        explanation: 'Linha tracejada permite ultrapassagem quando houver segurança.'
    },
    {
        id: 27,
        category: 'legislacao',
        question: 'Avançar o sinal vermelho é infração:',
        options: ['Leve', 'Média', 'Grave', 'Gravíssima'],
        correctAnswer: 3,
        explanation: 'Avançar sinal vermelho é infração gravíssima com 7 pontos na CNH.'
    },
    {
        id: 28,
        category: 'direcao-defensiva',
        question: 'O retrovisor deve ser ajustado:',
        options: [
            'Para ver a lateral do próprio veículo',
            'Para eliminar pontos cegos',
            'Apenas o retrovisor interno é importante',
            'De forma a ver apenas os veículos atrás'
        ],
        correctAnswer: 1,
        explanation: 'Retrovisores devem ser ajustados para minimizar pontos cegos e ampliar visão lateral e traseira.'
    },
    {
        id: 29,
        category: 'primeiros-socorros',
        question: 'Os números de telefone para emergências no Brasil são:',
        options: [
            '190 (Polícia) e 192 (SAMU)',
            '190 e 191',
            '192 e 193',
            '911'
        ],
        correctAnswer: 0,
        explanation: '190 é Polícia Militar, 192 é SAMU (ambulância), 193 é Bombeiros.'
    },
    {
        id: 30,
        category: 'mecanica',
        question: 'O rodízio de pneus deve ser feito:',
        options: [
            'Nunca é necessário',
            'A cada 10.000 km aproximadamente',
            'Apenas quando trocar os pneus',
            'Uma vez por ano'
        ],
        correctAnswer: 1,
        explanation: 'Rodízio de pneus deve ser feito a cada 10.000 km para desgaste uniforme e maior durabilidade.'
    },
];
