const quotes = [{
    quote: `"Jezus zaraz przemówił do nich: «Odwagi! Ja jestem, nie bójcie się!»"`,
    writer: `– (Mt 14, 27)`
}, {
    quote: `"Lecz na widok silnego wiatru uląkł się i gdy zaczął tonąć, krzyknął: «Panie, ratuj mnie!» Jezus natychmiast wyciągnął rękę i chwycił go, mówiąc: «Czemu zwątpiłeś, małej wiary?»"`,
    writer: `– (Mt 14, 30-31)`
}, {
    quote: `"Zróbcie wszystko, cokolwiek wam powie"`,
    writer: `– (J 2,5).`
}, {
    quote: `"Powierz Panu swoją drogę i zaufaj Mu: On sam będzie działał"`,
    writer: `– (Ps 37, 5)`
}, {
    quote: `"Nadeszła [tam] kobieta z Samarii, aby zaczerpnąć wody. Jezus rzekł do niej: «Daj Mi pić!»"`,
    writer: `– (J 4,7)`
}, {
    quote: `"A dla was, czczących moje imię, wzejdzie słońce sprawiedliwości i uzdrowienie w jego skrzydłach. Wyjdziecie [swobodnie] i będziecie podskakiwać jak tuczone cielęta"`,
    writer: `– (Ml 3, 20)`
}, {
    quote: `"Niewiasto, Oto Syn Twój (…), Oto Matka Twoja"`,
    writer: `– (J 19, 26-27)`
}, {
    quote: `"(…) bo człowiek patrzy na to, co widoczne dla oczu, Pan natomiast patrzy na serce"`,
    writer: `– (1 Sm 16, 7)`
}, {
    quote: `"Czyż ci nie rozkazałem: Bądź mężny i mocny? Nie bój się i nie lękaj, ponieważ z tobą jest Pan, Bóg twój, wszędzie, gdziekolwiek pójdziesz"`,
    writer: `- (Joz 1, 9)`
}, {
    quote: `"Nie porzucaj starego przyjaciela. Nowy z nim nie jest na równi. Przyjaciel nowy jest jak nowe wino, gdy się zestarzeje, z przyjemnością je wypijesz"`,
    writer: `- (Syr 9, 10)`
}, {
    quote:`"Wierny przyjaciel jest lekarstwem życia"`,
    writer: `- (Syr 6, 17)`
}, {
    quote:`"Połóż mnie jak pieczęć na twoim sercu, jak pieczęć na twoim ramieniu, bo jak śmierć potężna jest miłość (…), żar jej to żar ognia, uderzenie boskiego gromu"`,
    writer:`- (Pnp 8, 6)`
}, {
    quote:`"Wszystkie troski wasze przerzućcie na Niego, gdyż Jemu zależy na was"`,
    writer:`- (1 P 5, 7)`
}, {
    quote:`"Miłość nie zna lęku. Doskonała miłość usuwa lęk"`,
    writer:`- (1 Jn 4, 18)`
}, {
    quote:`"Dla mnie bowiem żyć - to Chrystus, a umrzeć - to zysk"`,
    writer:`- (Flp 1, 21)`
}, {
    quote:`"Będziesz prześliczną koroną w rękach Pana, królewskim diademem w dłoni twego Boga"`,
    writer:`- (Iz 62,3)`
}, {
    quote:`"Nie lękaj się ich, bo jestem z tobą, by cię chronić - wyrocznia Pana"`,
    writer:`- (Jr 1, 8)`
}, {
    quote:`"«Nagi wyszedłem z łona matki i nagi tam wrócę. Dał Pan i zabrał Pan. Niech będzie imię Pańskie błogosławione!»"`,
    writer:`- (Hi 1, 20)`
}, {
    quote:`"Pan jest moim pasterzem, nie brak mi niczego. &lt;…&gt; Orzeźwia moją duszę. Wiedzie mnie po właściwych ścieżkach przez wzgląd na swoje imię. Chociażbym chodził ciemną doliną, zła się nie ulęknę, bo Ty jesteś ze mną"`,
    writer:`- (Ps 23, 1.3-4)`
}, {
    quote:`"Tak, dobroć i łaska pójdą w ślad za mną przez wszystkie dni mego życia i zamieszkam w domu Pańskim po najdłuższe czasy"`,
    writer:`- (Ps 23,6)`
}, {
    quote:`"Tobie mnie poruczono przed urodzeniem, Ty jesteś moim Bogiem od łona mojej matki"`,
    writer:`- (Ps 22,11)`
}, {
    quote:`"Daj mi poznać drogi Twoje, Panie, i naucz mnie Twoich ścieżek! Prowadź mnie według Twej prawdy i pouczaj, bo Ty jesteś Bóg, mój Zbawca, i w Tobie mam zawsze nadzieję"`,
    writer:`- (Ps 25, 4-5)`
}, {
    quote:`"Panie, przenikasz i znasz mnie, Ty wiesz, kiedy siadam i wstaję. Z daleka przenikasz moje zamysły"`,
    writer:`- (Ps 139, 1-2)`
}, {
    quote:`"Nie lękaj się, bo Ja jestem z tobą; nie trwóż się, bom Ja twoim Bogiem. Umacniam cię, jeszcze i wspomagam, podtrzymuję cię moją prawicą sprawiedliwą"`,
    writer:`- (Iz 41,10)`
}, {
    quote:`"Nie lękaj się, bo cię wykupiłem, wezwałem cię po imieniu; tyś moim! Gdy pójdziesz przez wody, Ja będę z tobą i gdy przez rzeki, nie zatopią ciebie. Gdy pójdziesz przez ogień, nie spalisz się i nie strawi cię płomień. Albowiem Ja jestem Pan, twój Bóg, Święty Izraela, twój Zbawca"`,
    writer:`- (Iz 43, 1-3)`
}, {
    quote:`"Ponieważ drogi jesteś w moich oczach, nabrałeś wartości i Ja cię miłuję, przeto daję ludzi za ciebie i narody za życie twoje. Nie lękaj się, bo jestem z tobą"`,
    writer:`- (Iz 43, 4-5)`
}, {
    quote:`"Nie wspominajcie wydarzeń minionych, nie roztrząsajcie w myśli dawnych rzeczy. Oto Ja dokonuję rzeczy nowej"`,
    writer:`- (Iz 43, 18-19)`
}, {
    quote:`"Bo mam przed oczyma Twoją łaskawość i postępuję w Twej prawdzie"`,
    writer:`- (Ps 26, 3)`
}, {
    quote:`"Okryje cię swymi piórami i schronisz się pod Jego skrzydła: Jego wierność to puklerz i tarcza"`,
    writer:`- (Ps 91, 4)`
}, {
    quote:`"Wy zatem, bracia, powołani zostaliście do wolności. Tylko nie bierzcie tej wolności jako zachęty do hołdowania ciału, wręcz przeciwnie, miłością ożywieni służcie sobie wzajemnie!"`,
    writer:`- (Ga 5, 13)`
},{
    quote:`"Czyż może niewiasta zapomnieć o swym niemowlęciu, ta która kocha syna swego łona? A nawet gdyby ona zapomniała, Ja nie zapomnę o tobie. Oto wyryłem cię na obu dłoniach"`,
    writer:`- (Iz 49, 15-16)`
}]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})
