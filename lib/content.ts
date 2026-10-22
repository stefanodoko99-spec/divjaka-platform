export type Lang = "al" | "en";

export const LANGS: Lang[] = ["al", "en"];

/* Every string on the site lives here, in both languages, so the toggle
   swaps the whole page without components carrying copy of their own. */
export const content = {
  al: {
    nav: {
      links: [
        { id: "projekti", label: "Projekti" },
        { id: "platforma", label: "Platforma" },
        { id: "destinacionet", label: "Destinacionet" },
        { id: "paketat", label: "Paketat" },
        { id: "marketplace", label: "Marketplace" },
        { id: "objektivat", label: "Objektivat" },
        { id: "hoteli", label: "Hoteli" },
        { id: "plani", label: "Plani" },
      ],
    },
    loader: {
      word: "Divjaka",
      sub: "Parku Kombëtar Divjakë–Karavasta",
      status: "Duke ngarkuar lagunën",
    },
    hero: {
      kicker: "Platformë dixhitale turizmi",
      title: ["Laguna", "që", "rezervohet", "me", "një", "klikim"],
      lede:
        "Divjaka Smart Tourism Platform lidh turistët, strukturat akomoduese, operatorët turistikë dhe bizneset lokale të zonës Divjakë–Karavasta në një ekosistem të vetëm dixhital.",
      ctaPrimary: "Eksploro platformën",
      ctaSecondary: "Shiko paketat",
      scroll: "Lëviz poshtë",
      meta: [
        { k: "Vendndodhja", v: "Divjakë, Qarku i Fierit" },
        { k: "Koordinatat", v: "40°56′N 19°30′E" },
        { k: "Status", v: "Zonë Ramsar nr. 781" },
      ],
      stats: [
        { v: "222", suf: " km²", l: "Sipërfaqe e mbrojtur" },
        { v: "42", suf: " km²", l: "Laguna e Karavastasë" },
        { v: "230", suf: "+", l: "Lloje shpendësh" },
        { v: "5", suf: "%", l: "E pelikanëve kaçurrelë në botë" },
      ],
    },
    marquee: [
      "Pelecanus crispus",
      "Laguna e Karavastasë",
      "Rezervime në kohë reale",
      "Ramsar 1994",
      "Itinerare të personalizuara",
      "Pishë-Poro",
      "Asistencë në 6 gjuhë",
    ],
    intro: {
      index: "01",
      eyebrow: "Qëllimi i projektit",
      title: "Një destinacion që vizitohet offline dhe shitet offline. Platforma ndryshon të dyja.",
      body:
        "Divjakë–Karavasta pret vizitorë që mbërrijnë pa itinerar, pa rezervim dhe pa informacion të besueshëm. Akomodimi, guidat, udhëtimet me varkë dhe prodhuesit vendas punojnë secili më vete, përmes telefonatave dhe mesazheve. Platforma i bashkon të gjitha në një ekosistem të vetëm dixhital.",
      problemTitle: "Çfarë ndodh sot",
      solutionTitle: "Çfarë bën platforma",
      problems: [
        "Rezervimet merren me telefon dhe mesazhe, pa një kalendar të përbashkët disponueshmërie.",
        "Informacioni për parkun, shtigjet dhe koloninë e pelikanëve është i shpërndarë ose i vjetruar.",
        "Vizitorët e huaj nuk kanë asistencë në gjuhën e tyre sapo mbërrijnë.",
        "Ndërmjetësit marrin një marzh mbi çdo qëndrim dhe çdo ekskursion.",
        "Kërkesa bie jashtë korrikut dhe gushtit; pjesa tjetër e vitit mbetet e padukshme.",
      ],
      solutions: [
        "Një motor rezervimesh me inventar të njëkohësuar për çdo strukturë partnere.",
        "Një burim i vetëm i verifikuar për parkun: specie, shtigje, orare, baticat dhe moti.",
        "Asistencë në shqip, anglisht, italisht, gjermanisht, frëngjisht dhe spanjisht, 24/7.",
        "Shitje direkte mes vizitorit dhe biznesit vendas, me pagesë të sigurt.",
        "Paketa birdwatching, kulture dhe gastronomie që mbajnë kërkesën jashtë sezonit.",
      ],
    },
    platform: {
      index: "02",
      eyebrow: "Platforma",
      title: "Gjashtë module. Një llogari. Gjithçka që i duhet vizitorit dhe pritësit.",
      body:
        "E ndërtuar si progressive web app: funksionon në telefon te kulla e vëzhgimit, funksionon në laptop te një agjenci udhëtimesh në Milano dhe vazhdon të funksionojë në shteg kur bie sinjali.",
      modules: [
        {
          n: "M—01",
          title: "Motori i rezervimeve",
          body:
            "Dhoma, tavolina, varka, guida dhe bileta në një kalendar të vetëm. Disponueshmëria përditësohet në çastin që konfirmohet një rezervim, kështu që dy mysafirë nuk marrin kurrë të njëjtin shtrat apo të njëjtin vend në varkë.",
          tags: ["Inventar live", "Channel manager", "Konfirmim i menjëhershëm", "Anulim fleksibël"],
          img: "lagoon-tower",
        },
        {
          n: "M—02",
          title: "Itinerare të personalizuara",
          body:
            "Vizitori u përgjigjet katër pyetjeve — sa ditë, me kë udhëton, sa ecje, përse erdhi. Platforma ndërton një plan ditë-pas-dite nga ajo që është vërtet e hapur atë javë dhe e rirendit kur ndryshon moti.",
          tags: ["Motor me rregulla", "Sipas motit", "Harta offline", "Plan i ndashëm"],
          img: "pines",
        },
        {
          n: "M—03",
          title: "Marketplace dhe e-commerce",
          body:
            "Një dyqan virtual i plotë: katalog produktesh, çmime aktuale, stok në kohë reale dhe blerje me pak klikime. Prodhuesit vendas — mjaltë, vaj ulliri, peshk, artizanat — shesin krahas qëndrimeve dhe ekskursioneve.",
          tags: ["Katalog produktesh", "Menaxhim stoku", "Kartë, bankë, cash", "Faturim"],
          img: "fisherman-house",
        },
        {
          n: "M—04",
          title: "Asistencë shumëgjuhëshe",
          body:
            "Një asistent i udhëzuar përgjigjet në gjashtë gjuhë: çfarë është e hapur sot, si arrihet te kulla, nëse shtegu është i mbyllur gjatë riprodhimit, ku mund të hahet pas orës shtatë. Çdo gjë që nuk e di, kalon te një person.",
          tags: ["SQ · EN · IT · DE · FR · ES", "24/7", "Kalim te operatori"],
          img: "visitor-centre",
        },
        {
          n: "M—05",
          title: "Paneli i pritësit",
          body:
            "Çdo partner ka back office-in e vet: zënia, të ardhurat, anulimet, paketa më e shitur, java më e qetë e muajit. Çmimet dhe ofertat ndryshohen në një vend të vetëm dhe shfaqen kudo ku biznesi është i listuar.",
          tags: ["Zënia dhe të ardhurat", "Çmime dinamike", "Raporte mujore"],
          img: "aerial",
        },
        {
          n: "M—06",
          title: "Besnikëria dhe kthimi",
          body:
            "Historiku i blerjeve dhe preferencat ushqejnë rekomandime automatike, oferta jashtë sezonit dhe një skemë pikësh që shpenzohen brenda zonës — një natë e dytë, një udhëtim me varkë, një kavanoz mjaltë nga fshati ngjitur.",
          tags: ["Profil i mysafirit", "Rekomandime automatike", "Pikë brenda zonës"],
          img: "heron",
        },
      ],
    },
    destinations: {
      index: "03",
      eyebrow: "Destinacionet",
      title: "Çfarë shet në të vërtetë platforma.",
      body:
        "Shtatë vende brenda parkut dhe përgjatë bregut, secili me sezonin e vet, rregullat e veta të aksesit dhe orën e vet më të mirë të ditës.",
      drag: "Tërhiq",
      items: [
        {
          img: "lagoon",
          title: "Laguna e Karavastasë",
          body:
            "42 km² ujë i njelmët, i ndarë nga Adriatiku prej një brezi rëre — laguna më e madhe në Shqipëri dhe një nga më të mëdhatë në Mesdhe.",
          meta: ["Me varkë", "Gjithë vitin", "42 km²"],
        },
        {
          img: "tower-pelican",
          title: "Kulla e Pelikanëve",
          body:
            "Një kullë druri që sheh drejt kolonisë së riprodhimit të pelikanit kaçurrel. Më e mira herët në mëngjes. Aksesi kufizohet gjatë çeljes së zogjve.",
          meta: ["Në agim", "Me guidë", "Pelecanus crispus"],
        },
        {
          img: "flamingos",
          title: "Flamingot e lagunës",
          body:
            "Nga tetori deri në mars, tufat e flamingove qëndrojnë në ujërat e cekëta të lagunës. Vëzhgimi bëhet nga largësia, me teleskop, pa u afruar.",
          meta: ["Tet – Mars", "Me teleskop", "Phoenicopterus roseus"],
        },
        {
          img: "pines",
          title: "Pylli i Pishave, Pishë-Poro",
          body:
            "Pisha mesdhetare mes lagunës dhe plazhit, e përshkuar nga shtigje të shënuara për ecje dhe biçikletë. Hije përgjatë gjithë gushtit.",
          meta: ["Ecje · biçikletë", "Gjithë vitin", "Pishë-Poro"],
        },
        {
          img: "visitor-centre",
          title: "Qendra e Vizitorëve",
          body:
            "Pika e nisjes: harta, ekspozita e florës dhe faunës, historia e ligatinës dhe rojtarët që dinë cili shteg është i hapur këtë javë.",
          meta: ["Pikë hyrjeje", "Guida të dedikuara", "Ekspozitë"],
        },
        {
          img: "sandbars",
          title: "Brezi i rërës dhe plazhi",
          body:
            "Rërë e imët me pyllin e pishave që zbret deri te uji — pa shëtitore, pa mur betoni. Dielli perëndon drejt e në Adriatik nga këtu.",
          meta: ["Plazh", "Maj – Tetor", "Adriatik"],
        },
        {
          img: "castle",
          title: "Divjaka dhe trashëgimia",
          body:
            "Tregu, kuzhinat e së dielës, kalaja në hyrje të qytetit dhe historitë që nuk hyjnë kurrë në një broshurë. Itinerare kulturore me pritës vendas.",
          meta: ["Gjithë vitin", "Pritës vendas", "Kalaja e Divjakës"],
        },
      ],
    },
    packages: {
      index: "04",
      eyebrow: "Paketat",
      title: "Rezervohen gjatë qëndrimit, nga dhoma, në më pak se një minutë.",
      body:
        "Një mysafir në Hotel Pelikan hap platformën, sheh çfarë zhvillohet nesër dhe e shton te qëndrimi i vet.",
      note: "Paketat kombinohen me çdo qëndrim.",
      items: [
        { n: "01", name: "Zgjimi i Pelikanëve", when: "Agim · Mars–Qershor", img: "tower-pelican" },
        { n: "02", name: "Laguna me Kajak", when: "Paradite · Prill–Tetor", img: "lagoon" },
        { n: "03", name: "Shtigjet e Pishave", when: "Gjithë vitin", img: "pines" },
        { n: "04", name: "Tryeza e Lagunës", when: "Mbrëmje · Gjithë vitin", img: "fisherman-house" },
        { n: "05", name: "Perëndimi mbi Rërë", when: "Mbrëmje · Maj–Shtator", img: "sandbars" },
        { n: "06", name: "Trashëgimia e Divjakës", when: "Gjithë vitin", img: "castle" },
        { n: "07", name: "Birdwatching Dimëror", when: "Nëntor–Shkurt", img: "flamingos-flight" },
      ],
    },
    marketplace: {
      index: "05",
      eyebrow: "Marketplace",
      title: "Dyqani virtual i zonës, i hapur gjithë vitin.",
      body:
        "Katalogu i prodhuesve vendas — ushqim, pije dhe artizanat nga Divjaka dhe Myzeqeja — me disponueshmëri në kohë reale dhe blerje me pak klikime. Prodhuesi shet drejtpërdrejt te klienti, pa ndërmjetës.",
      all: "Të gjitha",
      categories: [
        { id: "ushqim", label: "Ushqim" },
        { id: "pije", label: "Pije" },
        { id: "artizanat", label: "Artizanat" },
      ],
      add: "Shto në shportë",
      inBasket: "Në shportë",
      basket: "Shporta",
      open: "Hap shportën",
      empty: "Shporta është bosh. Shtoni diçka nga katalogu.",
      remove: "Hiq",
      close: "Mbyll",
      itemsOne: "artikull",
      itemsMany: "artikuj",
      steps: ["Shporta", "Të dhënat", "Pagesa", "Konfirmim"],
      checkout: "Vazhdo",
      fieldName: "Emri dhe mbiemri",
      confirmed: "Porosia u regjistrua në demonstrim.",
      confirmedBody:
        "Në platformën e vërtetë, prodhuesi do ta merrte porosinë në çast dhe stoku do të përditësohej vetvetiu.",
      checkoutNote: "Demonstrim — asnjë pagesë nuk kryhet dhe asnjë porosi nuk dërgohet.",
      payments: "Kartë · Transfertë bankare · Pagesë në dorëzim",
      priceNote: "Çmimet i cakton çdo prodhues vetë kur platforma hapet.",
      stockIn: "Në stok",
      stockSeasonal: "Sezonal",
      stockOrder: "Me porosi",
      items: [
        { n: "Mjaltë pishe", cat: "ushqim", by: "Bletarët e Pishë-Poros", stock: "in" },
        { n: "Vaj ulliri ekstra i virgjër", cat: "ushqim", by: "Ullishtet e Myzeqesë", stock: "in" },
        { n: "Peshk i lagunës", cat: "ushqim", by: "Peshkatarët e Karavastasë", stock: "seasonal" },
        { n: "Djathë i bardhë", cat: "ushqim", by: "Blegtorët e zonës", stock: "in" },
        { n: "Reçel fiku", cat: "ushqim", by: "Kuzhina shtëpiake", stock: "order" },
        { n: "Kripë deti", cat: "ushqim", by: "Bregu i Divjakës", stock: "in" },
        { n: "Verë vendase", cat: "pije", by: "Vreshtat e zonës", stock: "in" },
        { n: "Raki rrushi", cat: "pije", by: "Prodhues vendas", stock: "order" },
        { n: "Çaj mali", cat: "pije", by: "Mbledhës vendas", stock: "seasonal" },
        { n: "Shportë kashte", cat: "artizanat", by: "Punishte artizanale", stock: "order" },
        { n: "Sapun ulliri", cat: "artizanat", by: "Punishte artizanale", stock: "in" },
        { n: "Qeramikë e punuar me dorë", cat: "artizanat", by: "Punishte artizanale", stock: "order" },
        { n: "Guidë e shtypur e parkut", cat: "artizanat", by: "Qendra e Vizitorëve", stock: "in" },
        { n: "Tekstil i endur", cat: "artizanat", by: "Endëset e Myzeqesë", stock: "seasonal" },
      ],
    },
    objectives: {
      index: "06",
      eyebrow: "Objektivat e projektit",
      title: "Gjashtë objektiva, secili me një numër pas vetes.",
      body: "Këto janë angazhimet ndaj të cilave matet projekti.",
      items: [
        {
          title: "Zhvillimi i një platforme e-commerce moderne dhe funksionale",
          body:
            "Një platformë intuitive dhe tërheqëse vizualisht, që e bën të thjeshtë kërkimin, zgjedhjen dhe blerjen online të produkteve dhe shërbimeve tona për klientët vendas dhe të huaj, me sistem pagese të sigurt dhe një proces blerjeje të reduktuar në thelbin e tij.",
          kpis: ["Proces i shkurtër blerjeje", "PWA, punon offline", "Pagesa të certifikuara"],
        },
        {
          title: "Përmirësimi i eksperiencës së përdoruesit dhe finalizimi i rezervimeve",
          body:
            "Një eksperiencë blerjeje e personalizuar, bazuar në historikun dhe preferencat e klientëve, me rekomandime automatike produktesh, oferta të posaçme dhe asistencë online 24/7 që mbështet gjithë procesin — nga pyetja e parë deri te çasti kur mysafiri përfiton produktin.",
          kpis: ["Më pak rezervime të ndërprera", "Përgjigje e shpejtë", "6 gjuhë"],
        },
        {
          title: "Zgjerimi i tregut dhe rritja e shitjeve online",
          body:
            "Zgjerimi i tregut duke arritur klientë të rinj vendas dhe ndërkombëtarë përmes kanaleve dixhitale, fushatave të marketingut online dhe integrimit me platformat kryesore të e-commerce dhe rrjetet sociale, që kërkesa të mos varet më nga dy muaj të vitit.",
          kpis: ["Shitje direkte online", "Tregje të reja", "Zënie jashtë sezonit"],
        },
        {
          title: "Rritja e konkurrueshmërisë së biznesit",
          body:
            "Përdorimi i teknologjisë e-commerce për të automatizuar proceset e shitjes, menaxhimin e inventarit dhe komunikimin me klientët, duke ulur kostot operative dhe duke përmirësuar pozicionimin e biznesit në tregun dixhital kombëtar dhe ndërkombëtar.",
          kpis: ["Më pak punë administrative", "Më pak ndërmjetës"],
        },
        {
          title: "Promovimi i trashëgimisë natyrore dhe kulturore të Divjakës",
          body:
            "Vënia në dispozicion e informacionit të besueshëm për trashëgiminë kulturore dhe natyrore të zonës për çdo vizitor, vendas e të huaj — specie, habitate, historia e ligatinës dhe rregullat që e mbajnë të paprekur — e prodhuar së bashku me administratën e parkut dhe Qendrën e Vizitorëve.",
          kpis: ["Dosje destinacioni", "Guidë fushe në 6 gjuhë", "Kod sjelljeje"],
        },
        {
          title: "Monitorimi dhe përmirësimi i vazhdueshëm i platformës",
          body:
            "Monitorimi i vazhdueshëm i metrikave të shitjeve, sjelljes së klientëve dhe performancës së platformës përmes mjeteve analitike, në mënyrë që ofertat, çmimet dhe strategjia e shitjeve të rregullohen mbi të dhëna, jo mbi supozime.",
          kpis: ["Raport mujor", "Testim A/B", "Rishikim tremujor"],
        },
      ],
    },
    impact: {
      index: "07",
      eyebrow: "Si matet projekti",
      title: "Çfarë ndiqet dhe raportohet çdo tremujor.",
      body:
        "Objektivat sasiorë caktohen së bashku me partnerët në nisje të platformës. Këtu renditen treguesit që ndiqen, jo premtime shifrash.",
      items: [
        {
          k: "Shitjet direkte online",
          d: "Vlera e rezervimeve të kryera drejtpërdrejt nga platforma, pa ndërmjetës.",
        },
        {
          k: "Zënia jashtë sezonit",
          d: "Netët e shitura jashtë korrikut dhe gushtit, muaj pas muaji.",
        },
        {
          k: "Bizneset e integruara",
          d: "Strukturat akomoduese, guidat dhe prodhuesit vendas aktivë në platformë.",
        },
        {
          k: "Mbulimi gjuhësor",
          d: "Gjuhët e mbështetura nga kërkimi i parë deri te konfirmimi i rezervimit.",
        },
        {
          k: "Rezervimet e ndërprera",
          d: "Sa e nisin një rezervim pa e mbyllur, dhe në cilin hap ndalen.",
        },
        {
          k: "Vizitorët që kthehen",
          d: "Llogaritë aktive dhe mysafirët që rezervojnë më shumë se një herë.",
        },
      ],
    },
    hotel: {
      index: "08",
      eyebrow: "Aplikanti",
      title: "Hotel Pelikan — njëzet vjet mes detit dhe pishave.",
      body1:
        "Një strukturë akomoduese me mbi 20 vite eksperiencë në sektorin e hotelerisë dhe turizmit në zonën e Divjakës. I pozicionuar pranë detit dhe parkut me pisha, hoteli ofron një ambient të qetë dhe relaksues për turistët vendas dhe të huaj, me dhoma moderne dhe shërbim bar-restoranti.",
      body2:
        "Gjatë qëndrimit, mysafirët mund të rezervojnë drejtpërdrejt nga platforma paketat e aktiviteteve të zonës — itinerare kulturore, vizita në Parkun Kombëtar, në Lagunën e Karavastasë, në Kullën e Vëzhgimit të Pelikanëve dhe në Qendrën e Vizitorëve, ku persona të dedikuar japin informacionin për florën, faunën dhe historinë e parkut.",
      facts: [
        { k: "Eksperiencë", v: "Mbi 20 vite në hoteleri" },
        { k: "Pozicioni", v: "Divjakë, Qarku i Fierit — pranë detit dhe parkut me pisha" },
        { k: "Shërbimet", v: "Dhoma moderne, bar-restorant, paketa aktivitetesh" },
        { k: "Roli në projekt", v: "Aplikant dhe operatori i parë i platformës" },
        { k: "Fokusi", v: "Turizëm i qëndrueshëm, shërbim i personalizuar" },
      ],
    },
    roadmap: {
      index: "09",
      eyebrow: "Plani i zbatimit",
      title: "Katër faza gjatë tetëmbëdhjetë muajve.",
      body: "Çdo fazë mbyllet me diçka që funksionon në duart e një mysafiri real, jo me një dokument.",
      techTitle: "E ndërtuar mbi",
      phases: [
        {
          n: "F1 · M01–M04",
          title: "Themelet",
          items: [
            "Kërkim në terren me partnerët dhe administratën e parkut",
            "Përmbajtje dhe fotografi për 7 destinacione",
            "Sistemi i dizajnit dhe prototipi",
            "Motori i rezervimeve, versioni i parë",
          ],
        },
        {
          n: "F2 · M05–M09",
          title: "Nisja",
          items: [
            "Nisje publike me Hotel Pelikan si operator i parë",
            "Pagesa, faturim, politikë anulimi",
            "Shqip dhe anglisht, deri në rezervim",
            "Bizneset e para partnere",
          ],
        },
        {
          n: "F3 · M10–M14",
          title: "Ekosistemi",
          items: [
            "Marketplace për prodhuesit vendas",
            "Motori i itinerareve dhe hartat offline",
            "Katër gjuhë të tjera, asistencë 24/7",
            "Paneli i partnerit dhe raportimi",
          ],
        },
        {
          n: "F4 · M15–M18",
          title: "Shkallëzimi",
          items: [
            "Skema e pikëve brenda zonës",
            "Integrim me OTA dhe social commerce",
            "Çmime dinamike nga kërkesa reale",
            "Dorëzim dhe trajnim për partnerët",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Ejani ta shihni lagunën në gjashtë të mëngjesit. Pjesën tjetër e marrim ne.",
      placeholder: "emri@shembull.com",
      submit: "Kërko akses",
      invalid: "Shkruani një adresë emaili të vlefshme.",
      sent: "Faleminderit — do t'ju kontaktojmë së shpejti.",
      disclaimer: "Formulari është demonstrues dhe ende nuk dërgon asgjë.",
      copy: "Kopjo",
      copied: "U kopjua",
      address:
        "Hoteli ndodhet në Divjakë, pranë parkut kombëtar dhe bregut të Adriatikut.",
    },
    footer: {
      park: "Parku Kombëtar Divjakë–Karavasta · Zonë Ramsar 781",
      credits: "Kreditet e fotografive",
      creditsNote:
        "Fotografitë vijnë nga Wikimedia Commons me licenca CC0, CC BY dhe CC BY-SA, të cilat kërkojnë atribuim.",
      back: "Kthehu lart",
    },
  },

  en: {
    nav: {
      links: [
        { id: "projekti", label: "Project" },
        { id: "platforma", label: "Platform" },
        { id: "destinacionet", label: "Destinations" },
        { id: "paketat", label: "Packages" },
        { id: "marketplace", label: "Marketplace" },
        { id: "objektivat", label: "Objectives" },
        { id: "hoteli", label: "The hotel" },
        { id: "plani", label: "Roadmap" },
      ],
    },
    loader: {
      word: "Divjaka",
      sub: "Divjakë–Karavasta National Park",
      status: "Loading the lagoon",
    },
    hero: {
      kicker: "Digital tourism platform",
      title: ["A", "lagoon", "you", "can", "book", "in", "one", "click"],
      lede:
        "The Divjaka Smart Tourism Platform connects travellers, accommodation, tour operators and local businesses across Divjakë–Karavasta in a single digital ecosystem.",
      ctaPrimary: "Explore the platform",
      ctaSecondary: "See the packages",
      scroll: "Scroll",
      meta: [
        { k: "Location", v: "Divjakë, Fier County" },
        { k: "Coordinates", v: "40°56′N 19°30′E" },
        { k: "Status", v: "Ramsar site no. 781" },
      ],
      stats: [
        { v: "222", suf: " km²", l: "Protected park area" },
        { v: "42", suf: " km²", l: "Karavasta lagoon" },
        { v: "230", suf: "+", l: "Bird species recorded" },
        { v: "5", suf: "%", l: "Of the world's Dalmatian pelicans" },
      ],
    },
    marquee: [
      "Pelecanus crispus",
      "Karavasta Lagoon",
      "Real-time booking",
      "Ramsar 1994",
      "Personalised itineraries",
      "Pishë-Poro",
      "Assistance in 6 languages",
    ],
    intro: {
      index: "01",
      eyebrow: "Purpose of the project",
      title: "A destination visited offline, and sold offline. The platform changes both.",
      body:
        "Divjakë–Karavasta receives visitors who arrive with no itinerary, no booking and no reliable information. Accommodation, guides, boat trips and local producers each work on their own, through phone calls and messages. The platform brings all of it into one digital ecosystem.",
      problemTitle: "What happens today",
      solutionTitle: "What the platform does",
      problems: [
        "Bookings are taken by phone and direct message, with no shared calendar of availability.",
        "Information about the park, the trails and the pelican colony is scattered or out of date.",
        "Foreign visitors have no assistance in their own language once they arrive.",
        "Intermediaries take a margin on every stay and every excursion.",
        "Demand collapses outside July and August; the rest of the year is invisible.",
      ],
      solutions: [
        "One booking engine with live inventory shared by every accommodation partner.",
        "A single, verified source for the park: species, trails, opening times, tides and weather.",
        "Assistance in Albanian, English, Italian, German, French and Spanish, around the clock.",
        "Direct sales between the visitor and the local business, with secure payment.",
        "Birdwatching, culture and gastronomy packages that carry demand into the off-season.",
      ],
    },
    platform: {
      index: "02",
      eyebrow: "The platform",
      title: "Six modules. One account. Everything the visitor and the host need.",
      body:
        "Built as a progressive web app: it works on a phone at the observation tower, it works on a laptop in a travel agency in Milan, and it keeps working on a trail where the signal drops.",
      modules: [
        {
          n: "M—01",
          title: "Booking engine",
          body:
            "Rooms, tables, boats, guides and tickets in one calendar. Availability updates the moment a booking is confirmed, so two guests can never take the same bed or the same seat on the same boat.",
          tags: ["Live inventory", "Channel manager", "Instant confirmation", "Flexible cancellation"],
          img: "lagoon-tower",
        },
        {
          n: "M—02",
          title: "Personalised itineraries",
          body:
            "The visitor answers four questions — how many days, who they travel with, how much walking, what they came for. The platform builds a day-by-day plan from what is actually open that week, and reshuffles it when the weather turns.",
          tags: ["Rule-based engine", "Weather-aware", "Offline maps", "Shareable plan"],
          img: "pines",
        },
        {
          n: "M—03",
          title: "Marketplace and e-commerce",
          body:
            "A full virtual shop: product catalogue, current prices, live stock and checkout in a few clicks. Local producers — honey, olive oil, fish, handicraft — sell alongside the stays and the excursions.",
          tags: ["Product catalogue", "Stock management", "Card, bank, cash", "Invoicing"],
          img: "fisherman-house",
        },
        {
          n: "M—04",
          title: "Multilingual assistance",
          body:
            "A guided assistant answers in six languages: what is open today, how to reach the tower, whether the trail is closed for the breeding season, where to eat after seven. Anything it cannot answer goes to a human.",
          tags: ["SQ · EN · IT · DE · FR · ES", "24/7", "Human handover"],
          img: "visitor-centre",
        },
        {
          n: "M—05",
          title: "Host dashboard",
          body:
            "Every partner gets their own back office: occupancy, revenue, cancellations, the best-selling package, the quietest week of the month. Prices and offers are changed in one place and appear everywhere the business is listed.",
          tags: ["Occupancy & revenue", "Dynamic pricing", "Monthly reports"],
          img: "aerial",
        },
        {
          n: "M—06",
          title: "Loyalty and returning guests",
          body:
            "Purchase history and preferences feed automatic recommendations, off-season offers and a points scheme spent inside the area — a second night, a boat trip, a jar of honey from the next village.",
          tags: ["Guest profile", "Automatic recommendations", "Points in the area"],
          img: "heron",
        },
      ],
    },
    destinations: {
      index: "03",
      eyebrow: "Destinations",
      title: "What the platform actually sells.",
      body:
        "Seven places inside the park and along the coast, each with its own season, its own access rules and its own best hour of the day.",
      drag: "Drag",
      items: [
        {
          img: "lagoon",
          title: "Karavasta Lagoon",
          body:
            "42 km² of brackish water held back from the Adriatic by a sand bar — the largest lagoon in Albania and one of the largest in the Mediterranean.",
          meta: ["By boat", "All year", "42 km²"],
        },
        {
          img: "tower-pelican",
          title: "The Pelican Tower",
          body:
            "A wooden hide looking onto the breeding colony of the Dalmatian pelican. Best early in the morning. Access is restricted while the birds are nesting.",
          meta: ["At dawn", "Guide required", "Pelecanus crispus"],
        },
        {
          img: "flamingos",
          title: "Flamingos on the lagoon",
          body:
            "From October to March, flocks of flamingos hold the shallow water of the lagoon. Watched from a distance, through a scope, without approaching.",
          meta: ["Oct – March", "Scope required", "Phoenicopterus roseus"],
        },
        {
          img: "pines",
          title: "Pishë-Poro Pine Forest",
          body:
            "Mediterranean pine running between the lagoon and the beach, laced with marked walking and cycling trails. Shade through the whole of August.",
          meta: ["Walk · bike", "All year", "Pishë-Poro"],
        },
        {
          img: "visitor-centre",
          title: "The Visitor Centre",
          body:
            "The starting point: maps, the flora and fauna exhibition, the history of the wetland, and the rangers who know which trail is open this week.",
          meta: ["Entry point", "Guided tours", "Exhibition"],
        },
        {
          img: "sandbars",
          title: "The sand bar and the beach",
          body:
            "Fine sand with the pine forest coming right down to it — no promenade, no concrete wall. The sun sets straight into the Adriatic from here.",
          meta: ["Beach", "May – October", "Adriatic"],
        },
        {
          img: "castle",
          title: "Divjaka and its heritage",
          body:
            "The market, the Sunday kitchens, the castle at the entrance to the town and the stories that never make it into a brochure. Cultural routes with local hosts.",
          meta: ["All year", "Local hosts", "Divjaka castle"],
        },
      ],
    },
    packages: {
      index: "04",
      eyebrow: "Packages",
      title: "Booked during the stay, from the room, in under a minute.",
      body:
        "A guest at Hotel Pelikan opens the platform, sees what is running tomorrow, and adds it to their stay.",
      note: "Packages are combinable with any stay.",
      items: [
        { n: "01", name: "The Pelicans Wake", when: "Dawn · March–June", img: "tower-pelican" },
        { n: "02", name: "The Lagoon by Kayak", when: "Morning · April–October", img: "lagoon" },
        { n: "03", name: "Pine Trails by Bike", when: "All year", img: "pines" },
        { n: "04", name: "Lagoon Table", when: "Evening · All year", img: "fisherman-house" },
        { n: "05", name: "Sunset on the Sand Bar", when: "Evening · May–September", img: "sandbars" },
        { n: "06", name: "Heritage of Divjaka", when: "All year", img: "castle" },
        { n: "07", name: "Winter Birdwatching", when: "November–February", img: "flamingos-flight" },
      ],
    },
    marketplace: {
      index: "05",
      eyebrow: "Marketplace",
      title: "The area's virtual shop, open all year.",
      body:
        "A catalogue of local producers — food, drink and craft from Divjaka and the Myzeqe plain — with live availability and checkout in a few clicks. The producer sells straight to the customer, with no intermediary.",
      all: "All",
      categories: [
        { id: "ushqim", label: "Food" },
        { id: "pije", label: "Drink" },
        { id: "artizanat", label: "Craft" },
      ],
      add: "Add to basket",
      inBasket: "In basket",
      basket: "Basket",
      open: "Open basket",
      empty: "The basket is empty. Add something from the catalogue.",
      remove: "Remove",
      close: "Close",
      itemsOne: "item",
      itemsMany: "items",
      steps: ["Basket", "Details", "Payment", "Confirmation"],
      checkout: "Continue",
      fieldName: "Full name",
      confirmed: "Order recorded in the demonstration.",
      confirmedBody:
        "On the real platform the producer would receive this at once, and stock would update by itself.",
      checkoutNote: "A demonstration — no payment is taken and no order is sent.",
      payments: "Card · Bank transfer · Cash on delivery",
      priceNote: "Each producer sets their own prices when the platform opens.",
      stockIn: "In stock",
      stockSeasonal: "Seasonal",
      stockOrder: "To order",
      items: [
        { n: "Pine honey", cat: "ushqim", by: "Beekeepers of Pishë-Poro", stock: "in" },
        { n: "Extra virgin olive oil", cat: "ushqim", by: "Myzeqe olive groves", stock: "in" },
        { n: "Lagoon fish", cat: "ushqim", by: "Karavasta fishermen", stock: "seasonal" },
        { n: "White cheese", cat: "ushqim", by: "Local herders", stock: "in" },
        { n: "Fig preserve", cat: "ushqim", by: "Home kitchens", stock: "order" },
        { n: "Sea salt", cat: "ushqim", by: "The Divjaka shore", stock: "in" },
        { n: "Local wine", cat: "pije", by: "Vineyards of the area", stock: "in" },
        { n: "Grape rakia", cat: "pije", by: "Local producers", stock: "order" },
        { n: "Mountain tea", cat: "pije", by: "Local foragers", stock: "seasonal" },
        { n: "Straw basket", cat: "artizanat", by: "Craft workshop", stock: "order" },
        { n: "Olive oil soap", cat: "artizanat", by: "Craft workshop", stock: "in" },
        { n: "Hand-thrown ceramics", cat: "artizanat", by: "Craft workshop", stock: "order" },
        { n: "Printed park guide", cat: "artizanat", by: "The Visitor Centre", stock: "in" },
        { n: "Woven textile", cat: "artizanat", by: "Myzeqe weavers", stock: "seasonal" },
      ],
    },
    objectives: {
      index: "06",
      eyebrow: "Project objectives",
      title: "Six objectives, each with a number attached to it.",
      body: "These are the commitments the project is measured against.",
      items: [
        {
          title: "A modern, functional digital e-commerce platform",
          body:
            "An intuitive, visually convincing platform that makes searching, choosing and buying our products and services straightforward for domestic and foreign customers, with a secure payment system and a checkout process stripped down to what is necessary.",
          kpis: ["Short checkout", "PWA, works offline", "Certified payments"],
        },
        {
          title: "Better user experience and more completed bookings",
          body:
            "A personalised buying experience based on each customer's history and preferences, with automatic product recommendations, targeted offers and 24/7 online assistance supporting the whole purchase, from the first question to the moment the guest uses what they bought.",
          kpis: ["Fewer unfinished bookings", "Fast first reply", "6 languages"],
        },
        {
          title: "Market expansion and growth in online sales",
          body:
            "Reaching new domestic and international customers through digital channels, online marketing campaigns and integration with the major e-commerce platforms and social networks, so that demand no longer depends on two months of the year.",
          kpis: ["Direct online sales", "New source markets", "Off-season occupancy"],
        },
        {
          title: "Stronger competitiveness for the business",
          body:
            "Using e-commerce technology to automate the sales process, inventory management and customer communication — lowering operating costs and improving how the business is positioned in the national and international digital market.",
          kpis: ["Less admin work", "Fewer intermediaries"],
        },
        {
          title: "Promotion of Divjaka's natural and cultural heritage",
          body:
            "Making reliable information about the cultural and natural heritage of the area available to every visitor, Albanian and foreign alike — species, habitats, the history of the wetland and the rules that keep it intact — produced with the park administration and the Visitor Centre.",
          kpis: ["Destination dossiers", "Field guide in 6 languages", "Visitor code of conduct"],
        },
        {
          title: "Continuous monitoring and improvement of the platform",
          body:
            "Continuous monitoring of sales metrics, customer behaviour and platform performance through analytics, so that offers, prices and the sales strategy are adjusted against evidence rather than assumption.",
          kpis: ["Monthly report", "A/B testing", "Quarterly review"],
        },
      ],
    },
    impact: {
      index: "07",
      eyebrow: "How the project is measured",
      title: "What is tracked and reported each quarter.",
      body:
        "Quantified targets are set with the partners when the platform launches. What follows are the indicators that get tracked, not promises of figures.",
      items: [
        {
          k: "Direct online sales",
          d: "The value of bookings made straight through the platform, with no intermediary.",
        },
        {
          k: "Off-season occupancy",
          d: "Nights sold outside July and August, month by month.",
        },
        {
          k: "Businesses onboarded",
          d: "Accommodation, guides and local producers active on the platform.",
        },
        {
          k: "Language coverage",
          d: "Languages supported from the first search through to booking confirmation.",
        },
        {
          k: "Unfinished bookings",
          d: "How many start a booking without completing it, and which step they stop at.",
        },
        {
          k: "Returning visitors",
          d: "Active accounts and guests who book more than once.",
        },
      ],
    },
    hotel: {
      index: "08",
      eyebrow: "The applicant",
      title: "Hotel Pelikan — twenty years between the sea and the pines.",
      body1:
        "An accommodation structure with over 20 years of experience in the hospitality and tourism sector of the Divjaka area. Positioned near the sea and the pine park, the hotel offers a quiet, relaxed setting for Albanian and foreign visitors, with modern rooms and a bar-restaurant.",
      body2:
        "During their stay, guests can book the activity packages of the area directly from the platform — cultural routes, visits to the National Park, the Karavasta Lagoon, the Pelican Observation Tower and the Visitor Centre, where dedicated staff explain the flora, the fauna and the history of the park.",
      facts: [
        { k: "Experience", v: "Over 20 years in hospitality" },
        { k: "Location", v: "Divjakë, Fier County — by the sea and the pine park" },
        { k: "Services", v: "Modern rooms, bar-restaurant, activity packages" },
        { k: "Role in the project", v: "Applicant and first operator of the platform" },
        { k: "Focus", v: "Sustainable tourism, personalised service" },
      ],
    },
    roadmap: {
      index: "09",
      eyebrow: "Roadmap",
      title: "Four phases over eighteen months.",
      body: "Each phase ends with something that works in the hands of a real guest, not with a document.",
      techTitle: "Built on",
      phases: [
        {
          n: "P1 · M01–M04",
          title: "Foundations",
          items: [
            "Field research with partners and the park administration",
            "Content and photography for 7 destinations",
            "Design system and prototype",
            "Booking engine, first version",
          ],
        },
        {
          n: "P2 · M05–M09",
          title: "Launch",
          items: [
            "Public launch with Hotel Pelikan as first operator",
            "Payments, invoicing, cancellation policy",
            "Albanian and English, end to end",
            "First partner businesses onboarded",
          ],
        },
        {
          n: "P3 · M10–M14",
          title: "The ecosystem",
          items: [
            "Marketplace for local producers",
            "Itinerary engine and offline maps",
            "Four more languages, assistance 24/7",
            "Partner dashboard and reporting",
          ],
        },
        {
          n: "P4 · M15–M18",
          title: "Scale",
          items: [
            "Loyalty scheme spent inside the area",
            "Integration with OTAs and social commerce",
            "Dynamic pricing from real demand",
            "Handover and training for partners",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Come and see the lagoon at six in the morning. We will handle the rest.",
      placeholder: "name@example.com",
      submit: "Request access",
      invalid: "Enter a valid email address.",
      sent: "Thank you — we will be in touch shortly.",
      disclaimer: "The form is a demonstration and does not send anything yet.",
      copy: "Copy",
      copied: "Copied",
      address: "The hotel is in Divjakë, beside the national park and the Adriatic coast.",
    },
    footer: {
      park: "Divjakë–Karavasta National Park · Ramsar site 781",
      credits: "Photograph credits",
      creditsNote:
        "Photographs come from Wikimedia Commons under CC0, CC BY and CC BY-SA licences, which require attribution.",
      back: "Back to top",
    },
  },
} as const;

export const TECH = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Stripe",
  "PWA · offline-first",
  "MapLibre",
  "i18n · 6 gjuhë",
  "Channel Manager API",
  "Cloudflare",
  "GDPR",
  "WCAG 2.2 AA",
];

/* Only details that are actually true. The hotel's own phone and email go
   here once they are confirmed. */
export const CONTACT = [
  { label: "Vendndodhja", value: "Divjakë, Qarku i Fierit, Shqipëri" },
  { label: "Koordinatat", value: "40°56′N 19°30′E" },
];
