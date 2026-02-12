function placeCard(title, img, text, pos = "center 35%") {
    return `
    <article class="place-card">
      <div class="place-media">
        <img class="place-photo" src="${img}" alt="${title}" style="object-position:${pos}">
        <div class="place-media-overlay"></div>
      </div>
      <div class="place-body">
        <h2 class="place-title">${title}</h2>
        <p class="place-text">${text}</p>
      </div>
    </article>
  `;
}


const places = [
  // MOUNTAINS & RANGES
  {
    name: "Алтай (Катонқарағай)",
    type: "mountains",
    content: placeCard(
      "Алтай (Катонқарағай)",
      "altai.jpeg",
      "Алтайдың таулы өңірі – аймақтың басты табиғи құндылықтарының бірі және экотуризм үшін мықты база. Қылқан жапырақты ормандар, биіктаулы аңғарлар және өзендердің тығыз торабы әртүрлі маршрут құруға мүмкіндік береді. Көрініс нүктелері мен қысқа жорықтарды қамту үшін 2–4 күн жоспарлаған дұрыс. Ең қолайлы маусымдар – көктемнің соңы, жаз және ерте күз: ауа райы тұрақтырақ болып, көріну жақсы болады. Аймақ шалғай болғандықтан, қорғалатын аумақ ережелерін сақтап, логистиканы алдын ала ойластырыңыз.",
      "center 60%"
    )
  },
  {
    name: "Рахман қайнары",
    type: "lakes",
    content: placeCard(
      "Рахман қайнары",
      "fotonax.jpeg",
      "Атақты Рахманов бұлақтары – 12 емдік қайнардан тұратын шипалы су көздері. Олар Арасан өзенінің оң жағалауында, Рахман көліне небәрі 80 метр жерде және теңіз деңгейінен 1760 м биіктікте орналасқан. Жақын маңда Қазақстан, Қытай, Ресей және Моңғолия шекаралары түйіседі. Курорт Катонқарағай мемлекеттік ұлттық табиғи паркінің аумағында орналасқан.",
      "center 60%"
    )
  },
  {
    name: "Шығыс Алтай",
    type: "mountains",
    content: placeCard(
      "Шығыс Алтай",
      "vostochaltai.jpg",
      "Шығыс Алтай – қарама‑қайшылықтарға толы өлке: қыраттар, тайга және мұздық бедерлері әсерлі панорама жасайды. Белсенді сапарларға өте қолайлы: біркүндік жорықтар, фото‑турлар, жануарларды бақылау. Маршруттар негізгі физикалық дайындықты және ауа райын ескеріп мұқият жоспарлауды талап етеді, әсіресе маусымаралық кезде. Ең жайлы кезең – шілде–қыркүйек: температураның күрт құбылуы азаяды. Қауіпсіз әрі жеңіл болу үшін гидпен барыңыз немесе тек тексерілген тректерді қолданып, сенімді навигация/байланыс құралын алыңыз.",
      "center 60%"
    )
  },
  {
    name: "Бұқтырма жотасы",
    type: "mountains",
    content: placeCard(
      "Бұқтырма жотасы",
      "buhtarma.jpg",
      "Бұқтырма жотасы ұзын қырқалары мен көрініс нүктелерімен танымал, мұнда әртүрлі күрделіліктегі бағыттар жасауға болады. Жер бедері біркүндік серуендерді аңғарлардағы және су маңындағы аялдамалармен біріктіруге мүмкіндік береді. Жоспарлау кезінде биіктік айырмасын және шалғай жерлердегі инфрақұрылымның шектеулі екенін ескеріңіз. Жаз бен ерте күз – ең болжамды маусымдар, уақыт пен қауіпсіздік тәуекелдерін азайтады. Іске жарамды тәсіл: бастау/аяқтау нүктелерін, су тоқтайтын жерлерді және ауа райы бұзылса қолданатын қосымша жоспарды алдын ала белгілеу.",
      "center 60%"
    )
  },
  {
    name: "Сарыымсақ жотасы",
    type: "mountains",
    content: placeCard(
      "Сарыымсақ жотасы",
      "sarym.jpg",
      "Сарыымсақ жотасы – табиғи ландшафттары мен кең көріністеріне бағытталған, треккинг үшін перспективалы аймақ. Қысқа жорықтарды да, топ дайын болса ұзақ өткелдерді де таңдауға болады. Ыңғайлы сапар үшін жолдың қолжетімділігін және маусымдық өтімділігін алдын ала бағалаңыз. Ең жақсы ауа райы – тұрақты жаз және құрғақ ерте күз: жаңбыр аз, көріну жақсы. Топпен жүргенде қауіпсіздік ережелерін нақты қойып, ымыртқа қалмай қайту үшін уақытты бақылаңыз.",
      "center 60%"
    )
  },

  // LAKES & RESERVOIRS
  {
    name: "Бұқтырма су қоймасы",
    type: "lakes",
    content: placeCard(
      "Бұқтырма су қоймасы",
      "buhtarmail.jpeg",
      "Бұқтырма су қоймасы – жағажай демалысы, серуен және маусымдық белсенділіктер үшін негізгі су аймағы. Жағалау әртүрлі: қарбалас жағажайлардан бастап тыныш, оңаша орындарға дейін бар. Тиімді жоспарлау үшін, әсіресе маусым қызған кезде, жолы ыңғайлы және инфрақұрылымы бар аумақты таңдаңыз. Ең танымал кезең – маусым–тамыз: су жылырақ, қызмет түрлері көбірек. Қайықпен жүзу және өрт қауіпсіздігі ережелерін сақтаңыз, өйткені жағалау белсенді пайдалануға сезімтал.",
      "center 60%"
    )
  },
  {
    name: "Зайсан көлі",
    type: "lakes",
    content: placeCard(
      "Зайсан көлі",
      "zaisan.jpg",
      "Зайсан көлі кеңістік сезімін береді: көкжиек кең, суы тынық – басты тартымдылығы осы. Көрікті автосапарларға, балық аулауға және дала ландшафттарына негізделген маршруттарға қолайлы. Ұйымдастыруда желдің әсерін және су үстіндегі жағдайдың тез өзгеретінін ескеріңіз. Жылы маусым тиімді: жолдар қолжетімді әрі ұзақ аялдауға мүмкіндік көп. Қорек/су толықтыратын нүктелерді алдын ала жоспарлап, елді мекендерден алыс жерде кездейсоқ инфрақұрылымға сенбеңіз."
    )
  },
  {
    name: "Марқакөл",
    type: "lakes",
    content: placeCard(
      "Марқакөл",
      "qwerty.jpg",
      "Марқакөл – табиғаты ерекше, тыныш әрі баяу саяхатқа лайық биіктаулы көл. Мұнда экологиялық демалысқа, табиғатты бақылауға және жай серуенге келеді. Логистикада жолға қосымша уақыт және таулы ауа райының өзгерістерін ескеріңіз. Ең тұрақты маусым – жаздың ортасы мен ерте күз. Аймақты сақтау үшін келуші ережелерін ұстанып, із‑қалдықты азайтыңыз: қоқыс пен от жағудың әсерін ерекше бақылаңыз."
    )
  },

  // FORESTS & TAIGA
  {
    name: "Алтай ормандары",
    type: "forests",
    content: placeCard(
      "Алтай ормандары",
      "altai-gory.jpg",
      "Алтай ормандары – қылқан жапырақты орман алқаптары мен таза ауасы бағалы демалыс аймағы. Әдетте мұнда жаяу соқпақтармен серуен, пикник орындары және табиғатты фотоға түсіру танымал. Экожүйеге түсетін салмақты азайту үшін ресми соқпақтар мен белгіленген лагерь орындарын таңдаңыз. Ең қолайлы маусым – жаз және ерте күз: соқпақтар құрғақ әрі жүріп‑түсу жеңіл. Өрт қауіпсіздігі және “із қалдырма” қағидасы – басты талап.",
      "center 80%"
    )
  },
  {
    name: "Ертіс маңының лента қарағайлы ормандары",
    type: "forests",
    content: placeCard(
      "Ертіс маңының лента қарағайлы ормандары",
      "priirtysh.jpg",
      "Лента қарағайлы ормандар – құмды топырақта қарағайлар ұзын “жолақ” болып өсетін сирек ландшафт. Ауыр физикалық жүктемесіз қысқа сапарға, серуенге және отбасылық демалысқа ыңғайлы. Сапар сәтті өтуі үшін кіреберіс нүктелерін және қауіпсіз тұрақ орындарын алдын ала таңдаңыз. Құрғақ айлар қолайлы: соқпақ батпақ болмайды, жүру жеңіл. Мұндағы басты талап – қатаң өрт бақылауы және орман төсенішін бүлдірмеу.",
      "center 15%"
    )
  },
  {
    name: "Сібір тайгасы",
    type: "forests",
    content: placeCard(
      "Сібір тайгасы",
      "Vostochnaya-sibir.jpg",
      "Сібір тайгасы – қалың қылқан жапырақты жамылғысы бар, құндылығы жоғары экожүйе. Мұнда тыныш форматтар тиімді: жануарларды бақылау, жай серуен, фото‑маршруттар. Ұқсас жер бедері бағдарды шатастыруы мүмкін, сондықтан навигация тәртібі маңызды. Тұрақты ауа райы және жаңбыр аз күндерді таңдаңыз. Топ жетекшілері маршрутты, байланыс нүктелерін және жабайы жануар кездескендегі әрекет ережелерін алдын ала бекіткен дұрыс.",
      "center 65%"
    )
  },

  // PLATEAUS
  {
    name: "Катонқарағай үстірті",
    type: "plateaus",
    content: placeCard(
      "Катонқарағай үстірті",
      "katon-plato.jpg",
      "Катонқарағай үстірті ашық кеңістігімен және салыстырмалы тегіс биіктаулы бедерімен бағалы – панорамалық маршруттарға таптырмас. Кең ландшафтқа бағытталған орташа треккинг пен фото‑турларға сай келеді. Жоспарлау кезінде биіктікті, желдің күшін және ашық жерде пананың аз екенін ескеріңіз. Ең жақсы уақыт – тұрақты жаз: суықтың күрт түсуі мен найзағай тәуекелі төменірек. Логистиканы алдын ала келісіп, уақыт қорын қалдырыңыз – үстіртте ауа райы тез өзгереді.",
      "center 45%"
    )
  },
  {
    name: "Үлбі үстірті",
    type: "plateaus",
    content: placeCard(
      "Үлбі үстірті",
      "plato.jpeg",
      "Үлбі үстірті – жартасты пішіндері мен көрініс нүктелері бар әсем аймақ; қысқа сапарға және белсенді серуенге қолайлы. Экспедициялық дайындықсыз-ақ 2–6 сағаттық маршруттар құруға болады. Қауіпсіздік үшін жарқабақ маңында абай болып, анық белгіленген соқпақтарды таңдаңыз. Құрғақ ауа райы ыңғайлы: тасты жер тайғақ болмайды. Топпен жүргенде кездесу нүктелерін белгілеңіз және қарқынды реттеп, жорықты жеңіл әрі қауіпсіз ұстаңыз."
    )
  },

  // CANYONS & GORGES
  {
    name: "Түрген шатқалы",
    type: "canyons",
    content: placeCard(
      "Түрген шатқалы",
      "turgen.jpg",
      "Түрген шатқалы – биіктік айырмасы мен өзен аңғары әсер қалыптастыратын классикалық біркүндік бағыт. Бірнеше аялдама және қысқа серуендермен біркүндік бағдарлама ретінде жоспарлау оңай. Нәтиже тұрақты болуы үшін ымыртқа қалмай қайтуға уақытты реттеңіз және маусымдық соқпақтың дымқылдығын ескеріңіз. Ұзақ жаңбырсыз жылы айлар қолайлы – өтімділігі жақсы. Қауіпсіз соқпақтардан шықпай, тік жартастар маңында арақашықтық сақтаңыз."
    )
  },
  {
    name: "Ертістің Қара каньоны",
    type: "canyons",
    content: placeCard(
      "Ертістің Қара каньоны",
      "cherni_irtish.jpg",
      "Ертістің Қара каньоны әсерлі жартас қабаттарымен және тас пен өзен сызығының контрастымен ерекшеленеді. Композиция мен жарық маңызды болатын фото‑маршруттар және көрініс нүктелеріне тоқтау үшін өте ыңғайлы. Қауіпсіздік үшін берік алаңдарды таңдаңыз, бақылаусыз қия шеттерге жақындамаңыз. Көріну ең жақсы болатын ашық күндері барған дұрыс – тайғақ жер азаяды. Аймақты бүлдірмеңіз: мүжілгіш шеттерін сындырмаңыз, қоқыс тастамаңыз, беткейдегі өсімдікті таптамаңыз."
    )
  },
  {
    name: "Ақсу каньоны",
    type: "canyons",
    content: placeCard(
      "Ақсу каньоны",
      "kanyon-aksu.jpg",
      "Ақсу каньоны – биік жартасты қабырғалары мен тар өткелдері бар әсерлі геологиялық нысан. Белсенді серуендер мен көрініске білінетін маршруттарға керемет. Жоспарлағанда маусымдық жауын‑шашынды ескеріңіз: жаңбырдан кейін тас пен топырақ қауіпті болады. Ең қолайлы уақыт – құрғақ кезең, ауа райы болжамды және көріну анық болғанда. Маршруттан ауытқымаңыз, жеткілікті су алыңыз және құлауы мүмкін, мүжілген учаскелерге жақындамаңыз.",
      "center 65%"
    )
  },

  // MEADOWS & STEPPES
  {
    name: "Катонқарағай жайлаулары",
    type: "steppes",
    content: placeCard(
      "Катонқарағай жайлаулары",
      "osyl.jpeg",
      "Катонқарағай жайлаулары – маусымдық тартымдылығы жоғары, жұмсақ ландшафт. Тыныш серуенге, отбасылық маршрутқа және таулы фондағы фотосуретке өте қолайлы. Ең жақсы әсер үшін гүлдеу кезеңін және тұрақты ауа райын таңдаңыз – жайлау ең әдемі көрінеді. Көлеңке аз болуы мүмкін, күн мен желден қорғанысты алыңыз. Жақсы әдет: гүлді алаңдарды таптамау және жолдан тыс көлік жүргізбеу.",
      "center 65%"
    )
  },

  // GLACIERS
  {
    name: "Шығыс Алтай мұздықтары",
    type: "glaciers",
    content: placeCard(
      "Шығыс Алтай мұздықтары",
      "sofiyski.jpg",
      "Шығыс Алтай мұздықтары – өзен бастауын және таулы аңғарлардың су қорын қалыптастыратын стратегиялық табиғи ресурс. Саяхатшылар үшін бұл – сирек кездесетін әсерлі көрініс және ерекше табиғи тәжірибе. Бару мұқияттықты талап етеді: қауіпсіз маршрут, дұрыс жабдық және қажет болса нұсқаушы. Қар көшкіні мен тас құлау тәуекелі төмен болатын тұрақты маусымды таңдаңыз. Жарықтардан қатаң арақашықтық сақтап, арнайы дайындықсыз мұздың үстіне шықпаңыз."
    )
  },
  {
    name: "Белуха мұздығы",
    type: "glaciers",
    content: placeCard(
      "Белуха мұздығы",
      "beluha.png",
      "Белуха мұздығы – ең танымал биіктаулы нысандардың бірі және альпинистік бағыттар үшін маңызды бағдар нүктесі. Көрінісі өте әсерлі, “таза” таулық эстетикасымен бағаланады. Бару қатаң қауіпсіздік тәртібін қажет етеді: биіктік қолайлы ауа райын және мықты жабдықты талап етеді. Тексерілген соқпақтарды пайдаланып, ұзақ жорықтарда бейімделуге (акклиматизацияға) уақыт қалдырыңыз. Табиғатқа әсерді минимумға түсіріп, гид/қызмет нұсқауларын орындаңыз."
    )
  },

  // RIVERS
  {
    name: "Ертіс өзені",
    type: "rivers",
    content: placeCard(
      "Ертіс өзені",
      "irtysh_2.jpg",
      "Ертіс – өңірдің басты өзені және маңызды көлік‑ландшафттық дәліз. Саяхатшылар жағалаудағы серуен жолдарын, көрініс алаңдарын және өзен бойымен жүруді ұнатады. Жоспарлағанда маусымдық су деңгейін және ашық жерлердегі желді ескеріңіз. Қалалық нүктелерді жоғары немесе төмен ағыстағы табиғи аялдамалармен біріктіру жақсы формат. Су маңындағы қауіпсіздік ережелерін сақтап, демалу және жағалауға түсу үшін ресми орындарды пайдаланыңыз."
    )
  },
  {
    name: "Бұлақ өзені",
    type: "rivers",
    content: placeCard(
      "Бұлақ өзені",
      "bulak.jpg",
      "Бұлақ – нағыз таулы өзен: суы салқын, арнасы тасты, ағысы қатты – тартымдылығы осы. Қысқа серуенге, жол-жөнекей тез аялдамаға және табиғатты фотоға түсіруге қолайлы. Тайғақ тастарды және жаңбырдан кейін су деңгейінің тез өзгеруін ескеріңіз. Құрғақ ауа райы жақсы – соқпақтар мен түсу орындары қауіпсіздеу. Жағасы берік жерлерді таңдаңыз және қажетсіз кешіп өтуден аулақ болыңыз.",
      "center 60%"
    )
  },
  {
    name: "Тұрғысын өзені",
    type: "rivers",
    content: placeCard(
      "Тұрғысын өзені",
      "tursugyn.jpg",
      "Тұрғысын – аңғарлар мен өзен бойы ландшафттары негізгі тартым болатын бағыттағы аялдама. Көрікті қысқа үзілістер қажет болатын автосапар бағдарламасына жақсы үйлеседі. Сапалы бару үшін кіреберіс жолдарын және жағалауға қауіпсіз түсу орындарын алдын ала анықтаңыз. Ұзақ жауынсыз жылы айлар қолайлы: су мөлдір, жол‑түсулер тұрақтырақ. Табиғи келбетін сақтау үшін жағалауды таза ұстап, қоқыс қалдырмаңыз."
    )
  },
  {
    name: "Катон өзені",
    type: "rivers",
    content: placeCard(
      "Катон өзені",
      "katon-rika.jpg",
      "Катон өзені – аңғарлар мен негізгі қызығушылық нүктелерін байланыстыратын “таулы ось”. Саяхатшылар таза суды, тау бөктерлерінің көрінісін және өзен бойымен серуендеу мүмкіндігін бағалайды. Логистикада маусымдық су тасқыны/ағын өзгерістерін және топырақ жолдардың жағдайын ескеріңіз. Ең болжамды кезең – жаз және ерте күз. Қауіпсіз жағалау аймақтарынан шықпай, су маңындағы тік жарқабақтарға жақындамаңыз.",
      "center 65%"
    )
  }
];

// Make places accessible for other modules (recommendations / trip plan)
window.places = places;
window.__PLACES__ = places;


// (кодтың қалған бөлігі өзгеріссіз қалдырылды)
const buttons = document.getElementById("buttons");
const info = document.getElementById("info");

function render(list) {
    buttons.innerHTML = "";
    list.forEach(p => {
        const b = document.createElement("button");
        b.textContent = p.name;
        b.onclick = () => {
            info.innerHTML = p.content + (window.tripInjectActionBar ? window.tripInjectActionBar(p) : "");

            // Update favorites/plan UI (if enabled)
            if (typeof window.renderTripUI === "function") {
                try { window.renderTripUI(); } catch (_) { }
            }

            // Personalization: track user actions (views)
            if (typeof window.trackPlaceView === "function") {
                try { window.trackPlaceView(p); } catch (_) { }
            }

            // If the “Recommended trip” block exists — refresh it
            if (typeof window.refreshRecommendations === "function") {
                try { window.refreshRecommendations(); } catch (_) { }
            }
        };

        buttons.appendChild(b);
    });
}

function applyFilter() {
    const v = document.getElementById("filter").value;
    render(v === "all" ? places : places.filter(p => p.type === v));
}

render(places);

/* ==========================================================
   Favorites ⭐ + "My Trip Plan" (localStorage)
   Keys aligned with existing personalization: userProfile / userHistory_v1
   ========================================================== */
(() => {
  const FAV_KEY = "userFavorites_v1";
  const PLAN_KEY = "userTripPlan_v1";

  const $ = (id) => document.getElementById(id);

  const safeParse = (v, fallback) => {
    try { return JSON.parse(v); } catch { return fallback; }
  };

  const getFavorites = () => safeParse(localStorage.getItem(FAV_KEY) || "[]", []);
  const setFavorites = (arr) => localStorage.setItem(FAV_KEY, JSON.stringify(arr));

  const getPlan = () => safeParse(localStorage.getItem(PLAN_KEY) || "[]", []);
  const setPlan = (arr) => localStorage.setItem(PLAN_KEY, JSON.stringify(arr));

  const esc = (s) => String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  const stripHTML = (html) => {
    const d = document.createElement("div");
    d.innerHTML = String(html ?? "");
    return (d.textContent || "").trim();
  };

  // Локацияларда тұрақты key жоқ → негізгі кілт ретінде атауын қолданамыз
  const placeKey = (p) => p?.key || p?.id || p?.name;

  const getPlaceByKey = (key) => {
    const arr = window.__PLACES__ || window.places || [];
    return arr.find(p => placeKey(p) === key) || null;
  };

  const isFav = (key) => getFavorites().includes(key);

  const toggleFav = (key) => {
    const fav = getFavorites();
    const i = fav.indexOf(key);
    if (i >= 0) fav.splice(i, 1);
    else fav.push(key);
    setFavorites(fav);
  };

  const addToPlan = (key) => {
    const plan = getPlan();
    if (!plan.some(x => x.key === key)) {
      plan.push({ key, note: "", addedAt: Date.now() });
      setPlan(plan);
    }
  };

  const removeFromPlan = (key) => {
    setPlan(getPlan().filter(x => x.key !== key));
  };

  const movePlan = (key, dir) => {
    const plan = getPlan();
    const i = plan.findIndex(x => x.key === key);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= plan.length) return;
    [plan[i], plan[j]] = [plan[j], plan[i]];
    setPlan(plan);
  };

  const updateNote = (key, note) => {
    const plan = getPlan();
    const item = plan.find(x => x.key === key);
    if (!item) return;
    item.note = String(note ?? "").slice(0, 400);
    setPlan(plan);
  };

  // Орны туралы блокқа (#info) батырмаларды енгізу
  window.tripInjectActionBar = (p) => {
    const key = placeKey(p);
    if (!key) return "";
    return `
      <div class="place-actions" style="display:flex; gap:10px; align-items:center; justify-content:flex-end; margin-top:12px;">
        <button class="fav-btn" type="button" data-fav="${esc(key)}" aria-label="Таңдаулыларға қосу">☆</button>
        <button class="trip-btn primary" type="button" data-add-plan="${esc(key)}">Жоспарға қосу</button>
      </div>
    `;
  };

  // #trip бөлімі үшін негізгі рендер
  function renderTripUI() {
    const favList = $("favList");
    const planList = $("planList");
    if (!favList || !planList) return;

    const fav = getFavorites();
    const plan = getPlan();

    // Таңдаулылар тізімі
    if (!fav.length) {
      favList.innerHTML = `<div class="trip-meta">Әзірге бос. Орындағы ☆ белгісін басып, таңдаулыларға қосыңыз.</div>`;
    } else {
      favList.innerHTML = fav.map((key) => {
        const p = getPlaceByKey(key);
        const title = p?.name || key;
        const desc = p ? stripHTML(p.content).slice(0, 110) : "";
        return `
          <div class="trip-item">
            <div>
              <div class="trip-title">${esc(title)}</div>
              <div class="trip-meta">${esc(desc)}${desc.length >= 110 ? "…" : ""}</div>
            </div>
            <div class="trip-actions">
              <button class="trip-btn primary" type="button" data-add-plan="${esc(key)}">Жоспарға қосу</button>
              <button class="trip-btn" type="button" data-fav="${esc(key)}">Өшіру</button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Жоспар тізімі
    if (!plan.length) {
      planList.innerHTML = `<div class="trip-meta">Жоспарыңызға 2–6 орынды қосып, ретін реттеңіз.</div>`;
    } else {
      planList.innerHTML = plan.map((item, idx) => {
        const p = getPlaceByKey(item.key);
        const title = p?.name || item.key;
        return `
          <div class="trip-item">
            <div>
              <div class="trip-title">${idx + 1}. ${esc(title)}</div>
              <textarea class="trip-note" data-note="${esc(item.key)}"
                placeholder="Ескертпе (уақыт, бюджет, не алу керек)">${esc(item.note || "")}</textarea>
            </div>
            <div class="trip-actions">
              <button class="trip-btn" type="button" data-move="${esc(item.key)}" data-dir="-1">↑</button>
              <button class="trip-btn" type="button" data-move="${esc(item.key)}" data-dir="1">↓</button>
              <button class="trip-btn" type="button" data-remove-plan="${esc(item.key)}">✕</button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Көрінетін әрекеттер панеліндегі жұлдызшаларды жаңарту
    document.querySelectorAll(".fav-btn[data-fav]").forEach(btn => {
      const key = btn.getAttribute("data-fav");
      const on = isFav(key);
      btn.classList.toggle("is-on", on);
      btn.textContent = on ? "★" : "☆";
    });
  }

  // Делегатталған оқиғалар (динамикалық батырмаларға да жұмыс істейді)
  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      toggleFav(favBtn.getAttribute("data-fav"));
      renderTripUI();
      return;
    }

    const addBtn = e.target.closest("[data-add-plan]");
    if (addBtn) {
      addToPlan(addBtn.getAttribute("data-add-plan"));
      renderTripUI();
      return;
    }

    const rmBtn = e.target.closest("[data-remove-plan]");
    if (rmBtn) {
      removeFromPlan(rmBtn.getAttribute("data-remove-plan"));
      renderTripUI();
      return;
    }

    const mvBtn = e.target.closest("[data-move]");
    if (mvBtn) {
      movePlan(mvBtn.getAttribute("data-move"), Number(mvBtn.getAttribute("data-dir")));
      renderTripUI();
      return;
    }
  });

  document.addEventListener("input", (e) => {
    const note = e.target.closest("[data-note]");
    if (!note) return;
    updateNote(note.getAttribute("data-note"), note.value);
  });

  // HTML-дегі тазалау батырмалары
  window.addEventListener("DOMContentLoaded", () => {
    $("tripClearFav")?.addEventListener("click", () => {
      setFavorites([]);
      renderTripUI();
    });

    $("tripClearPlan")?.addEventListener("click", () => {
      setPlan([]);
      renderTripUI();
    });

    renderTripUI();
  });

  // expose
  window.renderTripUI = renderTripUI;
})();

/* ==========================================================
   SHARE "MY TRIP PLAN" VIA URL (works even on file:///)
   - Button: id="tripShareLink"
   - Storage: tripPlan_v1
   ========================================================== */
(function setupTripShare() {
  const TRIP_KEY = "tripPlan_v1";

  function safeTrip() {
    try {
      return JSON.parse(localStorage.getItem(TRIP_KEY) || '{"favorites":[],"plan":[]}');
    } catch {
      return { favorites: [], plan: [] };
    }
  }

  function encodePayload(payload) {
    const json = JSON.stringify(payload);
    // JSON -> base64url
    return btoa(unescape(encodeURIComponent(json)))
      .replaceAll("+", "-")
      .replaceAll("/", "_")
      .replaceAll("=", "");
  }

  function decodeToken(token) {
    try {
      let b64 = token.replaceAll("-", "+").replaceAll("_", "/");
      while (b64.length % 4 !== 0) b64 += "=";
      const json = decodeURIComponent(escape(atob(b64)));
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  // ---- Сілтемені көшіру (сенімді: prompt fallback; file:// кезінде де жұмыс істейді) ----
  function copyLink() {
    const trip = safeTrip();

    const payload = {
      v: 1,
      fav: Array.isArray(trip.favorites) ? trip.favorites : [],
      plan: Array.isArray(trip.plan)
        ? trip.plan.map(x => ({ key: x.key, note: String(x.note || "").slice(0, 400) }))
        : []
    };

    const token = encodePayload(payload);
    const url = new URL(window.location.href);
    url.searchParams.set("trip", token);

    const text = url.toString();

    // Clipboard API is often blocked on file://. Try clipboard only when secure, otherwise prompt.
    const canClipboard = !!(navigator.clipboard && window.isSecureContext);
    if (canClipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Сілтеме көшірілді ✅");
      }).catch(() => {
        window.prompt("Сілтемені көшіріңіз (Ctrl+C, Enter):", text);
      });
    } else {
      window.prompt("Сілтемені көшіріңіз (Ctrl+C, Enter):", text);
    }
  }

  // Bind click
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("tripShareLink");
    if (btn) btn.addEventListener("click", copyLink);
  });

  // ---- URL арқылы импорт (бір ашқанда бір рет) ----
  (function importTripFromUrlOnce() {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("trip");
    if (!token) return;

    const data = decodeToken(token);
    if (!data || data.v !== 1) return;

    const current = safeTrip();
    const favSet = new Set([...(current.favorites || []), ...(data.fav || [])]);

    const planMap = new Map();
    (current.plan || []).forEach(x => x?.key && planMap.set(x.key, x));
    (data.plan || []).forEach(x => {
      if (!x?.key) return;
      if (!planMap.has(x.key)) planMap.set(x.key, { key: x.key, note: String(x.note || "").slice(0, 400), addedAt: Date.now() });
    });

    localStorage.setItem(TRIP_KEY, JSON.stringify({
      favorites: Array.from(favSet),
      plan: Array.from(planMap.values())
    }));

    // Өшіру query param from the address (so it won't re-import on refresh)
    url.searchParams.delete("trip");
    history.replaceState({}, "", url.toString());

    if (typeof window.renderTripUI === "function") {
      try { window.renderTripUI(); } catch {}
    }

    alert("Саяхат жоспары импортталды ✅");
  })();
})();
