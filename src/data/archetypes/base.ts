export type ArchetypeCategory = "Classe" | "Trilha" | "Linhagem";

type ArchetypeTone =
  "arcano" | "marcial" | "astuto" | "devoto" | "natural" | "ancestral" | "sombrio" | "inventivo";

export type Archetype = {
  name: string;
  categoria: ArchetypeCategory;
  resumo: string;
  descricao: string;
  pontos_fortes: string[];
  pontos_fracos: string[];
};

const traits: Record<
  ArchetypeTone,
  { strengths: [string, string, string]; weaknesses: [string, string, string] }
> = {
  arcano: {
    strengths: [
      "Amplo repertório de magia e soluções criativas.",
      "Excelente controle de campo e utilidade fora de combate.",
      "Conhecimento capaz de revelar segredos e fraquezas ocultas.",
    ],
    weaknesses: [
      "Depende de concentração, preparo ou recursos místicos.",
      "É vulnerável quando encurralado em combate corpo a corpo.",
      "Erros de conjuração podem ter consequências imprevisíveis.",
    ],
  },
  marcial: {
    strengths: [
      "Presença dominante e grande eficiência em combate direto.",
      "Resistência para sustentar a linha de frente do grupo.",
      "Disciplina tática em situações de alta pressão.",
    ],
    weaknesses: [
      "Possui menos recursos contra ameaças distantes ou intangíveis.",
      "Seu desempenho depende de equipamento e posicionamento.",
      "Tende a resolver conflitos pela via mais arriscada.",
    ],
  },
  astuto: {
    strengths: [
      "Mobilidade, precisão e grande capacidade de improviso.",
      "Especialista em infiltração, leitura de riscos e oportunidades.",
      "Pode mudar o rumo de uma cena antes que o inimigo reaja.",
    ],
    weaknesses: [
      "Perde eficiência quando é obrigado a lutar de frente.",
      "Depende de informação, espaço e uma boa rota de saída.",
      "A confiança excessiva pode transformar ousadia em imprudência.",
    ],
  },
  devoto: {
    strengths: [
      "Proteção, cura e inspiração para manter aliados de pé.",
      "Convicção poderosa contra corrupção e forças sobrenaturais.",
      "Equilibra presença em combate com recursos de suporte.",
    ],
    weaknesses: [
      "Seus poderes podem exigir votos, ritos ou coerência moral.",
      "Conflitos de fé colocam suas decisões sob grande pressão.",
      "Carrega responsabilidades que raramente permitem neutralidade.",
    ],
  },
  natural: {
    strengths: [
      "Sintonia com ambientes selvagens e criaturas vivas.",
      "Ótima sobrevivência, percepção e adaptação ao terreno.",
      "Recursos versáteis para rastrear, proteger e controlar a batalha.",
    ],
    weaknesses: [
      "Ambientes artificiais podem limitar parte de seus recursos.",
      "Instintos fortes às vezes entram em choque com planos complexos.",
      "A defesa da natureza pode criar inimigos poderosos.",
    ],
  },
  ancestral: {
    strengths: [
      "Herança singular com sentidos, resistência ou talentos incomuns.",
      "Forte identidade cultural e memória coletiva.",
      "Adaptação excepcional ao ambiente de origem.",
    ],
    weaknesses: [
      "Costumes próprios podem gerar atrito com outros povos.",
      "Sua herança costuma atrair preconceito, cobiça ou rivalidades.",
      "Fora de seu território, certas vantagens perdem impacto.",
    ],
  },
  sombrio: {
    strengths: [
      "Poder intimidador e afinidade com forças proibidas.",
      "Grande resistência a medo, corrupção e ameaças sobrenaturais.",
      "Recursos capazes de enfraquecer o inimigo antes do golpe final.",
    ],
    weaknesses: [
      "Seu poder cobra um preço físico, espiritual ou social.",
      "É recebido com desconfiança mesmo quando age pelo bem.",
      "Ceder à própria fonte de poder pode apagar seus antigos limites.",
    ],
  },
  inventivo: {
    strengths: [
      "Cria ferramentas e estratégias sob medida para cada desafio.",
      "Excelente versatilidade entre exploração, suporte e combate.",
      "Transforma conhecimento prático em vantagens concretas.",
    ],
    weaknesses: [
      "Precisa de tempo, materiais e manutenção para operar no auge.",
      "Falhas técnicas podem comprometer planos muito elaborados.",
      "Suas criações despertam interesse de rivais e oportunistas.",
    ],
  },
};

export function profile(
  name: string,
  categoria: ArchetypeCategory,
  tone: ArchetypeTone,
  resumo: string,
  descricao: string,
): Archetype {
  const { strengths, weaknesses } = traits[tone];

  return {
    name,
    categoria,
    resumo,
    descricao,
    pontos_fortes: [...strengths],
    pontos_fracos: [...weaknesses],
  };
}
