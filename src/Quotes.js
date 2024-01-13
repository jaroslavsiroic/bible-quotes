const quotes = [
  {
    quote: `"Jezus zaraz przemówił do nich: «Odwagi! Ja jestem, nie bójcie się!»"`,
    writer: `– (Mt 14, 27)`,
  },
  {
    quote: `"Lecz na widok silnego wiatru uląkł się i gdy zaczął tonąć, krzyknął: «Panie, ratuj mnie!» Jezus natychmiast wyciągnął rękę i chwycił go, mówiąc: «Czemu zwątpiłeś, małej wiary?»"`,
    writer: `– (Mt 14, 30-31)`,
  },
  {
    quote: `"Zróbcie wszystko, cokolwiek wam powie"`,
    writer: `– (J 2,5).`,
  },
  {
    quote: `"Powierz Panu swoją drogę i zaufaj Mu: On sam będzie działał"`,
    writer: `– (Ps 37, 5)`,
  },
  {
    quote: `"Nadeszła [tam] kobieta z Samarii, aby zaczerpnąć wody. Jezus rzekł do niej: «Daj Mi pić!»"`,
    writer: `– (J 4,7)`,
  },
  {
    quote: `"A dla was, czczących moje imię, wzejdzie słońce sprawiedliwości i uzdrowienie w jego skrzydłach. Wyjdziecie [swobodnie] i będziecie podskakiwać jak tuczone cielęta"`,
    writer: `– (Ml 3, 20)`,
  },
  {
    quote: `"Niewiasto, Oto Syn Twój (…), Oto Matka Twoja"`,
    writer: `– (J 19, 26-27)`,
  },
  {
    quote: `"(…) bo człowiek patrzy na to, co widoczne dla oczu, Pan natomiast patrzy na serce"`,
    writer: `– (1 Sm 16, 7)`,
  },
  {
    quote: `"Czyż ci nie rozkazałem: Bądź mężny i mocny? Nie bój się i nie lękaj, ponieważ z tobą jest Pan, Bóg twój, wszędzie, gdziekolwiek pójdziesz"`,
    writer: `- (Joz 1, 9)`,
  },
  {
    quote: `"Nie porzucaj starego przyjaciela. Nowy z nim nie jest na równi. Przyjaciel nowy jest jak nowe wino, gdy się zestarzeje, z przyjemnością je wypijesz"`,
    writer: `- (Syr 9, 10)`,
  },
  {
    quote: `"Wierny przyjaciel jest lekarstwem życia"`,
    writer: `- (Syr 6, 17)`,
  },
  {
    quote: `"Połóż mnie jak pieczęć na twoim sercu, jak pieczęć na twoim ramieniu, bo jak śmierć potężna jest miłość (…), żar jej to żar ognia, uderzenie boskiego gromu"`,
    writer: `- (Pnp 8, 6)`,
  },
  {
    quote: `"Wszystkie troski wasze przerzućcie na Niego, gdyż Jemu zależy na was"`,
    writer: `- (1 P 5, 7)`,
  },
  {
    quote: `"Miłość nie zna lęku. Doskonała miłość usuwa lęk"`,
    writer: `- (1 Jn 4, 18)`,
  },
  {
    quote: `"Dla mnie bowiem żyć - to Chrystus, a umrzeć - to zysk"`,
    writer: `- (Flp 1, 21)`,
  },
  {
    quote: `"Będziesz prześliczną koroną w rękach Pana, królewskim diademem w dłoni twego Boga"`,
    writer: `- (Iz 62,3)`,
  },
  {
    quote: `"Nie lękaj się ich, bo jestem z tobą, by cię chronić - wyrocznia Pana"`,
    writer: `- (Jr 1, 8)`,
  },
  {
    quote: `"«Nagi wyszedłem z łona matki i nagi tam wrócę. Dał Pan i zabrał Pan. Niech będzie imię Pańskie błogosławione!»"`,
    writer: `- (Hi 1, 20)`,
  },
  {
    quote: `"Pan jest moim pasterzem, nie brak mi niczego. &lt;…&gt; Orzeźwia moją duszę. Wiedzie mnie po właściwych ścieżkach przez wzgląd na swoje imię. Chociażbym chodził ciemną doliną, zła się nie ulęknę, bo Ty jesteś ze mną"`,
    writer: `- (Ps 23, 1.3-4)`,
  },
  {
    quote: `"Tak, dobroć i łaska pójdą w ślad za mną przez wszystkie dni mego życia i zamieszkam w domu Pańskim po najdłuższe czasy"`,
    writer: `- (Ps 23,6)`,
  },
  {
    quote: `"Tobie mnie poruczono przed urodzeniem, Ty jesteś moim Bogiem od łona mojej matki"`,
    writer: `- (Ps 22,11)`,
  },
  {
    quote: `"Daj mi poznać drogi Twoje, Panie, i naucz mnie Twoich ścieżek! Prowadź mnie według Twej prawdy i pouczaj, bo Ty jesteś Bóg, mój Zbawca, i w Tobie mam zawsze nadzieję"`,
    writer: `- (Ps 25, 4-5)`,
  },
  {
    quote: `"Panie, przenikasz i znasz mnie, Ty wiesz, kiedy siadam i wstaję. Z daleka przenikasz moje zamysły"`,
    writer: `- (Ps 139, 1-2)`,
  },
  {
    quote: `"Nie lękaj się, bo Ja jestem z tobą; nie trwóż się, bom Ja twoim Bogiem. Umacniam cię, jeszcze i wspomagam, podtrzymuję cię moją prawicą sprawiedliwą"`,
    writer: `- (Iz 41,10)`,
  },
  {
    quote: `"Nie lękaj się, bo cię wykupiłem, wezwałem cię po imieniu; tyś moim! Gdy pójdziesz przez wody, Ja będę z tobą i gdy przez rzeki, nie zatopią ciebie. Gdy pójdziesz przez ogień, nie spalisz się i nie strawi cię płomień. Albowiem Ja jestem Pan, twój Bóg, Święty Izraela, twój Zbawca"`,
    writer: `- (Iz 43, 1-3)`,
  },
  {
    quote: `"Ponieważ drogi jesteś w moich oczach, nabrałeś wartości i Ja cię miłuję, przeto daję ludzi za ciebie i narody za życie twoje. Nie lękaj się, bo jestem z tobą"`,
    writer: `- (Iz 43, 4-5)`,
  },
  {
    quote: `"Nie wspominajcie wydarzeń minionych, nie roztrząsajcie w myśli dawnych rzeczy. Oto Ja dokonuję rzeczy nowej"`,
    writer: `- (Iz 43, 18-19)`,
  },
  {
    quote: `"Bo mam przed oczyma Twoją łaskawość i postępuję w Twej prawdzie"`,
    writer: `- (Ps 26, 3)`,
  },
  {
    quote: `"Okryje cię swymi piórami i schronisz się pod Jego skrzydła: Jego wierność to puklerz i tarcza"`,
    writer: `- (Ps 91, 4)`,
  },
  {
    quote: `"Wy zatem, bracia, powołani zostaliście do wolności. Tylko nie bierzcie tej wolności jako zachęty do hołdowania ciału, wręcz przeciwnie, miłością ożywieni służcie sobie wzajemnie!"`,
    writer: `- (Ga 5, 13)`,
  },
  {
    quote: `"Czyż może niewiasta zapomnieć o swym niemowlęciu, ta która kocha syna swego łona? A nawet gdyby ona zapomniała, Ja nie zapomnę o tobie. Oto wyryłem cię na obu dłoniach"`,
    writer: `- (Iz 49, 15-16)`,
  },
  {
    quote: `"Miłujmy nie słowem ani językiem, lecz czynem i prawdą."`,
    writer: `- (1 J 3,18)`,
  },
  {
    quote: `"Nowe przykazanie daję wam, abyście się wzajemnie miłowali, jak Ja was umiłowałem; abyście się i wy wzajemnie miłowali. Po tym wszyscy poznają, żeście uczniami moimi, jeśli miłość wzajemną mieć będziecie."`,
    writer: `- (J 13,34–35)`,
  },
  {
    quote: `"Miłujmy się nawzajem, gdyż miłość jest z Boga, i każdy, kto miłuje, z Boga się narodził i zna Boga. Kto nie miłuje, nie zna Boga, gdyż Bóg jest miłością."`,
    writer: `- (1 J 4,7-8)`,
  },
  {
    quote: `"Spadł deszcz, wezbrały potoki, zerwały się wichry i uderzyły w ten dom. On jednak nie runął, bo na skale był utwierdzony."`,
    writer: `- (Mt 7, 25)`,
  },
  {
    quote: `"Lecz ci, co zaufali Panu, odzyskują siły, otrzymują skrzydła jak orły: biegną bez zmęczenia, bez znużenia idą."`,
    writer: `- (Iz 40, 31)`,
  },
  {
    quote: `"Więcej szczęścia jest w dawaniu niż w braniu."`,
    writer: `- (Dz 20, 35)`,
  },
  {
    quote: `"Nie sądźcie, a nie będziecie sądzeni; nie potępiajcie, a nie będziecie potępieni; odpuszczajcie, a będzie wam odpuszczone. Dawajcie, a będzie wam dane."`,
    writer: `- (Łk 6,37-38)`,
  },
  {
    quote: `"Czemu to widzisz drzazgę w oku swego brata, a nie dostrzegasz belki we własnym oku?"`,
    writer: `- (Łk 6,41)`,
  },
  {
    quote: `"Jeśli łaknie twój nieprzyjaciel, nakarm go chlebem, a jeśli pragnie, napój go wodą."`,
    writer: `- (Prz 25, 21)`,
  },
  {
    quote: `"Pan światłem i zbawieniem moim: kogóż mam się lękać? Pan obroną mojego życia: przed kim mam się trwożyć? "`,
    writer: `- (Ps 27,1)`,
  },
  {
    quote: `"Chociażbym chodził ciemną doliną, zła się nie ulęknę, bo Ty jesteś ze mną."`,
    writer: `- (Ps 23, 4)`,
  },
  {
    quote: `"Poznacie prawdę, a prawda was wyzwoli."`,
    writer: `- (J 8,32)`,
  },
  {
    quote: `"Jako ostatni wróg, zostanie pokonana śmierć."`,
    writer: `- (1 Kor 15,26)`,
  },
  {
    quote: `"Pokój zostawiam wam, pokój mój daję wam. Nie tak jak daje świat, Ja wam daję. Niech się nie trwoży serce wasze ani się lęka! "`,
    writer: `- (J 14, 27)`,
  },
  {
    quote: `"Wszystko, o co prosicie w modlitwie, stanie się wam, tylko wierzcie, że otrzymacie. "`,
    writer: `- (Mk 11,24)`,
  },
  {
    quote: `"Błogosławieni, którzy się smucą, albowiem oni będą pocieszeni."`,
    writer: `- (Mt 5,4)`,
  },
  {
    quote: `"Wierny przyjaciel jest lekarstwem życia."`,
    writer: `- (Syr 6,17)`,
  },
  {
    quote: `"Nie porzucaj starego przyjaciela. Nowy z nim nie jest na równi. Przyjaciel nowy jest jak nowe wino, gdy się zestarzeje, z przyjemnością je wypijesz."`,
    writer: `- (Syr 9,10)`,
  },
  {
    quote: `"Pan jest moim pasterzem, nie brak mi niczego. Pozwala mi leżeć na zielonych pastwiskach. Prowadzi mnie nad wody, gdzie mogę odpocząć: orzeźwia moją duszę. Wiedzie mnie po właściwych ścieżkach przez wzgląd na swoje imię."`,
    writer: `- (Ps 23, 1-3)`,
  },
  {
    quote: `"Czyż ci nie rozkazałem: Bądź mężny i mocny? Nie bój się i nie lękaj, ponieważ z tobą jest Pan, Bóg twój, wszędzie, gdziekolwiek pójdziesz. "`,
    writer: `- (Joz 1,9)`,
  },
  {
    quote: `"O nic się nie martwcie, ale w każdej sprawie wasze prośby przedstawiajcie Bogu w modlitwie i błaganiu z dziękczynieniem."`,
    writer: `- (Flp 4,6)`,
  },
  {
    quote: `"Powiodę ślepych drogą, której nie znali, poprowadzę ich ścieżkami, o których nie wiedzieli. Ciemność zamienię w światłość przed nimi, a miejsca nierówne – w równinę."`,
    writer: `- (Iz 42,16)`,
  },
  {
    quote: `"Zaprawdę, powiadam wam: Ta uboga wdowa wrzuciła najwięcej ze wszystkich, którzy kładli do skarbony. Wszyscy bowiem wrzucali z tego, co im zbywało; ona zaś ze swego niedostatku wrzuciła wszystko, co miała."`,
    writer: `- (Mk 12,43-44)`,
  },
  {
    quote: `"Zaprawdę, powiadam wam: Wszystko, co uczyniliście jednemu z tych braci moich najmniejszych, Mnieście uczynili. "`,
    writer: `- (Mt 25,40)`,
  },
  {
    quote: `"Jezus spojrzał na nich i rzekł: «U ludzi to niemożliwe, lecz u Boga wszystko jest możliwe»."`,
    writer: `- (Mt 19,26)`,
  },
  {
    quote: `"To wam powiedziałem, abyście pokój we Mnie mieli. Na świecie doznacie ucisku, ale miejcie odwagę: Jam zwyciężył świat. "`,
    writer: `- (J 16,33)`,
  },
  {
    quote: `"Więcej wart biedak, co żyje uczciwie, niż bogacz o drogach krętych."`,
    writer: `- (Prz 28,6)`,
  },
  {
    quote: `"Kto uszy zatyka na krzyk ubogiego, sam będzie wołał bez skutku."`,
    writer: `- (Prz 21,13)`,
  },
  {
    quote: `"Nie daj się zwyciężyć złu, ale zło dobrem zwyciężaj!"`,
    writer: `- (Rz 12, 21)`,
  },
  {
    quote: `"Lepsza kromka suchego chleba i przy tym spokój, niż dom pełen mięsa, a przy tym kłótnia."`,
    writer: `- (Prz 17,1)`,
  },
  {
    quote: `"Wszystko mi wolno, ale nie wszystko przynosi korzyść. Wszystko mi wolno, ale ja niczemu nie oddam się w niewolę. "`,
    writer: `- (1 Kor 6,12)`,
  },
  {
    quote: `"Ciężki jest kamień i sporo waży piasek, lecz rozdrażnienie z powodu głupca jest cięższe od obu."`,
    writer: `- (Prz 27,3)`,
  },
  {
    quote: `"Nie odpowiadaj głupiemu według jego głupoty, abyś i ty nie upodobnił się do niego."`,
    writer: `- (Prz 26,4)`,
  },
  {
    quote: `"Jeżeli Bóg z nami, któż przeciwko nam?"`,
    writer: `- (Rz 8,31)`,
  },
  {
    quote: `"Kto w drobnej rzeczy jest wierny, ten i w wielkiej będzie wierny; a kto w drobnej rzeczy jest nieuczciwy, ten i w wielkiej nieuczciwy będzie."`,
    writer: `- (Łk 16,10)`,
  },
  {
    quote: `"Łatwiej jest wielbłądowi przejść przez ucho igielne niż bogatemu wejść do królestwa niebieskiego."`,
    writer: `- (Mt 19,24)`,
  },
  {
    quote: `"Nie samym chlebem żyje człowiek, lecz każdym słowem, które pochodzi z ust Bożych."`,
    writer: `- (Mt 4,4)`,
  },
  {
    quote: `"Przyjdźcie do Mnie wszyscy, którzy utrudzeni i obciążeni jesteście, a Ja was pokrzepię. "`,
    writer: `- (Mt 11,28)`,
  },
  {
    quote: `"(…) bo z owocu poznaje się drzewo."`,
    writer: `- (Mt 12,33)`,
  },
  {
    quote: `"Z prochu powstałeś i w proch się obrócisz. "`,
    writer: `- (Rdz 3,19)`,
  },
  {
    quote: `"Bo gdzie jest twój skarb, tam będzie i serce twoje."`,
    writer: `- (Mt 6,21)`,
  },
  {
    quote: `"Oni wiatr sieją, zbierać będą burzę."`,
    writer: `- (Oz 8,7)`,
  },
  {
    quote: `"Kto ma uszy do słuchania, niechaj słucha!"`,
    writer: `- (Mk 4,9)`,
  },
  {
    quote: `"Wszystko mogę w Tym, który mnie umacnia."`,
    writer: `- (Flp 4,13)`,
  },
  {
    quote: `"To bowiem, co widzialne, przemija, to zaś, co niewidzialne, trwa wiecznie."`,
    writer: `- (2 Kor 4,18)`,
  },
  {
    quote: `"Pan moją mocą i tarczą! Moje serce Jemu zaufało."`,
    writer: `- (Ps 28,7)`,
  },
  {
    quote: `"Oto dzień, który Pan uczynił: radujmy się zeń i weselmy!"`,
    writer: `- (Ps 118,24)`,
  },
  {
    quote: `"Wszystkie troski wasze przerzućcie na Niego, gdyż Jemu zależy na was. "`,
    writer: `- (1 P 5,7)`,
  },
  {
    quote: `"Przyjaciel kocha w każdym czasie, a bratem się staje w nieszczęściu."`,
    writer: `- (Prz 17,17)`,
  },
  {
    quote: `"Nikt nie ma większej miłości od tej, gdy ktoś życie oddaje za przyjaciół swoich."`,
    writer: `- (J 15,13)`,
  },
  {
    quote: `"Nie gardź swoim i ojca przyjacielem, a w dniu klęski nie chodź do brata, bo lepszy sąsiad bliski niż brat daleki. "`,
    writer: `- (Prz 27,10)`,
  },
  {
    quote: `"Bogactwo zjednywa wielu przyjaciół, lecz ubogiego przyjaciel opuszcza. "`,
    writer: `- (Prz 19, 4)`,
  },
  {
    quote: `"I inną jeszcze widziałem marność pod słońcem: oto jest ktoś sam jeden, a nie ma drugiego, i syna nawet ni brata nie ma żadnego."`,
    writer: `- (Koh 4, 8-7)`,
  },
  {
    quote: `"Gdybym mówił językami ludzi i aniołów, a miłości bym nie miał, stałbym się jak miedź brzęcząca albo cymbał brzmiący."`,
    writer: `- (1 Kor 13,1)`,
  },
  {
    quote: `"Mężowie, miłujcie żony."`,
    writer: `- (Ef 5, 25)`,
  },
  {
    quote: `"Wody wielkie nie zdołają ugasić miłości, nie zatopią jej rzeki."`,
    writer: `- (Pnp 8, 7)
  `,
  },
  {
    quote: `"Tak bowiem Bóg umiłował świat, że Syna swego Jednorodzonego dał, aby każdy, kto w Niego wierzy, nie zginął, ale miał życie wieczne. "`,
    writer: `- (J 3,16)`,
  },
  {
    quote: `"Tak więc trwają wiara, nadzieja, miłość – te trzy: z nich zaś największa jest miłość."`,
    writer: `- (1 Kor 13, 13)`,
  },
  {
    quote: `"Oblicze odbija się w wodzie, a w sercu odbija się człowiek."`,
    writer: `- (Prz 27, 19)`,
  },
  {
    quote: `"Lepsza jest jedna garść pokoju niż dwie garści bogactw i pogoń za wiatrem."`,
    writer: `- (Koh 4, 6)`,
  },
  {
    quote: `"Nie troszczcie się więc zbytnio o jutro, bo jutrzejszy dzień sam o siebie troszczyć się będzie."`,
    writer: `- (Mt 6, 34)`,
  },
  {
    quote: `"Schowaj miecz swój do pochwy, bo wszyscy, którzy za miecz chwytają, od miecza giną."`,
    writer: `- (Mt 26,52)`,
  },
  {
    quote: `"Mojżesz tak powiedział: Czcij ojca swego i matkę swoją oraz: Kto złorzeczy ojcu lub matce, niech śmiercią zginie. "`,
    writer: `- (Mk 7,10)`,
  },
  {
    quote: `"Proście, a będzie wam dane; szukajcie, a znajdziecie; kołaczcie, a otworzą wam."`,
    writer: `- (Mt 7,7)`,
  },
  {
    quote: `"Nie lękaj się, bo ja jestem z tobą. Nie trwóż się, bom ja twoim Bogiem. Umacniam cię, jeszcze i wspomagam, podtrzymuję cię moją prawicą sprawiedliwą. "`,
    writer: `- (Iz 41,10)`,
  },
  {
    quote: `"Marność nad marnościami, powiada Kohelet, marność nad marnościami – wszystko marność."`,
    writer: `- (Koh 1,2)`,
  },
  {
    quote: `"Poznacie ich po ich owocach."`,
    writer: `- (Mt 7,16)`,
  },
  {
    quote: `"Wy jesteście solą dla ziemi. Lecz jeśli sól utraci swój smak, czymże ją posolić?"`,
    writer: `- (Mt 5,13-16)`,
  },
  {
    quote: `"Chleba naszego powszedniego daj nam dzisiaj."`,
    writer: `- (Mt 6,11)`,
  },
  {
    quote: `"Ja jestem krzewem winnym, wy – latoroślami. Kto trwa we Mnie, a Ja w nim, ten przynosi owoc obfity, ponieważ beze Mnie nic nie możecie uczynić."`,
    writer: `- (J 15,5)`,
  },
  {
    quote: `"Jam jest chleb życia. Kto do Mnie przychodzi, nie będzie łaknął; a kto we Mnie wierzy, nigdy pragnąć nie będzie."`,
    writer: `- (J 6,35)`,
  },
  {
    quote: `"Pan jest moją obroną, wyprowadza mnie na miejsce przestronne; ocala, bo mnie miłuje."`,
    writer: `- (Ps 18,19-20)`,
  },
  {
    quote: `"Bóg jest miłością: kto trwa w miłości, trwa w Bogu, a Bóg trwa w nim."`,
    writer: `- (1 J 4,16)`,
  },
  {
    quote: `"Miłość cierpliwa jest, łaskawa jest. Miłość nie zazdrości, nie szuka poklasku, nie unosi się pychą; nie dopuszcza się bezwstydu, nie szuka swego, nie unosi się gniewem, nie pamięta złego; nie cieszy się z niesprawiedliwości, lecz współweseli się z prawdą. Wszystko znosi, wszystkiemu wierzy, we wszystkim pokłada nadzieję, wszystko przetrzyma."`,
    writer: `- (1 Kor 13, 4-7)`,
  },
  {
    quote: `"Jak Mnie umiłował Ojciec, tak i Ja was umiłowałem. Wytrwajcie w miłości mojej! Jeśli będziecie zachowywać moje przykazania, będziecie trwać w miłości mojej, tak jak Ja zachowałem przykazania Ojca mego i trwam w Jego miłości."`,
    writer: `- (J 15,9-10)`,
  },
];

export default quotes;
