import {
  EstimationQuestion,
  FlagQuestion,
  MovieQuestion,
  MultipleChoiceQuestion,
  Question,
  LawQuestion,
} from 'types/Question';

export const multipleChoiceQuestion: MultipleChoiceQuestion[] = [
  {
    type: 'multiple-choice',
    question: 'Ist eine Frage mit ganz viel Test gut?',
    choices: ['Test1', 'Test2', 'Test3', 'Test4'],
    rightAnswer: 'A',
  },
  {
    type: 'multiple-choice',
    question: 'Woraus wurde früher violetter Farbstoff gewonnen?',
    choices: ['Safran', 'Schnecken', 'Lapislazuli', 'Rittersporn'],
    rightAnswer: 'C',
  },
  {
    type: 'multiple-choice',
    question: 'Was ist die größte Hühnerrasse der Welt?',
    choices: [
      'Jersey Huhn',
      'Plymouth Rock Huhn',
      'Cochin Huhn',
      'Orpington Huhn',
    ],
    rightAnswer: 'A',
  },
  {
    type: 'multiple-choice',
    question: 'Was bedeutet Photochemie?',
    choices: [
      'Die Photochemie befasst sich mit den chemischen Reaktionen, die durch die Absorption von Lichtenergie in einer Substanz ausgelöst werden',
      'Photochemie befasst sich mit den chemischen Reaktionen in Fotosynthese',
      'Photochemie befasst sich mit chemischen Reaktionen, die bei der Entwicklung von Fotografien auftreten',
      'Photochemie beschäftigt sich mit der chemischen Veränderung von Farben in Fotos',
    ],
    rightAnswer: 'A',
  },
  {
    type: 'multiple-choice',
    question: 'Wer hat die Sixtinische Kapelle bemalt?',
    choices: ['Michelangelo', 'Da Vinci', 'Raphaël', 'Caravaggio'],
    rightAnswer: 'D',
  },
  {
    type: 'multiple-choice',
    question:
      'Welche Dynastie herrschte im alten China von 221 v.Chr. bis 206 v.Chr.? ',
    choices: [
      'Han-Dynastie',
      'Qin-Dynastie',
      'Zhou-Dynastie',
      ' Ming-Dynastie',
    ],
    rightAnswer: 'B',
  },
  {
    type: 'multiple-choice',
    question: 'Was war die erfolgreichste Serie 2022?',
    choices: [
      'Wednesday',
      'Stranger Things',
      'Euphoria',
      'House of the Dragon',
    ],
    rightAnswer: 'B',
  },
  {
    type: 'multiple-choice',
    question: 'Welche Nudelsorte existiert nicht?',
    choices: ['Trofie', 'Orecchiette', 'Circoliniello', 'Pappardelle'],
    rightAnswer: 'C',
  },
  {
    type: 'multiple-choice',
    question: 'Wo wurde das erste mal über das Einhorn berichtet?',
    choices: [
      'Griechische Mythologie',
      'Römische Mythologie',
      'Indischen Volkserzählungen',
      'Altes Testament',
    ],
    rightAnswer: 'D',
  },
];

export const estimationQuestion: EstimationQuestion[] = [
  {
    type: 'estimation',
    question: 'Wie viele Tierarten der Erde sind noch unentdeckt?',
    rightAnswer: 'ca. 89%',
  },
  {
    type: 'estimation',
    question: 'Wie viele Monde gibt es in unserem Sonnensystem?',
    rightAnswer: '170',
  },
  {
    type: 'estimation',
    question: 'Wie viel Gramm ist eine Unze? ',
    rightAnswer: '27g',
  },
  {
    type: 'estimation',
    question: 'Wie viele Bücher werden im Jahr in Deutschland verkauft?',
    rightAnswer: '273 Millionen',
  },
  {
    type: 'estimation',
    question: 'Wann wurde das erste Handy erfunden?',
    rightAnswer: '1973',
  },
  {
    type: 'estimation',
    question: 'Wann wurde der Blobfisch entdeckt?',
    rightAnswer: '1926 ',
  },
  {
    type: 'estimation',
    question: 'Was ist der größte Abstand zwischen Sonne und Pluto?',
    rightAnswer: '7.381 Millionen Kilometer',
  },
  {
    type: 'estimation',
    question: 'Wie lange ist eine ausgerollte Lakritzschnecke?',
    rightAnswer: '50cm',
  },
];

export const flagQuestion: FlagQuestion[] = [
  {
    type: 'flag',
    image: '/flags/Estland.webp',
    rightAnswer: 'Estland',
  },
  {
    type: 'flag',
    image: '/flags/Palästina.webp',
    rightAnswer: 'Palästina',
  },
  {
    type: 'flag',
    image: '/flags/Kongo.webp',
    rightAnswer: 'Dr Kongo',
  },
  {
    type: 'flag',
    image: '/flags/Armenien.webp',
    rightAnswer: 'Armenien',
  },
  {
    type: 'flag',
    image: '/flags/Ghana.webp',
    rightAnswer: 'Ghana',
  },
  {
    type: 'flag',
    image: '/flags/Ägypten.webp',
    rightAnswer: 'Ägypten',
  },
  {
    type: 'flag',
    image: '/flags/Antarktis.webp',
    rightAnswer: '',
  },
  {
    type: 'flag',
    image: '/flags/Georgien.webp',
    rightAnswer: 'Georgien',
  },
  {
    type: 'flag',
    image: '/flags/Grönland.webp',
    rightAnswer: 'Grönland',
  },
  {
    type: 'flag',
    image: '/flags/Neuseeland.webp',
    rightAnswer: 'Neuseeland',
  },
];

export const stupidLawQuestion: LawQuestion[] = [
  {
    type: 'law',
    laws: [
      'Die Stadt Leadwood, Missouri, hat es Piloten verboten, während des Fluges Wassermelonen zu essen',
      'In der Stadt Keelung, Taiwan, ist illegal mit einer Wassermelone im Bus zu fahren',
    ],
    rightAnswer: 'A',
  },
  {
    type: 'law',
    laws: [
      'In der italienischen Stadt Eraclea ist es verboten, Sandburgen zu bauen',
      'In Neapel, Italien, ist es gesetzlich verboten am Strand einen Sonnenbrand zu bekommen',
    ],
    rightAnswer: 'A',
  },
  {
    type: 'law',
    laws: [
      'In Kalifornien ist es gesetzlich verboten, Schere, Stein, Papier um Geld zu spielen, es sei denn, es handelt sich um eine offiziell genehmigte Wettveranstaltung',
      'In Alabama ist Dominospielen am Sonntag streng verboten',
    ],
    rightAnswer: 'B',
  },
  {
    type: 'law',
    laws: [
      'In Tennessee ist es gesetzlich verboten, einen Elch aus einem fahrenden Fahrzeug heraus zu erschießen',
      'In Florida sind sexuelle Beziehungen mit Stachelschweinen verboten',
    ],
    rightAnswer: 'B',
  },
  {
    type: 'law',
    laws: [
      'Jedes Londoner Taxi muss laut Gesetz einen Heuballen im Kofferraum mit sich führen',
      'Gemäß Vorschriften in Amsterdam muss an Feiertagen jeder Fahrradfahrer eine frische Tulpe am Lenker seines Fahrrads befestigen',
    ],
    rightAnswer: 'A',
  },
];

export const movieQuestion: MovieQuestion[] = [
  {
    type: 'movie',
    description:
      'Ein Typ allein im Wald küsst eine Leiche während sieben andere Typen zusehen',
    genre: 'Disney',
    movie: 'Schneewittchen',
  },
  {
    type: 'movie',
    description: 'Eineinhalb Stunden lang Leuten beim Schlafen zusehen',
    genre: 'Science Fiction',
    movie: 'Inception',
  },
  {
    type: 'movie',
    description: 'Sprechender Frosch überredet Sohn, seinen Vater zu töten',
    genre: 'Science Fiction / Fantasy',
    movie: 'Star Wars',
  },
  {
    type: 'movie',
    description:
      'Unbeliebte Kinder machen einen hungernden, obdachlosen Clown fertig',
    genre: 'Horror',
    movie: 'Es',
  },
  {
    type: 'movie',
    description:
      'Ältere Schwester verdirbt der jüngeren die Chance auf einen TV-Auftritt',
    genre: 'Dystopie',
    movie: 'Die Tribute von Panem',
  },
  {
    type: 'movie',
    description:
      'Mädchen muss sich als Junge ausgeben, um ernst genommen zu werden',
    genre: 'Disney',
    movie: 'Mulan',
  },
  {
    type: 'movie',
    description: 'Typ lernt, ein Mädchen ohne ihre Instagram-Filter zu lieben',
    genre: 'Animation',
    movie: 'Shrek',
  },
  {
    type: 'movie',
    description: 'Eine Gruppe verbringt 9 Stunden damit, Schmuck zurückzugeben',
    genre: 'Fantasy',
    movie: 'Herr der Ringe',
  },
];

export const questions: Question[][] = [
  multipleChoiceQuestion,
  estimationQuestion,
  flagQuestion,
  stupidLawQuestion,
  movieQuestion,
];
