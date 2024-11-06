const scenarios = [
  {
    id: 1,
    title: "Matrix Das Erwachen",
    description:
      "Neo entdeckt die Wahrheit der Matrix. Mit Rebellen kämpft er gegen Maschinen, um die gefangene Menschheit zu befreien und retten.",
    likes: 105,
    image: "/Scenarios-Images/Mtrix-Das-Erwachen.png",
    comments: [
      { id: 1, user: "Max", text: "Tolle Geschichten!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 2,
    title: "Reise ins Unbekannte",
    description:
      "Begib dich auf ein Abenteuer zu mysteriösen Orten voller Geheimnisse. Erkunde verborgene Landschaften und triff faszinierende Kreaturen, während du das Unbekannte enthüllst.",
    likes: 20,
    image: "/Scenarios-Images/Reise-ins-Unbekannte.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Story!" },
      { id: 2, user: "Anna", text: "Kann dem nur zustimmen." }
    ]
  },
  {
    id: 3,
    title: "Geheimnisvolle Höhle",
    description:
      "Inmitten eines dichten, uralten Waldes verbirgt sich eine geheimnisvolle Höhle, deren Eingang von üppigem Efeu überwuchert ist.",
    likes: 15,
    image: "/Scenarios-Images/Geheimnisvolle-Höhle.png",
    comments: [
      { id: 1, user: "Max", text: "Echt aufregend!" },
      { id: 2, user: "Anna", text: "Ich war so lala davon überzeugt." }
    ]
  },
  {
    id: 4,
    title: "Verlorene Stadt",
    description:
      "Inmitten unerforschter Wildnis erhebt sich die sagenumwobene verlorene Stadt, verborgen unter dichtem Dschungeldach und überwachsenem Efeu.",
    likes: 25,
    image: "/Scenarios-Images/Verlorne-Stadt.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 5,
    title: "Wüste der Illusionen",
    description:
      "In endlosen Dünen verbergen sich täuschende Illusionen. Löse rätselhafte Geheimnisse, während verlockende Fata Morganas deine Sinne herausfordern und verblüffen",
    likes: 30,
    image: "/Scenarios-Images/Wüste-der-Illusionen.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 6,
    title: "Unterwasser-Abenteuer",
    description:
      "Tauche ab in die unendlichen Weiten des Ozeans und entdecke eine Welt voller Magie und Mysterien.",
    likes: 18,
    image: "/Scenarios-Images/Unterwasser-Abenteuer.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 7,
    title: "Zeitreise",
    description:
      "Ein mysteriöses Artefakt zieht dich in einen Strudel aus Raum und Zeit, wo du dich in unterschiedlichen Epochen und unglaublichen Welten wiederfindest.",
    likes: 22,
    image: "/Scenarios-Images/Zeitreise.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 8,
    title: "Magisches Königreich",
    description:
      "Entdecke ein verzaubertes Königreich voller Magie. Begegne mystischen Kreaturen, enthülle Geheimnisse, erlebe Orte voller Wunder. Staune und träume.",
    likes: 28,
    image: "/Scenarios-Images/Magisches-Königreich.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 9,
    title: "Dunkler Wald",
    description:
      "Stirb ein in eine geheimnisvolle Welt, wo dichte Nebel und flüsternde Bäume verborgene Gefahren und Rätsel offenbaren. Mut wird geprüft.",
    likes: 12,
    image: "/Scenarios-Images/Dunkler-Wald.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 10,
    title: "Verbotene Insel",
    description:
      "Betrete eine mysteriöse Insel, deren dichte Dschungel uralte Geheimnisse bergen. Trotze gefährlichen Kreaturen und entdecke verborgene Schätze jenseits jeder Vorstellungskraft.",
    likes: 35,
    image: "/Scenarios-Images/Verbotene-Insel.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 11,
    title: "Verzauberte Gärten",
    description:
      "Blühende Gärten voller Feen und Magie. Erlebe zauberhafte Abenteuer, während du versteckte Geheimnisse und Wünsche entdeckst.",
    likes: 35,
    image: "/Scenarios-Images/Verzauberte-Gärten.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
  {
    id: 12,
    title: "Meer der Sirenen",
    description:
      "Tauche ein in singende Sirenen und glitzernde Meereswelten. Erlebe Abenteuer und entdecke geheimnisvolle Tiefen voller Wunder.",
    likes: 35,
    image: "/Scenarios-Images/Meer-der-Sirenen.png",
    comments: [
      { id: 1, user: "Max", text: "Spannendes Thema!" },
      { id: 2, user: "Anna", text: "Kann es kaum erwarten, mehr zu erfahren." }
    ]
  },
];

export default scenarios;
