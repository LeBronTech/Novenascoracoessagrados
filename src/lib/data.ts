
export type NovenaDay = {
  day: string;
  title: string;
  content: string;
};

export type Novena = {
  saintName: string;
  novenaTitle: string;
  description: string;
  days: NovenaDay[];
  initialPrayer?: string;
  finalPrayer?: string;
};

export type Saint = {
  id: string;
  name: string;
  month: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  feastDay: string;
};

export type SaintStory = {
  name: string;
  imageUrl: string;
  story: string;
};

export type SaintOfTheDayData = {
  day: number;
  month: string;
  saints: SaintStory[];
};


export const novenaData: Record<string, Novena> = {
  faustina: {
      saintName: "Santa Faustina",
      novenaTitle: "Novena à Santa Faustina",
      description: "Peça a intercessão da secretária da Divina Misericórdia, Apóstola da Misericórdia.",
      days: [
          { day: "Primeiro Dia", title: "Felizes os que põem sua confiança em Deus", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>A alma que confiar na Minha misericórdia é a mais feliz, because Eu mesmo cuido dela (D. 1273). Concedo-lhe a Minha confiança e dou-lhe tudo o que Me pede (D. 453).</p><p>Não compreendo como é possível não confiar Naquele que tudo pode. Com Ele tudo, e sem Ele — nada. Ele é o Senhor e não permitirá, nem consentirá, que sejam confundidos aqueles que puseram Nele toda a sua confiança (D. 358).</p></blockquote><p>Santa Faustina, obtende para mim a graça da filial confiança no Senhor Deus — que pode realizar todas as coisas. Ele é a própria Sabedoria e nos ama com um eterno amor.</p></div>` },
          { day: "Segundo Dia", title: "A confiança como resposta ao conhecimento do mistério da Misericórdia de Deus", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Tudo o que existe está encerrado nas entranhas da Minha misericórdia de uma forma mais profunda que a criança no ventre de sua mãe. Quanta dor Me causa a falta de confiança em Minha bondade. Os pecados que Me ferem mais dolorosamente são os de desconfiança (D. 1076).</p><p>Agora sei que até as almas escolhidas e avançadas na vida religiosa ou espiritual não têm a coragem de confiar plenamente em Deus. E isso acontece because poucas almas conhecem a insondável misericórdia de Deus, a Sua grande bondade (D. 731).</p></blockquote><p>Santa Faustina, ajudai-me a mergulhar mais e mais profundamente no mistério da misericórdia de Deus; ajudai-me a descobrir a bondade de Deus de modo que eu possa confiar Nele cada vez mais e não O fira com minha desconfiança.</p></div>` },
          { day: "Terceiro Dia", title: "Fé", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>O que tu estás vendo na realidade estas alma veem pela fé. Oh! como Me é agradável a grande fé delas (D. 1420).</p><p>Peço ardentemente ao Senhor que se digne fortalecer a minha fé, para que, na vida cotidiana e monótona eu não me deixe levar pelas disposições humanas, mas pelo espírito. Oh! como tudo atrai o homem para a terra! Mas a fé viva mantém a alma em esferas mais elevadas, e designa para o amor próprio o lugar que lhe convém, isto é — o último (D. 210).</p></blockquote><p>Santa Faustina, obtende para mim a fé forte e viva, a fim de que chegue a conhecer o amor misericordioso de Deus para com as criaturas, de modo que tanto mais eu O conheça, mais eu queira confiar Nele.</p></div>` },
          { day: "Quarto Dia", title: "Esperança", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Causam-Me grande alegria as almas que recorrem à Minha misericórdia. A estas almas concedo graças que excedem os seus pedidos (D. 1146).</p><p>Ainda que tivesse sobre a minha consciência os pecados do mundo inteiro e os pecados de todas as almas condenadas, não duvidaria da bondade de Deus, mas sem pensar me lançaria no abismo da misericórdia de Deus, que está sempre aberta para nós, e com o coração reduzido a pó, me lançaria a Seus pés, submetendo-me inteiramente à Sua santa vontade, que é a própria Misericórdia (D. 1552).</p></blockquote><p>Santa Faustina, obtende para mim uma esperança resoluta, de modo que, em meu caminho para o céu, eu possa sempre contar com o perdão de Deus e o auxílio de Sua graça em cada situação, particularmente nos momentos difíceis.</p></div>` },
          { day: "Quinto Dia", title: "Amor", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Sou o Amor e a própria Misericórdia e não existe miséria que possa medir-se com a Minha misericórdia, nem a miséria a esgotará, visto que à medida que se dá — aumenta (D.1273). Foi o amor que Me trouxe e o amor Me retém. Minha filha, se soubesses que grande mérito e recompensa tem um só ato de amor puro para Comigo, morrerias de alegria. Digo-te isso, para que te unas continuamente Comigo pelo amor (D. 576).</p><p>Amor, amor e mais uma vez amor a Deus! Superior a isso nada há nem no céu, nem na terra. O mais sublime é o amor a Deus, e a autêntica grandeza está em amá-Lo. Também a verdadeira sabedoria consiste nesse amor a Deus. Tudo o que é nobre e belo — está em Deus; fora de Deus não existe beleza nem grandeza (D. 990).</p></blockquote><p>Santa Faustina, obtende para mim um ardente amor para com Deus, a fim de que eu possa amá-Lo acima de todas as coisas, e amar todas as coisas por amor a Ele.</p></div>` },
          { day: "Sexto Dia", title: "Humildade", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Não são grandes prédios e magníficas instalações que Me dão satisfação, mas um coração puro e humilde (D. 532). As torrentes da Minha graça inundam as almas humildes. Os orgulhosos sempre estão na pobreza e miséria, porquanto a Minha graça afasta-se deles para as almas humildes (D. 1602).</p><p>Oh! como é bela a alma humilde. Deus nada nega a uma tal alma. Uma alma assim é onipotente, ela influi no destino do mundo inteiro. Deus exalta semelhante alma até o Seu trono e, quanto mais ela se rebaixa, tanto mais Deus se inclina para ela, persegue-a com Suas graças e a acompanha em todos os momentos com o Seu poder. Uma tal alma está unida com Deus da maneira mais profunda (D. 1306).</p></blockquote><p>Santa Faustina, obtende para mim a graça da verdadeira humildade, para que eu possa aceitar a verdade sobre Deus, sobre o mundo e sobre mim mesmo. Que isso possa me tornar mais confiante, como uma criança em relação ao seu Pai celeste, e me fazer reconhecer minha dependência Dele como Criador, Salvador e santificador.</p></div>` },
          { day: "Sétimo Dia", title: "Contrição", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Sou três vezes Santo e abomino o menor pecado. Não posso amar uma alma manchada pelo pecado, mas, quando se arrepende, não há limites para a Minha generosidade com ela. A Minha misericórdia a envolve e justifica. Com a Minha misericórdia persigo os pecadores em todos os seus caminhos, e o Meu Coração se alega quando eles voltam a Mim (D. 1728).</p><p>O que mais me faz sofrer é quando me encontro com a falsidade. Agora Vos compreendo, Salvador meu, por terdes repreendido tão severamente os fariseus pela hipocrisia. Procedestes mais bondosamente com pecadores empedernidos, quando recorriam a Vós com contrição (D. 1579).</p></blockquote><p>Santa Faustina, obtende para mim a graça da sincera contrição de todos os pecados, e mesmo da menor infidelidade, uma vez que isto foi a causa da terrível paixão de Jesus. Possa a contrição do meu coração alcançar-me o perdão da minha culpa e fortalecer a minha confiança na misericórdia de Deus.</p></div>` },
          { day: "Oitavo Dia", title: "Vontade de Deus", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>Minha filha, tu Me dás a maior glória pela paciente submissão à Minha vontade, e para ti acumulas tão grandes méritos que não o conseguirias nem com jejuns, nem com nenhuma espécie de mortificações. Deves saber, Minha filha, que, se submetes a tua vontade à Minha, atraís sobre ti a Minha especial predileção. Este sacrifício Me é agradável e cheio de doçura. Nele Me deleito, ele tem poder (D. 904).</p><p>O Senhor concedeu-me a luz de um conhecimento mais profundo da Sua vontade e, ao mesmo tempo, de uma total submissão a essa santa vontade de Deus. Essa luz me confirmou numa profunda paz, dando-me a compreensão de que nada devo temer, a não ser o pecado. Tudo o que Deus me enviar, o aceito com total submissão à Sua santa vontade. Onde quer que me coloque, procurarei cumprir fielmente a Sua santa vontade e fazer tudo aquilo que agrada a Ele, na medida em que estiver ao meu alcance, ainda que essa vontade de Deus seja para mim tão árdua e penosa (D. 1394). Submetendo-me inteiramente à Sua santa vontade, que é a própria Misericórdia (D. 1552).</p></blockquote><p>Santa Faustina, obtende para mim a graça de cumprir a vontade de Deus fielmente, sempre e em toda a parte, de modo que, eu possa expressar minha confiança no Senhor Deus.</p></div>` },
          { day: "Nono Dia", title: "O Vaso da confiança", content: `<div class="day-specific-content"><blockquote class="brand-border pl-4 italic"><p>As graças da Minha misericórdia colhem-se com um único vaso, que é a confiança. Quanto mais a alma confiar, tanto mais receberá. Grande consolo Me dão as almas de ilimitada confiança, because, em almas assim derramo todos os tesouros das Minhas graças (D. 1578).</p><p>Ó Senhor, meu amor, agradeço-Vos pelo dia de hoje, por me terdes permitido haurir tesouros de graças da fonte da Vossa insondável misericórdia. Ó Jesus, não apenas no dia de hoje, mas em cada instante colho da Vossa insondável misericórdia tudo o que a alma e o corpo possam desejar (D. 1178).</p></blockquote><p>Santa Faustina, ajudai-me a obter um largo vaso de confiança, a fim de que eu possa atrair com ele graças não apenas para mim mesmo, mas também para a Igreja, para a minha pátria, para o mundo inteiro, e especialmente para as almas que duvidam da misericórdia de Deus.</p></div>` }
      ],
      initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title text-xl font-bold mb-2">Oração pedindo graças por intercessão de Santa Faustina</h4><div class="prayer-block"><p>Ó Jesus, que fizeste de Santa Faustina uma grande devota da Vossa ilimitada misericórdia, dignai-Vos, pela sua intercessão, se for do agrado da Vossa santíssima vontade, conceder-me a graça <i>(…petição silenciosa)</i> que Vos peço.</p><p>Eu, pecador, não sou digno da Vossa misericórdia. Peço-Vos, pois, pelo espírito de sacrifício e dedicação de Santa Faustina, e por sua intercessão, atendei os pedidos que, com confiança, Vos apresento.</p></div></div>`,
      finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title text-xl font-bold mt-6 mb-2">Oração de agradecimento</h4><blockquote class="brand-border pl-4 italic"><p>“Ó Jesus, Deus eterno, agradeço-Vos pelas inúmeras graças e benefícios. Que cada batida do meu coração seja um novo hino de ação de graças para Convosco, ó Deus. Que cada gota do meu sangue circule por Vós, Senhor. A minha alma seja um só hino de adoração à Vossa Misericórdia. Amo-Vos, Deus, por Vós mesmo.” (Diário, 1794).</p></blockquote><div class="prayer-block"><p>Deus Misericordioso, acolhei os nosso agradecimentos pelo dom da vida e da missão de Santa Faustina, e ajudai-nos, com a sua intercessão, a crescer na atitude de confiança para Convosco e de misericórdia para com o próximo. Por Cristo Nosso Senhor. Amém.</p></div><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title text-xl font-bold mt-6 mb-2">Ladainha de Santa Faustina</h4><ul class="list-none p-0 mt-4 text-sm md:text-base"><li class="litany-item"><span>Senhor, tende piedade de nós.</span> <span class="litany-response">Senhor...</span></li><li class="litany-item"><span>Cristo, tende piedade de nós.</span> <span class="litany-response">Cristo...</span></li><li class="litany-item"><span>Senhor, tende piedade de nós.</span> <span class="litany-response">Senhor...</span></li><li class="litany-item"><span>Jesus Cristo, ouvi-nos.</span> <span class="litany-response">Jesus Cristo, atendei-nos.</span></li><li class="litany-item"><span>Deus Pai do Céu,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Deus Filho Redentor do Mundo,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Deus Espírito Santo,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Santíssima Trindade que sois um só Deus,</span> <span class="litany-response">tende piedade de nós.</span></li><li class="litany-item"><span>Santa Maria</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, testemunha viva da misericórdia do Pai celeste</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, humilde serva de Jesus, Misericórdia Encarnada</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, instrumento obediente do Espírito Consolador</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, filha confiante da Mãe da Misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, confidente da mensagem da misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, secretária fiel das palavras de Jesus Misericordioso</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, grande Apóstola da Divina Misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, dispensadora do Deus rico em Misericórdia</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, dom para todo o mundo</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, conhecedora da bondade de Deus por cada criatura</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, adoradora de Deus no mistério da Encarnação</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, participante da Paixão e Ressurreição do Senhor</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, guia sobre a estrada da Cruz de Jesus</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, que encontraste Jesus nos sacramentos</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, unida ao Esposo Divino na própria alma</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, iluminada pela Misericórdia de Deus na vida de Maria</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, amante da Igreja, Corpo Místico de Cristo</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, forte por uma verdadeira fé</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, constante na esperança inabalável</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, ardente de amor</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, bela por uma autêntica humildade</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, simples na confiança filial</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, exemplo de cumprimento da vontade de Deus</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, modelo de serviço e sacrifício</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, protetora afetuosa dos sacerdotes e dos religiosos</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, defensora das crianças e dos jovens contra o mal</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, refúgio dos desviados e desesperados</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, consolo para os doentes e sofredores</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, vítima sacrifical pelos pecadores</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, promotora da confiança nos corações dos agonizantes</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, preocupada com a salvação da humanidade</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, protetora das almas do purgatório</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Santa Faustina, que implora a misericórdia divina por todo o mundo</span> <span class="litany-response">rogai por nós.</span></li><li class="litany-item"><span>Cordeiro de Deus que tirais o pecado do mundo,</span> <span class="litany-response">perdoai-nos, Senhor!</span></li><li class="litany-item"><span>Cordeiro de Deus que tirais o pecado do mundo,</span> <span class="litany-response">ouvi-nos, Senhor!</span></li><li class="litany-item"><span>Cordeiro de Deus que tirais o pecado do mundo,</span> <span class="litany-response">tende piedade de nós.</span></li></ul><div class="jaculatory-prayers"><p class="mt-4">V. Rogai por nós, Santa Faustina,<br>Para que com a vida e com as palavras proclamemos ao mundo a mensagem da Misericórdia.</p><p class="mt-4 font-semibold">Pai-Nosso… Ave-Maria… Glória ao Pai…</p></div></div>`
  },
  rosario: { 
      saintName: 'N. S. do Rosário',
      novenaTitle: 'Novena a Nossa Senhora do Rosário', 
      description: 'Invoque a Mãe de Deus sob este título para que ela ajude você a rezar com mais devoção o Santo Rosário.',
      days: [
          { day: 'Primeiro Dia', title: '“Deus vos salve”', content: '<div class="day-specific-content"><p>Quanto minha alma se alegra, amabilíssima Virgem, com as doces recordações que em mim desperta esta saudação! Enche-se de alegria meu coração ao dizer o “Ave-Maria”, para acompanhar a alegria que teve vosso Espírito ao escutar da boca do anjo, alegrando-me da eleição que de Vós fez o Onipotente para dar-nos o Senhor. Amém.</p></div>' },
          { day: 'Segundo Dia', title: '“Maria” nome Santo!', content: '<div class="day-specific-content"><p>Dignai-vos, amabilíssima Mãe, selar com vosso nome a memória das súplicas nossas, dai-nos a esperança de que nos atenda benignamente vosso Filho Jesus, para que alcancemos o aborrecimento a todas as vaidades do mundo, firme amor a virtude, e ânsias contínuas de nossa eterna salvação. Amém.</p></div>' },
          { day: 'Terceiro Dia', title: '“Cheia sois de graça”', content: '<div class="day-specific-content"><p>Doce Mãe! Deus Vos salve, Maria, sacrário riquíssimo em que descansou corporalmente a plenitude da Divindade: A vossos pés se apresenta desnuda minha pobre alma, pedindo a graça e o amor de Deus, com o que fostes enriquecida, fazendo-te cheia de virtude, cheia de santidade e cheia de graça. Amém.</p></div>' },
          { day: 'Quarto Dia', title: '“O Senhor é contigo”', content: '<div class="day-specific-content"><p>Oh, Santíssima Virgem! Aquele imenso Senhor, que por sua essência fez todas as coisas, está em Vós e convosco por modo muito superior. Mãe minha, venha a nós o Senhor através de Vós. Mas, como tende vir a um coração de tão pouca limpeza como o meu Aquele Senhor que, para fazer de Vós sua habitação, quis com tal prodígio, que não se perdesse vossa virgindade sendo Mãe? Oh! Mora em nós tanta impureza, para que habite em nossa alma o Senhor. Amém.</p></div>' },
          { day: 'Quinto Dia', title: '“Bendita sois entre todas as mulheres”', content: '<div class="day-specific-content"><p>Vós sois a glória de Jerusalém! Vós, a alegria de Israel! Vós, a honra do povo Santo de Deus! Obtende por vossa intercessão a nosso espírito a mais viva fé, para considerar e adorar com vosso Santo Rosário as misericórdias que em Vós e por Vós fez o Filho de Deus. Amém.</p></div>' },
          { day: 'Sexto Dia', title: '“Bendito é o fruto do teu ventre Jesus”', content: '<div class="day-specific-content"><p>Choro, oh Mãe minha, que tenho eu feito tantos pecados, sabendo que eles fizeram morrer na cruz a vosso Filho. Seja o fruto de minha oração, que não termine nunca de chorá-los, até poder bendizer eternamente aquele puríssimo fruto de vosso ventre. Amém.</p></div>' },
          { day: 'Sétimo Dia', title: '“Santa Maria, Mãe de Deus”', content: '<div class="day-specific-content"><p>Não permitais que se perca minha alma comprada com o inestimável preço do sangue de Jesus. Dai-me um coração digno de Vós, para que amando-vos, sejam minhas delícias obsequiar-vos com o Santo Rosário, adorando com ele ao vosso Filho, pelo muito que fez para nossa redenção e pelo que desejou, fazendo-te sua Mãe. Amém.</p></div>' },
          { day: 'Oitavo Dia', title: '“Rogai por nós pecadores”', content: '<div class="day-specific-content"><p>Mãe de piedade! A Vós peço, Mãe do Rei soberano da glória: Vós sois minha Mãe. Alcançai-me humildade e plena confiança, pois deste modo, com o auxílio de Deus, a receber os favores da Divina misericórdia, pelos méritos de vosso Filho e Redentor nosso. Amém.</p></div>' },
          { day: 'Nono Dia', title: '“Agora, e na hora de nossa morte”', content: '<div class="day-specific-content"><p>Estamos sempre prestes a perder a graça de Deus. Fazei com que não se aparte de minha memória ao último momento da vida, que haverá de ser decisivo de minha eterna sorte. Oh, Mãe de piedade! Concedei-me a esperança de morrer sob vossa proteção e no amor de meu Jesus. Amém.</p></div>' }
      ],
      initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title text-xl font-bold mb-2">Oração para todos os dias</h4><div class="prayer-block"><p>Oh, Mãe e clementíssima Virgem do Rosário! Vós que plantastes na Igreja, por meio de vosso privilegiado filho Domingos, o místico remédio do Santo Rosário, fazei que abracemos todos tua santa devoção e obtenhamos seu verdadeiro espírito; De sorte que aquelas místicas rosas sejam em nossos lábios e coração, pelos pecadores, medicina, e pelos justos, aumento de graça. Amém.</p></div><div class="prayer-request"><p class="italic my-4">Peça aqui com confiança a graça que se deseja obter com esta novena.</p></div></div>`,
      finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title text-xl font-bold mb-2">Oração final</h4><p>Rezar quatro Ave-Marias e Glórias.</p><div class="prayer-block"><p>Oh, Santíssima Virgem, Mãe de Deus, doce refúgio e esperança piedosa de todos os aflitos! Por aquela confiança e autoridade de Mãe com que podeis apresentar nossos rogos ao que é árbitro soberano de nosso bem, empenhai uma e outra em favor nosso. Consegui-nos o reformar com o Santo Rosário nossas vidas, estudando em tão doce livro a fiel imitação de vosso Filho Jesus, até que possamos adorá-Lo e amá-Lo por todos os séculos dos séculos. Amém.</p></div></div>`
  },
  aparecida: { 
      saintName: 'N. S. Aparecida',
      novenaTitle: 'Novena a Nossa Senhora Aparecida', 
      description: 'Padroeira do Brasil, a Novena de Nossa Senhora Aparecida é a preparação para a grande Festa do Dia 12 de Outubro.',
      initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title text-xl font-bold mb-2">Oração para todos os dias</h4><div class="prayer-block"><p>℣. Fazei-me digno de vos louvar, Ó Virgem Imaculada.<br>℟. Dai-me força, defendei-me contra os vossos inimigos.</p><p>Glória ao Pai, ao Filho e ao Espírito Santo. Assim como era no princípio, agora, e sempre e por todos os séculos dos séculos. Amém.</p><p>Virgem puríssima, concebida sem pecado, e desde aquele primeiro instante toda bela e sem mancha, gloriosa Maria, cheia de graça, Mãe de meu Deus, Rainha dos anjos e dos homens, Senhora da Conceição Aparecida padroeira Nossa.</p><p>Eu vos saúdo humildemente como Mãe do meu Salvador, que com aquela estima, respeito e submissão, com que vos tratava, me ensinou quais sejam as honras e a veneração que eu devo prestar-vos; dignai-vos, eu vo-lo rogo, de receber as que nesta Novena vos consagro.</p><p>Vós sois o seguro asilo dos pecadores penitentes, e assim tenho razão para recorrer a vós; sois Mãe de misericórdia, e por este título não podeis deixar de enternecer-vos à vista das minhas misérias.</p><p>Sois depois de Jesus Cristo toda a minha esperança, e por esta razão não podereis deixar de reconhecer a terna confiança que tenho em vós; fazei-me digno de chamar-me vosso filho, para que possa confiadamente dizer-vos: mostrai que sois nossa Mãe.</p><p>Atendei-me desde vosso Augusto Santuário, naquela insigne imagem pela qual já nos trouxestes inúmeras bênção e Benefícios. Mostrai que sois a Senhora destas terras e deste povo; confirmai o vosso Padroado sobre nós, nos alcançando as graças e os auxílios que tanto necessitamos.</p></div></div>`,
      finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-8 mx-auto"></div><h4 class="section-title text-xl font-bold mt-6 mb-2">Oração final</h4><div class="prayer-block"><p>Ó Maria Santíssima, que em vossa imagem milagrosa de Aparecida, espalhais inúmeros benefícios sobre todo o Brasil.</p><p>Eu, embora indigno de pertencer ao número de vossos filhos, mas cheio do desejo de participar dos benefícios de vossa misericórdia, prostrado a vossos pés, consagro-vos o entendimento, para que sempre pense no amor que mereceis; consagro-vos a língua para que sempre vos louve e propague a vossa devoção; consagro-vos o coração, para que, depois de Deus, vos ame sobre todas as coisas. Recebei-nos, ó Rainha incomparável, no ditoso número de vossos filhos; acolhei-nos debaixo de vossa proteção; socorrei-nos em todas as nossas necessidades, espirituais e temporais, sobretudo na hora de nossa morte. Abençoai-nos, ó Mãe celestial, e com vossa poderosa intercessão, fortalecei-nos em nossas fraquezas, a fim de que, servindo-vos fielmente nesta vida, possamos louvar-vos, amar-vos e dar-vos graças no céu, por toda eternidade.</p><p>Ó Senhora da Conceição Aparecida, mostrai que sois a padroeira da nossa pátria e a mãe querida do povo brasileiro! Abençoai, defendei, salvai o vosso querido Brasil. Amém.</p></div><div class="jaculatory-prayers"><p class="mt-4">℣. Ó Maria Concebida Sem Pecado<br>℟. Rogai por nós que recorremos a Vós.</p><p class="mt-2">℣. Nossa Senhora da Conceição Aparecida<br>℟. Rogai por nós.</p><p class="mt-2">℣. Bendita seja a Santa e Imaculada Conceição da Bem-Aventurada Virgem Mãe de Deus, por todos os séculos dos séculos.<br>℟. Amém.</p><p class="mt-2">℣. Senhora Aparecida, guiai a nossa sorte.<br>℟. Ó doce Mãe querida, na vida e na morte.</p></div></div>`,
      days: [
          { day: 'Primeiro Dia', title: '', content: '<div class="day-specific-content"><p>Eis-me aqui aos vossos santíssimos pés, ó Virgem Imaculada! Convosco me alegro sumamente, because desde a eternidade fostes eleita Mãe do Verbo eterno e preservada da culpa original. Eu bendigo e dou graças à Santíssima Trindade, que vos enriqueceu com este privilégio em vossa Conceição, e humildemente vos suplicamos que alcanceis a graça de vencer os tristes efeitos que em mim produziu o pecado.</p><p>Ah! Senhor, fazei que eu os vença e jamais deixe de amar a meu Deus.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Segundo Dia', title: '', content: '<div class="day-specific-content"><p>Ó Maria, lírio imaculado de pureza, eu me congratulo convosco, because desde o primeiro instante da vossa Conceição fostes cheia de graça e além disto vos foi conferido o perfeito uso da razão. Dou graças e adoro a Santíssima Trindade, que vos concedeu tão sublimes dons; e me confundo totalmente na vossa presença ao ver-me tão pobre de graça.</p><p>Vós, que de graça celeste fostes tão copiosamente enriquecida, reparti-a com a minha alma e fazei-me participante dos tesouros que começastes a possuir em vossa imaculada Conceição.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Terceiro Dia', title: '', content: '<div class="day-specific-content"><p>Ó Maria, mística rosa de pureza, eu me alegro convosco, que gloriosamente triunfastes da infernal serpente, na vossa imaculada Conceição.</p><p>E que fostes concebida sem mácula de pecado. Dou graças e louvo a Santíssima Trindade, que tal privilégio vos concedeu e vos suplico que me alcanceis força para superar todas as tentações do inimigo, e para não manchar minha alma com o pecado.</p><p>Ah! Senhora, ajudai-me sempre, e fazei quem com a vossa proteção, sempre triunfe de todos os inimigos de nossa eterna salvação.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Quarto Dia', title: '', content: '<div class="day-specific-content"><p>Ó espelho de pureza, Imaculada Virgem Maria, eu me encho de sumo gozo ao ver que desde a vossa Conceição, foram em vós infundidas as mais sublimes virtudes e, ao mesmo tempo, todos os dons do Espírito Santo.</p><p>Dou graças e louvo a Santíssima Trindade que com estes privilégios vos favoreceu. E suplico-vos, ó benigna Mãe, que me alcanceis a prática das virtudes, e me façais também digno e receber os dons do Espírito Santo.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Quinto Dia', title: '', content: '<div class="day-specific-content"><p>Ó Maria, refulgente lua de pureza, eu me congratulo convosco, because o mistério de vossa Imaculada Conceição foi o princípio da salvação de todo o mundo.</p><p>Dou graças e bendigo à Santíssima Trindade, que assim magnificou e glorificou vossa pessoa, e vos suplico me alcanceis a graça de saber aproveitar-me da Paixão e Morte do vosso Jesus, e que não seja para mim inútil o seu sangue derramado na cruz, mas que viva santamente e salve a minha alma.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Sexto Dia', title: '', content: '<div class="day-specific-content"><p>Ó estrela resplandecente de pureza, Imaculada Conceição causaste um imenso gozo a todos os anjos do paraíso.</p><p>Dou graças e bendigo à Santíssima Trindade, que vos enriqueceu com tão belo privilégio.</p><p>Ah! Senhora, fazei que eu um dia tenha parte nessa alegria e que possa em companhia dos anjos, louvar-vos e bendizer-vos eternamente.</p><p class="mt-4 fontsemibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Sétimo Dia', title: '', content: '<div class="day-specific-content"><p>Ó aurora nascente e pura, Imaculada Maria, eu me alegro e exulto convosco because no mesmo instante da vossa Conceição, fostes confirmada em graça e tornada impecável. Dou graças e exalto a Santíssima Trindade, que somente a vós distinguiu com esse especial privilégio.</p><p>Ah! Virgem Santa, alcançai-me um total e contínuo aborrecimento do pecado sobre todos os outros males, e que antes morra do que torne a cometê-lo.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Oitavo Dia', title: '', content: '<div class="day-specific-content"><p>Ó sol sem mácula, Virgem Maria, eu me congratulo convosco e me alegro de que em vossa Conceição vos fosse conferida por Deus uma graça maior e mais copiosa do que tiveram todos os Anjos e todos os Santos no auge de seus merecimentos. Dou graças e admiro a suma bondade da Santíssima Trindade, que vos enriqueceu com tal privilégio.</p><p>Ah! Senhora, fazei que eu corresponda à graça divina, e não torne a abusar dela; mudai-me o coração, e fazei que desde agora comece o meu arrependimento.</p><p class="mt-4 font-semibold">Reza-se Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' },
          { day: 'Nono Dia', title: '', content: '<div class="day-specific-content"><p>Ó viva luz de santidade e exemplo de pureza, Virgem e Mãe, Maria Santíssima, vós, apenas concebida, adorastes profundamente a Deus e lhe destes graças, because, por meio de vós, levantada a antiga maldição, desceu uma grande bênção sobre os filhos de Adão.</p><p>Ah! Senhora, fazei que esta bênção acenda no meu coração um grande amor para com Deus; inflamai-o, para que, constantemente ame o mesmo Senhor, e depois goze eternamente no Paraíso, onde possa dar- lhe as mais vivas graças pelos singulares privilégios a vós concedidos e possa também ver-vos coroada de tamanha vitória.</p><p class="mt-4 font-semibold">Reza-se: Pai Nosso, Ave-Maria e Glória ao Pai.</p></div>' }
      ]
  },
  carlo_acutis: { 
    saintName: 'São Carlo Acutis',
    novenaTitle: 'Novena a São Carlo Acutis', 
    description: 'Jovem beato que usou a internet para evangelizar, é um modelo de santidade na vida cotidiana e um poderoso intercessor pela juventude.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title text-xl font-bold mb-2">Oração inicial para todos os dias</h4><div class="prayer-block"><p>Santíssima Trindade, Pai, Filho e Espírito Santo, eu Vos agradeço todos os favores, todas as graças com que enriquecestes a alma de São Carlo Acutis durante os 15 anos que passou nesta terra e pelos méritos, em Cristo Jesus, deste tão querido exemplo para a juventude, concedei-me a graça que ardentemente Vos peço… <i>(faça o pedido da graça que deseja)</i>.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title text-xl font-bold mb-2">Oração final</h4><div class="prayer-block"><p>Deus Pai de Misericórdia, pelos méritos do Vosso Filho Nosso Senhor Jesus Cristo, por intercessão de São Carlo Acutis, a fim de que, por ele, Vós sejais mais glorificado, dai-nos chamar de Santo este que em tudo viveu a Vossa vontade e, se for do Vosso agrado, concedei-me a graça que ardentemente desejo. Assim seja. Amém.</p></div><p class="mt-4 font-semibold">5 Pai-Nossos, 5 Ave-Marias e 5 Glórias ao Pai, em honra dos 15 anos de vida de Carlo Acutis nesta terra.</p></div>`,
    days: [
      { day: 'Primeiro Dia', title: '“Não eu, mas Deus”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que fizeste de tua vida uma contínua renúncia e aniquilamento, dá-me a graça de buscar as coisas do Céu e desprezar as que passam. Assim seja. Amém.</p></div>' },
      { day: 'Segundo Dia', title: '“Estar sempre com Jesus, este é o meu projeto de vida”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que viveste na intimidade do Sagrado Coração de Jesus, dá-me a graça de realizar, em tudo, a vontade de Deus em minha vida. Assim seja. Amém.</p></div>' },
      { day: 'Terceiro Dia', title: '“Peça ao seu Anjo da Guarda para ajudá-lo continuamente, de modo que ele se torne seu melhor amigo”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que buscaste, já neste mundo, a companhia dos santos anjos, dá-me a graça de viver na retidão que o meu santo anjo deseja. Assim seja. Amém.</p></div>' },
      { day: 'Quarto Dia', title: '“Nossa alma é como um balão aerostático… Se por acaso existe um pecado mortal, a alma cai por terra. A confissão é como o fogo embaixo do balão que permite que a alma se levante novamente. É importante confessar-se com frequência”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que tão bem viveste este sacramento da Reconciliação, dá-me a graça de buscar sempre a confissão com uma contrição profunda. Assim seja. Amém.</p></div>' },
      { day: 'Quinto Dia', title: '“A felicidade é olhar para Deus e a tristeza é olhar para si mesmo”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que jamais desviaste o teu olhar de Jesus, teu grande amor, dá-me a graça de viver já neste mundo esta verdadeira felicidade. Assim seja. Amém.</p></div>' },
      { day: 'Sexto Dia', title: '“A única coisa que devemos pedir a Deus em oração é o desejo de ser santos”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que soubeste sempre pedir a Deus o essencial, dá-me a graça de um profundo desejo do Céu. Assim seja. Amém.</p></div>' },
      { day: 'Sétimo Dia', title: '“A Virgem Maria é a única mulher na minha vida”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que amaste a Virgem Maria com devoção filial, dá-me a graça de corresponder ao amor desta tão terna e boa Mãe. Assim seja. Amém.</p></div>' },
      { day: 'Eitavo Dia', title: '“A Eucaristia é a minha estrada para o Céu”', content: '<div class="day-specific-content"><p>São Carlo Acutis, que buscavas sempre teu Jesus escondido no sacrário, dá-me a graça de um profundo ardor eucarístico. Assim seja. Amém.</p></div>' },
      { day: 'Nono Dia', title: '“Eu estou feliz por morrer, because vivi a minha vida sem perder nem mesmo um minuto dela com coisas que não agradam a Deus”', content: '<div class="day-specific-content"><p>São Carlo Acutis, dá-me a graça das graças, que é a perseverança final e uma morte santa. Assim seja. Amém.</p></div>' }
    ]
  },
  teresa_avila: { 
    saintName: 'Santa Teresa de Ávila',
    novenaTitle: 'Novena a Santa Teresa de Jesus (Ávila)', 
    description: 'Padroeira dos místicos e Doutora da Igreja, Santa Teresa intercede para que possamos aprofundar nossa vida de oração.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title text-xl font-bold mb-2">Oração para todos os dias</h4><div class="prayer-block"><p>Santa Teresa de Jesus, glória da Igreja e do Carmelo, que ensinastes a grande ciência da oração, ficai conosco em cada dia desta novena que fazemos em vosso louvor. Ensinai-nos o caminho da oração, da intimidade com Deus. Ajudai-nos a praticar as virtudes, atendei os pedidos que fazemos, com toda confiança, pela Santa Igreja, pelas nossas famílias, por toda a humanidade e agradecemos confiantes vossa proteção.</p><p class="mt-2">Santa Teresa de Jesus, Mestra do amor, da oração, Mostrai o caminho que conduz ao Senhor à Salvação.</p></div></div>`,
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title text-xl font-bold mb-2">Oração final</h4><p>Rezar um Pai Nosso, uma Ave Maria, um Glória ao Pai...</p><div class="prayer-block"><p>Ó Deus, que pelo Espírito Santo fizestes surgir santa Teresa, para recordar à Igreja o caminho da perfeição, dai-nos encontrar sempre alimento em sua doutrina celeste e sentir em nós o desejo da verdadeira santidade. Por nosso Senhor Jesus Cristo vosso Filho na unidade do Espírito Santo. Amém.</p></div><div class="jaculatory-prayers"><p class="mt-4">Santa Teresa de Jesus, rogai por nós.</p></div></div>`,
    days: [
      { day: 'Primeiro Dia', title: 'Meditação: Começar com determinação.', content: '<div class="day-specific-content"><p>A vida não é somente uma aventura terrestre, mas, também uma aventura espiritual, é certamente uma busca, por isso Santa Teresa de Jesus nos exorta a começar com determinação, devemos ousadamente aspirar ao sublime, “pois muitos ficam ao pé da montanha, sendo que poderiam subir até o topo”. Começar bem exige esforço, inicialmente com dificuldades e resistência, mas com o tempo logo as barreiras serão vencidas pelo entusiasmo da busca pelo Amado. O essencial, como aponta Teresa, é perseverar até o fim da caminhada, com coragem e vigilância para não retroceder, é essa determinação inicial que ajuda a prosseguir. Confiantes na misericórdia de Deus, que nos sustenta nas quedas. Coloquemo-nos a caminho…</p><blockquote class="brand-border pl-4 italic"><p>“Digo que muito importa, sobretudo, ter uma grande e muito decidida determinação de não parar enquanto não alcançar a meta, surja o que surgir, aconteça o que acontecer, sofra-se o que se sofrer, murmure quem murmurar, mesmo que não se tenha forças para prosseguir, mesmo que se morra no caminho ou não se suportem os padecimentos que nele há, ainda que o mundo venha abaixo.” (Caminho de Perfeição 21,2)</p></blockquote></div>' },
      { day: 'Segundo Dia', title: 'Meditação: Oração, um buquê de flores.', content: '<div class="day-specific-content"><p>A oração não pode ser um trabalho cansativo e nem um esforço artificial de concentração, mas deve naturalmente brotar do coração como uma flor que desabrocha lentamente ao calor dos raios de sol. Santa Teresa desenvolve sua oração nesta intimidade de relacionamento com o Amado, é através da oração que a alma entra em contato com Deus e ao mesmo tempo Deus entra em contato com a alma, comunicando-lhe as graças de sua misericórdia. Neste processo percebe-se que a oração é o principio de uma aventura pela busca de Deus que não se sacia até o encontro supremo; caminho para a água viva da contemplação, esse encontro com Deus pela oração é um processo gradual de graça interior interpenetrada pela entrega total.</p></div>' },
      { day: 'Terceiro Dia', title: 'Meditação: Amor Silencioso', content: '<div class="day-specific-content"><p>O amor exige silêncio e solidão, pois, não é possível ouvir a voz do Senhor no barulho; silenciar as coisas é difícil, silenciar a si mesmo é ainda mais difícil, porém, não é impossível, basta ter uma determinada determinação. A oração constitui uma atitude de docilidade, feita de silêncio amoroso na qual o coração de Deus e do homem fundem-se realizando uma união misteriosa, por mais que estejamos sempre em oração, faz-se necessário um momento para se unir ao Amado, pois, quanto maior o amor, maior será a fidelidade ao encontro com quem se ama. Teresa de Jesus, com sua experiência, nos ensina em que consiste a oração e como se deve permanecer tranqüilos diante das dificuldades que se encontra no percurso em direção ao Amado.</p><blockquote class="brand-border pl-4 italic"><p>“Só quero que estejais cientes disto: para ter benefício neste caminho e subir às moradas que desejamos, o importante não é pensar muito, mas amar muito. E, assim, deveis fazer o que mais vos despertar o amor. É possível que não saibamos o que é amar; isso não me espantaria muito, because o amor não está no maior gosto, mas na maior determinação de desejar contentar a Deus, em procurar, na medida do possível, não ofendê-Lo e em pedir-Lhe o aumento contínuo da honra e glória de Seu Filho, bem como a prosperidade da Igreja Católica. São esses os sinais do amor, e não penseis que a oração consista em fixar o pensamento num só ponto, nem que tudo estará perdido se vos distrairdes um pouco”. (4 M 1,7)</p></blockquote></div>' },
      { day: 'Quarto Dia', title: 'Meditação: Oração, trato de amizade.', content: '<div class="day-specific-content"><p>Muita gente afirma que não sabe rezar e quer aprender; Santa Teresa é mestra da vida de oração ela nos ensina a rezar com a vida através do contato com nosso Senhor, e ensinou este modo próprio de rezar às comunidades carmelitanas. A sua novidade está em reconhecer que o próprio Deus habita em nós, mora dentro de nós e quer que passemos a vida em sua companhia. Quando por fora ficamos preocupados com riquezas, luxos, prazeres e discórdias lá dentro, Deus fica esquecido. O homem, feito a imagem e semelhança de Deus é muito belo e grande, por isso, Teresa o compara a um castelo feito de um só cristal; no centro está o sol, que é Deus, este faz com que o cristal se torne resplandecente, refletindo sua luz, rezar com Teresa é estar com Deus numa presença amorosa e trazê-lo para a vida e deixar o cristal resplandecer pelo sol. Esta descoberta por um Deus tão próximo leva Teresa a travar uma vida de amizade com o Amado, devemos estar na presença de Deus como estamos na presença de um amigo na qual desejamos estar com ele e falarmos das nossas intimidades.</p><p>Você já pensou em se encontrar com esse Deus em seu íntimo e em manter com ele um relacionamento de amizade?</p></div>' },
      { day: 'Quinto Dia', title: 'Meditação: A alma, jardim e horta de Deus', content: '<div class="day-specific-content"><p>Santa Teresa não menciona um método ordinário para se fazer oração, porém, não deixa de assinalar comparações práticas e conhecidas para atrair e dar santa ocupação a imaginação e a memória que se tornam magníficas cooperadoras na oração. A Santa utiliza-se muito da comparação do paraíso, do jardim e da horta para ensinar o caminho da oração; a alma se olha como horta de Deus e jardim das delícias de Deus; nesta dinâmica a alma concentra-se em Deus, que está a cuidar da horta, enchendo-a de flores e de frutos, para que possa passear gozoso neste amoroso jardim. Deus é o jardineiro e se alegra em cuidar do seu jardim e alegra a alma que se converte em paraíso, em união de amor com o Amado; esse processo é possível because Deus passeia deleitosamente na alma por meio da oração. A alma alegra-se ao entender que o Amado está consigo na solidão, olhando suas virtudes e seus desejos de encontrá-lo dentro de si, este é o verdadeiro céu da alma na terra.</p><blockquote class="brand-border pl-4 italic"><p>“Quem principia deve ter especial cuidado, como quem fosse plantar um jardim, para deleite do Senhor, em terra muito improdutiva, com muitas ervas daninhas. Sua Majestade arranca as ervas daninhas e planta as boas. Façamos de conta que isso já começou quando uma alma dedica-se à oração e começa a se exercitar nela. Com a ajuda de Deus, temos de procurar, como bons jardineiros, que essas plantas cresçam, tendo o cuidado de regá-las para que não se percam e venham a dar flores, cujo perfume agradável delicie esse nosso Senhor, para que Ele venha a se deleitar muitas vezes em nosso jardim e a gozar entre essas virtudes.” (Vida 11,6)</p></blockquote></div>' },
      { day: 'Sexto Dia', title: 'Meditação: Nas Mãos de Deus', content: '<div class="day-specific-content"><p>Deixemos que a Santa nos fale através desta poesia. Pois, através dela podemos entrar na intimidade com Deus, a poesia é uma forma que a alma encontra para poder expressar-se ao seu Amado, ela fala das verdades que muitas vezes não se consegue expressar claramente, o bonito da poesia é o abrir-se às possibilities de diversas interpretações, adequando-se ao estado em que a alma se encontra.</p><p>Rezemos com esta poesia que é uma oração: Entregar-se todo enfim, que possamos entregar a nossa vida (a nossa história) ao Senhor, assim, como Santa Teresa fez. Sem reservas doar a nossa vida ao Amado. O que queres Senhor fazer de mim?</p><p>Coloquemos a nossa vida nas mãos do Senhor.</p></div>' },
      { day: 'Sétimo Dia', title: 'Meditação: O mistério do sofrimento', content: '<div class="day-specific-content"><p>O sofrimento é parte misteriosa e inevitável da vida, ele nos atinge a partir de fora e a partir de dentro, do profundo do nosso interior. Nós sofremos por causa da doença, fadiga, distúrbios emocionais, preocupações, ansiedades, incompreensões, etc. Muitas vezes diante desses sofrimentos cotidianos nos perguntamos: Será que os Santos passaram por esses sofrimentos? Quando lemos Santa Teresa descobrimos uma vida de enorme sofrimento, when ela nos fala sobre a oração nos fala da sua experience, da dor e temor, que a perturbava nos momentos de oração, porém, a santa lutava contra seus próprios pensamentos com a finalidade de se concentrar.</p><p>Em nossa vida de oração encontramos as mesmas dificuldades, que são causas de sofrimento, porém, que nos ajudam a tomar consciência de nossa humanidade. Peçamos a Santa Teresa neste dia, que ela interceda por nós junto a Deus, para que, possamos ser capazes de humildemente caminharmos nesta jornada ao encontro do Amado, suportando todas as dificuldades e pedras que possa haver no caminho.</p><blockquote class="brand-border pl-4 italic"><p>“Ó Senhor do mundo, verdadeiro Esposo meu… tão necessitado estais. Senhor meu e Bem meu, que quereis admitir uma pobre companhia como a minha? Estarei vendo em Vosso semblante que Vos consolastes comigo? Pois como. Senhor, é possível que os anjos Vos deixem só e que nem mesmo Vos console o Vosso Pai? Se assim é, Senhor, que tudo isso quereis passar por mim, o que é isto que eu passo por Vós. De que me queixo? Já estou envergonhada de Vos ter visto assim e desejo, Senhor, passar por todas as provações que me acometerem e tê-las como grande bem para Vos imitar em algo. Marchemos juntos, Senhor; por onde fordes, terei de ir; por onde passardes, terei de passar” (Caminho de Perfeição 26,6).</p></blockquote></div>' },
      { day: 'Eitavo Dia', title: 'Meditação: Andar com alegria', content: '<div class="day-specific-content"><p>Santa Teresa de Jesus tinha many virtudes e, entre elas, destacava a alegria e o bom humor. Uma santa dotada de verdadeiras graças naturais como a jovialidade, a espontaneidade, a cordialidade, a afabilidade e a sensatez. A vida de oração deve estar intimamente ligada à alegria, pois, para a Santa tanto a oração quanto a recreação tem sua importância. A alegria teresiana não é apenas uma emoção, mas fundamentalmente é um estado. É a capacidade de entender e viver a vida na plenitude de nossa humanidade, encontrando alegrias nos problema da vida.</p><blockquote class="brand-border pl-4 italic"><p>“Andai alegres, servindo no que vos é mandado, como eu disse, e se vossa humildade for verdadeira, felizes de vós que servis na vida ativa, pois não murmurareis senão de vós mesmas. Deixai as outras com sua guerra, que não é pequena; because, embora nas batalhas o alferes não peleje, nem por isso deixa de correr grande perigo e, no seu íntimo, deve lutar mais do que todos, já que, portando o estandarte, não se pode defender e, mesmo que o façam em pedaços, não pode soltá-lo.<br>Assim, os contemplativos devem levar erguida a bandeira da humildade e sofrer todos os golpes sem dar nenhum; because o seu ofício é padecer como Cristo, levantar bem alto a cruz, não a deixar sair das mãos por mais perigos em que se vejam; não devem eles dar mostras de fraqueza no sofrimento, pois para suportá-lo receberam esse honroso ofício. Eles devem ver o que fazem, because, se largam a bandeira, perdida está a batalha. Logo, creio ser muito prejudicial para os que não estão tão adiantados o ver que, naqueles por eles já considerados capitães e amigos de Deus, as obras não correspondem ao ofício de que se desincumbem.” (Caminho de Perfeição 18,5)</p></blockquote><p>A Alegria:<br>Hás de procurá-la com liberdade, singeleza e espontaneidade.<br>A alegria carece de luxo e pose.<br>É descansada, serena, humilde e agradecida.<br>Não é invejosa e se fixa sempre no bem.<br>É austera, obediente, serviçal e sofrida!<br>Regozija-se e satisfaz-se com o bem do outro,<br>Nasce do interior do coração.<br>A alegria é criativa, imaginativa e não conhece o medo.<br>É mais forte que a morte, como o Amor,<br>A alegria é plenitude, satisfação de quem tem a Deus,<br>Because “Só Deus Basta”.<br>(Eusebio Gómez Navarro)</p></div>' },
      { day: 'Nono Dia', title: 'Meditação: A humildade profunda', content: '<div class="day-specific-content"><p>Quão vasto é o papel da humildade! Ela liberta de tantas mesquinharias e inúteis preocupações. Quantas almas se perturbam no exercício de suas ocupações por falta de humildade! Contentemo-nos, pois, uma vez por todas, com o que somos! “A humildade é a verdade”, diz Santa Teresa. A humildade deve enfrentar combates, Teresa sabe que as preeminências e os pontos de honra encontram também acesso junto das religiosas. Não somente entre as monjas! A Santa recorda que mesmo os sábios têm seus graus de precedência, segundo sua erudição. Teresa ensina também às suas filhas reagirem com todas as suas forças contra as tentações do orgulho. É preciso, pois, convencer-se disto: o Carmelo é uma escola de ascetismo. Nele se exige da alma a prática das mais altas virtudes!</p><blockquote class="brand-border pl-4 italic"><p>“Se vos quereis vingar do demônio e vos livrar mais prontamente da tentação, deveis não somente avançar interiormente na humildade… mas, por vossos atos exteriores, fazer de modo que vossa tentação reverta em proveito das irmãs. Assim, quando esta vos assaltar, pedi à priora que vos mande fazer algum ofício baixo, qualquer ato de humildade… estudai a manera de dobrar vossa vontade nas coisas que vos contrariam, e que o Senhor vos descobrirá; deste modo, a tentação durará pouco”. (Caminho de Perfeição 36, 7)</p></blockquote></div>' }
    ]
  },
  margarida_alacoque: { 
    saintName: 'Santa Margarida M.A.',
    novenaTitle: 'Novena a Santa Margarida Maria Alacoque', 
    description: 'A grande mensageira do Sagrado Coração de Jesus, Santa Margarida intercede pela devoção e reparação ao Coração de Cristo.',
    finalPrayer: `<div class="final-prayer-text"><div class="w-16 h-px bg-white/20 my-6 mx-auto"></div><h4 class="section-title text-xl font-bold mb-2">Oração</h4><div class="prayer-block"><p>Ó Santa Margarida Maria, a quem o Sagrado Coração de Jesus constituiu herdeira de seus Divinos Tesouros. Nós vos suplicamos, de obter desse Coração adorável as graças que atualmente precisamos. Nós vos pedimos com plena confiança. Que esse Coração se digne nos atender uma vez mais por vossa intercessão e para sua maior glória. Ó Coração de amor, eu ponho toda a minha confiança em vós, pois eu temo tudo da minha fraqueza, mas espero tudo da vossa bondade. Amém.</p></div><p class="mt-4 font-semibold">Santa Margarida Maria, rogai por nós.</p></div>`,
    days: [
        { day: '1º Dia', title: 'Santa Margarida Maria Alacoque – Uma Vida Eucarística', content: `<div class="day-specific-content"><p>Nosso coração é feito para Deus, infeliz daquele que se contenta com menos do que Deus. É preciso deixar tudo, para encontrar tudo no Sagrado Coração de Jesus! (Santa Margarida Maria Alacoque)</p><h4>Conhecer os sentimentos do Coração de Jesus.</h4><p>Todos nós desejamos conhecer a Deus. Toda pessoa é um mistério. Quando a afeição aproxima dois seres, eles começam um longo caminho de progresso no conhecimento mútuo. O conhecimento do Coração de Jesus é primeiramente uma graça, ligada à nossa obediência. Com efeito, Jesus prometeu “se manifestar” àqueles que o amam e guardam os seus mandamentos (Jo 14,21). Margarida Maria era uma pessoa eucarística e adoradora, todos os momentos livres os passava diante do Santíssimo. À sua Superiora que se admirava de tão longas horas diante do Sacrário, ela explica: meu maior contentamento é estar diante do Santíssimo. Onde meu coração está como no seu centro.</p></div>` },
        { day: '2º Dia', title: 'Partilhar os sentimentos do Coração de Jesus', content: `<div class="day-specific-content"><p>Esse conhecimento não pode ficar simply no nível intelectual, ele pede a conformidade. O que supõe a conversão do nosso coração: “Dar-vos-ei um coração novo, porei no vosso íntimo um espírito novo” (Ez 36,26). Margarida Maria dizia: o Sagrado Coração está mais próximo de vós when sofreis do que when vos alegrais… A cruz é um bálsamo tão precioso que ele perde o seu bom odor when é descoberto: por isso é preciso escondê-lo e levá-lo em silêncio tanto quanto se possa. “Tende uma grande confiança em Deus e nunca desconfieis de sua misericórdia que ultrapassa infinitamente todas as nossas misérias. Lançai-vos nos seus braços, ou dentro de seu Coração, abandonai-vos a tudo aquilo que Ele queira fazer de vós”. (Santa Margarida Maria Alacoque).</p></div>` },
        { day: '3º Dia', title: 'Culto ao Coração de Jesus e o espírito de Devoção', content: `<div class="day-specific-content"><p>O amor não quer um coração partilhado; ele quer tudo ou nada. O amor vos torna tudo fácil. Dai-lhe amor por amor e não vos esqueçais nunca daquele que o amor fez morrer por vós (Santa Margarida Maria Alacoque).</p><p>A imagem do coração, símbolo universal do amor. Nosso vocabulário é bem pobre para expressar essa necessidade e essa vocação essenciais da condição humana. Sob a única palavra ‘amor’ se esconde uma maravilhosa generosidade, mas também egoísmo e perversões! O apóstolo João nos garante que “Deus é Amor” (1Jo 4,16). Jesus apresenta-Se à nossa Santa e diz-lhe: ‘Eu quero fazer-te ler no livro da vida, em que está contida a ciência do amor’. E descobrindo-me o seu Sagrado Coração, fez-me ler estas palavras: ‘O meu Amor Reina no Sofrimento, Triunfa na Humildade e Goza na Unidade’. ‘Isto se imprimiu tão fortemente no meu espírito, que nunca o esqueci’. ‘ O amável Coração de Jesus abriu-se como um grande livro, onde me fez ler as admiráveis lições do seu puro amor’.</p></div>` },
        { day: '4º Dia', title: 'Retribuir amor com amor', content: `<div class="day-specific-content"><p>Diante do mistério da Encarnação redentora, diante das riquezas do dom de Deus, o coração humano é convidado ao louvor, à ação de graças. A gratidão não pode se contentar com gestos exteriores domo eram outrora os sacrifícios de animais, justmente, criticados pelos profetas. A verdadeira gratidão é uma atitude filial, feita de arrependimento pelo pecado, de confiança na misericórdia, de submissão à vontade de um Deus que só pode querer o nosso bem. A gratidão, indiferença, o desprezo, os ultrajes dos quais Jesus se queixa, na grande aparição, são exatamente o oposto do amor recíproco, que oferece ao Senhor a adoração, o respeito, o afeto, a gratidão. E cada vez que nosso coração se entrega um pouco mais ao amor, ele recebe infinitamente mais do que deu. Amar o Amor. Margarida Maria disse-nos, e com o auxílio de imagens na linguagem de seu tempo, o que ela intuiu das insondáveis riquezas do Coração de Cristo. Peçamos agora à herdeira desses tesouros, que nos ensine o que Jesus espera e deseja de nós. ‘Parece-me que o grande desejo que Nosso Senhor tem de que o seu Sagrado Coração seja honrado com alguma homenagem particular, é para renovar nas almas os efeitos da Redenção’. Como retribuirei ao Senhor todo o bem que ele me fez? (Sl 116,12).</p></div>` },
        { day: '5º Dia', title: 'Consolar Jesus', content: `<div class="day-specific-content"><p>‘Eu quero que tu me sirvas de instrumento para atrair corações ao meu amor’. É o aspecto de ‘reparação’, indissociável da mensagem de Paray-le-Monial. Consolar alguém é lhe dar o que lhe foi, injustmente, recusado, é realizar em seu favor um ato contrário àquele que o fez sofrer, é estar presente when os outros se foram. Em primeiro tempo, a reparação consiste em apresentar ao pai esse ato de amor do Filho bem-amado, que tira o pecado do mundo. Em um segundo movimento, a reparação anima o discípulo a realizar obras boas – oração, partilhas, privações, serviços – e a uni-las à oferenda que intercede, incessantemente, por nós. A oferenda da Igreja, de todos os membros da Igreja, só tem valor se está unida à de seu Chefe. Nas aparições de 1675, Jesus se queixa a Margarida Maria das irreverências e sacrilégios a ele dirigidos no Sacramento do Amor. Ao pensar em corações que recebem indignamente a comunhão, nasce em Margarida Maria o desejo de reparar. É no fundo um pedido explícito de Jesus. Ele me pediu para comungar todas as primeiras sextas-feiras de cada mês para reparar os ultrajes que recebe no Santíssimo Sacramento. Minha grande dor foi quando este divino coração me foi apresentado com estas palavras: ‘Tenho sede, mas uma sede ardente, de ser amado pelos homens no Santo Sacramento, que esta sede me consome e, não encontro ninguém que se esforce por me desalterar e responder a meu amor’.</p></div>` },
        { day: '6º Dia', title: 'Reparação como atitude solidária', content: `<div class="day-specific-content"><p>Uma atitude de solidariedade que se une à Comunhão dos santos, fazendo-nos carregar, com o Salvador, o peso do pecado do mundo (sexto dia). Ela se traduz pela conversão pessoal, pela comunhão reparadora das primeiras sextas-feiras do mês, pela Hora Santa (quinto e sexto dia) e por todos os gestos de penitência e de partilha que o amor nos sugere. Numa comunicação mais pessoal, Jesus manifesta toda a vulnerabilidade do seu Coração, pede à sua confidente Margarida Maria, para O acompanhar, durante uma hora, todas as quintas-feiras à noite, para participar da sua agonia no Getsêmani. E diz-lhe: ‘Foi aqui que eu sofri mais do que em toda a minha Paixão, vendo-me num abandono total do Céu e da terra, carregando os pecados de todos os homens… Nenhuma criatura poderá compreender a enormidade dos tormentos que então sofri’. Desta confidência feita a Margarida Maria, nasceu a prática da Hora Santa.</p></div>` },
        { day: '7º Dia', title: 'O Sacramento da Eucaristia', content: `<div class="day-specific-content"><p>É o penhor mais precioso do amor de Deus por nós. A participação da missa, expressa o oferecimento da nossa vida, como o expressam igualmente movimentos espirituais como o Apostolado da Oração (com oferecimento cotidiano) ou a Hora de Presença, oferecimento de uma hora do dia. A visita ao Santíssimo, a adoração eucarística, quando possível, são atos de fé na presença real de Jesus entre nós. O atrativo pela Eucaristia permanece em Santa Margarida Maria como uma das grandes razões do chamado à vida religiosa. Minha maior alegria em deixar o mundo, era de pensar que eu comungaria muitas vezes… e de passar noites sozinha, diante do Santíssimo Sacramento, because aí eu sentia uma tal segurança, que embora fosse extremamente medrosa, eu não pensava mais nisso desde que estivesse no lugar das minhas mais caras delícias. ‘Jesus nos escuta no Sacramento do Amor. Não calculemos nosso tempo para o reencontro na adoração’. (São João Paulo II)</p></div>` },
        { day: '8º Dia', title: 'Viver a Eucaristia', content: `<div class="day-specific-content"><p>Centro, cume, fonte, raiz da vida cristã, a Eucaristia é verdadeiramente o ‘sacramento do amor’, de um Amor que nos é dado, de uma mor que nós devemos dar. Como sacrifício, a Eucaristia nos faz participar da oferenda do Calvário e nos convida à oferenda espiritual de toda a nossa vida, segundo a palavra de São Paulo: ‘Exorto-vos a que ofereçais vossos corpos como hóstia viva, santa e agradável a Deus: este é o vosso culto espiritual’. (Rm 12,1; cf. 1Pd 2,5). É o culto do sacerdócio comum de todos os batizados. ‘Sem o Santíssimo Sacramento e a Cruz eu não saberia viver’. Estas palavras de Santa Margarida são a revelação de um coração apaixonado de amor por Jesus Cristo. Ela se une a Jesus presente no sacrifício da Missa, que vem a ser o centro de sua vida consagrada, Ela participa da Eucaristia com os sentimentos de Maria ao pé da cruz, Ela recebe a santa comunhão com os sentimentos de Maria no momento da Anunciação: \`Eis a serva do Senhor…´ Margarida Maria une-se à oferenda do sacrifício de Jesus, oferecendo suas próprias provas, sofrimentos, incompreensões. Ela quer ser uma cópia viva do seu Esposo crucificado expresso nela por todas as suas ações. ‘Não é amar o sofrimento, mas sofrer por amor’. (Santa Margarida Maria Alacoque)</p></div>` },
        { day: '9º Dia', title: 'O que Margarida Maria diz do Coração de Jesus', content: `<div class="day-specific-content"><p>‘Pudesse eu contar tudo o que sei desta amável devoção e descobrir a toda a terra os tesouros de graças que Jesus Cristo encerra no seu adorável Coração, com intenção de os derramar, com profusão, sobre todos que a praticam!’. (Santa Margarida Maria Alacoque) ‘Contar tudo o que sei!’. Margarida Maria viu, ouviu, tocou o inefável! Ela afirma várias vezes que se sente impotente para falar deste assunto. São ‘maravilhas inexplicáveis’ ou segredos indivisíveis. Como são insuficientes as palavras humanas para exprimir o mistério de Deus, o mistério do Amor de Jesus! Então, Margarida Maria exprime-se com o auxílio de imagens muito bíblicas. As mais empregadas são o sol, as chamas, a fornalha e a fonte.</p></div>` }
      ]
  },
  inacio_antioquia: { novenaTitle: 'Novena a Santo Inácio de Antioquia', description: 'Bispo e mártir dos primeiros séculos, Santo Inácio intercede pela unidade da Igreja e pela fidelidade à fé.', saintName: 'Santo Inácio de A.', days: [], },
  pedro_alcantara: { novenaTitle: 'Novena a São Pedro de Alcântara', description: 'Reformador da Ordem Franciscana e grande penitente, São Pedro intercede pela conversão e pela busca da santidade.', saintName: 'São Pedro de A.', days: [], },
  jp2: { novenaTitle: 'Novena a São João Paulo II', description: 'Papa e santo, São João Paulo II é um poderoso intercessor pela família, pela juventude e pela liberdade.', saintName: 'São João Paulo II', days: [], },
  frei_galvao: { novenaTitle: 'Novena a Santo Antônio Galvão', description: 'O primeiro santo brasileiro, Frei Galvão intercede por todos que buscam a saúde do corpo e da alma, especialmente com suas pílulas.', saintName: 'Santo Antônio Galvão', days: [], },
  judas_tadeu: { novenaTitle: 'Novena a São Judas Tadeu', description: 'Considerado o advogado das causas desesperadas, São Judas Tadeu intercede por todos que enfrentam grandes dificuldades.', saintName: 'São Judas Tadeu', days: [], },
  todos_santos: { novenaTitle: 'Novena a Todos os Santos', description: 'Prepare-se para a grande Festa de Todos os Santos e peça a intercessão de todos aqueles que já estão no Céu.', saintName: 'Todos os Santos', days: [], },
  chiara_luce: {
    saintName: 'Beata Chiara Luce',
    novenaTitle: 'Novena à Beata Chiara Luce Badano',
    description: 'Chiara Badano nasceu depois de 11 anos de orações de seus pais. Aos nove anos conheceu o Movimento dos Focolares. Aos 17 anos foi diagnosticada com câncer nos ossos. Chiara Lubich, fundadora dos Focolares, acompanha sua trajetória e lhe dá o nome de “Chiara Luce”.',
    initialPrayer: `<div class="initial-prayer-text"><h4 class="section-title text-xl font-bold mb-2">Oração para todos os dias</h4><div class="prayer-block"><p>Deus, nosso Pai, fonte de todos os bens, nós vos damos graças pelo admirável testemunho da Beata Chiara Badano. Animada pela graça do Espírito Santo e guiada pelo exemplo luminoso de Jesus, ela acreditou firmemente no vosso infinito amor, decidida a retribui-lo com todas as suas forças, abandonando-se com plena confiança à vossa paternal vontade.</p><p>Humildemente vos pedimos: concedei-nos também a nós a graça de viver convosco e para vós, enquanto ousamos pedir-vos se for da vossa vontade, a graça de… pelos méritos de Cristo, nosso Senhor. Amém.</p></div></div>`,
    days: [
      { day: 'Primeiro dia', title: '', content: '<div class="day-specific-content"><p>Ó Pai de imensa bondade, agradeço-te o grande dom da fé. Consciente das minhas imperfeições, peço-te que me concedas a graça de imitar mais fielmente os exemplos do teu filho Jesus, em conformidade com a vida dos santos.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Segundo dia', title: '', content: '<div class="day-specific-content"><p>Deus nosso Pai, fonte de todo o bem, dou-te graças pelo teu imenso amor que chegou ao ponto de nos dares o teu próprio filho. Peço-te que me ajudes a retribuir este amor com todas as forças obedecendo à tua vontade e acolhendo humildemente as disposições da tua Providência, segundo o exemplo da Beata Clara: “Se tu o queres, ó Jesus, também o quero eu”.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Terceiro dia', title: '', content: '<div class="day-specific-content"><p>Pai santo de tal modo amaste a humanidade que lhe deste o teu filho, que, com o sacrifício da própria vida nos alcançou o grande dom da salvação. Concede-me a graça de imitar a generosidade do seu amor fraterno, dócil ao seu pedido: “Assim como eu vos amei amai-vos também vós uns aos outros” (Jo 13,34). Torna-me atento às necessidades e ao sofrimento dos outros, pronto e disponível em prestar-lhes atenção, dar-lhes conforto e ajuda segundo as minhas possibilidades.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Quarto dia', title: '', content: '<div class="day-specific-content"><p>Ó Deus santo e onipotente, tenho consciência da minha imperfeição no conhecer e no poder, no querer e no agir. Confio-me, portanto à tua infinita bondade, para que me conceda a graça de obedecer aos teus mandamentos e de acolher as decisões da tua providência, à imitação da docilidade do teu filho Jesus: “Não se faça a minha vontade mas sim a tua” (Lc 22,42).</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Quinto dia', title: '', content: '<div class="day-specific-content"><p>Ó Pai, fonte de todo o bem, sinto-me humilhado pela minha infidelidade. Em vez de retribuir o teu imenso amor, cedi à atração do egoísmo e do orgulho, aos impulsos do prazer, à pressão dos maus exemplos. Arrependido pelas minhas culpas, recorro à tua infinita misericórdia, para ser perdoado mediante o sacrifício de Jesus. Uma vez que que o sincero arrependimento exige o empenho da conversão, imploro a tua ajuda para tornar mais intensa e fervorosa a oração e a união habitual contigo.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Sexto dia', title: '', content: '<div class="day-specific-content"><p>Deus de paterna benevolência, tu nos exortas a escutar o teu Filho, admirável exemplo de generosidade na dedicação de muito do seu tempo ao diálogo contigo. É justo que também eu o imite a fim de te dar graças pelo teu imenso amor, de meditar a tua Palavra, de implorar luz e força para cumprir os meus deveres e faz-me intérprete das necessidades dos irmãos: “Senhor, ensina-nos a rezar” (Lc 11,1).</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Sétimo dia', title: '', content: '<div class="day-specific-content"><p>Pai de infinita benevolência, imploro a tua graça para aprender a dirigir-me muitas vezes a ti no decorrer dos meus dias, a fim de te confiar espontaneamente o meu estado de ânimo: pensamentos e sentimentos, intenções e decisões, alegrias e dissabores. Que eu aprenda a consultar-te para ter luz sobre o caminho a seguir; para reconhecer prontamente os erros e culpas; para agradecer o teu amor e os teus dons.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Oitavo dia', title: '', content: '<div class="day-specific-content"><p>Ó Pai, fortaleza de quem espera em ti, tu que nos revelaste a perfeição da tua santidade e do teu amor nos quais se funda a minha inquebrantável confiança na tua fidelidade às promessas. Tu me deste a certeza que não serei tentado acima das minhas forças e que, juntamente com Jesus, estarás sempre comigo para me amparar nas dificuldades. Imploro a tua graça sobretudo para retomar uma esperança firme na vida eterna: a plena, perene e feliz comunhão contigo. Com a tua ajuda quero aderir à exortação da Beata Clara: “Confia em Deus”.</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
      { day: 'Nono dia', title: '', content: '<div class="day-specific-content"><p>Deus, fonte de todo o bem, o teu Filho Jesus pede-nos para tomar parte na sua missão: “Ide e fazei discípulos todos os povos […] ensinando-lhes a observar tudo o que vos disse” (Mt 28,19). Devo ter a peito o bem de cada pessoa: por isso me pedes para ajudar o próximo com o meu exemplo e com a palavra, a conhecer Jesus e os seus ensinamentos de forma que possa acolher os dons da tua graça, partilhar a tua amizade e chegar à salvação. Peço-te, sobretudo, que me concedas a graça que tanto desejo…</p><p class="mt-4 font-semibold">Pai nosso, Ave Maria, Glória ao Pai…</p></div>' },
    ],
  },
};


export const saints: Saint[] = [
  { id: 'faustina', name: 'Santa Faustina', imageUrl: 'https://i.postimg.cc/qBKkbHTj/39a80df1d720976f7e55e00f40eadc90-1.jpg', month: 'Outubro', startDate: '26/Set', endDate: '04/Out', feastDay: '05/Out' },
  { id: 'rosario', name: 'N. S. do Rosário', imageUrl: 'https://i.postimg.cc/2669v1gr/nsr.jpg', month: 'Outubro', startDate: '28/Set', endDate: '06/Out', feastDay: '07/Out' },
  { id: 'aparecida', name: 'N. S. Aparecida', imageUrl: 'https://i.postimg.cc/Lsyj4XMh/4011bde1376c5422265a41f3a652c540.jpg', month: 'Outubro', startDate: '03/Out', endDate: '11/Out', feastDay: '12/Out' },
  { id: 'carlo_acutis', name: 'S. Carlo Acutis', imageUrl: 'https://i.postimg.cc/CKrbWHjb/8a6ca2d967cbe5b8b65b068da82f495e.jpg', month: 'Outubro', startDate: '03/Out', endDate: '11/Out', feastDay: '12/Out' },
  { id: 'teresa_avila', name: 'Sta. Teresa de Ávila', imageUrl: 'https://i.postimg.cc/ht19wsyQ/32654687eb30f846f1f2e9e3edb6f4af.jpg', month: 'Outubro', startDate: '06/Out', endDate: '14/Out', feastDay: '15/Out' },
  { id: 'margarida_alacoque', name: 'Sta. Margarida M.A.', imageUrl: 'https://i.postimg.cc/J7QHR03S/66339fa28370276f90d041991767bebd.jpg', month: 'Outubro', startDate: '07/Out', endDate: '15/Out', feastDay: '16/Out' },
  { id: 'inacio_antioquia', name: 'Sto. Inácio de A.', imageUrl: 'https://i.postimg.cc/cvWXNVVK/image.png', month: 'Outubro', startDate: '08/Out', endDate: '16/Out', feastDay: '17/Out' },
  { id: 'pedro_alcantara', name: 'São Pedro de A.', imageUrl: 'https://i.postimg.cc/LnDZnwJ2/image.png', month: 'Outubro', startDate: '10/Out', endDate: '18/Out', feastDay: '19/Out' },
  { id: 'jp2', name: 'São João Paulo II', imageUrl: 'https://i.postimg.cc/bsw1Hqcq/image.png', month: 'Outubro', startDate: '13/Out', endDate: '21/Out', feastDay: '22/Out' },
  { id: 'frei_galvao', name: 'Sto. Antônio Galvão', imageUrl: 'https://i.postimg.cc/sBYBCLdn/image.png', month: 'Outubro', startDate: '16/Out', endDate: '24/Out', feastDay: '25/Out' },
  { id: 'judas_tadeu', name: 'São Judas Tadeu', imageUrl: 'https://i.postimg.cc/9wrF08KF/image.png', month: 'Outubro', startDate: '19/Out', endDate: '27/Out', feastDay: '28/Out' },
  { id: 'chiara_luce', name: 'Beata Chiara Luce', imageUrl: 'https://i.postimg.cc/YSW99892/image.png', month: 'Outubro', startDate: '20/Out', endDate: '28/Out', feastDay: '29/Out' },
  { id: 'todos_santos', name: 'Todos os Santos', imageUrl: 'https://i.postimg.cc/j29jkK7b/download.jpg', month: 'Outubro', startDate: '23/Out', endDate: '31/Out', feastDay: '01/Nov' },
  { id: 'almas', name: 'Almas', imageUrl: 'https://placehold.co/80x80/c27a2f/FFFFFF/png?text=Almas', month: 'Novembro', startDate: '24/Out', endDate: '01/Nov', feastDay: '02/Nov' },
  { id: 'gracas', name: 'N. S. das Graças', imageUrl: 'https://placehold.co/80x80/c27a2f/FFFFFF/png?text=N.S.+Graças', month: 'Novembro', startDate: '18/Nov', endDate: '26/Nov', feastDay: '27/Nov' }
];

export const months: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const saintsOfTheDay: SaintOfTheDayData[] = [
  {
    day: 8,
    month: 'Fevereiro',
    saints: [{
      name: 'Santa Josefina Bakhita',
      imageUrl: 'https://placehold.co/80x80/6e4a3d/FFFFFF/png?text=Bakhita',
      story: `
        <h4>A Pérola de África</h4>
        <p>Nascida no Sudão em 1869, Josefina Bakhita (que significa "afortunada") teve uma infância tragicamente marcada pela escravidão. Raptada aos nove anos, conheceu os horrores da brutalidade humana, sendo vendida várias vezes e sofrendo indizíveis torturas físicas e morais. A sua história é um testemunho pungente da crueldade de que o homem é capaz, mas também da extraordinária capacidade de resiliência e perdão que nasce da fé.</p>
        <h4>O Encontro com a Verdadeira Liberdade</h4>
        <p>A sua "sorte" mudou quando foi comprada por um cônsul italiano, que a levou para Itália e a entregou a uma família amiga. Foi aí que Bakhita conheceu o cristianismo. Ao aprender sobre Jesus, que também foi açoitado e crucificado, sentiu que finalmente tinha encontrado um "Patrão" que a amava incondicionalmente. Em 1890, recebeu o batismo, a crisma e a primeira comunhão, escolhendo o nome Josefina. A liberdade legal que obteve foi apenas um pálido reflexo da profunda liberdade interior que encontrou em Cristo.</p>
        <h4>"Irmã Morena"</h4>
        <p>Em 1896, Josefina ingressou nas Irmãs Canossianas, onde passou o resto da sua vida em humildade e serviço, sendo carinhosamente chamada de "Irmã Morena". A sua vida foi um contínuo ato de perdão e de gratidão. Questionada sobre o que faria se encontrasse os seus raptores, respondeu que se ajoelharia para lhes beijar as mãos, pois se não fosse por eles, não teria conhecido Jesus. A sua história ensina-nos que o sofrimento, quando unido a Cristo, pode tornar-se um caminho de salvação e de santidade.</p>
        <p class="mt-4"><b>Oração:</b> Ó Santa Josefina Bakhita, que, passando pela escravidão, encontrastes a verdadeira liberdade em Cristo, ajudai-nos a superar todas as formas de escravidão do nosso tempo e a encontrar em Deus a nossa única e verdadeira esperança.</p>
        <p class="mt-2 italic">Santa Josefina Bakhita, rogai por nós.</p>`
    }]
  },
  {
    day: 1,
    month: 'Outubro',
    saints: [{
      name: 'Santa Teresinha do Menino Jesus',
      imageUrl: 'https://i.postimg.cc/NMLk6dPD/santa-teresinha.jpg',
      story: `
        <h4>A Pequena Via para a Santidade</h4>
        <p>Teresa Martin, nascida em Alençon, França, em 1873, viveu uma vida curta mas de imenso impacto espiritual. Entrou para o Carmelo de Lisieux aos 15 anos, onde, longe de grandes feitos externos, desenvolveu a sua famosa "Pequena Via". Este caminho consiste em encontrar Deus não em grandes penitências, mas no amor e na confiança abandonada, expressos nos atos mais simples e rotineiros. A sua espiritualidade da infância espiritual ensina que a santidade é acessível a todos, bastando reconhecer a própria pequenez e entregar-se totalmente à misericórdia de um Deus que é Pai.</p>
        <h4>Amor no Coração da Igreja</h4>
        <p>O maior desejo de Teresinha era "ser o amor no coração da Igreja". Ela compreendeu que, sem o amor, todas as vocações são vazias. Viveu cada momento, desde os trabalhos comunitários até os sofrimentos da sua doença, como um ato de amor por Deus e pela salvação das almas. Em sua autobiografia, "História de uma Alma", revela uma alma ardente, missionária, que prometeu "passar o seu céu a fazer o bem na terra", deixando cair uma "chuva de rosas" de graças sobre o mundo.</p>
        <h4>Doutora da Igreja</h4>
        <p>Apesar de sua vida escondida e de sua morte prematura aos 24 anos, a profundidade de sua doutrina espiritual foi reconhecida por toda a Igreja. Em 1997, o Papa São João Paulo II declarou-a Doutora da Igreja, um título raro, especially para uma jovem que não frequentou universidades. A sua ciência, a "ciência do amor", continua a iluminar e a guiar fiéis em todo o mundo, mostrando que a perfeição consiste em fazer a vontade de Deus com um coração inteiramente entregue.</p>
        <p class="mt-4"><b>Oração:</b> Ó Santa Teresinha do Menino Jesus, que prometestes deixar cair uma chuva de rosas, eu vos peço: fazei-me experimentar a vossa intercessão junto de Deus, alcançando-me as graças que necessito e ensinando-me o caminho da confiança e do amor.</p>
        <p class="mt-2 italic">Santa Teresinha do Menino Jesus, rogai por nós.</p>`
    }]
  },
  {
    day: 2,
    month: 'Outubro',
    saints: [{
      name: 'Santos Anjos da Guarda',
      imageUrl: 'https://i.postimg.cc/zX2jKb5F/anjos-da-guarda.jpg',
      story: `
        <h4>Companheiros Celestes</h4>
        <p>A fé católica, baseada na Sagrada Escritura, ensina que cada pessoa é confiada por Deus à proteção de um Anjo da Guarda. O Catecismo da Igreja Católica afirma que "desde a infância até à morte, a vida humana é acompanhada pela sua assistência e intercessão" (CIC 336). Eles não são uma fantasia poética, mas uma presença real e pessoal, um sinal concreto do cuidado paternal de Deus que nunca nos deixa sozinhos na jornada da vida.</p>
        <h4>Guia e Protetor</h4>
        <p>A missão do nosso Anjo da Guarda é múltipla: ele nos protege dos perigos físicos e espirituais, ilumina a nossa consciência para nos ajudar a discernir o bem do mal e apresenta as nossas orações a Deus. Ele é um amigo fiel, um guia seguro no caminho da salvação e um poderoso defensor contra as ciladas do demônio. A devoção aos Santos Anjos fortalece a nossa confiança na Providência Divina e nos incentiva a viver com mais atenção à voz de Deus.</p>
        <h4>Uma Amizade a ser Cultivada</h4>
        <p>A celebração deste dia convida-nos a renovar a nossa amizade e diálogo com o nosso Anjo da Guarda. Podemos invocá-lo nas nossas dificuldades, agradecer-lhe pela sua proteção constante e escutar as suas inspirações. Santos como São Padre Pio e Santa Teresinha tinham uma profunda intimidade com os seus anjos. Que o seu exemplo nos inspire a cultivar esta amizade celeste, que nos conduzirá com segurança ao encontro definitivo com Deus no Céu.</p>
        <p class="mt-4"><b>Oração:</b> Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarda, me governa e ilumina. Amém.</p>
        <p class="mt-2 italic">Santos Anjos da Guarda, rogai por nós.</p>`
    }]
  },
  {
    day: 4,
    month: 'Outubro',
    saints: [{
      name: 'São Francisco de Assis',
      imageUrl: 'https://i.postimg.cc/fVs0LZz6/sao-francisco-assis.jpg',
      story: `
        <h4>O Jovem de Assis</h4>
        <p>Nascido em 1182, filho de um rico comerciante de tecidos, Francisco Bernardone viveu uma juventude de luxo e sonhos de glória militar. No entanto, uma profunda crise espiritual, marcada pela prisão durante uma guerra e um encontro transformador com um leproso, mudou o rumo de sua vida. O ponto de viragem definitivo foi quando, em oração na capela de São Damião, ouviu a voz do crucifixo que lhe dizia: "Francisco, vai e repara a minha casa que, como vês, está em ruínas".</p>
        <h4>O Abraço à Pobreza</h4>
        <p>Tomando o mandato de Cristo literally, Francisco renunciou a toda a sua herança, despojando-se de suas roupas na praça de Assis diante de seu pai e do bispo. Abraçou uma vida de pobreza radical, pregando o Evangelho com simplicidade e alegria, e servindo os mais marginalizados. Fundou a Ordem dos Frades Menores (Franciscanos), a Ordem das Clarissas e a Ordem Terceira, convidando homens e mulheres de todos os estados de vida a seguir os passos de Cristo pobre e humilde.</p>
        <h4>Cântico das Criaturas</h4>
        <p>Francisco é um ícone universal de paz e amor por toda a Criação. No seu "Cântico das Criaturas", ele louva a Deus através do "irmão sol", da "irmã lua" e de todos os elementos da natureza, vendo em cada criatura um reflexo da bondade do Criador. Nos últimos anos de sua vida, no Monte Alverne, recebeu os estigmas, tornando-se um sinal vivo da Paixão de Cristo. Sua vida é um testemunho radical do poder transformador do Evangelho vivido em sua pureza original.</p>
        <p class="mt-4"><b>Oração:</b> Senhor, fazei de mim um instrumento da Vossa paz. Onde houver ódio, que eu leve o amor; onde houver ofensa, que eu leve o perdão; onde houver discórdia, que eu leve a união.</p>
        <p class="mt-2 italic">São Francisco de Assis, rogai por nós.</p>`
    }]
  },
  {
    day: 5,
    month: 'Outubro',
    saints: [{
      name: 'Santa Faustina Kowalska',
      imageUrl: 'https://i.postimg.cc/qBKkbHTj/39a80df1d720976f7e55e00f40eadc90-1.jpg',
      story: `
        <h4>A Apóstola da Misericórdia</h4>
        <p>Helena Kowalska, nascida em 1905 numa pobre família de camponeses na Polónia, foi a terceira de dez filhos. Desde cedo sentiu o chamado à vida religiosa, mas enfrentou a oposição dos pais. Aos 20 anos, após uma visão de Cristo sofredor, entrou para a Congregação das Irmãs de Nossa Senhora da Misericórdia em Varsóvia, recebendo o nome de Irmã Maria Faustina. Sua vida no convento foi simples e humilde, dedicada aos trabalhos mais básicos, mas seu mundo interior era extraordinariamente rico em graças místicas.</p>
        <h4>As Revelações de Jesus Misericordioso</h4>
        <p>A partir de 1931, Jesus começou a aparecer a Santa Faustina, confiando-lhe a missão de ser a "Secretária e Apóstola da Sua Misericórdia". Cristo pediu-lhe que pintasse uma imagem Sua com a inscrição "Jesus, eu confio em Vós", que se celebrasse a Festa da Misericórdia no domingo a seguir à Páscoa, e que se rezasse o Terço da Misericórdia, especialmente pelos pecadores e agonizantes. Jesus revelou-lhe que a Sua Misericórdia é o último refúgio para a humanidade, uma fonte inesgotável de graças para todos os que a ela recorrem com confiança.</p>
        <h4>O Diário: Um Tesouro Espiritual</h4>
        <p>Por ordem de seu diretor espiritual, o Beato Miguel Sopoćko, Santa Faustina escreveu um Diário, registando as suas profundas experiências místicas e os diálogos com Jesus. Este "Diário: A Divina Misericórdia na Minha Alma" tornou-se um dos clássicos da literatura espiritual do século XX. Nele, encontramos um convite urgente à confiança no amor infinito de Deus, que é sempre maior que a nossa miséria. Santa Faustina faleceu de tuberculose aos 33 anos, e a sua mensagem espalhou-se rapidamente, sendo um farol de esperança para o nosso tempo.</p>
        <p class="mt-4"><b>Oração:</b> Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós.</p>
        <p class="mt-2 italic">Santa Faustina Kowalska, rogai por nós.</p>`
    }]
  },
  {
    day: 6,
    month: 'Outubro',
    saints: [{
      name: 'São Bruno',
      imageUrl: 'https://i.postimg.cc/SnbcMCrM/image.png',
      story: `
        <h4>O Erudito que Buscava a Deus</h4>
        <p>São Bruno, nascido em Colônia, Alemanha, por volta de 1030, foi um dos homens mais cultos de seu tempo. Tornou-se reitor da prestigiosa escola da catedral de Reims, na França, onde formou muitos alunos notáveis, incluindo o futuro Papa Urbano II. No entanto, o seu coração ansiava por algo mais do que o sucesso acadêmico e eclesiástico. Profundamente desiludido com a simonia e a corrupção que via em seu meio, sentiu um chamado irresistível a uma vida de silêncio e solidão para se dedicar inteiramente a Deus.</p>
        <h4>A Fundação da Cartuxa</h4>
        <p>Em 1084, junto com seis companheiros, Bruno retirou-se para um local deserto e inóspito nos Alpes franceses, conhecido como Chartreuse. Ali, eles construíram um eremitério, dando início à Ordem dos Cartuxos. A regra cartusiana, que Bruno ajudou a estabelecer, combina de forma única a vida eremítica (cada monge vive em sua própria cela em silêncio e oração) com a vida cenobítica (reúnem-se para a liturgia e algumas refeições). Esta forma de vida radical busca a união com Deus através da contemplação ininterrupta.</p>
        <h4>Um Legado de Silêncio</h4>
        <p>Mesmo quando o Papa Urbano II, seu antigo aluno, o chamou a Roma para ser seu conselheiro, o coração de Bruno permaneceu no deserto. Após algum tempo, obteve permissão para fundar um novo eremitério na Calábria, no sul da Itália, onde viveu até sua morte em 1101. O lema dos cartuxos, "Stat crux dum volvitur orbis" (A Cruz permanece firme while o mundo gira), resume perfeitamente o legado de São Bruno: um testemunho silencioso de que, no meio da agitação do mundo, a única realidade que permanece é a busca do Absoluto.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que chamastes São Bruno para vos servir no silêncio e na solidão, concedei-nos, por sua intercessão, que, no meio da agitação do mundo, saibamos guardar um coração silencioso para Vos encontrar. Amém.</p>
        <p class="mt-2 italic">São Bruno, rogai por nós.</p>`
    }]
  },
  {
    day: 7,
    month: 'Outubro',
    saints: [{
      name: 'Nossa Senhora do Rosário',
      imageUrl: 'https://i.postimg.cc/2669v1gr/nsr.jpg',
      story: `
        <h4>A Oração que Veio do Céu</h4>
        <p>As origens do Santo Rosário remontam ao século XIII, quando, segundo a tradição, São Domingos de Gusmão, em sua luta contra a heresia albigense, recebeu da própria Virgem Maria esta oração como uma arma poderosa para a conversão e a paz. A simplicidade de meditar os mistérios da vida de Cristo while se reza as Ave-Marias tornou o Rosário uma "Bíblia dos pobres" e uma escola de oração acessível a todos, difundindo-se rapidamente por toda a cristandade como uma prática de piedade popular e eficaz.</p>
        <h4>A Vitória de Lepanto</h4>
        <p>A festa de hoje foi instituída pelo Papa São Pio V em 1571 para celebrar a milagrosa vitória da frota cristã contra o Império Otomano na Batalha de Lepanto. Enquanto a batalha se desenrolava no mar, o Papa e toda a cristandade rezavam o Rosário, suplicando a intercessão da Virgem. A vitória foi atribuída diretamente à proteção de Maria, "Auxílio dos Cristãos". Em reconhecimento, o Papa estabeleceu a festa de "Nossa Senhora da Vitória", que seu sucessor, Gregório XIII, renomeou para "Nossa Senhora do Rosário".</p>
        <h4>Um Compêndio do Evangelho</h4>
        <p>O Rosário é muito mais do que uma simples repetição de orações. É uma "escola de Maria", um caminho contemplativo onde, na companhia da Mãe, meditamos sobre os principais mistérios da vida, paixão, morte e ressurreição de Jesus Cristo. Nas suas aparições em Lourdes e Fátima, a própria Virgem Maria insistiu na recitação diária do terço como um remédio para os males do mundo, um caminho para a paz e a conversão dos pecadores, reafirmando o seu poder e a sua importância para a vida da Igreja.</p>
        <p class="mt-4"><b>Oração:</b> À Vossa Proteção recorremos, Santa Mãe de Deus. Não desprezeis as nossas súplicas em nossas necessidades, mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita.</p>
        <p class="mt-2 italic">Nossa Senhora do Rosário, rogai por nós.</p>`
    }]
  },
  {
    day: 8,
    month: 'Outubro',
    saints: [{ 
      name: 'Santa Reparata', 
      imageUrl: 'https://i.postimg.cc/QN4QQTH8/statue-of-saint-reparata.webp', 
      story: `
        <h4>A Jovem Mártir de Cesareia</h4>
        <p>Santa Reparata é uma jovem virgem e mártir dos primeiros séculos do cristianismo, venerada especialmente em Florença e na Córsega. Embora os detalhes históricos de sua vida sejam escassos e envoltos em lenda, a tradição a apresenta como uma jovem de Cesareia, na Palestina, que enfrentou o martírio durante a perseguição do imperador Décio, por volta do ano 250. Teria apenas doze anos quando testemunhou a sua fé com coragem inabalável.</p>
        <h4>A Coragem na Tortura</h4>
        <p>A lenda conta que Reparata foi submetida a terríveis torturas por se recusar a sacrificar aos ídolos pagãos. Foi colocada em fornalhas ardentes, das quais saiu ilesa, e teve os seus seios cortados, mas a sua fé permaneceu firme. A sua constância diante do sofrimento converteu muitos dos que assistiam ao seu suplício. Finalmente, foi decapitada, e a tradição diz que a sua alma foi vista a subir ao céu em forma de uma pomba branca, símbolo da sua pureza e do seu espírito vitorioso.</p>
        <h4>Padroeira de Florença</h4>
        <p>O culto a Santa Reparata espalhou-se pelo Mediterrâneo, e ela tornou-se a padroeira principal de Florença antes da construção da catedral dedicada a Santa Maria del Fiore. A antiga catedral da cidade era dedicada a ela, e as suas relíquias repousam hoje sob o novo Duomo. A sua história, embora lendária, continua a inspirar os fiéis a uma fidelidade corajosa a Cristo, mesmo diante das maiores adversidades, mostrando que a força de Deus se manifesta na fraqueza humana.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que destes a Santa Reparata a coragem de testemunhar a fé até ao martírio, concedei-nos, por sua intercessão, a força para sermos fiéis a Vós em todas as circunstâncias da nossa vida.</p>
        <p class="mt-2 italic">Santa Reparata, rogai por nós.</p>` 
    }]
  },
  {
    day: 9,
    month: 'Outubro',
    saints: [{ 
      name: 'São John Henry Newman', 
      imageUrl: 'https://i.postimg.cc/9fCw5mrL/Photo-of-John-Henry-Newman.jpg', 
      story: `
        <h4>Uma Mente Brilhante</h4>
        <p>John Henry Newman, nascido em Londres em 1801, foi uma das mentes mais brilhantes e influentes do século XIX. Como sacerdote anglicano e líder do Movimento de Oxford, procurou renovar a Igreja da Inglaterra, aprofundando as suas raízes católicas. A sua busca intelectual honesta e incansável pela verdade levou-o a uma profunda crise de fé, que o confrontou com as reivindicações da Igreja Católica Romana.</p>
        <h4>A Jornada para Roma</h4>
        <p>Após anos de estudo, oração e angústia interior, Newman concluiu que a Igreja Católica era a única Igreja fundada por Cristo. Em 1845, aos 44 anos, tomou a corajosa decisão de se converter ao catolicismo, perdendo a sua posição em Oxford, os seus amigos e o seu prestígio. A sua jornada é um testemunho poderoso de que a fé não teme a razão. O seu famoso lema, "Cor ad cor loquitur" (O coração fala ao coração), resume a sua convicção de que a fé é um encontro pessoal com Deus.</p>
        <h4>Cardeal e Santo</h4>
        <p>Como católico, Newman continuou a sua vasta obra intelectual, fundando o Oratório de São Filipe Néri na Inglaterra e escrevendo obras fundamentais sobre teologia, filosofia e educação. Em 1879, foi criado cardeal pelo Papa Leão XIII, um reconhecimento da sua imensa contribuição para a Igreja. Canonizado em 2019, São John Henry Newman é um modelo para todos os que buscam a verdade com um coração sincero, mostrando que o caminho da fé é uma peregrinação contínua guiada pela luz da consciência.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que destes ao Cardeal São John Henry Newman a graça de seguir a luz da Vossa verdade, concedei-nos, por sua intercessão, a coragem de procurar-Vos sempre e a alegria de Vos encontrar.</p>
        <p class="mt-2 italic">São John Henry Newman, rogai por nós.</p>` 
      }]
  },
  {
    day: 10,
    month: 'Outubro',
    saints: [{ 
      name: 'São Daniel Comboni', 
      imageUrl: 'https://i.postimg.cc/wMmh29fg/250px-Daniele-Comboni.jpg', 
      story: `
        <h4>Um Coração para a África</h4>
        <p>Daniel Comboni nasceu em 1831, numa família pobre do norte da Itália. Desde jovem, sentiu um chamado ardente para a missão na África, um continente então conhecido como um lugar de sofrimento e exploração. O seu coração inflamou-se com o desejo de levar o Evangelho e a dignidade humana aos povos africanos, que ele amava profundamente. Tornou-se sacerdote e dedicou toda a sua energia, a sua inteligência e a sua vida a esta causa.</p>
        <h4>"Salvar a África com a África"</h4>
        <p>Comboni foi um visionário. Ele entendeu, muito antes de seu tempo, que a evangelização da África não poderia ser apenas obra de missionários estrangeiros. O seu plano pastoral, resumido no lema "Salvar a África com a África", consistia em formar catequistas, sacerdotes, religiosas e líderes locais que se tornariam os protagonistas da evangelização do seu próprio povo. Fundou os Missionários Combonianos e as Irmãs Missionárias Combonianas para realizar este sonho.</p>
        <h4>Bispo e Pai dos Africanos</h4>
        <p>Nomeado Vigário Apostólico da África Central, enfrentou inúmeras dificuldades: doenças, a hostilidade dos traficantes de escravos e a falta de recursos. No entanto, a sua confiança na Providência e o seu amor pelos africanos nunca vacilaram. Viajou incansavelmente, fundou escolas, hospitais e missões, e lutou vigorosamente contra a escravatura. Morreu em Cartum, no Sudão, em 1881, vítima da malária, entregando a sua vida como semente de uma nova Igreja africana.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que fizestes de São Daniel Comboni um apóstolo incansável da África, acendei em nós o mesmo ardor missionário para que possamos levar o Vosso amor a todos os povos, especialmente aos mais pobres e abandonados.</p>
        <p class="mt-2 italic">São Daniel Comboni, rogai por nós.</p>` 
      }]
  },
  {
    day: 11,
    month: 'Outubro',
    saints: [{ 
      name: 'São João XXIII', 
      imageUrl: 'https://i.postimg.cc/d1zCLzsw/Ioannes-XXIII-by-De-Agostini-1958-1963.jpg', 
      story: `
        <h4>O "Papa de Transição"</h4>
        <p>Angelo Roncalli nasceu numa humilde família de camponeses italianos em 1881. A sua carreira eclesiástica levou-o a servir como diplomata da Santa Sé na Bulgária, Turquia e França, experiências que lhe deram uma visão ampla do mundo e um grande apreço pelo diálogo. Eleito Papa em 1958, aos 76 anos, muitos pensaram que ele seria um "Papa de transição", um pontífice idoso que manteria o status quo. No entanto, o Espírito Santo tinha outros planos.</p>
        <h4>O Concílio Vaticano II</h4>
        <p>Para surpresa de todos, apenas três meses após a sua eleição, São João XXIII anunciou a convocação de um Concílio Ecumênico. Ele sentia que a Igreja precisava de um "aggiornamento", uma atualização, para poder dialogar eficazmente com o mundo moderno. Com a sua famosa imagem, ele queria "abrir as janelas da Igreja" para deixar entrar o ar fresco do Espírito Santo. O Concílio Vaticano II, inaugurado em 1962, transformaria profundamente a face da Igreja Católica no século XX.</p>
        <h4>O "Papa Bom"</h4>
        <p>O seu pontificado foi curto, mas o seu impacto foi imenso. Com a sua bondade, simplicidade e bom humor, conquistou o coração do mundo inteiro, sendo carinhosamente chamado de "Papa Bom". A sua encíclica "Pacem in Terris" (Paz na Terra), dirigida a todos os homens de boa vontade, tornou-se um documento de referência para a paz e os direitos humanos. Faleceu em 1963, antes do fim do Concílio, mas a sua visão profética continua a guiar a Igreja no terceiro milénio.</p>
        <p class="mt-4"><b>Oração:</b> Ó São João XXIII, que com a vossa simplicidade e bondade abristes os corações dos homens à esperança, ajudai-nos a ser, como vós, dóceis ao Espírito Santo e construtores de paz no mundo.</p>
        <p class="mt-2 italic">São João XXIII, rogai por nós.</p>` 
      }]
  },
  {
    day: 12,
    month: 'Outubro',
    saints: [
      { name: 'Nossa Senhora Aparecida', imageUrl: 'https://i.postimg.cc/Lsyj4XMh/4011bde1376c5422265a41f3a652c540.jpg', story: `
        <h4>Rainha e Padroeira do Brasil</h4>
        <p>Em 1717, três pescadores, lançando suas redes no Rio Paraíba do Sul, encontraram primeiro o corpo e depois a cabeça de uma pequena imagem de Nossa Senhora da Conceição. A partir daquele momento, a pesca que antes era infrutífera, tornou-se prodigiosamente abundante. Este foi o humilde começo da devoção a Nossa Senhora "Aparecida", que se tornaria o maior santuário mariano do mundo e o coração da fé católica no Brasil.</p>
        <h4>Mãe do Povo Brasileiro</h4>
        <p>A pequena imagem de terracota, com sua cor escura, tornou-se um símbolo poderoso da mãe que acolhe todos os seus filhos, sem distinção de cor, raça ou classe social. Ela é a representação da inculturação do Evangelho na alma do povo brasileiro. Em sua pequenez e simplicidade, ela nos recorda que Deus escolhe o que é fraco e humilde para confundir os fortes.</p>
        <h4>Fonte de Graças e Milagres</h4>
        <p>Ao longo de três séculos, milhões de peregrinos têm acorrido ao seu santuário, buscando consolo, cura e esperança. A história de Aparecida é uma história de milagres e de fé, desde o milagre das velas que se acenderam sozinhas até às inúmeras graças testemunhadas pelos seus devotos. Ela é a prova viva de que Maria é uma mãe sempre presente e atenta às necessidades de seus filhos.</p>
        <p class="mt-4"><b>Oração:</b> Ó incomparável Senhora da Conceição Aparecida, Mãe de Deus, Rainha dos Anjos, Advogada dos pecadores, refúgio e consolação dos aflitos e atribulados, livrai-nos de tudo o que possa ofender-vos e ao vosso Santíssimo Filho, meu Redentor e nosso Senhor Jesus Cristo.</p>
        <p class="mt-2 italic">Nossa Senhora Aparecida, rogai por nós.</p>` },
      { name: 'São Carlo Acutis', imageUrl: 'https://i.postimg.cc/CKrbWHjb/8a6ca2d967cbe5b8b65b068da82f495e.jpg', story: `
        <h4>Um Jovem do Nosso Tempo</h4>
        <p>Carlo Acutis, nascido em 1991, foi um jovem como tantos outros: gostava de videojogos 🎮, de computadores 💻 e de futebol. No entanto, o que o distinguia era um amor extraordinário e contagiante por Jesus, especialmente na Eucaristia ✝️, que ele chamava de sua "autoestrada para o Céu". Sua vida é um testemunho luminoso de que a santidade não é algo distante ou reservado a poucos, mas um chamado para todos, que pode ser vivido na alegria e na normalidade da vida quotidiana.</p>
        <h4>O Ciberapóstolo da Eucaristia</h4>
        <p>Dotado de um talento notável para a informática, Carlo não usou a internet para se isolar, mas para evangelizar. Criou um website para catalogar todos os milagres eucarísticos reconhecidos pela Igreja em todo o mundo, um trabalho que continua a inspirar e a fortalecer a fé de muitos. Ele entendeu que a tecnologia pode ser uma ferramenta poderosa para o bem e para levar a mensagem de Cristo a todos os cantos do mundo.</p>
        <h4>Ofertório de Vida</h4>
        <p>Diagnosticado com uma forma agressiva de leucemia, Carlo enfrentou a doença com uma serenidade e uma fé desconcertantes. Ofereceu todos os seus sofrimentos pelo Papa e pela Igreja 🙏. Faleceu em 12 de outubro de 2006, aos 15 anos, no dia de Nossa Senhora Aparecida, deixando um legado de alegria e uma certeza: "A nossa meta deve ser o infinito, não o finito. O Infinito é a nossa Pátria. Desde sempre somos esperados no Céu."</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, nosso Pai, que nos destes no São Carlo Acutis um modelo de amor à Eucaristia e de zelo apostólico, concedei-nos, por sua intercessão, a graça de vivermos sempre unidos a Jesus e de O testemunharmos com alegria aos nossos irmãos.</p>
        <p class="mt-2 italic">São Carlo Acutis, rogai por nós.</p>` }
    ]
  },
  {
    day: 13,
    month: 'Outubro',
    saints: [{ 
      name: 'Beata Alexandrina de Balazar', 
      imageUrl: 'https://i.postimg.cc/nrFJYLcQ/image.png', 
      story: `
        <h4>A "Santinha de Balazar"</h4>
        <p>Alexandrina Maria da Costa, nascida em 1904 em Balazar, Portugal, foi uma alma mística extraordinária do século XX. Aos 14 anos, para defender a sua pureza de um ataque, saltou de uma janela, ficando com sequelas que a deixaram paralisada aos 21. A partir de então, o seu leito de dor tornou-se um altar, onde ofereceu a sua vida como vítima de amor pela conversão dos pecadores e pela paz no mundo.</p>
        <h4>Alimentada pela Eucaristia</h4>
        <p>A vida de Alexandrina foi marcada por fenómenos místicos impressionantes. Durante quatro anos, todas as sextas-feiras, reviveu fisicamente e espiritualmente a Paixão de Cristo. O mais notável, no entanto, foi o facto de, nos últimos treze anos da sua vida, não ter tomado qualquer alimento ou bebida, alimentando-se exclusivamente da Sagrada Eucaristia. Este milagre, rigorosamente estudado por médicos, é um testemunho eloquente do poder da Eucaristia como verdadeiro "Pão da Vida".</p>
        <h4>"Amar, Sofrer, Reparar"</h4>
        <p>O seu lema era "amar, sofrer, reparar". Viveu cada momento de seu intenso sofrimento em união com Jesus, oferecendo-se como uma hóstia viva. O seu diretor espiritual, um padre jesuíta, documentou as suas palavras e experiências, que revelam uma profunda união com Deus. Beatificada em 2004 pelo Papa São João Paulo II, a Beata Alexandrina de Balazar ensina-nos o valor redentor do sofrimento e a centralidade da Eucaristia na vida cristã.</p>
        <p class="mt-4"><b>Oração:</b> Ó Jesus, que na Beata Alexandrina de Balazar nos destes um testemunho do poder da Eucaristia e do valor do sofrimento unido a Vós, concedei-nos a graça de amar-Vos sobre todas as coisas e de nos oferecermos por amor à salvação do mundo.</p>
        <p class="mt-2 italic">Beata Alexandrina de Balazar, rogai por nós.</p>` 
      }]
  },
  {
    day: 14,
    month: 'Outubro',
    saints: [{ 
      name: 'São Calisto I', 
      imageUrl: 'https://i.postimg.cc/NF9xn60S/image.png', 
      story: `
        <h4>Da Escravidão ao Papado</h4>
        <p>A vida de Calisto, antes de se tornar Papa, é um testemunho notável da misericórdia de Deus. Nascido escravo no final do século II, esteve envolvido em problemas financeiros que o levaram à prisão e ao trabalho forçado nas minas da Sardenha. Libertado graças à intercessão da amante do imperador Cómodo, foi acolhido pelo Papa Vítor I e, mais tarde, pelo Papa Zeferino, que, reconhecendo as suas qualidades, o nomeou seu principal conselheiro e administrador dos bens da Igreja, incluindo o cemitério na Via Ápia que hoje leva o seu nome.</p>
        <h4>O Papa da Misericórdia</h4>
        <p>Eleito Papa em 217, São Calisto I enfrentou forte oposição de um grupo rigorista liderado pelo teólogo Hipólito (que se tornou o primeiro antipapa da história). A principal controvérsia girava em torno da reconciliação dos pecadores. Calisto, defendendo a prática da Igreja, ensinava que mesmo os pecados mais graves, como o adultério e o homicídio, poderiam ser perdoados após uma penitência adequada. Ele mostrou a face de uma Igreja que é mãe e não carrasca, que acolhe os pecadores arrependidos com a mesma misericórdia do Pai do filho pródigo.</p>
        <h4>Mártir da Fé</h4>
        <p>O seu pontificado foi marcado por esta luta em defesa da misericórdia de Deus e da autoridade da Igreja. Governou com sabedoria e compaixão num período de relativa paz para os cristãos, mas acabou por ser martirizado por volta do ano 222, durante uma revolta popular anticristã em Roma. O seu legado é um lembrete poderoso de que a Igreja é, por essência, um lugar de perdão e reconciliação, e que o poder das chaves, entregue a Pedro, inclui o poder de desligar as correntes do pecado.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que no Papa São Calisto I nos mostrastes um pastor cheio de misericórdia, dai à vossa Igreja a graça de acolher sempre os pecadores e de ser um sinal do vosso perdão incondicional.</p>
        <p class="mt-2 italic">São Calisto I, rogai por nós.</p>` 
      }]
  },
  {
    day: 15,
    month: 'Outubro',
    saints: [{
      name: 'Santa Teresa de Jesus',
      imageUrl: 'https://i.postimg.cc/ht19wsyQ/32654687eb30f846f1f2e9e3edb6f4af.jpg',
      story: `
        <h4>A Reforma do Carmelo</h4>
        <p>Teresa de Cepeda y Ahumada, nascida em Ávila, Espanha, em 1515, é uma das figuras mais extraordinárias da história da Igreja. Após uma vida religiosa inicialmente morna e superficial, uma profunda experiência de conversão aos 39 anos transformou-a numa gigante espiritual. Inquieta com o relaxamento da vida nos conventos de sua época, sentiu o chamado de Deus para reformar a Ordem do Carmo, fundando, junto com São João da Cruz, os Carmelitas Descalços, que buscavam um retorno à oração contemplativa e à pobreza radical do Evangelho.</p>
        <h4>Mestra da Oração</h4>
        <p>Dotada de um carisma único e de uma personalidade vibrante, Teresa é, acima de tudo, uma mestra da vida de oração. Suas obras, como "O Livro da Vida", "Caminho de Perfeição" e, especially, "O Castelo Interior", são guias práticos e profundos para a jornada da alma em direção à união com Deus. Sua famosa definição de oração como "um trato de amizade, estando muitas vezes a sós com Quem sabemos que nos ama" democratizou a mística, mostrando que a intimidade com Deus é acessível a todos que a buscam com um coração sincero.</p>
        <h4>Doutora da Igreja</h4>
        <p>Apesar de ser mulher numa época dominada por homens e de não ter estudos formais em teologia, a profundidade e a solidez de sua doutrina espiritual levaram a Igreja a proclamá-la Doutora em 1970, a primeira mulher a receber tal título. A sua vida, marcada por êxtases místicos, fundações incansáveis e uma humanidade contagiante, continua a inspirar-nos a buscar a santidade com "determinada determinação", sem nunca perder a alegria e o bom humor. Sua famosa máxima, "Só Deus basta", resume a essência de sua espiritualidade.</p>
        <p class="mt-4"><b>Oração:</b> Nada te perturbe, nada te espante. Tudo passa, Deus não muda. A paciência tudo alcança. Quem a Deus tem, nada lhe falta. Só Deus basta.</p>
        <p class="mt-2 italic">Santa Teresa de Ávila, rogai por nós.</p>`
    }]
  },
  {
    day: 16,
    month: 'Outubro',
    saints: [{
      name: 'Santa Margarida Maria Alacoque',
      imageUrl: 'https://i.postimg.cc/J7QHR03S/66339fa28370276f90d041991767bebd.jpg',
      story: `
        <h4>Uma Vida de Devoção</h4>
        <p>Nascida em 1647, na França, Margarida Maria Alacoque demonstrou desde cedo um profundo amor pela Eucaristia e uma inclinação para a vida religiosa. Superando a oposição da família, entrou para o mosteiro da Visitação de Paray-le-Monial. Sua vida no convento foi marcada por uma intensa busca de união com Cristo, mas também por incompreensões e sofrimentos, que a prepararam para a extraordinária missão que Deus lhe confiaria.</p>
        <h4>As Aparições do Sagrado Coração</h4>
        <p>Entre 1673 e 1675, Jesus apareceu a Santa Margarida, mostrando-lhe o Seu Sagrado Coração, "ardendo em chamas de amor" e "cercado por uma coroa de espinhos". Cristo lamentou-se da ingratidão e da frieza com que o Seu amor era retribuído pelos homens e pediu a Margarida que se tornasse a mensageira desta devoção. Confiou-lhe as "Doze Promessas" para aqueles que honrassem o Seu Coração, pediu a instituição da Festa do Sagrado Coração e a prática da Comunhão reparadora nas primeiras sextas-feiras do mês.</p>
        <h4>Legado de Amor e Reparação</h4>
        <p>A missão de Santa Margarida foi árdua. Enfrentou a desconfiança de sua comunidade e a dúvida de teólogos. No entanto, com a ajuda de seu diretor espiritual, o jesuíta São Cláudio de la Colombière, a devoção ao Sagrado Coração de Jesus começou a difundir-se. Seu legado é um convite perene a contemplar o Coração de Cristo, fonte de todo o bem e símbolo do amor infinito e misericordioso de Deus, e a responder a esse amor com a nossa própria vida, em espírito de adoração e reparação.</p>
        <p class="mt-4"><b>Oração:</b> Ó Sagrado Coração de Jesus, que manifestastes a Santa Margarida Maria o desejo de reinar sobre as famílias cristãs, nós vos escolhemos hoje como Rei e Senhor de nossa família.</p>
        <p class="mt-2 italic">Santa Margarida Maria Alacoque, rogai por nós.</p>`
    }]
  },
  {
    day: 17,
    month: 'Outubro',
    saints: [{ 
      name: 'Santo Inácio de Antioquia', 
      imageUrl: 'https://i.postimg.cc/cvWXNVVK/image.png', 
      story: `
        <h4>Discípulo dos Apóstolos</h4>
        <p>Santo Inácio, também chamado de Teóforo ("portador de Deus"), foi uma figura proeminente da Igreja primitiva. Viveu no final do primeiro e início do segundo século, tendo sido o terceiro bispo de Antioquia, sucedendo a Evódio, que por sua vez sucedeu ao próprio Apóstolo Pedro. A tradição diz que ele conheceu pessoalmente os Apóstolos Pedro e João, o que confere aos seus escritos uma autoridade e uma proximidade únicas com a era apostólica.</p>
        <h4>As Sete Cartas</h4>
        <p>Preso durante a perseguição do imperador Trajano, Inácio foi condenado a ser devorado por feras em Roma. Durante a sua longa e penosa viagem para o martírio, escreveu sete cartas a várias Igrejas da Ásia Menor e ao seu amigo São Policarpo. Estas cartas são um tesouro inestimável, oferecendo um vislumbre da teologia, da liturgia e da estrutura da Igreja primitiva. Nelas, Inácio enfatiza a importância da unidade em torno do bispo, a centralidade da Eucaristia como "remédio da imortalidade" e a divindade de Cristo.</p>
        <h4>"Trigo de Deus"</h4>
        <p>O mais impressionante em suas cartas é o seu ardente desejo pelo martírio. Ele não via a morte como uma tragédia, mas como o momento supremo de sua união com Cristo. Suplicou aos cristãos de Roma que não tentassem impedir o seu martírio, para que ele pudesse "imitar a paixão do meu Deus". Sua famosa frase "Sou trigo de Deus, e serei moído pelos dentes das feras, para me apresentar como pão puro de Cristo" revela uma alma completamente apaixonada e configurada com o seu Senhor crucificado.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que iluminastes a Vossa Igreja com as cartas e o martírio de Santo Inácio de Antioquia, dai-nos a graça de amar a unidade da Igreja e de desejar ardentemente a união convosco.</p>
        <p class="mt-2 italic">Santo Inácio de Antioquia, rogai por nós.</p>` 
      }]
  },
  {
    day: 18,
    month: 'Outubro',
    saints: [{ 
      name: 'São Lucas, Evangelista', 
      imageUrl: 'https://i.postimg.cc/LXry2CGX/image.png', 
      story: `
        <h4>O Médico Amado</h4>
        <p>São Lucas, o autor do terceiro Evangelho e dos Atos dos Apóstolos, é uma figura única entre os escritores sagrados. De origem grega e pagã, era médico de profissão, o que se reflete na precisão de suas descrições e no seu interesse pelos doentes. Não conheceu Jesus pessoalmente, mas tornou-se um discípulo fiel e companheiro de viagem de São Paulo, que o chama de "o médico amado" (Col 4,14). Lucas representa a universalidade do Evangelho, aberto a todos os povos.</p>
        <h4>O Evangelho da Misericórdia</h4>
        <p>O Evangelho de Lucas é frequentemente chamado de "Evangelho da Misericórdia". É nele que encontramos algumas das parábolas mais amadas sobre o perdão e a compaixão de Deus, como as do Bom Samaritano, do Filho Pródigo e do Fariseu e do Publicano. Lucas mostra um carinho especial pelos pobres, pelos pecadores, pelas mulheres e por todos os que eram marginalizados na sociedade. O seu Evangelho é uma ode à ternura de um Deus que veio buscar e salvar o que estava perdido.</p>
        <h4>O Historiador do Espírito Santo</h4>
        <p>Nos Atos dos Apóstolos, Lucas continua a sua narrativa, descrevendo o nascimento e a expansão da Igreja primitiva. É por isso que os Atos são por vezes chamados "o Evangelho do Espírito Santo", pois mostram como o Paráclito guiou e fortaleceu os Apóstolos em sua missão. A tradição também atribui a São Lucas a pintura do primeiro ícone de Nossa Senhora, fazendo dele o padroeiro dos artistas e dos médicos. O seu legado é um convite a sermos, como ele, testemunhas da misericórdia de Deus até os confins da terra.</p>
        <p class="mt-4"><b>Oração:</b> Ó São Lucas, que com o teu Evangelho nos revelastes o rosto misericordioso de Jesus e o carinho de Sua Mãe, alcançai-nos a graça de sermos, como vós, médicos dos corpos e das almas.</p>
        <p class="mt-2 italic">São Lucas, rogai por nós.</p>` 
      }]
  },
  {
    day: 19,
    month: 'Outubro',
    saints: [{ 
      name: 'São Pedro de Alcântara', 
      imageUrl: 'https://i.postimg.cc/LnDZnwJ2/image.png', 
      story: `
        <h4>O Reformador Franciscano</h4>
        <p>Nascido em 1499 em Alcântara, Espanha, São Pedro foi uma das figuras centrais da reforma católica no século XVI. Entrou para a Ordem Franciscana muito jovem e rapidamente se destacou pela sua inteligência e, acima de tudo, pela sua busca radical da santidade através de uma vida de oração e penitência extraordinárias. Inquieto com o relaxamento da regra em muitos conventos, dedicou a sua vida à reforma da Ordem, fundando os Franciscanos Descalços (ou Alcantarinos), que viviam a pobreza e a austeridade com o máximo rigor.</p>
        <h4>Místico e Penitente</h4>
        <p>A vida de São Pedro de Alcântara foi marcada por fenómenos místicos impressionantes, como levitações, êxtases e o dom da profecia. No entanto, estes dons eram o fruto de uma vida de mortificação extrema. Dormia apenas uma hora e meia por noite, sentado, e passava grande parte do seu tempo em oração. O seu corpo, desgastado pelos jejuns e penitências, era um testemunho vivo de que "só se chega ao paraíso pela senda da tribulação".</p>
        <h4>Diretor de Santos</h4>
        <p>Apesar de sua vida austera, Pedro de Alcântara era um diretor espiritual sábio e procurado. A sua amizade e o seu conselho foram fundamentais para Santa Teresa de Ávila. Foi ele quem, reconhecendo a origem divina das experiências místicas de Teresa, a encorajou e a apoiou na difícil tarefa de reformar o Carmelo. A sua vida ensina-nos que a verdadeira reforma da Igreja começa sempre pela conversão pessoal e por uma profunda vida de oração.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que fizestes de São Pedro de Alcântara um mestre de oração e um modelo de penitência, concedei-nos, por sua intercessão, a graça de dominar o nosso corpo e de nos dedicarmos inteiramente a Vós.</p>
        <p class="mt-2 italic">São Pedro de Alcântara, rogai por nós.</p>` 
      }]
  },
  {
    day: 20,
    month: 'Outubro',
    saints: [{ 
      name: 'Santa Madalena de Nagasaki', 
      imageUrl: 'https://i.postimg.cc/XvBd4jWG/image.png', 
      story: `
        <h4>A Flor do Japão</h4>
        <p>Santa Madalena nasceu por volta de 1611 em Nagasaki, Japão, numa família nobre e profundamente cristã. Desde cedo, viveu num ambiente de perseguição feroz contra os católicos. Os seus próprios pais foram martirizados por causa da fé. Em vez de a intimidar, o exemplo deles fortaleceu a sua determinação. Consagrou a sua virgindade a Deus e tornou-se terciária agostiniana e catequista, dedicando a sua vida a ajudar os missionários e a fortalecer a fé dos seus compatriotas.</p>
        <h4>Coragem na Perseguição</h4>
        <p>Num tempo em que ser cristão era um crime punido com a morte, Madalena movia-se clandestinamente, levando consolo espiritual e ajuda material às famílias cristãs. Quando os missionários agostinianos com quem trabalhava foram presos e martirizados, ela não fugiu. Pelo contrário, vestindo o seu hábito de terciária, apresentou-se voluntariamente ao tribunal, declarando-se cristã e pronta para morrer por Cristo.</p>
        <h4>O Martírio da "Fossa"</h4>
        <p>O seu martírio foi particularmente cruel. Foi submetida à tortura da "fossa", sendo pendurada de cabeça para baixo sobre um poço cheio de imundícies, com o corpo firmemente amarrado para retardar a morte. Durante treze dias, ela resistiu, cantando hinos e rezando. A sua extraordinária resistência e serenidade no meio de tal agonia impressionaram os seus carrascos. Finalmente, para acabar com o seu sofrimento, afogaram-na. O seu testemunho é um farol de coragem e fidelidade para a Igreja no Japão e em todo o mundo.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que destes a Santa Madalena de Nagasaki a força para testemunhar o Evangelho até ao derramamento do seu sangue, concedei-nos, por sua intercessão, uma fé corajosa que não tema as perseguições do mundo.</p>
        <p class="mt-2 italic">Santa Madalena de Nagasaki, rogai por nós.</p>` 
      }]
  },
  {
    day: 21,
    month: 'Outubro',
    saints: [{ 
      name: 'Santa Úrsula', 
      imageUrl: 'https://i.postimg.cc/52C2t6H2/image.png', 
      story: `
        <h4>A Lenda da Princesa Bretã</h4>
        <p>A história de Santa Úrsula e das suas companheiras é uma das lendas mais famosas da Idade Média. Embora os detalhes históricos sejam difíceis de comprovar, a tradição fala de Úrsula, uma piedosa princesa da Bretanha (atual Grã-Bretanha), que foi prometida em casamento a um príncipe pagão. Para adiar o casamento e preservar a sua virgindade consagrada a Deus, ela pediu um período de três anos e onze navios para fazer uma peregrinação a Roma com onze mil virgens companheiras.</p>
        <h4>A Peregrinação e o Martírio</h4>
        <p>Após visitarem Roma, onde foram recebidas pelo Papa, Úrsula e as suas companheiras regressaram pelo rio Reno. Ao chegarem a Colónia, na Alemanha, encontraram a cidade cercada pelos Hunos, um povo bárbaro liderado por Átila. Os Hunos, enfurecidos pela recusa das jovens em ceder aos seus desejos e em renunciar à sua fé cristã, massacraram todo o grupo. Santa Úrsula, pela sua beleza, foi poupada para ser esposa de Átila, mas ao recusar firmemente, foi morta com uma flecha.</p>
        <h4>Símbolo de Pureza e Coragem</h4>
        <p>Apesar da incerteza sobre os números e os detalhes exatos, a base histórica do martírio de um grupo de virgens em Colónia é amplamente aceite. Uma antiga inscrição numa igreja da cidade atesta este facto. Independentemente dos pormenores lendários, a história de Santa Úrsula tornou-se um poderoso símbolo da pureza, da coragem e da firmeza na fé. A sua história inspirou a fundação da Ordem das Ursulinas, uma congregação religiosa dedicada à educação das jovens.</p>
        <p class="mt-4"><b>Oração:</b> Senhor, que destes a Santa Úrsula e às suas companheiras a coragem de preferir a morte a trair a sua fé e a sua pureza, concedei-nos, por sua intercessão, a graça de vivermos sempre fiéis a Vós.</p>
        <p class="mt-2 italic">Santa Úrsula, rogai por nós.</p>` 
      }]
  },
  {
    day: 22,
    month: 'Outubro',
    saints: [{ 
      name: 'São João Paulo II', 
      imageUrl: 'https://i.postimg.cc/bsw1Hqcq/image.png', 
      story: `
        <h4>O Papa que Veio de Longe</h4>
        <p>Karol Wojtyła nasceu em Wadowice, Polónia, em 1920. A sua juventude foi marcada pela perda precoce da mãe e do irmão, e pela brutalidade da ocupação nazi, seguida pelo regime comunista. Estas experiências forjaram nele uma profunda sensibilidade para com o sofrimento humano e uma inabalável convicção na dignidade da pessoa. Foi operário, ator e poeta antes de entrar no seminário clandestino. Ordenado sacerdote e depois bispo, destacou-se pela sua inteligência, coragem e proximidade com o povo.</p>
        <h4>Um Pontificado Extraordinário</h4>
        <p>Eleito Papa em 1978, foi o primeiro Papa não italiano em mais de 450 anos. O seu pontificado de quase 27 anos foi um dos mais longos e influentes da história. Com uma energia incansável, realizou 104 viagens apostólicas, visitando 129 países e levando a mensagem do Evangelho a todos os cantos do mundo. A sua famosa exortação inicial, "Não tenhais medo! Abri, ou melhor, escancarai as portas a Cristo!", tornou-se o lema de seu pontificado, inspirando uma nova geração de católicos.</p>
        <h4>Defensor da Vida e da Família</h4>
        <p>São João Paulo II deixou um imenso legado doutrinal, incluindo 14 encíclicas, a promulgação do Catecismo da Igreja Católica e a criação da Jornada Mundial da Juventude. Foi um defensor incansável da "cultura da vida" contra a "cultura da morte", e a sua "Teologia do Corpo" oferece uma visão profunda e bela do amor humano, do casamento e da família. Nos seus últimos anos, o seu testemunho de sofrimento, vivido com fé e dignidade, tornou-se a sua última e mais poderosa encíclica.</p>
        <p class="mt-4"><b>Oração:</b> Ó São João Paulo II, que desde a janela do Céu continuas a interceder por nós, abençoa a Igreja, os jovens e as famílias. Ajuda-nos a não ter medo de sermos santos e a abrir os nossos corações a Cristo.</p>
        <p class="mt-2 italic">São João Paulo II, rogai por nós.</p>` 
      }]
  },
  {
    day: 23,
    month: 'Outubro',
    saints: [{ 
      name: 'São João de Capistrano', 
      imageUrl: 'https://i.postimg.cc/wxrzs9YF/image.png', 
      story: `
        <h4>De Governador a Frade</h4>
        <p>João, nascido em Capistrano, Itália, em 1386, teve uma carreira promissora como jurista e governador. No entanto, uma experiência de injustiça e prisão durante uma guerra levou-o a uma profunda conversão. Abandonou a sua carreira, a sua jovem esposa e os seus bens, e ingressou na Ordem Franciscana, onde se tornou discípulo do grande pregador São Bernardino de Siena. A sua vida mudou radicalmente, passando da busca de honras mundanas para a pregação incansável do Evangelho.</p>
        <h4>O Pregador da Europa</h4>
        <p>São João de Capistrano tornou-se um dos pregadores mais famosos do seu tempo. Percorreu a pé grande parte da Europa, pregando a multidões e promovendo a paz e a reforma dos costumes. A sua pregação era fervorosa, centrada no Santo Nome de Jesus, e era acompanhada por numerosos milagres. Foi também um reformador dentro da Ordem Franciscana, defendendo um regresso a uma observância mais estrita da regra de São Francisco.</p>
        <h4>O "Santo Soldado"</h4>
        <p>A sua missão mais famosa ocorreu em 1456. A cristandade estava ameaçada pelo avanço do Império Otomano, que cercava a cidade de Belgrado. O Papa Calisto III encarregou João de Capistrano de pregar uma cruzada. Embora já tivesse 70 anos, ele percorreu a Europa e reuniu um exército de camponeses e artesãos. Na batalha decisiva, empunhando um estandarte com a cruz, ele liderou as tropas, infundindo-lhes uma coragem extraordinária que levou a uma vitória milagrosa. Morreu pouco depois, vítima da peste, mas o seu legado como defensor da fé perdura.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que suscitastes São João de Capistrano para confortar o vosso povo na tribulação, concedei à vossa Igreja a paz que tanto deseja e a nós a graça de vencer sempre os inimigos da nossa alma.</p>
        <p class="mt-2 italic">São João de Capistrano, rogai por nós.</p>` 
      }]
  },
  {
    day: 24,
    month: 'Outubro',
    saints: [{ 
      name: 'Santo Antônio Maria Claret', 
      imageUrl: 'https://i.postimg.cc/KzNyvp6y/image.png', 
      story: `
        <h4>De Tecelão a Missionário</h4>
        <p>Antônio Maria Claret nasceu em 1807, em Sallent, Espanha, numa família de tecelões. Embora tenha trabalhado na fábrica da família, o seu coração ardia pelo desejo de ser sacerdote. Após a sua ordenação, sentiu um forte chamado para a vida missionária. O seu zelo era tão grande que percorreu a pé grande parte da Catalunha, pregando missões populares que atraíam multidões e produziam inúmeras conversões. A sua pregação era simples, direta e centrada no amor a Jesus e a Maria.</p>
        <h4>Fundador e Arcebispo</h4>
        <p>Para dar continuidade à sua obra missionária, em 1849 fundou a Congregação dos Missionários Filhos do Imaculado Coração de Maria, hoje conhecidos como Claretianos. Pouco depois, para sua surpresa, foi nomeado Arcebispo de Santiago de Cuba. Nesta ilha, encontrou uma situação de grande decadência moral e religiosa. Com uma energia incansável, reformou o clero, promoveu a educação, lutou pelos direitos dos pobres e defendeu os escravos, o que lhe valeu vários atentados contra a sua vida.</p>
        <h4>Apóstolo da Imprensa</h4>
        <p>Santo Antônio Maria Claret foi um apóstolo moderno, que compreendeu o poder dos meios de comunicação. Fundou editoras, bibliotecas populares e escreveu ou editou centenas de livros e folhetos religiosos para difundir a boa doutrina. De regresso a Espanha, tornou-se confessor da Rainha Isabel II. Viveu os seus últimos anos no exílio, em França, continuando a sua obra de oração e escrita até à sua morte em 1870. O seu legado é um exemplo de zelo apostólico e de criatividade na evangelização.</p>
        <p class="mt-4"><b>Oração:</b> Ó Santo Antônio Maria Claret, que durante a vossa vida na terra tanto vos consolastes com o nome de Maria, fazei que eu, vosso devoto, experimente a doçura deste nome e o poder da sua intercessão.</p>
        <p class="mt-2 italic">Santo Antônio Maria Claret, rogai por nós.</p>` 
      }]
  },
  {
    day: 25,
    month: 'Outubro',
    saints: [{ 
      name: 'Santo Antônio de Sant\'Ana Galvão', 
      imageUrl: 'https://i.postimg.cc/sBYBCLdn/image.png', 
      story: `
        <h4>O Primeiro Santo Brasileiro</h4>
        <p>Antônio de Sant'Ana Galvão nasceu em Guaratinguetá, São Paulo, em 1739. De família profundamente cristã, renunciou a uma promissora carreira para se tornar frade franciscano. Conhecido pela sua profunda humildade, caridade incansável e uma intensa vida de oração, Frei Galvão tornou-se uma figura amada e respeitada. Dedicou-se ao serviço dos doentes e dos pobres, e foi um conselheiro espiritual procurado por muitos.</p>
        <h4>O Mosteiro da Luz</h4>
        <p>Um dos seus maiores legados é a fundação do Mosteiro da Luz, em São Paulo, uma obra que iniciou em obediência a uma visão de uma religiosa, Irmã Helena. Superando inúmeras dificuldades e objeções, Frei Galvão dedicou-se de corpo e alma à construção do mosteiro, que se tornou um importante centro de vida espiritual. Ele próprio desenhou a planta do edifício e trabalhou como mestre-de-obras e pedreiro, mostrando que a fé se manifesta em obras concretas.</p>
        <h4>As Pílulas de Frei Galvão</h4>
        <p>Frei Galvão é especialmente conhecido pelas suas famosas "pílulas". Trata-se de pequenos pedaços de papel de arroz onde está escrita uma oração à Virgem Maria: "Depois do parto, ó Virgem, permanecestes intacta: Mãe de Deus, intercedei por nós". Distribuídas com fé, estas pílulas estão associadas a inúmeras curas e graças, especialmente em partos difíceis. Canonizado em 2007 pelo Papa Bento XVI em solo brasileiro, São Frei Galvão é um sinal da santidade que floresce na nossa terra.</p>
        <p class="mt-4"><b>Oração:</b> Ó Santo Frei Galvão, que, movido por ardente caridade, não hesitastes em acolher e cuidar dos doentes e aflitos, intercedei por nós junto de Deus e alcançai-nos a graça de que tanto necessitamos.</p>
        <p class="mt-2 italic">Santo Antônio de Sant'Ana Galvão, rogai por nós.</p>` 
      }]
  },
  {
    day: 26,
    month: 'Outubro',
    saints: [
      { name: 'Santo Evaristo', 
      imageUrl: 'https://i.postimg.cc/DZmc88Dv/image.png', 
      story: `
        <h4>O Quinto Papa</h4>
        <p>Santo Evaristo foi o quinto Papa da Igreja Católica, sucedendo a São Clemente I por volta do ano 99. O seu pontificado decorreu durante o reinado do imperador Trajano, um período de perseguições esporádicas mas violentas contra os cristãos. As informações sobre a sua vida são escassas, como acontece com muitos dos primeiros Papas, mas a tradição descreve-o como um pastor zeloso que governou a Igreja com sabedoria e coragem.</p>
        <h4>Organizador da Igreja de Roma</h4>
        <p>Embora não existam provas documentais definitivas, atribui-se a Santo Evaristo a organização da Igreja de Roma. Diz-se que ele dividiu a cidade em "títulos" (as futuras paróquias) e atribuiu a cada um deles um presbítero. Esta medida foi fundamental para a pastoral e a administração dos sacramentos numa comunidade cristã em rápido crescimento. Ele também terá instituído um grupo de sete diáconos para ajudar o Papa no seu ministério.</p>
        <h4>Testemunho e Martírio</h4>
        <p>A tradição afirma que Santo Evaristo coroou o seu pontificado com o martírio por volta do ano 107. Embora os pormenores do seu martírio sejam desconhecidos, a sua disposição para dar a vida por Cristo é um testemunho poderoso da fé que animava a Igreja primitiva. O seu nome está inscrito no Cânon Romano da Missa, um sinal da veneração que a Igreja sempre lhe dedicou. A sua vida recorda-nos a importância da estrutura e da organização para o bem da missão da Igreja.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que edificastes a Vossa Igreja sobre a rocha de Pedro e a guiastes pelos seus sucessores, concedei-nos, pela intercessão do Papa Santo Evaristo, a graça de permanecermos sempre fiéis à Sé de Roma.</p>
        <p class="mt-2 italic">Santo Evaristo, rogai por nós.</p>` }
    ]
  },
  {
    day: 27,
    month: 'Outubro',
    saints: [{ 
      name: 'São Gonçalo de Lagos', 
      imageUrl: 'https://i.postimg.cc/RZ3sWnzC/image.png', 
      story: `
        <h4>O Bom Frade Agostiniano</h4>
        <p>Gonçalo, nascido em Lagos, Portugal, por volta de 1360, foi uma figura luminosa da vida religiosa portuguesa. Desde jovem, demonstrou uma grande piedade e um desejo de se dedicar a Deus. Entrou para a Ordem dos Eremitas de Santo Agostinho, onde se destacou pela sua inteligência, pela sua humildade e, sobretudo, pelo seu amor à oração e à comunidade. Foi um exemplo vivo do ideal agostiniano de "uma só alma e um só coração orientados para Deus".</p>
        <h4>Pregador e Taumaturgo</h4>
        <p>São Gonçalo tornou-se um pregador famoso, cuja palavra simples e ungida tocava os corações. Foi também prior de vários conventos, incluindo o de Lisboa. A sua vida foi marcada por numerosos milagres, que atraíam a ele multidões em busca de cura e consolo. A sua fama de santidade espalhou-se por todo o país, e o povo recorria a ele com grande confiança. Ele, no entanto, mantinha-se sempre humilde, atribuindo tudo à graça de Deus.</p>
        <h4>Devoção ao Santíssimo Sacramento</h4>
        <p>Um dos traços mais marcantes da sua espiritualidade era a sua profunda devoção à Eucaristia. Passava longas horas em adoração diante do Santíssimo Sacramento, de onde tirava a força para o seu apostolado. Faleceu em Torres Vedras em 1422. O seu culto foi imediatamente aprovado pela aclamação popular e, mais tarde, confirmado pela Igreja. São Gonçalo de Lagos é um modelo de vida religiosa, que une a contemplação e a ação, a oração e o serviço aos irmãos.</p>
        <p class="mt-4"><b>Oração:</b> Ó São Gonçalo de Lagos, que encontrastes na Eucaristia a fonte da vossa força e do vosso amor, ensinai-nos a adorar Jesus Sacramentado com a mesma fé e devoção, para que Ele seja o centro da nossa vida.</p>
        <p class="mt-2 italic">São Gonçalo de Lagos, rogai por nós.</p>` 
      }]
  },
  {
    day: 28,
    month: 'Outubro',
    saints: [{ 
      name: 'São Simão e São Judas', 
      imageUrl: 'https://i.postimg.cc/9F3ZdxSS/image.png', 
      story: `
        <h4>Os Apóstolos "Esquecidos"</h4>
        <p>A Igreja celebra hoje, na mesma festa, dois dos doze Apóstolos de Jesus: São Simão e São Judas Tadeu. São talvez dos apóstolos menos conhecidos. Simão é chamado de "o Zelote" ou "o Cananeu" nos Evangelhos, para o distinguir de Simão Pedro. Este apelido sugere que ele poderia ter pertencido ao partido nacionalista dos Zelotes antes de seguir Jesus. Judas, por sua vez, é chamado de "Tadeu" para o diferenciar de Judas Iscariotes, o traidor. É o autor de uma das cartas católicas do Novo Testamento.</p>
        <h4>Missionários na Pérsia</h4>
        <p>As informações sobre a vida missionária de Simão e Judas após o Pentecostes são incertas, mas uma forte e antiga tradição afirma que eles viajaram juntos para pregar o Evangelho na Mesopotâmia e na Pérsia (atual Irão). Ali, enfrentaram a resistência dos sacerdotes pagãos e converteram muitas pessoas à fé cristã. A sua pregação corajosa e os seus milagres atestavam o poder do nome de Jesus.</p>
        <h4>Unidos no Martírio</h4>
        <p>A mesma tradição relata que ambos foram martirizados juntos na cidade de Suanir, na Pérsia. A sua união na missão e no martírio é um belo testemunho da fraternidade apostólica. São Judas Tadeu é hoje universalmente venerado como o "santo das causas desesperadas e impossíveis", um poderoso intercessor para aqueles que enfrentam grandes dificuldades. A sua festa conjunta recorda-nos que a Igreja se funda sobre o testemunho dos Apóstolos, que deram a vida por Cristo.</p>
        <p class="mt-4"><b>Oração:</b> Ó gloriosos Apóstolos São Simão e São Judas, que fostes chamados por Jesus para serdes colunas da Sua Igreja e testemunhas do Seu Evangelho, alcançai-nos a graça de uma fé viva e de um zelo ardente pela salvação das almas.</p>
        <p class="mt-2 italic">Santos Simão e Judas, rogai por nós.</p>` 
      }]
  },
  {
    day: 29,
    month: 'Outubro',
    saints: [{ 
      name: 'Beata Chiara Luce Badano', 
      imageUrl: 'https://i.postimg.cc/YSW99892/image.png', 
      story: `
        <h4>Uma Vida Luminosa</h4>
        <p>Chiara Badano, nascida em 1971 perto de Génova, Itália, foi uma jovem vibrante, cheia de vida, que gostava de desporto, de música e de estar com os amigos. Aos nove anos, encontrou no Movimento dos Focolares um ideal que deu um novo rumo à sua vida: colocar Jesus no centro de tudo. A sua alegria contagiante e o seu amor pelos outros, especially pelos mais "pequenos" e marginalizados, eram o reflexo de uma profunda união com Deus.</p>
        <h4>O Encontro com a Dor</h4>
        <p>Aos 17 anos, uma dor aguda no ombro durante um jogo de ténis revelou um osteossarcoma, um dos tipos mais graves de cancro ósseo. A notícia foi um choque, mas após um período de luta interior, Chiara aceitou a doença com uma maturidade espiritual surpreendente. A sua frase "Se tu o queres, Jesus, eu também o quero" tornou-se o seu lema. Recusou a morfina para poder oferecer os seus sofrimentos, consciente e unida a Jesus Abandonado na cruz.</p>
        <h4>"Chiara Luce"</h4>
        <p>A fundadora dos Focolares, Chiara Lubich, ao acompanhar a sua jornada, deu-lhe o nome de "Chiara Luce" (Clara Luz), porque a sua vida irradiava a luz de Deus. O seu quarto de hospital tornou-se um lugar de encontro, um santuário onde ela evangelizava médicos, enfermeiros e amigos. Preparou a sua própria "festa de casamento" - o seu funeral - com alegria, escolhendo as músicas e o seu vestido de noiva. Faleceu em 1990, aos 18 anos, deixando um testemunho luminoso de como o sofrimento, vivido por amor, pode ser transformado numa fonte de vida e de alegria.</p>
        <p class="mt-4"><b>Oração:</b> Ó Pai, fonte de todo o bem, que na Beata Chiara Luce nos destes um modelo de fé e de caridade, concedei-nos a graça de viver, como ela, cada momento da nossa vida como um dom do Vosso amor.</p>
        <p class="mt-2 italic">Beata Chiara Luce, rogai por nós.</p>` 
      }]
  },
  {
    day: 30,
    month: 'Outubro',
    saints: [{ 
      name: 'São Frumêncio', 
      imageUrl: 'https://i.postimg.cc/wvWT4r4c/image.png', 
      story: `
        <h4>O Apóstolo da Etiópia</h4>
        <p>A história de São Frumêncio é uma aventura de fé e Providência. Nascido em Tiro, na Fenícia (atual Líbano), no início do século IV, acompanhou o seu tio, um filósofo, numa viagem de exploração. O navio naufragou na costa da Etiópia, e quase toda a tripulação foi massacrada. Frumêncio e seu irmão Edésio foram os únicos sobreviventes, sendo levados como escravos para a corte do rei em Axum.</p>
        <h4>De Escravo a Conselheiro</h4>
        <p>Graças à sua inteligência e integridade, Frumêncio ganhou a confiança do rei, que o nomeou seu secretário e tesoureiro. Após a morte do rei, a rainha pediu-lhe que ficasse como tutor do jovem príncipe herdeiro. Durante este tempo, Frumêncio usou a sua influência para apoiar os comerciantes cristãos que viviam no país, ajudando-os a encontrar lugares para rezar e a praticar a sua fé livremente.</p>
        <h4>O "Abuna" (Nosso Pai)</h4>
        <p>Quando o príncipe atingiu a maioridade, Frumêncio e Edésio foram libertados. Edésio regressou a Tiro, mas Frumêncio viajou para Alexandria, no Egito, onde se encontrou com o grande Santo Atanásio. Contou-lhe a situação da Etiópia e pediu-lhe que enviasse um bispo e missionários. Santo Atanásio, reconhecendo a obra do Espírito Santo, respondeu: "Quem melhor do que tu para esta missão?". Ordenou Frumêncio como primeiro bispo da Etiópia. Frumêncio regressou, batizou o rei e evangelizou grande parte do país, sendo carinhosamente chamado de "Abuna" (Nosso Pai), título que os primazes da Igreja Etíope usam até hoje.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que por caminhos admiráveis levastes São Frumêncio a semear a semente do Evangelho na Etiópia, fazei de nós instrumentos dóceis da Vossa Providência para levar a luz de Cristo aonde quer que vamos.</p>
        <p class="mt-2 italic">São Frumêncio, rogai por nós.</p>` 
      }]
  },
  {
    day: 31,
    month: 'Outubro',
    saints: [{ 
      name: 'Santo Afonso Rodrigues', 
      imageUrl: 'https://i.postimg.cc/KjMS7pdw/image.png', 
      story: `
        <h4>Uma Vida de Recomeços</h4>
        <p>Afonso Rodrigues, nascido em Segóvia, Espanha, em 1532, teve uma vida marcada por perdas e recomeços. Casou-se, teve filhos e geria um negócio de tecidos. No entanto, a morte prematura de sua esposa e de seus dois filhos, juntamente com o fracasso do seu negócio, mergulharam-no numa profunda crise. Em vez de se desesperar, Afonso viu nestes acontecimentos um chamado de Deus para uma vida de maior entrega.</p>
        <h4>O Irmão Porteiro</h4>
        <p>Aos 40 anos, decidiu entrar na Companhia de Jesus. Devido à sua idade e falta de estudos, foi admitido como irmão leigo. Após o noviciado, foi enviado para o colégio de Montesión, em Palma de Maiorca, onde passou os restantes 45 anos da sua vida como porteiro. A sua função era humilde e repetitiva: abrir e fechar a porta, receber recados, acolher visitantes. Mas Afonso transformou esta tarefa simples num caminho de santidade.</p>
        <h4>Mestre de Vida Espiritual</h4>
        <p>A portaria de Montesión tornou-se um centro de orientação espiritual. A sua humildade, obediência e, sobretudo, a sua profunda vida de oração e união com Deus, atraíam a ele estudantes, sacerdotes e leigos. Foi diretor espiritual de São Pedro Claver, a quem inspirou a ir em missão para a América. Santo Afonso Rodrigues ensina-nos que a santidade não depende da grandeza das tarefas que realizamos, mas do amor com que as fazemos.</p>
        <p class="mt-4"><b>Oração:</b> Ó Deus, que no humilde serviço de Santo Afonso Rodrigues nos mostrastes um caminho de santidade, concedei-nos a graça de Vos encontrar e de Vos servir nas tarefas mais simples do nosso dia-a-dia.</p>
        <p class="mt-2 italic">Santo Afonso Rodrigues, rogai por nós.</p>` 
      }]
  },
  // Novembro
  {
    day: 1,
    month: 'Novembro',
    saints: [{
      name: 'Solenidade de Todos os Santos',
      imageUrl: 'https://i.postimg.cc/j29jkK7b/download.jpg',
      story: `
        <h4>A Igreja Triunfante</h4>
        <p>Nesta grande solenidade, a Igreja na terra (Igreja Militante) celebra com alegria a glória da Igreja no Céu (Igreja Triunfante). Comemoramos não apenas os santos e santas oficialmente canonizados, mas a "multidão imensa, que ninguém podia contar, de todas as nações, tribos, povos e línguas" (Ap 7,9) que já participam da visão beatífica de Deus. É uma festa de esperança, que nos recorda o nosso destino final e a nossa própria vocação universal à santidade.</p>
        <h4>Comunhão dos Santos</h4>
        <p>A festa de Todos os Santos é uma expressão poderosa do dogma da Comunhão dos Santos. Acreditamos que os santos no Céu não estão distantes de nós; pelo contrário, eles intercedem incessantemente por nós, seus irmãos e irmãs que ainda peregrinam na terra. Eles são nossos modelos, amigos e poderosos intercessores. Esta solenidade fortalece os laços que nos unem a toda a família de Deus, no Céu, no Purgatório e na terra, todos membros do mesmo Corpo Místico de Cristo.</p>
        <h4>Um Chamado à Santidade</h4>
        <p>As leituras desta festa, especially as Bem-Aventuranças (Mt 5,1-12), apresentam-nos o caminho para a santidade. Os santos não foram super-homens ou mulheres, mas pessoas de carne e osso, com suas lutas e fraquezas, que se deixaram transformar pela graça de Deus e viveram o Evangelho de forma radical. Celebrar Todos os Santos é, portanto, um convite a renovar o nosso desejo de sermos santos, a aspirar à pátria celeste e a viver já aqui na terra como cidadãos do Céu.</p>
        <p class="mt-4"><b>Oração:</b> Deus eterno e todo-poderoso, que nos dais a alegria de celebrar numa só festa os méritos de Todos os Santos, concedei-nos, por sua intercessão, a abundância da vossa misericórdia que tanto esperamos.</p>
        <p class="mt-2 italic">Todos os Santos e Santas de Deus, rogai por nós.</p>`
    }]
  },
  {
    day: 2,
    month: 'Novembro',
    saints: [{
      name: 'Finados (Comemoração dos Fiéis Defuntos)',
      imageUrl: 'https://placehold.co/80x80/c27a2f/FFFFFF/png?text=Almas',
      story: `
        <h4>A Igreja Padecente</h4>
        <p>Logo após celebrar a glória da Igreja Triunfante, a Igreja Militante volta seu olhar e seu coração para a Igreja Padecente: as almas dos fiéis que partiram deste mundo na amizade com Deus, mas que ainda precisam de uma purificação final para entrar na alegria plena do Céu. Esta purificação é o que a doutrina católica chama de Purgatório. Não é um "segundo inferno", mas uma antecâmara do Céu, um estado de purificação no amor, onde as almas, já salvas, se preparam para o encontro definitivo com a santidade de Deus.</p>
        <h4>O Vínculo da Oração</h4>
        <p>A Comemoração de Todos os Fiéis Defuntos é um dia de profunda caridade cristã. Acreditamos firmemente, com base na Tradição da Igreja, que as nossas orações, sacrifícios e, sobretudo, a Santa Missa oferecida por eles, podem ajudá-los e aliviar seus sofrimentos. É um poderoso exercício da Comunhão dos Santos, que une a Igreja da terra, do Céu e do Purgatório. Ao rezar pelos que nos precederam, expressamos nossa fé na ressurreição e nossa esperança de reencontrá-los um dia na pátria celeste.</p>
        <h4>Esperança na Vida Eterna</h4>
        <p>Visitar os cemitérios, acender velas, rezar pelos falecidos não são atos de tristeza mórbida, mas de fé e esperança. Recordamos com carinho aqueles que amamos, agradecemos pelo dom de suas vidas e os entregamos à misericórdia infinita de Deus. Este dia nos confronta com a reality da morte, não como um fim, mas como uma passagem para a Vida Eterna, reafirmando a nossa fé em Cristo, que venceu a morte e nos abriu as portas do Céu.</p>
        <p class="mt-4"><b>Oração:</b> Dai-lhes, Senhor, o descanso eterno, e a luz perpétua os ilumine. Que as almas dos fiéis defuntos, pela misericórdia de Deus, descansem em paz. Amém.</p>
        <p class="mt-2 italic">Almas do purgatório, intercedei por nós.</p>`
    }]
  },
];
