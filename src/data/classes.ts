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
      "Amplo repertÃ³rio de magia e soluÃ§Ãµes criativas.",
      "Excelente controle de campo e utilidade fora de combate.",
      "Conhecimento capaz de revelar segredos e fraquezas ocultas.",
    ],
    weaknesses: [
      "Depende de concentraÃ§Ã£o, preparo ou recursos mÃ­sticos.",
      "Ã‰ vulnerÃ¡vel quando encurralado em combate corpo a corpo.",
      "Erros de conjuraÃ§Ã£o podem ter consequÃªncias imprevisÃ­veis.",
    ],
  },
  marcial: {
    strengths: [
      "PresenÃ§a dominante e grande eficiÃªncia em combate direto.",
      "ResistÃªncia para sustentar a linha de frente do grupo.",
      "Disciplina tÃ¡tica em situaÃ§Ãµes de alta pressÃ£o.",
    ],
    weaknesses: [
      "Possui menos recursos contra ameaÃ§as distantes ou intangÃ­veis.",
      "Seu desempenho depende de equipamento e posicionamento.",
      "Tende a resolver conflitos pela via mais arriscada.",
    ],
  },
  astuto: {
    strengths: [
      "Mobilidade, precisÃ£o e grande capacidade de improviso.",
      "Especialista em infiltraÃ§Ã£o, leitura de riscos e oportunidades.",
      "Pode mudar o rumo de uma cena antes que o inimigo reaja.",
    ],
    weaknesses: [
      "Perde eficiÃªncia quando Ã© obrigado a lutar de frente.",
      "Depende de informaÃ§Ã£o, espaÃ§o e uma boa rota de saÃ­da.",
      "A confianÃ§a excessiva pode transformar ousadia em imprudÃªncia.",
    ],
  },
  devoto: {
    strengths: [
      "ProteÃ§Ã£o, cura e inspiraÃ§Ã£o para manter aliados de pÃ©.",
      "ConvicÃ§Ã£o poderosa contra corrupÃ§Ã£o e forÃ§as sobrenaturais.",
      "Equilibra presenÃ§a em combate com recursos de suporte.",
    ],
    weaknesses: [
      "Seus poderes podem exigir votos, ritos ou coerÃªncia moral.",
      "Conflitos de fÃ© colocam suas decisÃµes sob grande pressÃ£o.",
      "Carrega responsabilidades que raramente permitem neutralidade.",
    ],
  },
  natural: {
    strengths: [
      "Sintonia com ambientes selvagens e criaturas vivas.",
      "Ã“tima sobrevivÃªncia, percepÃ§Ã£o e adaptaÃ§Ã£o ao terreno.",
      "Recursos versÃ¡teis para rastrear, proteger e controlar a batalha.",
    ],
    weaknesses: [
      "Ambientes artificiais podem limitar parte de seus recursos.",
      "Instintos fortes Ã s vezes entram em choque com planos complexos.",
      "A defesa da natureza pode criar inimigos poderosos.",
    ],
  },
  ancestral: {
    strengths: [
      "HeranÃ§a singular com sentidos, resistÃªncia ou talentos incomuns.",
      "Forte identidade cultural e memÃ³ria coletiva.",
      "AdaptaÃ§Ã£o excepcional ao ambiente de origem.",
    ],
    weaknesses: [
      "Costumes prÃ³prios podem gerar atrito com outros povos.",
      "Sua heranÃ§a costuma atrair preconceito, cobiÃ§a ou rivalidades.",
      "Fora de seu territÃ³rio, certas vantagens perdem impacto.",
    ],
  },
  sombrio: {
    strengths: [
      "Poder intimidador e afinidade com forÃ§as proibidas.",
      "Grande resistÃªncia a medo, corrupÃ§Ã£o e ameaÃ§as sobrenaturais.",
      "Recursos capazes de enfraquecer o inimigo antes do golpe final.",
    ],
    weaknesses: [
      "Seu poder cobra um preÃ§o fÃ­sico, espiritual ou social.",
      "Ã‰ recebido com desconfianÃ§a mesmo quando age pelo bem.",
      "Ceder Ã  prÃ³pria fonte de poder pode apagar seus antigos limites.",
    ],
  },
  inventivo: {
    strengths: [
      "Cria ferramentas e estratÃ©gias sob medida para cada desafio.",
      "Excelente versatilidade entre exploraÃ§Ã£o, suporte e combate.",
      "Transforma conhecimento prÃ¡tico em vantagens concretas.",
    ],
    weaknesses: [
      "Precisa de tempo, materiais e manutenÃ§Ã£o para operar no auge.",
      "Falhas tÃ©cnicas podem comprometer planos muito elaborados.",
      "Suas criaÃ§Ãµes despertam interesse de rivais e oportunistas.",
    ],
  },
};

function profile(
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

const classes: Archetype[] = [
  profile(
    "Mago",
    "Classe",
    "arcano",
    "Erudito das artes arcanas que transforma estudo, preparo e imaginaÃ§Ã£o em magia versÃ¡til.",
    "O Mago dedica anos a decifrar grimÃ³rios, sÃ­mbolos e leis invisÃ­veis. Cada feitiÃ§o Ã© uma fÃ³rmula dominada com paciÃªncia, capaz de alterar o campo de batalha ou solucionar enigmas que a forÃ§a jamais venceria.\n\nSua verdadeira arma Ã© o repertÃ³rio: quanto mais conhece o perigo, melhor se prepara para enfrentÃ¡-lo. Em troca dessa versatilidade, precisa proteger a concentraÃ§Ã£o e escolher cuidadosamente quais mistÃ©rios levarÃ¡ para a prÃ³xima jornada.",
  ),
  profile(
    "Arcanista",
    "Classe",
    "arcano",
    "Pesquisador de fenÃ´menos mÃ¡gicos que combina teoria rigorosa com experimentaÃ§Ã£o ousada.",
    "Arcanistas tratam a magia como uma ciÃªncia viva. Eles registram anomalias, desmontam encantamentos e constroem novas tÃ©cnicas a partir de fragmentos encontrados em ruÃ­nas, observatÃ³rios e laboratÃ³rios esquecidos.\n\nEm aventura, alternam anÃ¡lise e improviso com naturalidade. A busca incessante por respostas os torna aliados valiosos, embora a curiosidade possa levÃ¡-los alÃ©m dos limites que pessoas prudentes aceitariam cruzar.",
  ),
  profile(
    "Feiticeiro",
    "Classe",
    "arcano",
    "Conjurador de poder inato cuja magia brota do sangue, da alma ou de uma heranÃ§a extraordinÃ¡ria.",
    "Para o Feiticeiro, magia nÃ£o Ã© matÃ©ria de estudo: Ã© instinto. EmoÃ§Ãµes, gestos e vontade fazem a energia responder, permitindo conjuraÃ§Ãµes rÃ¡pidas e intensas mesmo sem livros ou longos rituais.\n\nEssa conexÃ£o Ã­ntima produz um estilo marcante e pessoal. O desafio estÃ¡ em controlar aquilo que nasceu com ele, pois o mesmo impulso capaz de salvar companheiros pode escapar ao domÃ­nio em momentos de medo ou fÃºria.",
  ),
  profile(
    "Elementalista",
    "Classe",
    "arcano",
    "Mestre das forÃ§as primordiais que conduz fogo, Ã¡gua, ar e terra como extensÃµes da prÃ³pria vontade.",
    "O Elementalista estuda o equilÃ­brio das forÃ§as que moldaram o mundo. Em combate, levanta muralhas de pedra, convoca rajadas, apaga incÃªndios ou transforma uma centelha em uma tempestade abrasadora.\n\nCada elemento pede uma postura diferente, e a excelÃªncia nasce da transiÃ§Ã£o entre eles. Especialistas muito focados alcanÃ§am poder devastador, mas correm o risco de se tornar previsÃ­veis diante de adversÃ¡rios preparados.",
  ),
  profile(
    "Ilusionista",
    "Classe",
    "arcano",
    "TecelÃ£o de aparÃªncias que vence confrontos confundindo sentidos, certezas e expectativas.",
    "Ilusionistas moldam luz, som e percepÃ§Ã£o para criar realidades convincentes. Uma ponte inexistente, um exÃ©rcito imaginÃ¡rio ou um simples sussurro no lugar certo pode decidir uma batalha antes do primeiro golpe.\n\nSeu talento floresce quando hÃ¡ espaÃ§o para criatividade e leitura do oponente. Criaturas sem medo, sentidos incomuns ou provas fÃ­sicas diretas podem atravessar seus truques e expor a fragilidade por trÃ¡s do espetÃ¡culo.",
  ),
  profile(
    "Mago Vermelho",
    "Trilha",
    "arcano",
    "Conjurador de guerra especializado em energia Ã­gnea, pressÃ£o ofensiva e domÃ­nio pela presenÃ§a.",
    "A tradiÃ§Ã£o vermelha ensina que a magia deve ser sentida antes de ser compreendida. Seus adeptos canalizam calor, impacto e coragem agressiva em feitiÃ§os que quebram formaÃ§Ãµes e obrigam o inimigo a recuar.\n\nO poder explosivo exige disciplina para nÃ£o consumir aliados, recursos ou o prÃ³prio conjurador. Magos Vermelhos experientes aprendem que controlar a chama Ã© mais importante do que simplesmente fazÃª-la crescer.",
  ),
  profile(
    "Mago Verde",
    "Trilha",
    "natural",
    "GuardiÃ£o arcano que entrelaÃ§a feitiÃ§os com os ciclos de crescimento, cura e renovaÃ§Ã£o.",
    "Magos Verdes escutam a seiva, os fungos e as raÃ­zes como outros escutam mestres. Sua magia fortalece corpos, recupera terrenos feridos e faz a vegetaÃ§Ã£o responder com velocidade sobrenatural.\n\nEles prosperam em jornadas longas, nas quais sua sustentaÃ§Ã£o se torna decisiva. Em lugares estÃ©reis ou contra destruiÃ§Ã£o indiscriminada, podem precisar sacrificar poder imediato para preservar o equilÃ­brio que juraram defender.",
  ),
  profile(
    "Cronomante",
    "Trilha",
    "arcano",
    "Mago do tempo capaz de alterar ritmos, antecipar instantes e explorar brechas entre causa e efeito.",
    "Cronomantes percebem o mundo como uma tapeÃ§aria de possibilidades. Eles atrasam golpes, aceleram aliados e vislumbram ecos de futuros prÃ³ximos, criando vantagens que parecem impossÃ­veis aos olhos comuns.\n\nO tempo, porÃ©m, nunca Ã© uma ferramenta dÃ³cil. InterferÃªncias excessivas causam exaustÃ£o, paradoxos e memÃ³rias desencontradas, por isso os melhores praticantes agem com precisÃ£o e reverÃªncia.",
  ),
  profile(
    "Mago Amarelo",
    "Trilha",
    "arcano",
    "Especialista em relÃ¢mpagos, velocidade e descargas que atravessam as defesas mais rÃ­gidas.",
    "A escola amarela converte movimento e tensÃ£o em eletricidade arcana. Seus magos cruzam o campo em clarÃµes, interrompem conjuraÃ§Ãµes e encadeiam descargas entre inimigos prÃ³ximos.\n\nTamanho poder exige controle impecÃ¡vel do ritmo. Ambientes condutores, aliados mal posicionados e adversÃ¡rios resistentes Ã  eletricidade podem transformar sua maior vantagem em um problema urgente.",
  ),
  profile(
    "Mago Azul",
    "Trilha",
    "arcano",
    "Estrategista de gelo e Ã¡gua que controla distÃ¢ncias, protege aliados e dita o ritmo do confronto.",
    "Magos Azuis valorizam clareza, paciÃªncia e domÃ­nio do terreno. Congelam passagens, erguem barreiras translÃºcidas e manipulam correntes para separar inimigos ou abrir rotas seguras.\n\nSeu estilo recompensa planejamento e sangue-frio, mas pode perder intensidade sob pressÃ£o constante. Calor extremo e mudanÃ§as repentinas de posiÃ§Ã£o desafiam a estabilidade de suas construÃ§Ãµes.",
  ),
  profile(
    "Arquimago",
    "Trilha",
    "arcano",
    "Veterano das altas artes que une escolas diferentes em uma visÃ£o madura e quase lendÃ¡ria da magia.",
    "Arquimagos ultrapassaram a simples acumulaÃ§Ã£o de feitiÃ§os. Eles reconhecem princÃ­pios comuns entre tradiÃ§Ãµes rivais e adaptam conjuraÃ§Ãµes com uma seguranÃ§a adquirida ao longo de incontÃ¡veis riscos.\n\nSua influÃªncia abre portas em academias e cortes, mas tambÃ©m atrai responsabilidades e inimigos Ã  altura. Quanto maior o poder, mais graves se tornam as consequÃªncias de cada decisÃ£o.",
  ),
  profile(
    "Animago",
    "Trilha",
    "natural",
    "Metamorfo treinado que assume formas animais para explorar, perseguir e sobreviver.",
    "Animagos estudam anatomia e comportamento atÃ© apagar a fronteira entre observador e criatura. Cada forma oferece sentidos, movimentos e instintos prÃ³prios, Ãºteis tanto para infiltraÃ§Ã£o quanto para combate.\n\nA transformaÃ§Ã£o exige equilÃ­brio interior. Permanecer muito tempo sob outro corpo pode embaralhar hÃ¡bitos, emoÃ§Ãµes e identidade, enquanto ambientes inesperados tornam certas formas pouco adequadas.",
  ),
  profile(
    "Druida",
    "Classe",
    "natural",
    "GuardiÃ£o dos ciclos naturais que conjuga magia primal, transformaÃ§Ã£o e sabedoria ancestral.",
    "Druidas servem ao equilÃ­brio entre crescimento, morte e renascimento. Convocam raÃ­zes, conversam com animais, leem sinais do clima e assumem formas selvagens quando a harmonia precisa de garras.\n\nSua forÃ§a nasce do vÃ­nculo com o mundo vivo, nÃ£o de uma ideia ingÃªnua de paz. Eles podem ser curadores pacientes ou tempestades implacÃ¡veis, sempre cobrando respeito por aquilo que nÃ£o pode se defender sozinho.",
  ),
  profile(
    "Metamorfo",
    "Classe",
    "natural",
    "Especialista em alterar o prÃ³prio corpo para responder a perigos com anatomias e instintos diferentes.",
    "O Metamorfo transforma ossos, pele e sentidos como quem troca de ferramentas. Pode ganhar asas para cruzar um abismo, couraÃ§a para suportar um golpe ou feiÃ§Ãµes alheias para atravessar uma corte em silÃªncio.\n\nA versatilidade tem um custo Ã­ntimo: mudanÃ§as frequentes pressionam corpo e memÃ³ria. Manter um propÃ³sito claro Ã© essencial para que todas essas formas continuem pertencendo Ã  mesma pessoa.",
  ),
  profile(
    "Necromante",
    "Classe",
    "sombrio",
    "Estudioso da morte que manipula essÃªncia vital, espÃ­ritos e servos reanimados.",
    "Necromantes investigam a fronteira que separa corpo, memÃ³ria e alma. Alguns buscam vencer doenÃ§as ou conversar com os mortos; outros constroem exÃ©rcitos silenciosos e tratam vidas como matÃ©ria-prima.\n\nIndependentemente da intenÃ§Ã£o, seu ofÃ­cio desperta temor. Lidar com ecos de quem partiu exige limites firmes, pois toda concessÃ£o ao poder fÃ¡cil torna mais difÃ­cil lembrar por que a pesquisa comeÃ§ou.",
  ),
  profile(
    "Invocador",
    "Classe",
    "arcano",
    "Conjurador que abre passagens e firma pactos para trazer criaturas, armas ou forÃ§as de outros planos.",
    "Invocadores raramente enfrentam um desafio sozinhos. Por cÃ­rculos, nomes verdadeiros e acordos precisos, chamam aliados extraordinÃ¡rios capazes de lutar, explorar ou executar tarefas impossÃ­veis.\n\nCada chamado cria uma relaÃ§Ã£o de poder. Uma entidade mal compreendida pode interpretar ordens de modo perigoso, e manter vÃ¡rias presenÃ§as no mundo exige concentraÃ§Ã£o e negociaÃ§Ã£o constantes.",
  ),
  profile(
    "Bardo",
    "Classe",
    "astuto",
    "Artista aventureiro que transforma mÃºsica, memÃ³ria e carisma em magia capaz de mudar destinos.",
    "Bardos carregam histÃ³rias entre povos e fazem delas instrumentos de poder. Uma canÃ§Ã£o pode fortalecer a coragem, desmontar uma mentira ou dar ritmo perfeito ao avanÃ§o de companheiros.\n\nVersÃ¡teis por natureza, brilham ao conectar pessoas e oportunidades. Como dominam muitas artes sem se prender a uma sÃ³, dependem de criatividade para competir com especialistas em seus prÃ³prios terrenos.",
  ),
  profile(
    "DanÃ§arino das Sombras",
    "Trilha",
    "astuto",
    "IntÃ©rprete letal que mistura danÃ§a, encanto e movimento pelas bordas da escuridÃ£o.",
    "DanÃ§arinos das Sombras convertem passos em distraÃ§Ã£o e ritmo em precisÃ£o. Eles desaparecem entre focos de luz, atravessam a guarda inimiga e conduzem olhar×Í´öÚ$z{-®éÜj×VV6–F÷2ÂVæ6öçG&Ò&V7W'6÷2–×&÷l:fV—2RFVfVæFVÒ6WW2&Vl;¦v–÷26öÒW'6—7L:¦æ6–FW'&—F÷&–ÂåÆåÆäÇW¢–çFVç6RW7:v÷2&W'F÷2FW6f–Ò6WW26VçF–F÷2RW7G&L:–v–2âò—6öÆÖVçFò7VÇGW&ÂFÖ,:–ÒöFRF÷&æ"6†V—&÷2ÂvW7F÷2R6÷7GVÖW27V'FW',:&æV÷2F–l:Ö6V—2FR6öæ6–Æ–"6öÒ6ö6–VFFW2F7WW&l:Ö6–Râ"À¢’À¢&öf–ÆR€¢$†ö&vö&Æ–â"À¢$Æ–æ†vVÒ"À¢&Ö&6–Â"À¢$vö&Æ–æö–FRF—66—Æ–æFòVRfÆ÷&—¦f÷&Ö:|:6òÂÆö|:×7F–6RW†6VÌ:¦æ6–6öÆWF—f6–ÖFò†W&ü:×6Öò—6öÆFòâ"À¢$†ö&vö&Æ–ç26öç7G&öVÒ6ö×æ†–2÷&væ—¦F2VÒVR6FgVì:|:6ò7W7FVçF,;7†–ÖâG&V–æÖVçFòÂWV—ÖVçFòR6ö×Væ–6:|:6òW&Ö—FVÒVRw'W÷2WVVæ÷2GVVÒ6öÒVf–6œ:¦æ6–Ö–Æ—F"–×&W76–öæçFRåÆåÆä†–W&'V–,:Öv–FöFR7Vfö6"–æ–6–F—fR6ö×—Œ:6òâf÷&FR7V6FV–FR6öÖæFòÂ&V6—6Ò&VæFW"6ö÷W&"6VÒG&ç6f÷&Ö"FöF&VÆ:|:6òVÒ÷7FòÂ÷&FVÒRFWfW"â"À¢’À¢&öf–ÆR€¢$F÷VÆ|:FævW""À¢$Æ–æ†vVÒ"À¢&7GWFò"À¢$ÖWFÖ÷&fò6ö6–Â6¢FR6÷–",:¦æ6–2Rf÷¦W2Âf—fVæFòVçG&R–FVçF–FFW2Â6Vw&VF÷2R6öæf–ì:vâ"À¢$F÷VÆ|:FævW'2ö'6W'fÒW‡&W7<;VW2RŒ:&—F÷26öÒ&V6—<:6ò–æ6ö×VÒâ×VFì:vFRf÷&ÖW&Ö—FR–æf–ÇG&:|:6òÂgVvRF—ÆöÖ6–6ö"W'7V7F—f2VRæVæ‡VÒ&÷7Fòf—†òöfW&V6W&–åÆåÆä<;7–ì:6ò6öæ6VFRÖVÜ;7&–2æVÒl:Öæ7VÆ÷2fW&FFV—&÷2âÖçFW"×V—F2–FVçF–FFW2ÖV:vò6Vç6òFR6’ÂRVÇVW"FW66ö&W'FöFRf¦W"Æ–F÷2VW7F–öæ&VÒFöF22–çFW&:|;VW2çFW&–÷&W2â"À¢’À¢&öf–ÆR€¢%—Vâ×F’"À¢$Æ–æ†vVÒ"À¢'6öÖ'&–ò"À¢$‡VÖæö–FR6W'VçF–æòFRÖVçFRF—66—Æ–æFÂ6VçF–F÷2\:ÖÖ–6÷2RG&Fœ:|:6òÖ&6F÷"&—GV—2çF–v÷2â"À¢%—Vâ×F’6öÖ&–æÒÖ÷f–ÖVçF÷26öçG&öÆF÷2Â&W6—7L:¦æ6–F÷†–æ2RVÖÆV—GW&6–VçFRFRFW6V¦òRÖVFòâÆ–æ†vVç2F–fW&VçFW2W†–&VÒG&:v÷26W'VçF–æ÷2VÒw&W2f&–F÷2åÆåÆå6ö6–VFFW2†—7L;7&–62FR7VÇFòRFöÜ:Öæ–ò&ö¦WFÒ7W7V—F6ö'&R6F–æF—l:ÖGVòâg&–W¦VÖö6–öæÂRÖ&œ:|;VW2†W&FF2&V6—6Ò6W"6öæg&öçFF2&VRWFöæöÖ–ì:6ò6V¦Væ2÷WG&Æg&&6öçG&öÆRâ"À¢’À¢&öf–ÆR€¢$ÖV–òÖVçB"À¢$Æ–æ†vVÒ"À¢&æGW&Â"À¢$FW66VæFVçFRFRW7:×&—F÷2&,;7&V÷2Â6öÒ6÷'ò&W6–Æ–VçFRÂÖVÜ;7&–ÆVçFR&ögVæF6öæWŒ:6ò6öÒfÆ÷&W7F2â"À¢$ÖV–òÖVçG26'&VvÒ666ÂföÆ†2R6œ:¦æ6–FR:'f÷&W2çF–v26VÒW&FW"6ö×ÆWFÖVçFRÖö&–Æ–FFRF÷2÷f÷2¦÷fVç2â6VçFVÒò6öÆòÂf÷'FÆV6VÒÆçF2RW&ÖæV6VÒf—&ÖW26öçG&–×7FòåÆåÆäfövòÂ6V6R&W76<:6ò–æ–Ö–v÷2æGW&—2â6WR&—FÖòFRFV6—<:6òRæV6W76–FFRFRÇW¢÷R:wVöFVÒVçG&"VÒ6öæfÆ—Fò6öÒ¦÷&æF2W&&æ2RÆæ÷2VR×VFÒ6FÖ–çWFòâ"À¢’À¢&öf–ÆR€¢$–g&—B"À¢$Æ–æ†vVÒ"À¢&&6æò"À¢%6W"FR6æwVRVÆVÖVçFÂ:ÖvæVòÂÖ÷f–Fò÷"—Œ:6ò–çFVç6Â&W6—7L:¦æ6–ò6Æ÷"RÖv–fÆÖV¦çFRâ"À¢$–g&—G2—'&F–Ò6Æ÷"l:×6–6òRVÖö6–öæÂâÖæ—VÆÒ6†Ö2ÂG&fW76ÒÖ&–VçFW2'&6F÷&W2RVæ6&ÒFW6f–÷26öÒVÖVæW&v–6¢FR6öçFv–"6ö×æ†V—&÷2åÆåÆì8wVW‡G&VÖRg&–ò&VGW¦VÒ7V2fçFvVç2ÂVçVçFòVÖü:|;VW2FW66öçG&öÆF2öFVÒ&öGW¦—"Fæ÷2&V—2ò&VF÷"â&VæFW"ÖöFW&:|:6òì:6ò6–væ–f–6v"6†ÖÂÖ2F"ÖÆ†RF—&\:|:6òâ"À¢’À¢&öf–ÆR€¢$fÆÖW""À¢$Æ–æ†vVÒ"À¢'6öÖ'&–ò"À¢$VÆfòF2&ögVæFW¦2FFFò:W67W&–L:6òF÷FÂ÷"VFœ:|:6òÂFFòRVÖ7VÇGW&FR6ö'&Wf—l:¦æ6–7V'FW',:&æVâ"À¢$fÆÖW"W&6V&VÒf–'&:|;VW2RV6÷26öÒ6Æ&W¦W‡G&÷&F–ì:&–ÂæfVvæFò6fW&æ26VÒFWVæFW"Ff—<:6òâÇV–Ö–FRgVæv÷2Â&ÖF–Æ†2RFöÖW7F–6:|:6òFR7&–GW&2&ögVæF27W7FVçFÒ7V26ö×Væ–FFW2åÆåÆäÇW¢Â'\:ÖFò6;7F–6òRFW'&VæòFW66öæ†V6–FòW'GW&&Ò6VçF–F÷2&Vf–æF÷2â<:–7VÆ÷2FR—6öÆÖVçFòR6öæfÆ—FòFÖ,:–ÒF÷&æÒ6öæf–ì:vVÒ÷f÷2F7WW&l:Ö6–RF–l:Ö6–ÂFR6öçV—7F"â"À¢’À¢&öf–ÆR€¢$&÷6ÖW""À¢$Æ–æ†vVÒ"À¢&æGW&Â"À¢$VÆfò6–ÇfW7G&RFRW7FGW&ÆWfRÂ&V6—<:6òæ÷L:fVÂR7Fò7VÇGW&Â6öÒf–FFR7VfÆ÷&W7Fâ"À¢$&÷6ÖW"Ö÷fVÒ×6RVçG&RvÆ†÷26öÒ6–Ì:¦æ6–òRÆVVÒV6÷76—7FVÖ26öÖòW‡FVç<;VW2F6ö×Væ–FFRâ'VW&–Â&7G&VÖVçFòR6÷&F÷26öÒ7&–GW&27W7FVçFÒVÖf–FFRFF:|:6ò7V–FF÷6åÆåÆå7F÷2Ö&–VçF—2öFVÒ&W7G&–æv—"&V7W'6÷2RW66öÆ†2Æ–ÖVçF&W2âf÷&FfÆ÷&W7FÂ&Vw&2æ6W7G&—2Væ6öçG&Ò6—GV:|;VW2æ÷f2VRW†–vVÒ–çFW'&WF:|:6ò6VÒW&FW"6–væ–f–6Fòâ"À¢’À¢&öf–ÆR€¢$|:¦æ–ò"À¢$Æ–æ†vVÒ"À¢&&6æò"À¢%6W"VÆVÖVçFÂFRw&æFR&W6Vì:vÂ6¢FR6öæ6VFW"Ö&f–Æ†2Æ–Ö—FF2÷"Æg&Â7FòRæGW&W¦â"À¢$|:¦æ–÷2æ66VÒF÷2VÆVÖVçF÷2RG&FÒ&öÖW7626öÖòW7G'WGW&2Ü:v–62â6WW2Föç2öFVÒÇFW&"ÖL:—&–Â6Æ–ÖRf÷'GVæÂ6V×&R&VfÆWF–æFòòFöÜ:Öæ–òRW'6öæÆ–FFRFRVVÒ÷2Öæ–fW7FåÆåÆäFW6V¦÷2L:¦Òg&öçFV—&2R–çFW'&WF:|;VW2W&–v÷62â÷&wVÆ†òÂ&—6–öæÖVçFòRö'&–v:|;VW2çF–v2F÷&æÒÆ–&W&FFRR6öæf–ì:vFVÖ26VçG&—2FRVÇVW"†—7L;7&–VçföÇfVæFòVÒ|:¦æ–òâ"À¢’À¢&öf–ÆR€¢$–ÆÇVÖ–â"À¢$Æ–æ†vVÒ"À¢&&6æò"À¢%÷fòFRÆg&2f—f2Â6W&6Fò÷"6–v–Æ÷2ÇVÖ–æ÷6÷2VR6öæV7FÒÆ–æwVvVÒÂ6öæ†V6–ÖVçFòR–FVçF–FFRâ"À¢$–ÆÇVÖ–ç26'&VvÒvÆ–f÷2÷&&—FæFò6&\:v6öÖòW‡&W7<:6òf—<:×fVÂFR7VW7<:¦æ6–â6öÖ&–æ:|;VW2FR<:ÖÖ&öÆ÷2f÷'FÆV6VÒF–fW&VçFW2FÆVçF÷2RF÷&æÒW7GVFòRWFöFVf–æœ:|:6ò–ç6W,:fV—2åÆåÆäö7VÇF"×6R:’F–l:Ö6–ÂVæFò,;7&––FVçF–FFRVÖ—FRÇW¢â×VFì:v2æ÷26–v–Æ÷2öFVÒ&÷fö6"7&—6W2W76ö—2ÂR–æ–Ö–v÷2W'VF—F÷2FVçFÒFV6–g&"÷RW‡Æ÷&"Ì;6v–6VR7W7FVçF6WW2Föç2â"À¢’À¢&öf–ÆR€¢%GW'Fò"À¢$Æ–æ†vVÒ"À¢&æ6W7G&Â"À¢$‡VÖæö–FRFR666ò&W6—7FVçFRRFV×W&ÖVçFò6W&VæòÂ†&—GVFòf–vVç26–VçFW2RFVfW62f—&ÖW2â"À¢%GW'F÷26'&VvÒ&÷F\:|:6òæGW&Â6VÒFWVæFW"FR&ÖGW&2R&VæFVÒfì:v"æò&—FÖòæV6W7<:&–òÂì:6òæò&—FÖò–×÷7FòâÖVÜ;7&–FR&÷F2RFVì:|:6òFWFÆ†W2ff÷&V6VÒW‡Æ÷&:|:6òGW&F÷W&åÆåÆäò666ò&÷FVvRÂÖ2VÖVçFW6òRÆ–Ö—F6W'F2÷7GW&2â&W76Æ†V–RFW'&Væ÷2VRW†–vVÒ6ÇF÷2,:–F÷2öFVÒG&ç6f÷&Ö"7V6œ:¦æ6–VÒFW7fçFvVÒÖöÖVçL:&æVâ"À¢’À¢&öf–ÆR€¢$væöÖò"À¢$Æ–æ†vVÒ"À¢&–çfVçF—fò"À¢%WVVæò÷fòFR7W&–÷6–FFR–æW6v÷L:fVÂÂ‡VÖ÷"f—fòRFÆVçFò&–ÇW<;VW2ÂÖV6æ—6Ö÷2RFW66ö&W'F2â"À¢$væöÖ÷2G&FÒò×VæFò6öÖòVÖW&wVçF&W'Fâ–çfW7F–vÒ'\:Öæ2Â7&–ÒF—7÷6—F—f÷2RVæ6öçG&Ò&¦W"VÒFWFÆ†W2VRfVçGW&V—&÷2Ö—2&W76F÷2–væ÷&ÒåÆåÆä7W&–÷6–FFRöFR–çFW'&ö×W"&–÷&–FFW2÷RF—f"ÆvòVRFWfW&–W&ÖæV6W"–çFö6Fòâ&—†W7FGW&R&ö¦WF÷26ö×ÆW†÷2FÖ,:–ÒW†–vVÒ&W&:|:6ò&Væg&VçF"W&–v÷2F—&WF÷2â"À¢’À¢&öf–ÆR€¢$VÆfòfW&ÖVÆ†ò"À¢$Æ–æ†vVÒ"À¢&&6æò"À¢$VÆfòFRG&Fœ:|:6ò:ÖvæV7V¦VÆV|:&æ6–6öçf—fR6öÒ—Œ:6òÂÖv–6öÆ"RVÒf÷'FR6Vç6òFRÆVvFòâ"À¢$VÆf÷2fW&ÖVÆ†÷2W&fVœ:vöÒ'FW2FR6†ÖÂÖWFÂRÇW¢òÆöævòFRf–F2W‡FVç62â7V7VÇGW&6VÆV'&–çFVç6–FFRF—66—Æ–æFR7&–:|;VW2FW7F–æF2G&fW76"vW&:|;VW2åÆåÆä÷&wVÆ†òRÖVÜ;7&–ÆöævF÷&æÒ&V6öæ6–Æ–:|:6òF–l:Ö6–ÂâÖv–2FR6Æ÷"W&FVÒ7WF–ÆW¦VÒÖ&–VçFW2g,:vV—2ÂW†–v–æFò6öçG&öÆR&VR&VÆW¦RFW7G'Vœ:|:6òì:6ò6RF÷&æVÒÖW6Ö6ö—6â"À¢’À¢&öf–ÆR€¢$6VçFW&ò"À¢$Æ–æ†vVÒ"À¢&æGW&Â"À¢%÷fòFR6÷'òWV–æòÂw&æFRÖö&–Æ–FFRRG&Fœ:|;VW2Æ–vF26×÷2&W'F÷2ÂW7G&VÆ2R¦÷&æF2â"À¢$6VçFW&÷26ö'&VÒÆöæv2F—7L:&æ6–26öÒfVÆö6–FFRRW7F&–Æ–FFRÂÆWfæFò&6ò÷RÆì:vVçVçFò6RÖ÷fVÒâ6ö×Væ–FFW2&W6W'fÒÖ26VÆW7FW2Â&÷F26¦öæ—2R†÷7—FÆ–FFRFRf–¦çFW2åÆåÆäW66F2ÂL;¦æV—2R6–FFW2FVç62&&ÖVçFR6öç6–FW&Ò7VæFöÖ–âòW7:vòæV6W7<:&–ò&Öæö'&"FÖ,:–ÒF÷&æ6öæf–æÖVçFòVÖÖV:vÖ–÷"VR&÷f÷2,:×VFW2â"À¢’À¢&öf–ÆR€¢$G&v÷FW&ò"À¢$Æ–æ†vVÒ"À¢'6öÖ'&–ò"À¢$7&–GW&FRF÷'6òG&<;Fæ–6òR6÷'òVG,;§VFRÂÖ&6F÷"f÷,:vÂW66Ö2Rf–æ–FFRVÆVÖVçFÂâ"À¢$G&v÷FW&÷2VæVÒ6&vFWf7FF÷&R&W6—7L:¦æ6–G&<;Fæ–6âöFVÒwV&F"FW'&—L;7&–÷2W‡FVç6÷2Â7W÷'F"6öæFœ:|;VW26WfW&2RÖæ–fW7F"6÷&÷2÷RW&26öæf÷&ÖR7VÆ–æ†vVÒåÆåÆäò6÷'ò–ÖVç6òÆ–Ö—F76vVç2RF÷&æF—67&œ:|:6òV6R–×÷7<:×fVÂâ–ç7F–çF÷2FW'&—F÷&–—2R÷&wVÆ†òW†–vVÒFöÜ:Öæ–ò&VRVÖF—7WF6–×ÆW2ì:6òW66ÆRL:’FW7G'Vœ:|:6òâ"À¢’À¢&öf–ÆR€¢$Ö–æ÷FW&ò"À¢$Æ–æ†vVÒ"À¢&Ö&6–Â"À¢$‡VÖæö–FRFW&–æòFRf÷,:vöFW&÷6Â6Vç6òFRF—&\:|:6òRFWFW&Ö–æ:|:6ò6¢FRG&fW76"VÇVW"Æ&—&–çFòâ"À¢$Ö–æ÷FW&÷2fì:vÒ6öÒ6†–g&W2ÂW6òR6öçf–<:|:6òÂ&ö×VæFòÆ–æ†2VR&V6–Ò–æ&Ì:fV—2âÖVÜ;7&–W76–ÂRG&Fœ:|;VW2FRFW6f–ò÷2§VFÒæfVv"'\:Öæ2R6öæfÆ—F÷26ö×ÆW†÷2åÆåÆä–çfW7F–F2öFVÒ6W"&Wf—7F2RFW7f–F2â÷&wVÆ†òÂFÖæ†òRF–f–7VÆFFR&&V7V"FWö—2FR77VÖ—"VÒ'VÖòG&ç6f÷&ÖÒFWFW&Ö–æ:|:6òVÒ&—66òVæFòòÆæò–æ–6–ÂW7FfW'&Fòâ"À¢’À¢&öf–ÆR€¢%&WfVæçFR"À¢$Æ–æ†vVÒ"À¢'6öÖ'&–ò"À¢$Ö÷'Fò&WF÷&æFò÷"VÖÖ—7<:6ò–æ6&FÂ7W7FVçFFò÷"FWFW&Ö–æ:|:6òVR7WW&,;7&–6WVÇGW&â"À¢%&WfVæçFW2FW7W'FÒ6öÒVÒö&¦WF—fòw&fFòÖ—2gVæFòVRÖVÜ;7&–âì:6ò6ç6Ò6öÖò÷2f—f÷2ÂVæ6öçG&Ò&7G&÷2Æ–vF÷2:Ö—7<:6òR&W6—7FVÒVçVçFò–æF†÷WfW"Ævò6öæ6ÇV—"åÆåÆäFWFW&Ö–æ:|:6òW7G&V—Fò×VæFòò&VF÷"FRVÒ;¦æ–6ò&÷;76—FòâVæFòf–ævì:vR§W7Fœ:v6R6öægVæFVÒÂ&VÆ:|;VW2&W6VçFW2öFVÒ6RF÷&æ"6öÖ'&2F–çFRF&öÖW76VR÷2G&÷W†RFRföÇFâ"À¢’À¢&öf–ÆR€¢$'VÆÇ—wVr"À¢$Æ–æ†vVÒ"À¢&æ6W7G&Â"À¢$‡VÖæö–FRæl:Ö&–òFR6ÇF÷2Æöæv÷2ÂFF:|:6ò:&çFæ÷2RVÖf–F6ö×Væ—L:&–6†V–FR6–æ—26öæ÷&÷2â"À¢$'VÆÇ—wVw2G&fW76Ò:wVRÆÖ6VÒW&FW"fVÆö6–FFRâ6ÇF÷2ÂæF:|:6òR6ö×Væ–6:|:6ò÷"6ö†÷2W&Ö—FVÒVÖ&÷66F26ö÷&FVæF2R,:–F6—&7VÆ:|:6òVÒFW'&—L;7&–÷2ÆvF÷2åÆåÆä6Æ–Ö26V6÷2W†–vVÒ†–G&F:|:6òR7V–FFò6öç7FçFRâf–FFR6ö6–ÂR&—fÆ–FFW2÷"7FGW2öFVÒ6öç7VÖ—"VæW&v–VR6W&–ÖVÆ†÷"W6F6öçG&ÖV:v2W‡FW&æ2â"À¢’À¢&öf–ÆR€¢$VÆfòFòÖ""À¢$Æ–æ†vVÒ"À¢&æ6W7G&Â"À¢$VÆfòæl:Ö&–òFR6VçF–F÷2\:F–6÷2ÂG&Fœ:|:6òÆöævWfR6–çFöæ–6öÒ&V6–fW2Â6÷'&VçFW2Rf–FÖ&–æ†â"À¢$VÆf÷2FòÖ"6öç7G&öVÒ6ö×Væ–FFW2F—67&WF26ö"2öæF2R&W6W'fÒ6ì:|;VW2VRf–¦Ò÷"w&æFW2F—7L:&æ6–2âæF:|:6òÂW&6W:|:6òRÖv–ö6\:&æ–6ff÷&V6VÒW‡Æ÷&:|:6òR&÷F\:|:6òåÆåÆäæ7WW&l:Ö6–RÂ6WW26VçF–F÷2RÖ÷f–ÖVçF÷2&V6—6Ò6RFF"â6öæfÆ—F÷2VçG&R&V–æ÷26÷7FV—&÷2R7V&ÖW'6÷2g&WVVçFVÖVçFR÷26öÆö6ÒæòVÂ–æw&FòFRÖVF–F÷&W2â"À¢’À¢&öf–ÆR€¢$ÖV–òÖFVÜ;Fæ–ò"À¢$Æ–æ†vVÒ"À¢'6öÖ'&–ò"À¢$FW66VæFVçFRFRf÷,:v2&—76—2VR6'&VvöFW"FW7G'WF—fò6VÒW7F"6öæFVæFò&WWF—"7V÷&–vVÒâ"À¢$ÖV–òÖFVÜ;Fæ–÷2Öæ–fW7FÒ6†–g&W2Â&W6—7L:¦æ6–RFöç2Æ–vF÷2fövòÂ6öÖ'&÷R6÷2â†W&ì:vf÷&æV6R&V7W'6÷2–çFVç6÷2RVÖ6ö×&VVç<:6ò–ç7F–çF—fFRÖV:v2W‡G&Ææ&W2åÆåÆä6÷''W:|:6òÂ&V6öæ6V—FòR–×VÇ6÷2†W&FF÷2FW7FÒ6FFV6—<:6òâFVf–æ—"×6R÷"W66öÆ†26öç66–VçFW2ÂVÒfW¢FR6æwVRÂ:’ÇWFVRG&ç6f÷&ÖöFW"''WFòVÒfW&FFV—&–FVçF–FFRâ"À¢’À¢&öf–ÆR€¢$æ¦ò"À¢$Æ–æ†vVÒ"À¢&FWf÷Fò"À¢%6W"6VÆW7F–ÂFRÇW¢R&÷;76—FòÂF÷FFòFR62Â&W6Vì:v–ç7—&F÷&R&W7öç6&–Æ–FFR6w&Fâ"À¢$æ¦÷26æÆ—¦ÒVæW&v–ÇVÖ–æ÷6&&÷FVvW"Â7W&"RVæg&VçF"6÷''W:|:6òâ7VW'7V7F—f×ÆRÆ–v:|:6ò6öÒÆæ÷27WW&–÷&W2F÷&æÒÖæ÷2wV–2öFW&÷6÷2VÒ7&—6W2W7—&—GV—2åÆåÆå&÷;76—Fò6VÆW7F–ÂöFRVçG&"VÒ6öæfÆ—Fò6öÒ6ö×—Œ:6ò–æF—f–GVÂâ<:ÖÖ&öÆ÷2FRWF÷&–FFRG&VÒW‡V7FF—f2ÂRF—7L:&æ6–VçG&RÆV’W&fV—FRf–F2–×W&fV—F2W†–vR‡VÖ–ÆFFR6öç7FçFRâ"À¢’À¢&öf–ÆR€¢$ì:6ò"À¢$Æ–æ†vVÒ"À¢&–çfVçF—fò"À¢%÷fò&ö'W7FòFRÖVÜ;7&–æ6W7G&ÂÂW†6VÌ:¦æ6–'FW6æÂRÆVÆFFR6¢FR&W6—7F—"÷"vW&:|;VW2â"À¢$ì;VW2W&wVVÒf÷'FÆW¦2Âf÷&¦ÒfW'&ÖVçF2R&Vv—7G&Ò6ö×&öÖ—76÷26öÒFVì:|:6òV6RÖ–æW&Ââ&W6—7L:¦æ6–Âf—<:6ò7V'FW',:&æVRFöÜ:Öæ–òFRöl:Ö6–÷2÷2F÷&æÒ–Æ&W2FRVÇVW"W‡VFœ:|:6òåÆåÆä÷&wVÆ†òRG&Fœ:|:6òöFVÒ7&—7FÆ—¦"&W76VçF–ÖVçF÷2â&—†Öö&–Æ–FFRR&VÇWL:&æ6–VÒ&æFöæ"Ü:—FöF÷26ö×&÷fF÷2FÖ,:–ÒW†–vVÒFF:|:6òF–çFRFRÖV:v2–çFV—&ÖVçFRæ÷f2â"À¢’À¢&öf–ÆR€¢%F–VfÆ–ær"À¢$Æ–æ†vVÒ"À¢'6öÖ'&–ò"À¢$FW66VæFVçFRFR–æfÇ\:¦æ6––æfW&æÂÂ&V6öæ†V<:×fVÂ÷"G&:v÷2Ö&6çFW2RFVf–æ–FòVÆ2,;7&–2W66öÆ†2â"À¢%F–VfÆ–æw26'&VvÒ6†–g&W2Â6VFRFöç276ö6–F÷2VÖ†W&ì:vçF–vVRì:6òW66öÆ†W&Òâ&W6—7L:¦æ6–6ö'&VæGW&ÂRf÷,:vFRW'6öæÆ–FFR§VFÒÖæ÷26ö'&Wf—fW"VÒÇVv&W2VR¬:FV6–F—&Ò§VÆ|:ÖÆ÷2åÆåÆäFW66öæf–ì:v6öç7FçFR–æ6VçF—fWF÷77Vf–6œ:¦æ6–ÂÖ2FÖ,:–ÒF–f–7VÇF6V—F"fWFòfW&FFV—&òâV6÷2FòÆVvFò–æfW&æÂöFVÒ'&—"÷'F2W&–v÷62VR&öÖWFVÒW'FVæ6–ÖVçFòVÒ&\:vòÇFòâ"À¢’À¢&öf–ÆR€¢$Æ—¦&FföÆ²"À¢$Æ–æ†vVÒ"À¢&æ6W7G&Â"À¢$‡VÖæö–FR&WF–Æ–æò&vÜ:F–6òÂ&W6—7FVçFRRFFFòÖ&–VçFW2VVçFW2Â:&çFæ÷2R6:v6–VçFRâ"À¢$Æ—¦&FföÆ²ö'6W'fÒæV6W76–FFW26öæ7&WF2çFW2FR<:ÖÖ&öÆ÷2'7G&F÷2âW66Ö2ÂÖæL:Ö'VÆ2R66–FFRFR&÷fV—F"&V7W'6÷2æGW&—2ff÷&V6VÒ6ö'&Wf—l:¦æ6–6öÒ÷V6òFW7W&L:Ö6–òåÆåÆåFV×W&GW&W‡FW&æfWF6WR&—FÖòÂRVÖW‡&W7<:6òVÖö6–öæÂF–fW&VçFRöFR&V6W"g&–W¦â&VæFW"6÷7GVÖW2Æ†V–÷26VÒ&æFöæ"Ì;6v–6,;7&–:’W76Væ6–Â&Æ–ì:v2GW&F÷W&2â"À¢’À¢&öf–ÆR€¢%G&6vò"À¢$Æ–æ†vVÒ"À¢&7GWFò"À¢%WVVæòf\:—&–6òF2Ö&vVç2Â†&–Æ–F÷6òVÒW66öæFW&–¦÷2Â&&væ†2R6öÇ\:|;VW2VR6VwVVÒVÖÌ;6v–6V7VÆ–"â"À¢%G&6v÷2†&—FÒöçFW2Â'\:Öæ2R6Ö–æ†÷2W7VV6–F÷2Â6öÆV6–öææFòö&¦WF÷2R†—7L;7&–2VR÷WG&÷2FW66'F&ÒâG'WVW2ÂW&6W:|:6òR6öæ†V6–ÖVçFòÆö6ÂW&Ö—FVÒÖÆ†W26ö'&Wf—fW"W'FòFRW&–v÷2Ö–÷&W2åÆåÆäFW66öæf–ì:vRVvò&Vw&2,;7&–26ö×Æ–6ÒæVvö6–:|;VW2âÇW¢&W'FÂ6öæg&öçFòF—&WFòR&öÖW762Ö,:ÖwV2öFVÒ&WF—&"&–FÖVçFRò6öçG&öÆRFRVÖ6—GV:|:6òâ"À¢’À¢&öf–ÆR€¢$v÷&¶"À¢$Æ–æ†vVÒ"À¢&Ö&6–Â"À¢%÷fò<:ÖÖ–òFRw&æFRf÷,:vÂv–Æ–FFR&,;7&VR7VÇGW&2F—fW'62æ66–F2VÒfÆ÷&W7F2&ögVæF2â"À¢$v÷&¶26öÖ&–æÒ'&:v÷2öFW&÷6÷2ÂFW6Æö6ÖVçFòfW'F–6ÂRÆ:v÷26ö×Væ—L:&–÷2–çFVç6÷2âF–fW&VçFW2w'W÷2fÆ÷&—¦Ò'FW6æFòÂW7—&—GVÆ–FFRÂW7G&L:–v–÷R&÷F\:|:6òFW'&—F÷&–ÂåÆåÆåFÖæ†òR–çFVç6–FFRöFVÒ6W"–çFW'&WFF÷26öÖòÖV:vçFW2FRVÇVW"6öçfW'6â&—fFVfVç6—fRÖVÜ;7&–2FRW‡Æ÷&:|:6òW†–vVÒ7V–FFò&VR'VL:¦æ6–ì:6ò6RG&ç6f÷&ÖRVÒ—6öÆÖVçFòâ"À¢’À¢&öf–ÆR€¢%6W&V–÷RG&—L:6ò"À¢$Æ–æ†vVÒ"À¢&æ6W7G&Â"À¢%÷fòÖ&–æ†òFR6çFòVæ6çFF÷"ÂÖö&–Æ–FFR\:F–6RÆ–v:|:6ò&ögVæF6öÒ6÷'&VçFW2R7&–GW&2ö6\:&æ–62â"À¢%6W&V–2RG&—L;VW27'W¦Ò&V–æ÷27V&ÖW'6÷2wV–F÷2÷"Ü;§6–6ÂÖ,:—2RÖVÜ;7&–â&W7—&Ò6ö":wVÂ6ö×Væ–6Ò×6RÆöæv2F—7L:&æ6–2RW6Òò6çFò&–ç7—&"ÂGfW'F—"÷Rf66–æ"åÆåÆäVÒFW'&ÂFW6Æö6ÖVçFòR†–G&F:|:6òW†–vVÒ&V7W'6÷2,;7&–÷2âòöFW"Ff÷¢FÖ,:–Ò6'&Vv&W7öç6&–Æ–FFS¢Væ6çF"Æw\:–Ò6VÒ6öç6VçF–ÖVçFòöFR&÷FVvW"çVÖ7&—6RÂÖ2FW7G,;6’6öæf–ì:vVæFòW6Fò÷"6öçfVæœ:¦æ6–â"À¢’À¥Ó° ¦W‡÷'BFVfVÇB6Æ76W3° 