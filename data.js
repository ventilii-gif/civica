/* ============================================================
   CITTADINI CONSAPEVOLI — Dati educativi e traduzioni
   Modifica questo file per aggiornare contenuti e lingue.
   ============================================================ */

// ---------- TRADUZIONI INTERFACCIA ----------
const i18n = {
  it: {
    appTitle: 'Cittadini Consapevoli',
    welcome: 'Benvenuto',
    intro_title: 'Un viaggio nella cittadinanza',
    intro_lead: 'Scopri i principi fondamentali che regolano la vita democratica in Italia e nell\'Unione europea. Un percorso in 7 tappe, pensato per tutti.',
    intro_c1_title: 'Costituzione italiana',
    intro_c1_text: 'I principi fondamentali e i diritti dei cittadini italiani dal 1948.',
    intro_c2_title: 'Carta dei diritti UE',
    intro_c2_text: 'I diritti fondamentali riconosciuti a tutti i cittadini europei dal 2000.',
    intro_c3_title: 'Percorso interattivo',
    intro_c3_text: 'Scenari pratici, glossario civico, quiz e riepilogo per consolidare la comprensione.',
    disclaimer: 'Questo percorso ha scopo educativo e divulgativo. Non costituisce consulenza legale né sostituisce le fonti ufficiali. Per informazioni normative precise, consulta sempre i testi ufficiali e professionisti qualificati.',
    step0: 'Introduzione', step1: 'Costituzione', step2: 'Carta UE',
    step3: 'Glossario', step4: 'Scenari', step5: 'Diritti e Doveri',
    step6: 'Quiz', step7: 'Riepilogo',
    const_title: 'La Costituzione italiana',
    const_lead: 'Approvata il 22 dicembre 1947 ed entrata in vigore il 1° gennaio 1948. Clicca su una scheda per approfondire.',
    eu_title: 'La Carta dei diritti fondamentali dell\'UE',
    eu_lead: 'Proclamata nel 2000 e vincolante dal 2009. Clicca su una carta per confrontarla con la Costituzione italiana.',
    compare_title: 'Confronto: Costituzione italiana vs Carta UE',
    compare_text: 'Clicca su un diritto nella Carta UE per vedere il principio corrispondente nella Costituzione italiana.',
    gloss_title: 'Glossario civico',
    gloss_lead: 'Termini fondamentali per orientarsi nel linguaggio della cittadinanza democratica.',
    gloss_search_label: 'Cerca nel glossario',
    gloss_search_ph: 'Cerca un termine...',
    scen_title: 'Scenari di vita quotidiana',
    scen_lead: 'Analizza situazioni reali e individua quale diritto o dovere è coinvolto.',
    game_title: 'Diritti e Doveri',
    game_lead: 'Clicca su una carta per spostarla nella categoria corretta: Diritto o Dovere.',
    quiz_title: 'Quiz finale',
    quiz_lead: 'Metti alla prova le conoscenze acquisite nel percorso. 20 domande con risposta casuale.',
    summary_title: 'Percorso completato!',
    summary_lead: 'Ecco il tuo riepilogo di cittadinanza consapevole.',
    prev: '← Precedente', next: 'Successivo →',
    prev_module: 'Precedente', next_module: 'Avanti',
    next_question: 'Prossima domanda',
    check_answers: 'Verifica le risposte',
    rights: 'Diritti', duties: 'Doveri',
    restart: 'Ricomincia il percorso', print: 'Stampa il riepilogo',
    footer_text: 'Webapp educativa – non costituisce consulenza legale.',
    score_label: 'Punteggio quiz',
    review_title: 'Concetti da ripassare',
    well_done: 'Ottimo lavoro!',
    keep_going: 'Continua a studiare!',
    quiz_of: 'di',
    question_label: 'Domanda',
    dark_on: 'Attiva modalità scura',
    dark_off: 'Disattiva modalità scura',
    game_result: 'Risultato gioco',
    scenario_label: 'Scenario',
  },
  en: {
    appTitle: 'Aware Citizens',
    welcome: 'Welcome',
    intro_title: 'A journey into citizenship',
    intro_lead: 'Discover the fundamental principles governing democratic life in Italy and the European Union. A 7-step path for everyone.',
    intro_c1_title: 'Italian Constitution',
    intro_c1_text: 'The fundamental principles and rights of Italian citizens since 1948.',
    intro_c2_title: 'EU Charter of Rights',
    intro_c2_text: 'Fundamental rights recognised for all European citizens since 2000.',
    intro_c3_title: 'Interactive path',
    intro_c3_text: 'Practical scenarios, civic glossary, quiz and summary to consolidate understanding.',
    disclaimer: 'This content is for educational purposes only. It does not constitute legal advice and does not replace official sources. For precise legal information, always consult official texts and qualified professionals.',
    step0: 'Introduction', step1: 'Constitution', step2: 'EU Charter',
    step3: 'Glossary', step4: 'Scenarios', step5: 'Rights & Duties',
    step6: 'Quiz', step7: 'Summary',
    const_title: 'The Italian Constitution',
    const_lead: 'Adopted on 22 December 1947 and in force since 1 January 1948. Click a card to learn more.',
    eu_title: 'The EU Charter of Fundamental Rights',
    eu_lead: 'Proclaimed in 2000 and legally binding since 2009. Click a card to compare it with the Italian Constitution.',
    compare_title: 'Comparison: Italian Constitution vs EU Charter',
    compare_text: 'Click a right in the EU Charter to see the corresponding principle in the Italian Constitution.',
    gloss_title: 'Civic Glossary',
    gloss_lead: 'Key terms to navigate the language of democratic citizenship.',
    gloss_search_label: 'Search the glossary',
    gloss_search_ph: 'Search a term...',
    scen_title: 'Everyday life scenarios',
    scen_lead: 'Analyse real situations and identify which right or duty is involved.',
    game_title: 'Rights and Duties',
    game_lead: 'Click a card to move it to the correct category: Right or Duty.',
    quiz_title: 'Final Quiz',
    quiz_lead: 'Test the knowledge acquired during the path. 20 questions with randomised answers.',
    summary_title: 'Path completed!',
    summary_lead: 'Here is your aware citizenship summary.',
    prev: '← Previous', next: 'Next →',
    prev_module: 'Previous', next_module: 'Next',
    next_question: 'Next question',
    check_answers: 'Check answers',
    rights: 'Rights', duties: 'Duties',
    restart: 'Restart the path', print: 'Print summary',
    footer_text: 'Educational webapp – does not constitute legal advice.',
    score_label: 'Quiz score',
    review_title: 'Concepts to review',
    well_done: 'Well done!',
    keep_going: 'Keep studying!',
    quiz_of: 'of',
    question_label: 'Question',
    dark_on: 'Enable dark mode',
    dark_off: 'Disable dark mode',
    game_result: 'Game result',
    scenario_label: 'Scenario',
  },
  pt: {
    appTitle: 'Cidadãos Conscientes',
    welcome: 'Bem-vindo',
    intro_title: 'Uma jornada pela cidadania',
    intro_lead: 'Descubra os princípios fundamentais que regem a vida democrática na Itália e na União Europeia. Um percurso em 7 etapas, pensado para todos.',
    intro_c1_title: 'Constituição italiana',
    intro_c1_text: 'Os princípios fundamentais e os direitos dos cidadãos italianos desde 1948.',
    intro_c2_title: 'Carta de Direitos da UE',
    intro_c2_text: 'Os direitos fundamentais reconhecidos a todos os cidadãos europeus desde 2000.',
    intro_c3_title: 'Percurso interativo',
    intro_c3_text: 'Cenários práticos, glossário cívico, quiz e resumo para consolidar a compreensão.',
    disclaimer: 'Este conteúdo tem fins educativos e divulgativos. Não constitui aconselhamento jurídico nem substitui as fontes oficiais. Para informações normativas precisas, consulte sempre os textos oficiais e profissionais qualificados.',
    step0: 'Introdução', step1: 'Constituição', step2: 'Carta UE',
    step3: 'Glossário', step4: 'Cenários', step5: 'Direitos e Deveres',
    step6: 'Quiz', step7: 'Resumo',
    const_title: 'A Constituição italiana',
    const_lead: 'Aprovada em 22 de dezembro de 1947 e em vigor desde 1° de janeiro de 1948. Clique num cartão para saber mais.',
    eu_title: 'A Carta dos Direitos Fundamentais da UE',
    eu_lead: 'Proclamada em 2000 e juridicamente vinculante desde 2009. Clique num cartão para compará-lo com a Constituição italiana.',
    compare_title: 'Comparação: Constituição italiana vs Carta UE',
    compare_text: 'Clique num direito na Carta UE para ver o princípio correspondente na Constituição italiana.',
    gloss_title: 'Glossário cívico',
    gloss_lead: 'Termos fundamentais para se orientar na linguagem da cidadania democrática.',
    gloss_search_label: 'Pesquisar no glossário',
    gloss_search_ph: 'Pesquisar um termo...',
    scen_title: 'Cenários do cotidiano',
    scen_lead: 'Analise situações reais e identifique qual direito ou dever está envolvido.',
    game_title: 'Direitos e Deveres',
    game_lead: 'Clique num cartão para movê-lo para a categoria correta: Direito ou Dever.',
    quiz_title: 'Quiz final',
    quiz_lead: 'Teste os conhecimentos adquiridos no percurso. 20 perguntas com respostas embaralhadas.',
    summary_title: 'Percurso concluído!',
    summary_lead: 'Aqui está o seu resumo de cidadania consciente.',
    prev: '← Anterior', next: 'Próximo →',
    prev_module: 'Anterior', next_module: 'Avançar',
    next_question: 'Próxima pergunta',
    check_answers: 'Verificar respostas',
    rights: 'Direitos', duties: 'Deveres',
    restart: 'Reiniciar o percurso', print: 'Imprimir resumo',
    footer_text: 'Webapp educativa – não constitui aconselhamento jurídico.',
    score_label: 'Pontuação do quiz',
    review_title: 'Conceitos para rever',
    well_done: 'Excelente trabalho!',
    keep_going: 'Continue estudando!',
    quiz_of: 'de',
    question_label: 'Pergunta',
    dark_on: 'Ativar modo escuro',
    dark_off: 'Desativar modo escuro',
    game_result: 'Resultado do jogo',
    scenario_label: 'Cenário',
  }
};

// ---------- ARTICOLI COSTITUZIONE ----------
const constitutionArticles = [
  {
    num: 'Art. 1',
    title: { it: 'Repubblica democratica', en: 'Democratic Republic', pt: 'República democrática' },
    summary: { it: "L'Italia è una Repubblica democratica fondata sul lavoro. La sovranità appartiene al popolo.", en: 'Italy is a democratic Republic founded on labour. Sovereignty belongs to the people.', pt: 'A Itália é uma República democrática fundada no trabalho. A soberania pertence ao povo.' },
    detail: { it: 'Questo articolo stabilisce la forma istituzionale dello Stato e il principio della sovranità popolare: il potere emana dai cittadini e viene esercitato nelle forme previste dalla Costituzione.', en: 'This article establishes the institutional form of the State and the principle of popular sovereignty: power comes from citizens and is exercised in the forms provided by the Constitution.', pt: 'Este artigo estabelece a forma institucional do Estado e o princípio da soberania popular: o poder emana dos cidadãos e é exercido nas formas previstas pela Constituição.' },
    tag: { it: 'Principi fondamentali', en: 'Fundamental principles', pt: 'Princípios fundamentais' },
    euLink: 'dignity'
  },
  {
    num: 'Art. 2',
    title: { it: 'Diritti inviolabili', en: 'Inviolable rights', pt: 'Direitos invioláveis' },
    summary: { it: 'La Repubblica riconosce e garantisce i diritti inviolabili della persona, sia come individuo sia nelle formazioni sociali.', en: 'The Republic recognises and guarantees the inviolable rights of the person, both as an individual and within social groups.', pt: 'A República reconhece e garante os direitos invioláveis da pessoa, tanto como indivíduo quanto nas formações sociais.' },
    detail: { it: 'I diritti inviolabili non possono essere soppressi nemmeno dal legislatore. Comprendono la libertà personale, la dignità, la vita privata e molti altri riconosciuti dalla giurisprudenza costituzionale.', en: 'Inviolable rights cannot be suppressed even by the legislature. They include personal freedom, dignity, privacy and many others recognised by constitutional case law.', pt: 'Os direitos invioláveis não podem ser suprimidos nem mesmo pelo legislador. Incluem a liberdade pessoal, a dignidade, a privacidade e muitos outros reconhecidos pela jurisprudência constitucional.' },
    tag: { it: 'Diritti della persona', en: 'Personal rights', pt: 'Direitos da pessoa' },
    euLink: 'dignity'
  },
  {
    num: 'Art. 3',
    title: { it: 'Uguaglianza', en: 'Equality', pt: 'Igualdade' },
    summary: { it: 'Tutti i cittadini hanno pari dignità sociale e sono uguali davanti alla legge, senza distinzione di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali.', en: 'All citizens have equal social dignity and are equal before the law, without distinction of sex, race, language, religion, political opinions, or personal and social conditions.', pt: 'Todos os cidadãos têm igual dignidade social e são iguais perante a lei, sem distinção de sexo, raça, língua, religião, opiniões políticas ou condições pessoais e sociais.' },
    detail: { it: "L'uguaglianza è sia formale (stessa legge per tutti) sia sostanziale (lo Stato deve rimuovere gli ostacoli che limitano libertà e uguaglianza reali).", en: 'Equality is both formal (same law for all) and substantive (the State must remove obstacles that limit real freedom and equality).', pt: 'A igualdade é tanto formal (mesma lei para todos) quanto substancial (o Estado deve remover os obstáculos que limitam a liberdade e a igualdade reais).' },
    tag: { it: 'Uguaglianza', en: 'Equality', pt: 'Igualdade' },
    euLink: 'equality'
  },
  {
    num: 'Art. 10',
    title: { it: 'Diritto di asilo', en: 'Right of asylum', pt: 'Direito de asilo' },
    summary: { it: "Lo straniero al quale sia impedito nel suo paese l'effettivo esercizio delle libertà democratiche ha diritto d'asilo nel territorio della Repubblica.", en: 'A foreigner who is prevented in their country from effectively exercising democratic freedoms has the right of asylum in Italy.', pt: 'O estrangeiro impedido no seu país de exercer efetivamente as liberdades democráticas tem direito de asilo no território da República.' },
    detail: { it: "L'asilo è un diritto soggettivo riconosciuto dalla Costituzione, distinto dal permesso di soggiorno e dallo status di rifugiato disciplinati dalla legge ordinaria e dalle norme europee.", en: 'Asylum is a subjective right recognised by the Constitution, distinct from residence permits and refugee status governed by ordinary law and European rules.', pt: 'O asilo é um direito subjetivo reconhecido pela Constituição, distinto do visto de residência e do estatuto de refugiado regulados pela lei ordinária e pelas normas europeias.' },
    tag: { it: 'Libertà civili', en: 'Civil liberties', pt: 'Liberdades civis' },
    euLink: 'solidarity'
  },
  {
    num: 'Art. 13',
    title: { it: 'Libertà personale', en: 'Personal freedom', pt: 'Liberdade pessoal' },
    summary: { it: 'La libertà personale è inviolabile. Nessuno può essere detenuto senza atto motivato dell\'autorità giudiziaria.', en: 'Personal freedom is inviolable. No one may be detained without a reasoned act of the judicial authority.', pt: 'A liberdade pessoal é inviolável. Ninguém pode ser detido sem ato fundamentado da autoridade judicial.' },
    detail: { it: 'Comprende la libertà da arresti arbitrari, perquisizioni e ispezioni. Le eccezioni sono tassativamente previste dalla legge, sempre con convalida del giudice.', en: 'It includes freedom from arbitrary arrests, searches and inspections. Exceptions are strictly provided by law, always with judicial validation.', pt: 'Inclui a liberdade de prisões arbitrárias, buscas e inspeções. As exceções são taxativamente previstas em lei, sempre com validação judicial.' },
    tag: { it: 'Libertà civili', en: 'Civil liberties', pt: 'Liberdades civis' },
    euLink: 'freedom'
  },
  {
    num: 'Art. 21',
    title: { it: 'Libertà di espressione', en: 'Freedom of expression', pt: 'Liberdade de expressão' },
    summary: { it: 'Tutti hanno diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione.', en: 'Everyone has the right to freely express their thoughts in speech, writing and by any other means of communication.', pt: 'Todos têm direito de manifestar livremente o próprio pensamento por meio da palavra, da escrita e de qualquer outro meio de difusão.' },
    detail: { it: 'La libertà di espressione include stampa, radio, internet. Il limite principale è il buon costume; la stampa non può essere soggetta ad autorizzazione o censura preventiva.', en: 'Freedom of expression includes press, radio and the internet. The main limit is public morality; the press cannot be subject to prior authorisation or censorship.', pt: 'A liberdade de expressão inclui imprensa, rádio e internet. O principal limite é a moral pública; a imprensa não pode ser sujeita a autorização ou censura prévia.' },
    tag: { it: 'Libertà civili', en: 'Civil liberties', pt: 'Liberdades civis' },
    euLink: 'freedom'
  },
  {
    num: 'Art. 32',
    title: { it: 'Diritto alla salute', en: 'Right to health', pt: 'Direito à saúde' },
    summary: { it: 'La Repubblica tutela la salute come fondamentale diritto dell\'individuo e interesse della collettività, e garantisce cure gratuite agli indigenti.', en: 'The Republic protects health as a fundamental right of the individual and a collective interest, guaranteeing free treatment for those in need.', pt: 'A República tutela a saúde como direito fundamental do indivíduo e interesse da coletividade, garantindo atendimento gratuito aos necessitados.' },
    detail: { it: 'Nessuno può essere obbligato a un determinato trattamento sanitario se non per disposizione di legge. Il trattamento sanitario obbligatorio non può violare i limiti imposti dal rispetto della persona umana.', en: 'No one may be obliged to undergo a specific medical treatment unless provided by law. Compulsory medical treatment must respect the limits imposed by respect for the human person.', pt: 'Ninguém pode ser obrigado a um determinado tratamento de saúde, salvo por disposição legal. O tratamento obrigatório não pode violar os limites impostos pelo respeito à pessoa humana.' },
    tag: { it: 'Diritti sociali', en: 'Social rights', pt: 'Direitos sociais' },
    euLink: 'solidarity'
  },
  {
    num: 'Art. 34',
    title: { it: 'Diritto all\'istruzione', en: 'Right to education', pt: 'Direito à educação' },
    summary: { it: 'La scuola è aperta a tutti. L\'istruzione inferiore, impartita per almeno otto anni, è obbligatoria e gratuita.', en: 'School is open to all. Lower education, provided for at least eight years, is compulsory and free.', pt: 'A escola é aberta a todos. O ensino fundamental, ministrado por pelo menos oito anos, é obrigatório e gratuito.' },
    detail: { it: 'I capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi. Lo Stato rende effettivo questo diritto con borse di studio e altre provvidenze.', en: 'Those who are capable and deserving, even without financial means, have the right to reach the highest levels of education. The State makes this right effective through scholarships and other provisions.', pt: 'Os capazes e merecedores, mesmo sem recursos, têm direito de alcançar os níveis mais altos de ensino. O Estado torna esse direito efetivo por meio de bolsas de estudo e outras providências.' },
    tag: { it: 'Diritti sociali', en: 'Social rights', pt: 'Direitos sociais' },
    euLink: 'solidarity'
  },
  {
    num: 'Art. 48',
    title: { it: 'Diritto di voto', en: 'Right to vote', pt: 'Direito ao voto' },
    summary: { it: 'Sono elettori tutti i cittadini, uomini e donne, che hanno raggiunto la maggiore età. Il voto è personale ed eguale, libero e segreto.', en: 'All citizens, men and women, who have reached the age of majority are voters. The vote is personal, equal, free and secret.', pt: 'São eleitores todos os cidadãos, homens e mulheres, que atingiram a maioridade. O voto é pessoal, igual, livre e secreto.' },
    detail: { it: 'Il voto è un dovere civico. Le leggi determinano i requisiti e le modalità per l\'esercizio del diritto di voto da parte dei cittadini residenti all\'estero.', en: 'Voting is a civic duty. Laws determine the requirements and procedures for exercising the right to vote by citizens residing abroad.', pt: 'O voto é um dever cívico. As leis determinam os requisitos e as modalidades para o exercício do direito de voto pelos cidadãos residentes no exterior.' },
    tag: { it: 'Diritti politici', en: 'Political rights', pt: 'Direitos políticos' },
    euLink: 'citizenship'
  },
  {
    num: 'Art. 53',
    title: { it: 'Dovere fiscale', en: 'Tax duty', pt: 'Dever fiscal' },
    summary: { it: 'Tutti sono tenuti a concorrere alle spese pubbliche in ragione della loro capacità contributiva. Il sistema tributario è informato a criteri di progressività.', en: 'Everyone is required to contribute to public expenditure in proportion to their ability to pay. The tax system follows progressive criteria.', pt: 'Todos são obrigados a contribuir para as despesas públicas na proporção de sua capacidade contributiva. O sistema tributário é baseado em critérios de progressividade.' },
    detail: { it: 'Il principio di progressività significa che chi guadagna di più contribuisce proporzionalmente di più. L\'evasione fiscale danneggia l\'intera comunità e viola questo principio costituzionale.', en: 'The principle of progressivity means that those who earn more contribute proportionally more. Tax evasion harms the entire community and violates this constitutional principle.', pt: 'O princípio da progressividade significa que quem ganha mais contribui proporcionalmente mais. A sonegação fiscal prejudica toda a comunidade e viola esse princípio constitucional.' },
    tag: { it: 'Doveri', en: 'Duties', pt: 'Deveres' },
    euLink: 'solidarity'
  }
];

// ---------- CARTA UE ----------
const euCharter = [
  {
    id: 'dignity',
    icon: '✨',
    category: { it: 'Titolo I — Dignità', en: 'Title I — Dignity', pt: 'Título I — Dignidade' },
    rights: [
      { title: { it: 'Dignità umana', en: 'Human dignity', pt: 'Dignidade humana' }, text: { it: 'La dignità umana è inviolabile. Deve essere rispettata e tutelata.', en: 'Human dignity is inviolable. It must be respected and protected.', pt: 'A dignidade humana é inviolável. Deve ser respeitada e protegida.' }, italyRef: { it: 'Art. 2 Cost. — diritti inviolabili della persona', en: 'Art. 2 Const. — inviolable rights of the person', pt: 'Art. 2 Const. — direitos invioláveis da pessoa' } },
      { title: { it: 'Diritto alla vita', en: 'Right to life', pt: 'Direito à vida' }, text: { it: 'Ogni persona ha diritto alla vita. Nessuno può essere condannato alla pena di morte.', en: 'Everyone has the right to life. No one shall be condemned to the death penalty.', pt: 'Toda pessoa tem direito à vida. Ninguém pode ser condenado à pena de morte.' }, italyRef: { it: 'Art. 27 Cost. — non ammissibilità della pena di morte', en: 'Art. 27 Const. — inadmissibility of the death penalty', pt: 'Art. 27 Const. — inadmissibilidade da pena de morte' } }
    ]
  },
  {
    id: 'freedom',
    icon: '🕊️',
    category: { it: 'Titolo II — Libertà', en: 'Title II — Freedoms', pt: 'Título II — Liberdades' },
    rights: [
      { title: { it: 'Libertà di pensiero e di religione', en: 'Freedom of thought and religion', pt: 'Liberdade de pensamento e religião' }, text: { it: 'Ogni persona ha diritto alla libertà di pensiero, di coscienza e di religione.', en: 'Everyone has the right to freedom of thought, conscience and religion.', pt: 'Toda pessoa tem direito à liberdade de pensamento, de consciência e de religião.' }, italyRef: { it: 'Artt. 19-21 Cost. — libertà religiosa ed espressione', en: 'Arts. 19-21 Const. — religious freedom and expression', pt: 'Arts. 19-21 Const. — liberdade religiosa e expressão' } },
      { title: { it: 'Libertà di espressione', en: 'Freedom of expression', pt: 'Liberdade de expressão' }, text: { it: 'Ogni persona ha diritto alla libertà di espressione, inclusa la libertà di opinione e di diffondere informazioni.', en: 'Everyone has the right to freedom of expression, including freedom of opinion and to receive and impart information.', pt: 'Toda pessoa tem direito à liberdade de expressão, incluindo a liberdade de opinião e de transmitir informações.' }, italyRef: { it: 'Art. 21 Cost. — libera manifestazione del pensiero', en: 'Art. 21 Const. — free expression of thought', pt: 'Art. 21 Const. — livre manifestação do pensamento' } }
    ]
  },
  {
    id: 'equality',
    icon: '⚖️',
    category: { it: 'Titolo III — Uguaglianza', en: 'Title III — Equality', pt: 'Título III — Igualdade' },
    rights: [
      { title: { it: 'Uguaglianza davanti alla legge', en: 'Equality before the law', pt: 'Igualdade perante a lei' }, text: { it: 'Tutte le persone sono uguali davanti alla legge.', en: 'Everyone is equal before the law.', pt: 'Todas as pessoas são iguais perante a lei.' }, italyRef: { it: 'Art. 3 Cost. — uguaglianza formale e sostanziale', en: 'Art. 3 Const. — formal and substantive equality', pt: 'Art. 3 Const. — igualdade formal e substancial' } },
      { title: { it: 'Non discriminazione', en: 'Non-discrimination', pt: 'Não discriminação' }, text: { it: 'È vietata qualsiasi forma di discriminazione fondata su sesso, razza, colore, origini, caratteristiche genetiche, lingua, religione o opinioni politiche.', en: 'Any discrimination based on sex, race, colour, ethnic or social origin, genetic features, language, religion or beliefs, political opinions is prohibited.', pt: 'É proibida qualquer forma de discriminação baseada em sexo, raça, cor, origem, características genéticas, língua, religião ou opiniões políticas.' }, italyRef: { it: 'Art. 3 Cost. — principio di uguaglianza', en: 'Art. 3 Const. — principle of equality', pt: 'Art. 3 Const. — princípio da igualdade' } }
    ]
  },
  {
    id: 'solidarity',
    icon: '🤝',
    category: { it: 'Titolo IV — Solidarietà', en: 'Title IV — Solidarity', pt: 'Título IV — Solidariedade' },
    rights: [
      { title: { it: 'Diritto alla protezione della salute', en: 'Right to health care', pt: 'Direito à proteção da saúde' }, text: { it: 'Ogni persona ha il diritto di accedere alla prevenzione sanitaria e di ottenere cure mediche.', en: 'Everyone has the right of access to preventive health care and the right to benefit from medical treatment.', pt: 'Toda pessoa tem direito de acesso à prevenção sanitária e de beneficiar de cuidados médicos.' }, italyRef: { it: 'Art. 32 Cost. — diritto alla salute', en: 'Art. 32 Const. — right to health', pt: 'Art. 32 Const. — direito à saúde' } },
      { title: { it: 'Diritto all\'istruzione', en: 'Right to education', pt: 'Direito à educação' }, text: { it: 'Ogni persona ha diritto all\'istruzione e all\'accesso alla formazione professionale e continua.', en: 'Everyone has the right to education and to have access to vocational and continuing training.', pt: 'Toda pessoa tem direito à educação e ao acesso à formação profissional e contínua.' }, italyRef: { it: 'Art. 34 Cost. — diritto allo studio', en: 'Art. 34 Const. — right to education', pt: 'Art. 34 Const. — direito ao estudo' } }
    ]
  },
  {
    id: 'citizenship',
    icon: '🏛️',
    category: { it: 'Titolo V — Cittadinanza', en: 'Title V — Citizens\' Rights', pt: 'Título V — Cidadania' },
    rights: [
      { title: { it: 'Diritto di voto al Parlamento europeo', en: 'Right to vote in European Parliament', pt: 'Direito de voto no Parlamento Europeu' }, text: { it: 'Ogni cittadino dell\'Unione ha il diritto di voto e di eleggibilità alle elezioni del Parlamento europeo.', en: 'Every citizen of the Union has the right to vote and to stand as a candidate at elections to the European Parliament.', pt: 'Todo cidadão da União tem direito de voto e de candidatura nas eleições para o Parlamento Europeu.' }, italyRef: { it: 'Art. 48 Cost. — diritto di voto', en: 'Art. 48 Const. — right to vote', pt: 'Art. 48 Const. — direito ao voto' } }
    ]
  },
  {
    id: 'justice',
    icon: '⚖️',
    category: { it: 'Titolo VI — Giustizia', en: 'Title VI — Justice', pt: 'Título VI — Justiça' },
    rights: [
      { title: { it: 'Diritto a un ricorso effettivo', en: 'Right to an effective remedy', pt: 'Direito a um recurso efetivo' }, text: { it: 'Ogni persona i cui diritti siano stati violati ha diritto a un ricorso effettivo davanti a un giudice.', en: 'Everyone whose rights are violated has the right to an effective remedy before a tribunal.', pt: 'Toda pessoa cujos direitos sejam violados tem direito a um recurso efetivo perante um tribunal.' }, italyRef: { it: 'Art. 24 Cost. — diritto di azione in giudizio', en: 'Art. 24 Const. — right of action in court', pt: 'Art. 24 Const. — direito de ação judicial' } },
      { title: { it: 'Presunzione di innocenza', en: 'Presumption of innocence', pt: 'Presunção de inocência' }, text: { it: 'Ogni imputato è considerato innocente fino a quando la sua colpevolezza non sia stata legalmente provata.', en: 'Everyone who has been charged shall be presumed innocent until proved guilty according to law.', pt: 'Todo acusado é considerado inocente até que a sua culpabilidade seja legalmente provada.' }, italyRef: { it: 'Art. 27 Cost. — non colpevolezza fino a condanna definitiva', en: 'Art. 27 Const. — presumption of innocence', pt: 'Art. 27 Const. — presunção de inocência' } }
    ]
  }
];

// ---------- GLOSSARIO ----------
const glossaryTerms = [
  { icon: '📜', term: { it: 'Costituzione', en: 'Constitution', pt: 'Constituição' }, def: { it: 'Legge fondamentale di uno Stato che ne stabilisce la forma istituzionale, i principi e i diritti dei cittadini. In Italia è rigida: non può essere modificata con legge ordinaria.', en: 'The fundamental law of a State that establishes its institutional form, principles and citizens\' rights. In Italy it is rigid: it cannot be modified by ordinary law.', pt: 'Lei fundamental de um Estado que estabelece a sua forma institucional, os princípios e os direitos dos cidadãos. Na Itália é rígida: não pode ser modificada por lei ordinária.' }, source: { it: 'Fonte: Art. 138 Costituzione italiana', en: 'Source: Art. 138 Italian Constitution', pt: 'Fonte: Art. 138 Constituição italiana' } },
  { icon: '🗳️', term: { it: 'Democrazia', en: 'Democracy', pt: 'Democracia' }, def: { it: 'Sistema di governo in cui il potere appartiene al popolo, esercitato direttamente o tramite rappresentanti eletti.', en: 'System of government in which power belongs to the people, exercised directly or through elected representatives.', pt: 'Sistema de governo no qual o poder pertence ao povo, exercido diretamente ou por meio de representantes eleitos.' }, source: { it: 'Fonte: Art. 1 Costituzione italiana', en: 'Source: Art. 1 Italian Constitution', pt: 'Fonte: Art. 1 Constituição italiana' } },
  { icon: '⚖️', term: { it: 'Stato di diritto', en: 'Rule of law', pt: 'Estado de direito' }, def: { it: 'Principio per cui anche lo Stato è soggetto alla legge. Nessun atto del potere pubblico può violare le norme costituzionali.', en: 'Principle by which even the State is subject to the law. No act of public power can violate constitutional norms.', pt: 'Princípio pelo qual também o Estado está sujeito à lei. Nenhum ato do poder público pode violar as normas constitucionais.' }, source: { it: 'Principio generale dell\'ordinamento', en: 'General principle of the legal order', pt: 'Princípio geral do ordenamento jurídico' } },
  { icon: '🏛️', term: { it: 'Repubblica', en: 'Republic', pt: 'República' }, def: { it: 'Forma di governo in cui il capo dello Stato è eletto (o designato) e non ereditario. L\'Italia è diventata Repubblica con il referendum del 2 giugno 1946.', en: 'Form of government in which the head of state is elected (or designated) and not hereditary. Italy became a Republic with the referendum of 2 June 1946.', pt: 'Forma de governo na qual o chefe de Estado é eleito (ou designado) e não hereditário. A Itália tornou-se República com o referendo de 2 de junho de 1946.' }, source: { it: 'Fonte: Art. 1 Costituzione italiana', en: 'Source: Art. 1 Italian Constitution', pt: 'Fonte: Art. 1 Constituição italiana' } },
  { icon: '🤲', term: { it: 'Sovranità popolare', en: 'Popular sovereignty', pt: 'Soberania popular' }, def: { it: 'Il potere supremo dello Stato appartiene al popolo, che lo esercita nei modi e nei limiti stabiliti dalla Costituzione.', en: 'The supreme power of the State belongs to the people, who exercise it in the ways and within the limits established by the Constitution.', pt: 'O poder supremo do Estado pertence ao povo, que o exerce nos modos e limites estabelecidos pela Constituição.' }, source: { it: 'Fonte: Art. 1 Costituzione italiana', en: 'Source: Art. 1 Italian Constitution', pt: 'Fonte: Art. 1 Constituição italiana' } },
  { icon: '🌍', term: { it: 'Unione europea', en: 'European Union', pt: 'União Europeia' }, def: { it: 'Organizzazione sovranazionale di 27 Stati membri che cooperano in settori quali economia, diritti, sicurezza e ambiente. Le sue norme hanno effetti diretti negli ordinamenti nazionali.', en: 'Supranational organisation of 27 member states cooperating in areas such as economy, rights, security and environment. Its rules have direct effects in national legal systems.', pt: 'Organização supranacional de 27 Estados membros que cooperam em áreas como economia, direitos, segurança e ambiente. As suas normas têm efeitos diretos nos ordenamentos nacionais.' }, source: { it: 'Trattato di Lisbona (2009)', en: 'Treaty of Lisbon (2009)', pt: 'Tratado de Lisboa (2009)' } },
  { icon: '📋', term: { it: 'Diritto fondamentale', en: 'Fundamental right', pt: 'Direito fundamental' }, def: { it: 'Diritto riconosciuto come essenziale alla dignità umana, tutelato dalla Costituzione o dal diritto internazionale e non sopprimibile dallo Stato.', en: 'Right recognised as essential to human dignity, protected by the Constitution or international law and not suppressible by the State.', pt: 'Direito reconhecido como essencial à dignidade humana, protegido pela Constituição ou pelo direito internacional e não suprimível pelo Estado.' }, source: { it: 'Fonti: Cost. it., CEDU, Carta UE', en: 'Sources: Italian Const., ECHR, EU Charter', pt: 'Fontes: Const. it., CEDH, Carta UE' } },
  { icon: '📌', term: { it: 'Dovere civico', en: 'Civic duty', pt: 'Dever cívico' }, def: { it: 'Obbligo che la Costituzione pone in capo al cittadino verso la comunità (es. pagare le tasse, difendere la patria, rispettare la Costituzione).', en: 'Obligation that the Constitution places on the citizen towards the community (e.g. paying taxes, defending the homeland, respecting the Constitution).', pt: 'Obrigação que a Constituição impõe ao cidadão para com a comunidade (ex.: pagar impostos, defender a pátria, respeitar a Constituição).' }, source: { it: 'Fonti: Artt. 52-54 Costituzione italiana', en: 'Sources: Arts. 52-54 Italian Constitution', pt: 'Fontes: Arts. 52-54 Constituição italiana' } },
  { icon: '🔏', term: { it: 'Habeas corpus', en: 'Habeas corpus', pt: 'Habeas corpus' }, def: { it: 'Principio che tutela la libertà personale: nessuno può essere detenuto senza un atto giudiziario motivato. In Italia è sancito dall\'Art. 13 della Costituzione.', en: 'Principle protecting personal freedom: no one may be detained without a reasoned judicial act. In Italy it is enshrined in Art. 13 of the Constitution.', pt: 'Princípio que protege a liberdade pessoal: ninguém pode ser detido sem um ato judicial fundamentado. Na Itália está consagrado no Art. 13 da Constituição.' }, source: { it: 'Art. 13 Costituzione italiana', en: 'Art. 13 Italian Constitution', pt: 'Art. 13 Constituição italiana' } },
  { icon: '🏳️', term: { it: 'Pluralismo', en: 'Pluralism', pt: 'Pluralismo' }, def: { it: 'Principio per cui in una democrazia coesistono legittimamente più partiti, religioni, opinioni e stili di vita, senza che lo Stato imponga un\'unica visione.', en: 'Principle by which in a democracy multiple parties, religions, opinions and lifestyles legitimately coexist, without the State imposing a single vision.', pt: 'Princípio pelo qual em uma democracia coexistem legitimamente vários partidos, religiões, opiniões e estilos de vida, sem que o Estado imponha uma visão única.' }, source: { it: 'Fonti: Artt. 2, 18-21 Costituzione italiana', en: 'Sources: Arts. 2, 18-21 Italian Constitution', pt: 'Fontes: Arts. 2, 18-21 Constituição italiana' } }
];

// ---------- SCENARI ----------
const scenarios = [
  {
    title: { it: 'Il giornalista censurato', en: 'The censored journalist', pt: 'O jornalista censurado' },
    text: { it: 'Un giornalista scrive un articolo critico su una decisione del governo. Le autorità ordinano alla testata di non pubblicarlo prima della stampa.', en: 'A journalist writes a critical article about a government decision. The authorities order the newspaper not to publish it before printing.', pt: 'Um jornalista escreve um artigo crítico sobre uma decisão do governo. As autoridades ordenam ao jornal que não o publique antes da impressão.' },
    choices: [
      { text: { it: 'Viola la libertà di stampa (Art. 21 Cost.) che vieta la censura preventiva.', en: 'Violates freedom of the press (Art. 21 Const.) which prohibits prior censorship.', pt: 'Viola a liberdade de imprensa (Art. 21 Const.) que proíbe a censura prévia.' }, correct: true, feedback: { it: 'Corretto! L\'Art. 21 Cost. vieta espressamente la censura preventiva della stampa.', en: 'Correct! Art. 21 Const. expressly prohibits prior censorship of the press.', pt: 'Correto! O Art. 21 Const. proíbe expressamente a censura prévia da imprensa.' } },
      { text: { it: 'È legittimo: il governo può limitare la stampa per motivi di sicurezza.', en: 'It is legitimate: the government can restrict the press for security reasons.', pt: 'É legítimo: o governo pode restringir a imprensa por motivos de segurança.' }, correct: false, feedback: { it: 'Non corretto. La censura preventiva non è ammessa: solo un giudice può disporre il sequestro, e solo in casi tassativi.', en: 'Not correct. Prior censorship is not allowed: only a judge can order seizure, and only in specific cases.', pt: 'Não correto. A censura prévia não é permitida: apenas um juiz pode ordenar a apreensão, e apenas em casos taxativos.' } }
    ],
    rightInvolved: { it: 'Libertà di stampa — Art. 21 Cost.', en: 'Freedom of the press — Art. 21 Const.', pt: 'Liberdade de imprensa — Art. 21 Const.' }
  },
  {
    title: { it: 'L\'arresto senza mandato', en: 'Arrest without warrant', pt: 'Prisão sem mandado' },
    text: { it: 'La polizia ferma una persona per strada e la trattiene in caserma per 72 ore senza presentarla a un giudice e senza informarla dei motivi.', en: 'Police stop a person in the street and detain them at the station for 72 hours without bringing them before a judge or informing them of the reasons.', pt: 'A polícia aborda uma pessoa na rua e a detém na delegacia por 72 horas sem levá-la a um juiz nem informá-la dos motivos.' },
    choices: [
      { text: { it: 'La detenzione è legittima se la polizia sospetta un reato.', en: 'The detention is lawful if police suspect a crime.', pt: 'A detenção é legítima se a polícia suspeitar de um crime.' }, correct: false, feedback: { it: 'Non corretto. L\'Art. 13 Cost. richiede sempre un atto motivato o la convalida del giudice entro 48 ore.', en: 'Not correct. Art. 13 Const. always requires a reasoned act or judicial validation within 48 hours.', pt: 'Não correto. O Art. 13 Const. sempre exige um ato fundamentado ou homologação judicial em 48 horas.' } },
      { text: { it: 'Viola la libertà personale (Art. 13 Cost.): serve l\'atto del giudice.', en: 'Violates personal freedom (Art. 13 Const.): a judicial act is required.', pt: 'Viola a liberdade pessoal (Art. 13 Const.): é necessário o ato judicial.' }, correct: true, feedback: { it: 'Corretto! Anche in caso di fermo di polizia, il giudice deve convalidare l\'arresto entro 48 ore.', en: 'Correct! Even in case of police detention, the judge must validate the arrest within 48 hours.', pt: 'Correto! Mesmo em caso de detenção policial, o juiz deve homologar a prisão em 48 horas.' } }
    ],
    rightInvolved: { it: 'Libertà personale — Art. 13 Cost.', en: 'Personal freedom — Art. 13 Const.', pt: 'Liberdade pessoal — Art. 13 Const.' }
  },
  {
    title: { it: 'Il lavoratore discriminato', en: 'The discriminated worker', pt: 'O trabalhador discriminado' },
    text: { it: 'Un\'azienda non assume una candidata qualificata dichiarando esplicitamente che preferisce assumere uomini per quel ruolo.', en: 'A company does not hire a qualified candidate, explicitly stating they prefer to hire men for that role.', pt: 'Uma empresa não contrata uma candidata qualificada declarando explicitamente que prefere contratar homens para essa função.' },
    choices: [
      { text: { it: 'Viola il principio di uguaglianza (Art. 3 Cost.) e le norme antidiscriminazione.', en: 'Violates the principle of equality (Art. 3 Const.) and anti-discrimination rules.', pt: 'Viola o princípio da igualdade (Art. 3 Const.) e as normas antidiscriminação.' }, correct: true, feedback: { it: 'Corretto! L\'Art. 3 Cost. vieta discriminazioni basate sul sesso. La normativa europea rafforza questa tutela.', en: 'Correct! Art. 3 Const. prohibits discrimination based on sex. European legislation reinforces this protection.', pt: 'Correto! O Art. 3 Const. proíbe discriminações baseadas no sexo. A legislação europeia reforça essa proteção.' } },
      { text: { it: 'È una scelta legittima dell\'imprenditore nella selezione del personale.', en: 'It is a legitimate choice of the employer in staff selection.', pt: 'É uma escolha legítima do empregador na seleção de pessoal.' }, correct: false, feedback: { it: 'Non corretto. La libertà d\'impresa non include il diritto di discriminare in base al sesso.', en: 'Not correct. Freedom of enterprise does not include the right to discriminate on the basis of sex.', pt: 'Não correto. A liberdade de empresa não inclui o direito de discriminar com base no sexo.' } }
    ],
    rightInvolved: { it: 'Uguaglianza — Art. 3 Cost. + Art. 21 Carta UE', en: 'Equality — Art. 3 Const. + Art. 21 EU Charter', pt: 'Igualdade — Art. 3 Const. + Art. 21 Carta UE' }
  },
  {
    title: { it: 'L\'ospedale che rifiuta le cure', en: 'The hospital that refuses treatment', pt: 'O hospital que recusa o tratamento' },
    text: { it: 'Una persona in condizioni di emergenza viene rifiutata da un pronto soccorso perché non ha documenti di residenza.', en: 'A person in an emergency situation is refused treatment at an emergency room because they do not have residency documents.', pt: 'Uma pessoa em situação de emergência é recusada num pronto-socorro porque não tem documentos de residência.' },
    choices: [
      { text: { it: 'Il pronto soccorso può rifiutare chi non ha residenza.', en: 'The emergency room can refuse those without residency.', pt: 'O pronto-socorro pode recusar quem não tem residência.' }, correct: false, feedback: { it: 'Non corretto. Le cure di emergenza sono garantite a chiunque nel territorio italiano.', en: 'Not correct. Emergency care is guaranteed to everyone in Italy.', pt: 'Não correto. O atendimento de emergência é garantido a todos no território italiano.' } },
      { text: { it: 'Viola il diritto alla salute (Art. 32 Cost.): le cure urgenti spettano a tutti.', en: 'Violates the right to health (Art. 32 Const.): urgent care belongs to everyone.', pt: 'Viola o direito à saúde (Art. 32 Const.): o atendimento urgente pertence a todos.' }, correct: true, feedback: { it: 'Corretto! Il SSN garantisce le cure di emergenza a tutti i presenti nel territorio italiano.', en: 'Correct! The NHS guarantees emergency care to everyone present in Italy.', pt: 'Correto! O SNS garante o atendimento de emergência a todos no território italiano.' } }
    ],
    rightInvolved: { it: 'Diritto alla salute — Art. 32 Cost. + Art. 35 Carta UE', en: 'Right to health — Art. 32 Const. + Art. 35 EU Charter', pt: 'Direito à saúde — Art. 32 Const. + Art. 35 Carta UE' }
  },
  {
    title: { it: 'Il comune chiude la moschea', en: 'The municipality closes the mosque', pt: 'O município fecha a mesquita' },
    text: { it: 'Un comune emette un\'ordinanza che ordina la chiusura di un luogo di culto islamico senza motivazione giuridica.', en: 'A municipality issues an order closing an Islamic place of worship without legal justification.', pt: 'Um município emite uma portaria que ordena o fechamento de um local de culto islâmico sem justificativa jurídica.' },
    choices: [
      { text: { it: 'Il comune può limitare i culti non tradizionali per ragioni di ordine pubblico.', en: 'The municipality can restrict non-traditional religions for public order reasons.', pt: 'O município pode restringir cultos não tradicionais por razões de ordem pública.' }, correct: false, feedback: { it: 'Non corretto. La libertà di culto è garantita dall\'Art. 19 Cost. a tutte le confessioni religiose.', en: 'Not correct. Freedom of worship is guaranteed by Art. 19 Const. to all religious denominations.', pt: 'Não correto. A liberdade de culto é garantida pelo Art. 19 Const. a todas as confissões religiosas.' } },
      { text: { it: 'Viola la libertà religiosa (Art. 19 Cost.): tutte le religioni sono ugualmente libere.', en: 'Violates religious freedom (Art. 19 Const.): all religions are equally free.', pt: 'Viola a liberdade religiosa (Art. 19 Const.): todas as religiões são igualmente livres.' }, correct: true, feedback: { it: 'Corretto! Tutti hanno diritto di professare liberamente la propria fede religiosa.', en: 'Correct! Everyone has the right to freely profess their religious faith.', pt: 'Correto! Todos têm direito de professar livremente a própria fé religiosa.' } }
    ],
    rightInvolved: { it: 'Libertà religiosa — Art. 19 Cost. + Art. 10 Carta UE', en: 'Religious freedom — Art. 19 Const. + Art. 10 EU Charter', pt: 'Liberdade religiosa — Art. 19 Const. + Art. 10 Carta UE' }
  },
  {
    title: { it: 'Il rifiuto della dichiarazione dei redditi', en: 'Refusing to file a tax return', pt: 'A recusa de declarar o imposto de renda' },
    text: { it: 'Un cittadino decide di non dichiarare parte del suo reddito all\'Agenzia delle Entrate, ritenendo le tasse ingiuste.', en: 'A citizen decides not to declare part of their income to the tax authority, believing taxes are unjust.', pt: 'Um cidadão decide não declarar parte da sua renda à autoridade fiscal, considerando os impostos injustos.' },
    choices: [
      { text: { it: 'È una scelta personale: ognuno decide quanto pagare.', en: 'It is a personal choice: everyone decides how much to pay.', pt: 'É uma escolha pessoal: cada um decide quanto pagar.' }, correct: false, feedback: { it: 'Non corretto. Il pagamento delle imposte è un dovere costituzionale (Art. 53 Cost.), non una scelta facoltativa.', en: 'Not correct. Paying taxes is a constitutional duty (Art. 53 Const.), not an optional choice.', pt: 'Não correto. O pagamento de impostos é um dever constitucional (Art. 53 Const.), não uma escolha facultativa.' } },
      { text: { it: 'Viola il dovere tributario (Art. 53 Cost.): tutti devono contribuire in base alla capacità contributiva.', en: 'Violates the tax duty (Art. 53 Const.): everyone must contribute based on their ability to pay.', pt: 'Viola o dever tributário (Art. 53 Const.): todos devem contribuir de acordo com a capacidade contributiva.' }, correct: true, feedback: { it: 'Corretto! L\'Art. 53 Cost. stabilisce che tutti devono concorrere alle spese pubbliche. L\'evasione danneggia la collettività.', en: 'Correct! Art. 53 Const. states that everyone must contribute to public expenditure. Tax evasion harms the entire community.', pt: 'Correto! O Art. 53 Const. estabelece que todos devem contribuir para as despesas públicas. A sonegação prejudica toda a coletividade.' } }
    ],
    rightInvolved: { it: 'Dovere fiscale — Art. 53 Cost.', en: 'Tax duty — Art. 53 Const.', pt: 'Dever fiscal — Art. 53 Const.' }
  }
];

// ---------- GIOCO ----------
const gameCards = [
  { id: 'g1', text: { it: 'Votare alle elezioni', en: 'Vote in elections', pt: 'Votar nas eleições' }, type: 'right', note: { it: 'Art. 48 — diritto di voto', en: 'Art. 48 — right to vote', pt: 'Art. 48 — direito ao voto' } },
  { id: 'g2', text: { it: 'Pagare le imposte', en: 'Pay taxes', pt: 'Pagar impostos' }, type: 'duty', note: { it: 'Art. 53 — dovere fiscale', en: 'Art. 53 — tax duty', pt: 'Art. 53 — dever fiscal' } },
  { id: 'g3', text: { it: 'Ricevere cure mediche', en: 'Receive medical care', pt: 'Receber atendimento médico' }, type: 'right', note: { it: 'Art. 32 — diritto alla salute', en: 'Art. 32 — right to health', pt: 'Art. 32 — direito à saúde' } },
  { id: 'g4', text: { it: 'Frequentare la scuola dell\'obbligo', en: 'Attend compulsory school', pt: 'Frequentar a escola obrigatória' }, type: 'duty', note: { it: 'Art. 34 — obbligo scolastico', en: 'Art. 34 — compulsory schooling', pt: 'Art. 34 — obrigação escolar' } },
  { id: 'g5', text: { it: 'Esprimere liberamente il proprio pensiero', en: 'Express thoughts freely', pt: 'Expressar livremente o próprio pensamento' }, type: 'right', note: { it: 'Art. 21 — libertà di espressione', en: 'Art. 21 — freedom of expression', pt: 'Art. 21 — liberdade de expressão' } },
  { id: 'g6', text: { it: 'Essere fedele alla Repubblica', en: 'Be loyal to the Republic', pt: 'Ser fiel à República' }, type: 'duty', note: { it: 'Art. 54 — dovere di fedeltà', en: 'Art. 54 — duty of loyalty', pt: 'Art. 54 — dever de fidelidade' } },
  { id: 'g7', text: { it: 'Professare la propria religione', en: 'Profess one\'s religion', pt: 'Professar a própria religião' }, type: 'right', note: { it: 'Art. 19 — libertà religiosa', en: 'Art. 19 — religious freedom', pt: 'Art. 19 — liberdade religiosa' } },
  { id: 'g8', text: { it: 'Difendere la patria', en: 'Defend the homeland', pt: 'Defender a pátria' }, type: 'duty', note: { it: 'Art. 52 — difesa della patria', en: 'Art. 52 — defence of the homeland', pt: 'Art. 52 — defesa da pátria' } }
];

// ---------- QUIZ (20 domande) ----------
// Ogni domanda ha: q (testo), options (4 opzioni), correct (indice 0-3 dell'opzione corretta), feedback.
// La posizione della risposta corretta viene mescolata dinamicamente da app.js.
const quizQuestions = [
  {
    q: { it: 'Quando è entrata in vigore la Costituzione italiana?', en: 'When did the Italian Constitution come into force?', pt: 'Quando entrou em vigor a Constituição italiana?' },
    options: [
      { it: '1° gennaio 1948', en: '1 January 1948', pt: '1° de janeiro de 1948' },
      { it: '2 giugno 1946', en: '2 June 1946', pt: '2 de junho de 1946' },
      { it: '22 dicembre 1947', en: '22 December 1947', pt: '22 de dezembro de 1947' },
      { it: '1° gennaio 1950', en: '1 January 1950', pt: '1° de janeiro de 1950' }
    ],
    correct: 0,
    feedback: { it: 'La Costituzione fu approvata il 22 dicembre 1947 ed entrata in vigore il 1° gennaio 1948.', en: 'The Constitution was approved on 22 December 1947 and came into force on 1 January 1948.', pt: 'A Constituição foi aprovada em 22 de dezembro de 1947 e entrou em vigor em 1° de janeiro de 1948.' }
  },
  {
    q: { it: 'Quale articolo della Costituzione sancisce il principio di uguaglianza?', en: 'Which article of the Constitution enshrines the principle of equality?', pt: 'Qual artigo da Constituição consagra o princípio da igualdade?' },
    options: [
      { it: 'Art. 1', en: 'Art. 1', pt: 'Art. 1' },
      { it: 'Art. 3', en: 'Art. 3', pt: 'Art. 3' },
      { it: 'Art. 10', en: 'Art. 10', pt: 'Art. 10' },
      { it: 'Art. 21', en: 'Art. 21', pt: 'Art. 21' }
    ],
    correct: 1,
    feedback: { it: 'L\'Art. 3 stabilisce l\'uguaglianza formale e sostanziale di tutti i cittadini.', en: 'Art. 3 establishes the formal and substantive equality of all citizens.', pt: 'O Art. 3 estabelece a igualdade formal e substancial de todos os cidadãos.' }
  },
  {
    q: { it: 'La Carta dei diritti fondamentali dell\'UE è diventata giuridicamente vincolante con:', en: 'The EU Charter of Fundamental Rights became legally binding with:', pt: 'A Carta dos Direitos Fundamentais da UE tornou-se juridicamente vinculante com:' },
    options: [
      { it: 'Il Trattato di Maastricht (1992)', en: 'The Maastricht Treaty (1992)', pt: 'O Tratado de Maastricht (1992)' },
      { it: 'La proclamazione a Nizza (2000)', en: 'The proclamation in Nice (2000)', pt: 'A proclamação em Nice (2000)' },
      { it: 'Il Trattato di Lisbona (2009)', en: 'The Treaty of Lisbon (2009)', pt: 'O Tratado de Lisboa (2009)' },
      { it: 'Il Trattato di Roma (1957)', en: 'The Treaty of Rome (1957)', pt: 'O Tratado de Roma (1957)' }
    ],
    correct: 2,
    feedback: { it: 'La Carta fu proclamata nel 2000 ma ha acquisito forza vincolante con il Trattato di Lisbona nel 2009.', en: 'The Charter was proclaimed in 2000 but acquired binding legal force with the Treaty of Lisbon in 2009.', pt: 'A Carta foi proclamada em 2000 mas adquiriu força vinculante com o Tratado de Lisboa em 2009.' }
  },
  {
    q: { it: 'Quale principio stabilisce che chi guadagna di più contribuisce proporzionalmente di più alle spese pubbliche?', en: 'Which principle establishes that those who earn more must contribute proportionally more to public expenditure?', pt: 'Qual princípio estabelece que quem ganha mais deve contribuir proporcionalmente mais para as despesas públicas?' },
    options: [
      { it: 'Principio di uguaglianza formale', en: 'Principle of formal equality', pt: 'Princípio da igualdade formal' },
      { it: 'Principio di progressività fiscale', en: 'Principle of fiscal progressivity', pt: 'Princípio da progressividade fiscal' },
      { it: 'Principio di solidarietà', en: 'Principle of solidarity', pt: 'Princípio da solidariedade' },
      { it: 'Principio di sussidiarietà', en: 'Principle of subsidiarity', pt: 'Princípio da subsidiariedade' }
    ],
    correct: 1,
    feedback: { it: 'L\'Art. 53 Cost. stabilisce il principio di progressività: il sistema tributario è calibrato sulla capacità contributiva.', en: 'Art. 53 Const. establishes the principle of progressivity: the tax system is calibrated on each person\'s ability to pay.', pt: 'O Art. 53 Const. estabelece o princípio da progressividade: o sistema tributário é calibrado na capacidade contributiva de cada um.' }
  },
  {
    q: { it: 'In quanti titoli è suddivisa la Carta dei diritti fondamentali dell\'UE?', en: 'Into how many titles is the EU Charter of Fundamental Rights divided?', pt: 'Em quantos títulos está dividida a Carta dos Direitos Fundamentais da UE?' },
    options: [
      { it: '5', en: '5', pt: '5' },
      { it: '6', en: '6', pt: '6' },
      { it: '7', en: '7', pt: '7' },
      { it: '9', en: '9', pt: '9' }
    ],
    correct: 2,
    feedback: { it: 'La Carta è divisa in 7 titoli: Dignità, Libertà, Uguaglianza, Solidarietà, Cittadinanza, Giustizia e Disposizioni generali.', en: 'The Charter is divided into 7 titles: Dignity, Freedoms, Equality, Solidarity, Citizens\' Rights, Justice and General Provisions.', pt: 'A Carta está dividida em 7 títulos: Dignidade, Liberdades, Igualdade, Solidariedade, Cidadania, Justiça e Disposições gerais.' }
  },
  {
    q: { it: 'L\'Art. 1 della Costituzione italiana afferma che l\'Italia è una Repubblica fondata su:', en: 'Art. 1 of the Italian Constitution states that Italy is a Republic founded on:', pt: 'O Art. 1 da Constituição italiana afirma que a Itália é uma República fundada em:' },
    options: [
      { it: 'La famiglia', en: 'The family', pt: 'A família' },
      { it: 'Il lavoro', en: 'Labour', pt: 'O trabalho' },
      { it: 'La solidarietà', en: 'Solidarity', pt: 'A solidariedade' },
      { it: 'La proprietà privata', en: 'Private property', pt: 'A propriedade privada' }
    ],
    correct: 1,
    feedback: { it: '"L\'Italia è una Repubblica democratica, fondata sul lavoro." (Art. 1, comma 1, Costituzione italiana)', en: '"Italy is a democratic Republic, founded on labour." (Art. 1, para. 1, Italian Constitution)', pt: '"A Itália é uma República democrática, fundada no trabalho." (Art. 1, § 1, Constituição italiana)' }
  },
  {
    q: { it: 'La censura preventiva della stampa in Italia è:', en: 'Prior censorship of the press in Italy is:', pt: 'A censura prévia da imprensa na Itália é:' },
    options: [
      { it: 'Ammessa per ragioni di ordine pubblico', en: 'Allowed for public order reasons', pt: 'Permitida por razões de ordem pública' },
      { it: 'Vietata dalla Costituzione', en: 'Prohibited by the Constitution', pt: 'Proibida pela Constituição' },
      { it: 'Ammessa solo in tempo di guerra', en: 'Allowed only in time of war', pt: 'Permitida apenas em tempo de guerra' },
      { it: 'Regolata dal governo di turno', en: 'Regulated by the incumbent government', pt: 'Regulada pelo governo em exercício' }
    ],
    correct: 1,
    feedback: { it: 'L\'Art. 21 Cost. vieta espressamente la censura preventiva: la stampa non può essere soggetta ad autorizzazioni o censure.', en: 'Art. 21 Const. expressly prohibits prior censorship: the press cannot be subject to authorisations or censorship.', pt: 'O Art. 21 Const. proíbe expressamente a censura prévia: a imprensa não pode ser sujeita a autorizações ou censura.' }
  },
  {
    q: { it: 'Quale organo deve convalidare un arresto in flagranza di reato in Italia?', en: 'Which body must validate an arrest in flagrante delicto in Italy?', pt: 'Qual órgão deve homologar uma prisão em flagrante na Itália?' },
    options: [
      { it: 'Il Presidente della Repubblica', en: 'The President of the Republic', pt: 'O Presidente da República' },
      { it: 'Il Ministro dell\'Interno', en: 'The Minister of the Interior', pt: 'O Ministro do Interior' },
      { it: 'L\'autorità giudiziaria (giudice)', en: 'The judicial authority (judge)', pt: 'A autoridade judicial (juiz)' },
      { it: 'Il Prefetto', en: 'The Prefect', pt: 'O Prefeito' }
    ],
    correct: 2,
    feedback: { it: 'L\'Art. 13 Cost. richiede che ogni limitazione della libertà personale sia disposta o convalidata dall\'autorità giudiziaria.', en: 'Art. 13 Const. requires that every restriction on personal freedom be ordered or validated by judicial authority.', pt: 'O Art. 13 Const. exige que toda restrição à liberdade pessoal seja ordenada ou homologada pela autoridade judicial.' }
  },
  {
    q: { it: 'Il principio di uguaglianza sostanziale (Art. 3, comma 2) impone allo Stato di:', en: 'The principle of substantive equality (Art. 3, para. 2) requires the State to:', pt: 'O princípio da igualdade substancial (Art. 3, § 2) impõe ao Estado:' },
    options: [
      { it: 'Trattare tutti in modo identico senza eccezioni', en: 'Treat everyone identically without exceptions', pt: 'Tratar todos de forma idêntica sem exceções' },
      { it: 'Rimuovere gli ostacoli che impediscono l\'effettiva uguaglianza', en: 'Remove obstacles that prevent actual equality', pt: 'Remover os obstáculos que impedem a efetiva igualdade' },
      { it: 'Garantire parità di patrimonio tra i cittadini', en: 'Guarantee equal wealth among citizens', pt: 'Garantir igualdade de patrimônio entre os cidadãos' },
      { it: 'Eliminare le differenze culturali', en: 'Eliminate cultural differences', pt: 'Eliminar as diferenças culturais' }
    ],
    correct: 1,
    feedback: { it: 'L\'Art. 3, comma 2 Cost. impone alla Repubblica di rimuovere gli ostacoli di ordine economico e sociale che limitano libertà e uguaglianza.', en: 'Art. 3, para. 2 Const. requires the Republic to remove economic and social obstacles that limit citizens\' freedom and equality.', pt: 'O Art. 3, § 2 Const. impõe à República remover os obstáculos de ordem econômica e social que limitam a liberdade e a igualdade dos cidadãos.' }
  },
  {
    q: { it: 'Il diritto alla salute (Art. 32 Cost.) garantisce cure di emergenza:', en: 'The right to health (Art. 32 Const.) guarantees emergency care:', pt: 'O direito à saúde (Art. 32 Const.) garante atendimento de emergência:' },
    options: [
      { it: 'Solo ai cittadini italiani', en: 'Only to Italian citizens', pt: 'Apenas aos cidadãos italianos' },
      { it: 'Solo a chi è in regola con i documenti', en: 'Only to those with regular documents', pt: 'Apenas a quem está em dia com os documentos' },
      { it: 'A tutti i presenti nel territorio, senza eccezioni', en: 'To everyone present in the territory, without exceptions', pt: 'A todos os presentes no território, sem exceções' },
      { it: 'Solo a chi ha un reddito sotto la soglia di povertà', en: 'Only to those with income below the poverty threshold', pt: 'Apenas a quem tem renda abaixo do limiar de pobreza' }
    ],
    correct: 2,
    feedback: { it: 'Le cure di emergenza sono garantite a chiunque si trovi nel territorio italiano, indipendentemente da cittadinanza o documenti.', en: 'Emergency care is guaranteed to anyone in Italian territory, regardless of citizenship or documentation status.', pt: 'O atendimento de emergência é garantido a qualquer pessoa no território italiano, independentemente de cidadania ou documentos.' }
  },
  // ----- DOMANDE 11-20 (nuove) -----
  {
    q: { it: 'Chi è il Capo dello Stato nella Repubblica italiana?', en: 'Who is the Head of State in the Italian Republic?', pt: 'Quem é o Chefe de Estado na República italiana?' },
    options: [
      { it: 'Il Presidente del Consiglio dei ministri', en: 'The President of the Council of Ministers', pt: 'O Presidente do Conselho de Ministros' },
      { it: 'Il Presidente della Repubblica', en: 'The President of the Republic', pt: 'O Presidente da República' },
      { it: 'Il Presidente della Corte Costituzionale', en: 'The President of the Constitutional Court', pt: 'O Presidente da Corte Constitucional' },
      { it: 'Il Presidente del Senato', en: 'The President of the Senate', pt: 'O Presidente do Senado' }
    ],
    correct: 1,
    feedback: { it: 'Il Presidente della Repubblica è il Capo dello Stato e rappresenta l\'unità nazionale (Art. 87 Cost.).', en: 'The President of the Republic is the Head of State and represents national unity (Art. 87 Const.).', pt: 'O Presidente da República é o Chefe de Estado e representa a unidade nacional (Art. 87 Const.).' }
  },
  {
    q: { it: 'Cosa si intende per "rigidità" della Costituzione italiana?', en: 'What is meant by the "rigidity" of the Italian Constitution?', pt: 'O que se entende por "rigidez" da Constituição italiana?' },
    options: [
      { it: 'Non può essere modificata in nessun caso', en: 'It cannot be amended under any circumstances', pt: 'Não pode ser alterada em nenhuma hipótese' },
      { it: 'Può essere modificata solo con referendum', en: 'It can only be amended by referendum', pt: 'Só pode ser alterada por referendo' },
      { it: 'Non può essere modificata con una legge ordinaria, ma richiede un procedimento aggravato', en: 'It cannot be modified by ordinary law but requires a more complex procedure', pt: 'Não pode ser modificada por lei ordinária, mas exige um procedimento agravado' },
      { it: 'Può essere modificata solo dal Presidente della Repubblica', en: 'It can only be amended by the President of the Republic', pt: 'Só pode ser alterada pelo Presidente da República' }
    ],
    correct: 2,
    feedback: { it: 'La rigidità costituzionale (Art. 138 Cost.) significa che le modifiche richiedono un procedimento parlamentare rafforzato, con doppia approvazione di entrambe le Camere.', en: 'Constitutional rigidity (Art. 138 Const.) means that amendments require a reinforced parliamentary procedure, with double approval by both Chambers.', pt: 'A rigidez constitucional (Art. 138 Const.) significa que as alterações exigem um procedimento parlamentar reforçado, com dupla aprovação de ambas as Câmaras.' }
  },
  {
    q: { it: 'Quale organo ha il compito esclusivo di giudicare la legittimità costituzionale delle leggi in Italia?', en: 'Which body has the exclusive task of judging the constitutional legitimacy of laws in Italy?', pt: 'Qual órgão tem a tarefa exclusiva de julgar a legitimidade constitucional das leis na Itália?' },
    options: [
      { it: 'Il Consiglio di Stato', en: 'The Council of State', pt: 'O Conselho de Estado' },
      { it: 'La Corte di Cassazione', en: 'The Court of Cassation', pt: 'O Tribunal de Cassação' },
      { it: 'La Corte Costituzionale', en: 'The Constitutional Court', pt: 'A Corte Constitucional' },
      { it: 'Il Parlamento in seduta comune', en: 'Parliament in joint session', pt: 'O Parlamento em sessão conjunta' }
    ],
    correct: 2,
    feedback: { it: 'La Corte Costituzionale (Art. 134 Cost.) è l\'organo che giudica la conformità delle leggi alla Costituzione.', en: 'The Constitutional Court (Art. 134 Const.) is the body that judges the conformity of laws with the Constitution.', pt: 'A Corte Constitucional (Art. 134 Const.) é o órgão que julga a conformidade das leis com a Constituição.' }
  },
  {
    q: { it: 'L\'Art. 52 della Costituzione italiana sancisce:', en: 'Art. 52 of the Italian Constitution enshrines:', pt: 'O Art. 52 da Constituição italiana consagra:' },
    options: [
      { it: 'Il diritto di sciopero', en: 'The right to strike', pt: 'O direito de greve' },
      { it: 'La libertà di associazione', en: 'Freedom of association', pt: 'A liberdade de associação' },
      { it: 'Il dovere di difesa della Patria', en: 'The duty to defend the Homeland', pt: 'O dever de defesa da Pátria' },
      { it: 'Il diritto all\'istruzione', en: 'The right to education', pt: 'O direito à educação' }
    ],
    correct: 2,
    feedback: { it: 'L\'Art. 52 Cost. afferma che la difesa della Patria è sacro dovere del cittadino.', en: 'Art. 52 Const. states that the defence of the Homeland is a sacred duty of the citizen.', pt: 'O Art. 52 Const. afirma que a defesa da Pátria é dever sagrado do cidadão.' }
  },
  {
    q: { it: 'L\'Italia è diventata una Repubblica con il referendum del:', en: 'Italy became a Republic with the referendum of:', pt: 'A Itália tornou-se uma República com o referendo de:' },
    options: [
      { it: '25 aprile 1945', en: '25 April 1945', pt: '25 de abril de 1945' },
      { it: '2 giugno 1946', en: '2 June 1946', pt: '2 de junho de 1946' },
      { it: '1° gennaio 1948', en: '1 January 1948', pt: '1° de janeiro de 1948' },
      { it: '18 aprile 1948', en: '18 April 1948', pt: '18 de abril de 1948' }
    ],
    correct: 1,
    feedback: { it: 'Il 2 giugno 1946 gli italiani votarono per referendum istituzionale scegliendo la Repubblica al posto della Monarchia.', en: 'On 2 June 1946, Italians voted in an institutional referendum choosing the Republic over the Monarchy.', pt: 'Em 2 de junho de 1946, os italianos votaram em referendo institucional escolhendo a República em vez da Monarquia.' }
  },
  {
    q: { it: 'La Carta dei diritti fondamentali dell\'UE si applica agli Stati membri:', en: 'The EU Charter of Fundamental Rights applies to member states:', pt: 'A Carta dos Direitos Fundamentais da UE aplica-se aos Estados membros:' },
    options: [
      { it: 'Sempre e in ogni situazione', en: 'Always and in every situation', pt: 'Sempre e em qualquer situação' },
      { it: 'Solo quando attuano il diritto dell\'Unione europea', en: 'Only when implementing European Union law', pt: 'Apenas quando implementam o direito da União Europeia' },
      { it: 'Solo in materia penale', en: 'Only in criminal matters', pt: 'Apenas em matéria penal' },
      { it: 'Solo nei confronti dei cittadini UE', en: 'Only towards EU citizens', pt: 'Apenas em relação aos cidadãos da UE' }
    ],
    correct: 1,
    feedback: { it: 'Ai sensi dell\'Art. 51 della Carta UE, le disposizioni si applicano agli Stati membri esclusivamente nell\'attuazione del diritto dell\'Unione.', en: 'Under Art. 51 of the EU Charter, its provisions apply to member states exclusively when implementing Union law.', pt: 'Nos termos do Art. 51 da Carta UE, as disposições aplicam-se aos Estados membros exclusivamente quando implementam o direito da União.' }
  },
  {
    q: { it: 'Quale articolo della Costituzione tutela la libertà di domicilio?', en: 'Which article of the Constitution protects freedom of domicile?', pt: 'Qual artigo da Constituição protege a liberdade de domicílio?' },
    options: [
      { it: 'Art. 13', en: 'Art. 13', pt: 'Art. 13' },
      { it: 'Art. 14', en: 'Art. 14', pt: 'Art. 14' },
      { it: 'Art. 15', en: 'Art. 15', pt: 'Art. 15' },
      { it: 'Art. 16', en: 'Art. 16', pt: 'Art. 16' }
    ],
    correct: 1,
    feedback: { it: 'L\'Art. 14 Cost. dichiara il domicilio inviolabile: le ispezioni, perquisizioni e sequestri sono ammessi solo nei casi e modi previsti dalla legge.', en: 'Art. 14 Const. declares the home inviolable: inspections, searches and seizures are only allowed in cases and ways provided by law.', pt: 'O Art. 14 Const. declara o domicílio inviolável: inspeções, buscas e apreensões só são admitidas nos casos e modos previstos em lei.' }
  },
  {
    q: { it: 'Il principio di presunzione di innocenza significa che:', en: 'The principle of presumption of innocence means that:', pt: 'O princípio da presunção de inocência significa que:' },
    options: [
      { it: 'L\'imputato non può essere mai condannato', en: 'The accused can never be convicted', pt: 'O acusado nunca pode ser condenado' },
      { it: 'L\'imputato è considerato innocente fino a condanna definitiva', en: 'The accused is considered innocent until final conviction', pt: 'O acusado é considerado inocente até a condenação definitiva' },
      { it: 'La polizia non può arrestare nessuno', en: 'The police cannot arrest anyone', pt: 'A polícia não pode prender ninguém' },
      { it: 'Il processo penale è sempre pubblico', en: 'Criminal proceedings are always public', pt: 'O processo penal é sempre público' }
    ],
    correct: 1,
    feedback: { it: 'L\'Art. 27 Cost. e l\'Art. 48 Carta UE stabiliscono che nessuno può essere considerato colpevole fino a sentenza definitiva di condanna.', en: 'Art. 27 Const. and Art. 48 EU Charter establish that no one can be considered guilty until a final conviction.', pt: 'O Art. 27 Const. e o Art. 48 Carta UE estabelecem que ninguém pode ser considerado culpado até condenação definitiva.' }
  },
  {
    q: { it: 'Quanti Stati membri fanno attualmente parte dell\'Unione europea?', en: 'How many member states are currently part of the European Union?', pt: 'Quantos Estados membros fazem atualmente parte da União Europeia?' },
    options: [
      { it: '25', en: '25', pt: '25' },
      { it: '27', en: '27', pt: '27' },
      { it: '28', en: '28', pt: '28' },
      { it: '30', en: '30', pt: '30' }
    ],
    correct: 1,
    feedback: { it: 'Dal 2020, dopo l\'uscita del Regno Unito (Brexit), l\'Unione europea conta 27 Stati membri.', en: 'Since 2020, following the United Kingdom\'s exit (Brexit), the European Union has 27 member states.', pt: 'Desde 2020, após a saída do Reino Unido (Brexit), a União Europeia conta com 27 Estados membros.' }
  },
  {
    q: { it: 'Quale articolo della Costituzione italiana sancisce il diritto di riunione?', en: 'Which article of the Italian Constitution enshrines the right of assembly?', pt: 'Qual artigo da Constituição italiana consagra o direito de reunião?' },
    options: [
      { it: 'Art. 15', en: 'Art. 15', pt: 'Art. 15' },
      { it: 'Art. 17', en: 'Art. 17', pt: 'Art. 17' },
      { it: 'Art. 19', en: 'Art. 19', pt: 'Art. 19' },
      { it: 'Art. 21', en: 'Art. 21', pt: 'Art. 21' }
    ],
    correct: 1,
    feedback: { it: 'L\'Art. 17 Cost. garantisce il diritto di riunirsi pacificamente e senz\'armi. Per le riunioni in luogo pubblico è richiesto preavviso alle autorità.', en: 'Art. 17 Const. guarantees the right to assemble peacefully and without arms. For meetings in public places, prior notice to the authorities is required.', pt: 'O Art. 17 Const. garante o direito de se reunir pacificamente e sem armas. Para reuniões em locais públicos, é exigido aviso prévio às autoridades.' }
  }
];
