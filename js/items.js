const brownItems = [
    {
        id: 0,
        name: 'buty',
        fileName: 'b1.bmp',
        stats: '1CAP',
        describe: 'Użyj przedmiotu i porusz się o jedno pole, a następnie odrzuć bohy. (ruch wykonany w ten sposób nie wlicza się do ograncizeń)'
    },
    {
        id: 1,
        name: 'buty',
        fileName: 'b1.bmp',
        stats: '1CAP',
        describe: 'Użyj przedmiotu i porusz się o jedno pole, a następnie odrzuć bohy. (ruch wykonany w ten sposób nie wlicza się do ograncizeń)'
    },
    {
        id: 2,
        name: 'jednoręczna',
        fileName: 'b6.bmp',
        stats: '1A 2CAP',
        describe: ''
    },
    {
        id: 3,
        name: 'jednoręczna',
        fileName: 'b6.bmp',
        stats: '1A 2CAP',
        describe: ''
    },
    {
        id: 4,
        name: 'jednoręczna',
        fileName: 'b6.bmp',
        stats: '1A 2CAP',
        describe: ''
    },
    {
        id: 5,
        name: 'flacha',
        fileName: 'b12.bmp',
        stats: '',
        describe: 'Użyj przedmiotu i wylecz 1 hp, a następnie odrzuć przedmiot. (1 akcja)'
    },
    {
        id: 6,
        name: 'flacha',
        fileName: 'b12.bmp',
        stats: '',
        describe: 'Użyj przedmiotu i wylecz 1 hp, a następnie odrzuć przedmiot. (1 akcja)'
    },
    {
        id: 7,
        name: 'flacha',
        fileName: 'b12.bmp',
        stats: '',
        describe: 'Użyj przedmiotu i wylecz 1 hp, a następnie odrzuć przedmiot. (1 akcja)'
    },
    {
        id: 8,
        name: 'płaszcz',
        fileName: 'b2.bmp',
        stats: '1ARM 2CAP',
        describe: ''
    },
    {
        id: 9,
        name: 'płaszcz',
        fileName: 'b2.bmp',
        stats: '1ARM 2CAP',
        describe: ''
    },
    {
        id: 10,
        name: 'hełm',
        fileName: 'b11.bmp',
        stats: '1ARM 1CAP',
        describe: ''
    },
    {
        id: 11,
        name: 'hełm',
        fileName: 'b11.bmp',
        stats: '1ARM 1CAP',
        describe: ''
    },
    {
        id: 12,
        name: 'staff',
        fileName: 'b9.bmp',
        stats: '-2A 1CAP',
        describe: 'Dostajesz 2 jokery, które kładziesz na tej karcie, jak je wykorzystasz to zniszcz ten przedmiot  Staff jest dwuręczny'
    },
    {
        id: 13,
        name: 'staff',
        fileName: 'b9.bmp',
        stats: '-2A 1CAP',
        describe: 'Dostajesz 2 jokery, które kładziesz na tej karcie, jak je wykorzystasz to zniszcz ten przedmiot  Staff jest dwuręczny'
    },
    {
        id: 14,
        name: 'sztylet',
        fileName: 'b8.bmp',
        stats: '1A 1CAP',
        describe: 'P: nie możesz kontrować'
    },
    {
        id: 15,
        name: 'sztylet',
        fileName: 'b8.bmp',
        stats: '1A 1CAP',
        describe: 'P: nie możesz kontrować'
    },
    {
        id: 16,
        name: 'sztylet',
        fileName: 'b8.bmp',
        stats: '1A 1CAP',
        describe: 'P: nie możesz kontrować'
    },
    {
        id: 17,
        name: 'dwuręczna',
        fileName: 'b7.bmp',
        stats: '2A 3CAP',
        describe: 'P: nie możesz kontrować'
    },
    {
        id: 18,
        name: 'dwuręczna',
        fileName: 'b7.bmp',
        stats: '2A 3CAP',
        describe: 'P: nie możesz kontrować'
    },
    {
        id: 19,
        name: 'łuk',
        fileName: 'b10.bmp',
        stats: '3CAP',
        describe: 'Wybierz postać i zadaj 1 dmg (1 akcja, 1 zasięg, 1 ran na turę). Łuk jest dwuręczny.'
    },
    {
        id: 20,
        name: 'łuk',
        fileName: 'b10.bmp',
        stats: '3CAP',
        describe: 'Wybierz postać i zadaj 1 dmg (1 akcja, 1 zasięg, 1 ran na turę). Łuk jest dwuręczny.'
    },
    {
        id: 21,
        name: 'tarcza',
        fileName: 'b5.bmp',
        stats: '2ARM 2CAP',
        describe: 'Wybierz postać i zadaj 1 dmg (1 akcja, 1 zasięg, 1 ran na turę). Łuk jest dwuręczny.'
    },
    {
        id: 22,
        name: 'tarcza',
        fileName: 'b5.bmp',
        stats: '2ARM 2CAP',
        describe: 'Wybierz postać i zadaj 1 dmg (1 akcja, 1 zasięg, 1 ran na turę). Łuk jest dwuręczny.'
    },
    {
        id: 23,
        name: 'zbroja',
        fileName: 'b3.bmp',
        stats: '2ARM 3CAP',
        describe: ''
    },
    {
        id: 24,
        name: 'zbroja',
        fileName: 'b3.bmp',
        stats: '2ARM 3CAP',
        describe: ''
    },
    {
        id: 25,
        name: 'puklerz',
        fileName: 'b4.bmp',
        stats: '1ARM 1CAP',
        describe: ''
    },
    {
        id: 26,
        name: 'puklerz',
        fileName: 'b4.bmp',
        stats: '1ARM 1CAP',
        describe: ''
    },
    {
        id: 27,
        name: 'amulet',
        fileName: 'medalion-bronze.bmp',
        stats: '',
        describe: 'Nasyć w kapliczce by wygrać grę.'
    }
]

const silverItems = [
    {
        id: 0,
        name: 'ukryte ostrze',
        fileName: 's12.bmp',
        stats: '1A 1CAP',
        describe: 'P: Jeśli atakujesz darmową akcją, to przeciwnik nie może wykonać kontry. Pomijasz zbroję.'
    },
    {
        id: 1,
        name: 'jednoręczna',
        fileName: 's10.bmp',
        stats: '2A 2CAP',
        describe: ''
    },
    {
        id: 2,
        name: 'kosa',
        fileName: 's11.bmp',
        stats: '1A 2CAP',
        describe: 'P: Jeśli zadajesz obrażenia z tej broni to wylecz 1hp. Kosa jest dwuręczna.'
    },
    {
        id: 3,
        name: 'pawęż',
        fileName: 's9.bmp',
        stats: '3ARM 3CAP',
        describe: 'P: Taktyczna blokada: Przy twoim darmowym ataku, obrażenia które otrzymasz są zmniejszane o 1dmg'
    },
    {
        id: 4,
        name: 'buty arcymaga',
        fileName: 's3.bmp',
        stats: '-1A 1CAP',
        describe: 'P: Jeśli masz zostać unieruchomiony zamiast tego jesteś spowolniony. / Jesli masz zostac ogłuszony to zamiast tego jesteś unieruchomiony.'
    },
    {
        id: 5,
        name: 'zbroja wyroczni',
        fileName: 's6.bmp',
        stats: '2ARM/-1A 2CAP',
        describe: 'P: Zły omen: Jeśli ktoś Cię zaatakuje to po ataku musi odrzucić, żeton umiejętności lub jokera.'
    },
    {
        id: 6,
        name: 'Graal',
        fileName: 's23.bmp',
        stats: '',
        describe: '2A: dostań 1hp i 1a'
    },
    {
        id: 7,
        name: 'staff',
        fileName: 's13.bmp',
        stats: '-2A 1CAP',
        describe: 'P: Twoje czary zadają +1dmg więcej. Dostajesz 1 jokera, którego kładziesz na tej karcie.Staff jest dwuręczny'
    },
    {
        id: 8,
        name: 'łuk łowcy',
        fileName: 's14.bmp',
        stats: '3CAP',
        describe: 'Wybierz postać i zadaj 1 dmg (2 zasięg, 1 ran na turę). Łuk jest dwuręczny.'
    },
    {
        id: 9,
        name: 'płaszcz',
        fileName: 's5.bmp',
        stats: '2ARM 2CAP',
        describe: ''
    },
    {
        id: 10,
        name: 'puklerz',
        fileName: 's8.bmp',
        stats: '2ARM 2CAP',
        describe: 'P: Kolczasta blokada: Przy darmowym ataku przeciwnika, zadajesz 1 dmg agresorowi.'
    },
    {
        id: 11,
        name: 'zbroja',
        fileName: 's4.bmp',
        stats: '4ARM 4CAP',
        describe: ''
    },
    {
        id: 12,
        name: 'hełm gladiatora',
        fileName: 's15.bmp',
        stats: '2ARM 3CAP',
        describe: 'P: Jeśli walczysz bronią jednoręczną +1dmg, jeśli dwuręczną +2dmg'
    },
    {
        id: 13,
        name: 'kapelusz arcymaga',
        fileName: 's16.bmp',
        stats: '-2A 1CAP',
        describe: '(P): Tajemna wiedza: pierwsze zaklęcie, które rzucisz w tej turze nie posiada limitów użyć.'
    },
    {
        id: 14,
        name: 'rycerskie buty',
        fileName: 's1.bmp',
        stats: '2ARM 2CAP',
        describe: '(P): Tajemna wiedza: pierwsze zaklęcie, które rzucisz w tej turze nie posiada limitów użyć.'
    },
    {
        id: 15,
        name: 'buty łowcy',
        fileName: 's2.bmp',
        stats: '2CAP',
        describe: 'P: Polowanie: Na końcu Twojej tury, jesli nie wykonałeś żadnego ruchu to porusz się o 1 pole.'
    },
    {
        id: 16,
        name: 'pas odkrywcy',
        fileName: 's7.bmp',
        stats: '',
        describe: 'P: Podróżnik: dostajesz dodatkowo 3CAP'
    },
    {
        id: 17,
        name: 'wielka księga czarów',
        fileName: 's21.bmp',
        stats: '',
        describe: 'P: Po zdjęciu tego przedmiotu, zniszcz go. Kiedy zakładasz ten przedmiot możesz położyć lub przemieścić już położony mniejszy lub większy znacznik na dowolną umeijętność na drzewku. Jeśli stracisz ten przedmiot to tracisz tę umiejętność.'
    },
    {
        id: 18,
        name: 'pierścień chaosu',
        fileName: 's20.bmp',
        stats: '',
        describe: 'A: Igranie z chaosem: rzuć kostką, a nastepnie wykonaj akcję opisaną pod danym numerem:'
            + '1. Otrzymaj 2 żetony ogłuszenia'
            + '2. Otrzymaj żeton krwawienia oraz podpalenia.'
            + '3. Zadaj 1 dmg sobie oraz dla wybranego przeciwnika zasięg (3 przez ściany)'
            + '4. Wylecz 2 hp dla dowolnej postaci (globalnie)'
            + '5. Wykradnij żeton umiejętnosći dla przeciwnika (globalnie)'
            + '6. Zamień ten przedmiot na wybrany legendarny'
    },
    {
        id: 19,
        name: 'magnetyzer',
        fileName: 's22.bmp',
        stats: '',
        describe: 'A: Magnetyzacja: Wybierz dwa przedmioty i połącz je w 1 parę. Górna para łączy statystyki dwóch wybranych przedmiów i usuwa ich umiejętności. Dolna para łączy umiejętności, a usuwa statystyki. Złączyć w parę można raz na grę i złączonej pary nie można rozdzielić.'
    },
    {
        id: 20,
        name: 'flacha',
        fileName: 's17.bmp',
        stats: '',
        describe: 'Użyj przedmiotu i wylecz 3 hp, a następnie odrzuć ten przedmiot. (1 akcja)'
    },
    {
        id: 21,
        name: 'flacha wybuchowa',
        fileName: 's18.bmp',
        stats: '',
        describe: 'Użyj przedmiotu i zadaj 2dmg obszarowo na wybranym polu, a następnie odrzuć ten przedmiot. (1 akcja, 1 zasięg)'
    },
    {
        id: 22,
        name: 'rozpalająca mikstura',
        fileName: 's19.bmp',
        stats: '',
        describe: 'Użyj przedmiotu i strać 1hp oraz otrzymaj 2A do końca Twojej tury, a następnie odrzuć ten przedmiot. (1 akcja'
    },
    {
        id: 23,
        name: 'amulet',
        fileName: 'medalion-silver.bmp',
        stats: '',
        describe: 'Nasyć w kapliczce by wygrać grę.'
    }
]

const goldItems = [
    {
        id: 0,
        name: 'jednoręczna',
        fileName: 'g6.bmp',
        stats: '3A 1CAP',
        describe: ''
    },
    {
        id: 1,
        name: 'złota zbroja',
        fileName: 'g9.bmp',
        stats: '7ARM 6CAP',
        describe: 'P: Nie możesz używać umiejętności mobilnych, Twój limit podstawowych ruchów zmneijsza się o 1..'
    },
    {
        id: 2,
        name: 'puklerz',
        fileName: 'g12.bmp',
        stats: '3ARM 3CAP',
        describe: 'P: Z umiejętności, które mają więcej niż 0 zasięgu oraz z łuków otzymujesz 1 dmg mniej.'
    },
    {
        id: 3,
        name: 'złote buty',
        fileName: 'g10.bmp',
        stats: '2ARM 2CAP',
        describe: '(P)Perfekcyjne klapki: Nie działają na Ciebie spowolnienia oraz unieruchomienia.oraz ogłuszenia'
    },
    {
        id: 4,
        name: 'palantir',
        fileName: 'g17.bmp',
        stats: '',
        describe: '(T⚡)Płaskie wizje: Możesz zniszczyć odkryty przedmiot lub wybrać gracza, który pokazuje Ci wszystkie swoje przedmioty, a nastepnie niszczysz wybrany i wyneguj jego efekt. Po użyciu tego przedmiotu zniszcz go.'
    },
    {
        id: 5,
        name: 'energetyczny hełm',
        fileName: 'g13.bmp',
        stats: '1ARM 1CAP',
        describe: '(P)Elektryzująca umeijętność: jeśli trafisz w postać umiejętnością, która obiera za cel 1 postać to możesz zadać 1 dmg, które pomijają zbroję pozostałym postaciom w zasięgu 1.'
    },
    {
        id: 6,
        name: 'fiolka szaleńca',
        fileName: 'g20.bmp',
        stats: '',
        describe: 'Do końca Twojej tury, Twoje umiejętności leczące zadają obrażenia, a umiejętności zadające obrażenia leczą.'
    },
    {
        id: 7,
        name: 'potion chłodnego ognia',
        fileName: 'g21.bmp',
        stats: '',
        describe: 'A: Do końca Twojej tury twoje umiejętności spowalniają oraz dają podpalenie.'
    },
    {
        id: 8,
        name: 'sztylet lokiego',
        fileName: 'g5.bmp',
        stats: '1A 1CAP',
        describe: 'P: Jeśli atakujesz darmową akcją, to przeciwnik nie może wykonać kontry. (T)Fałszywa pomoc: Wybierz postać z żetonami krwawienai i przenieś się do niej oraz zdejmij jej żetony krwawienia. (0 akcji, 1 na turę)'
    },
    {
        id: 9,
        name: 'łuk',
        fileName: 'g2.bmp',
        stats: '1A 2CAP',
        describe: 'P: Wybierz postac i zadaj jej 2 dmg(1 akcja, 1 na turę, 2 zasięgu). P:Wbyierz postać i zadaj jej 2 dmg, obrażenia pomijają zbrioję, oraz strzała może skręcać. (2 akcje, 1 na tuę, 2 zasięgu)'
    },
    {
        id: 10,
        name: 'staff',
        fileName: 'g4.bmp',
        stats: '3CAP',
        describe: 'P: Twoja statystyka ataku zawsze wynosi 0. Twoje czary zadają +1dmg więcej i mają 1 zasięgu więcej. (T) Negacja czaru: raz na kolejkę, możesz zanegować 1 umiejętność, a następnie otrzymujesz +1dmg do czarów do końca Twojej tury. (2 razy na gre)'
    },
    {
        id: 11,
        name: 'tarcza',
        fileName: 'g3.bmp',
        stats: '4ARM 4CAP',
        describe: 'P: Jeśli jesteś celem umiejętności lub przedmiotu to możesz zdjąć 2ARM z tej tarczy, a następnie odbić umiejetność/zdolność przedmiotu w inną osobę/ (zasięg taki jak umiejętność/zdolność przedmiotu rzucana na Ciebie)'
    },
    {
        id: 12,
        name: 'energetyczna zbroja',
        fileName: 'g1.bmp',
        stats: '3ARM/-1A 3CAP',
        describe: 'P: Jeśli ktoś Ciebie zaatakuje to po ataku dostaje żeton ogłuszenia.'
    },
    {
        id: 13,
        name: 'złoty hełm dowódcy',
        fileName: 'g11.bmp',
        stats: '3ARM 2CAP',
        describe: '(P)Wyokie morale: daj dla swojej drużyny +1A (zasięg 2/pomija ściany).'
    },
    {
        id: 14,
        name: 'pas alchemnika',
        fileName: 'g8.bmp',
        stats: '1CAP',
        describe: '(P)Zerwanie gwintu: Traktuj swoje poty tak jak trigery.'
    },
    {
        id: 15,
        name: 'większy potion leczący',
        fileName: 'g16.bmp',
        stats: '',
        describe: 'A:Ulecz 3 HP dwa ładunki. (po uzyciu potiona przewracasz go na drugą stronę) po urzyciu 2 ładunka zniszcz ten item'
    },
    {
        id: 16,
        name: 'Klepsydra Krwi',
        fileName: 'g14.bmp',
        stats: '',
        describe: 'T: Stajesz się ogłuszony umocniony niesmiertelny odporny na cc na końcu początku swojej tury tracisz wszystie te statusy oraz odrzuć ten przedmiot.'
    },
    {
        id: 17,
        name: 'amulet zmian',
        fileName: 'g19new.bmp',
        stats: '',
        describe: '(T)Zmień przeznaczenie: zamień się miejscami z dowolną postacią, jeśli byłeś celem umiejętności/łuków/ataku to przechodzą one na postac z którą zamieniłeś się miejcami. Po użyciu tego przedmiotu zniszcz go.'
    },
    {
        id: 18,
        name: 'złoto głupców',
        fileName: 'g18new.bmp',
        stats: '',
        describe: '(A0)Zgubna darowizna: Dobierasz 3/5 żetony umiejętnosci z pudełka. Na koniec swojej tury odrzucasz te żetony/wszystkie swoje żetony. (1 na ture) nie mozesz się rozwijać do konca swojej tury.'
    },
    {
        id: 19,
        name: 'diament Tomasa',
        fileName: 'g15.bmp',
        stats: '1A/1HP',
        describe: '(A)Synteza: możesz odrzucić 2 brązowe przedmioty, aby dobrać losowy srebrny przedmiot z pudełka lub możesz odrzucić 2 srebrne przedmioty, aby dobrać losowy złoty przedmiot z pudełka. Możesz wykorzsytywać do tego przedmioty z własnego eq i leżące na Twoim polu.'
    },
    {
        id: 20,
        name: 'dwuręczna',
        fileName: 'g7.bmp',
        stats: '3A 4CAP',
        describe: 'P: Za każdym razem, gdy przy zwykłym ataku zdejmiesz komuś armor możesz zamienić swój żeton umiejętności (nie joker) na ładunek i połozyć na tej broni. Zdolność aktywna: możesz zdjąć ładunek z tej broni i zaatakować wybranego przeciwnika za 0 akcji, nie można dostac ładunku do tej broni używając tej umiejki. Limit ładunków: 2. Nie stakuje się ze statami'
    },
    {
        id: 21,
        name: 'katana przeznaczenia',
        fileName: 'g32.bmp',
        stats: '2A 2CAP',
        describe: '(T⚡)Tak jak zaplanowałem: Zamień się z dowolnym graczem kartami tożsamości. Po użyciu tego przedmiotu zniszcz go. (Karta Wampira musi być nieujawniona).'
    },
    {
        id: 22,
        name: 'amulet',
        fileName: 'medalion-gold.bmp',
        stats: '',
        describe: 'Nasyć w kapliczce by wygrać grę.'
    }
]

const vampireItems = [
    {
        id: 0,
        name: 'czaszka krwiopijcy',
        fileName: 'w1.bmp',
        stats: '',
        describe: 'A: wyssanie życia: wybierz postać i zadaj jej 2 dmg oraz jeśli w ten sposób postac straciła zdrowie to wylecz 2hp. (zasięg 1)'
    },
    {
        id: 1,
        name: 'fiolka krwi',
        fileName: 'w3.bmp',
        stats: '',
        describe: '(A1) Możesz ją wypić, jeśli to zrobisz dostajesz 2a do końca tury oraz wylecz 2hp.'
    },
    {
        id: 2,
        name: 'amulet nietoperza',
        fileName: 'w2.bmp',
        stats: '',
        describe: 'P:Jesli umrzesz w formie człownieka a jesteś wampirem przeżywasz na 1 HP i się przemieniasz w Wampira. Ten przedmiot może działać z plecaka.'
    },
    {
        id: 3,
        name: 'sygnet wampira wyższego',
        fileName: 'w5.bmp',
        stats: '',
        describe: '(P) Ofiara z krwi: Zamiast wydawać akcję możesz odrzucać żetony hp.'
    },
    {
        id: 4,
        name: 'przeklęta zbroja',
        fileName: 'w7.bmp',
        stats: '4ARM 3CAP',
        describe: '(P) Negujesz  żetony ogłuszenia i krwawienia.'
    },
    {
        id: 5,
        name: 'Złamany miecz króla wampirów',
        fileName: 'w4f.bmp',
        stats: '2A 3CAP',
        describe: '(P) Jeśli twój Atak jest pierwszą akcja w turze to wykonaj go jeszcze raz za 0 akcji. (P) Jeśli zabijesz innego gracza: zmień ten item w Miecz króla wampirów. (przekładasz żeton na druga strone) 2reczny'
    },
    {
        id: 6,
        name: 'Mroczne skrzydła',
        fileName: 'w6.bmp',
        stats: '4CAP',
        describe: '(A2) Przemieszczasz się o 3 pola pomijasz sciany/przeszkody i spadasz na pole na którym zadajesz 1 dmg.'
    },
    {
        id: 7,
        name: 'szpony przebudzonego',
        fileName: 'w8.bmp',
        stats: '3A 2CAP',
        describe: '(P) Po każdym podstawowym ataku spowolnij cel. Ataki nakładają 3 żetony krwawienia na cel. 1reczna'
    },
    {
        id: 8,
        name: 'wampirza tarcza',
        fileName: 'w9.bmp',
        stats: '4ARM 2CAP',
        describe: '(P) Zdejmij i 1ARM, aby wynegować spowolnienie sobie lub zombie (2 zasięg)'
    },
    {
        id: 9,
        name: 'ognisty bicz',
        fileName: 'w10.bmp',
        stats: '2CAP',
        describe: 'A: Wybierz 2 kafelki w linii prostej, wszyscy co się na nich znajdują dostają 1DMG i 1 żeton podpalenia. A: Wybierz postać i przyciągnij ją o 1 pole do siebie (zasięg 2)'
    },
    {
        id: 10,
        name: 'peleryna drakuli',
        fileName: 'w13.bmp',
        stats: '1CAP',
        describe: 'A0: Raz na turę następna umiejętność, którą użyjesz dostaje dodatkowe działanie w zależności od tego ile postaci zrani. Jeśli zranileś więcej niż 1 postać to Twoja umiejętność powoduje, że możesz przemieścić dowolną ilość zombiaków na pola zranionych graczy, ale zombiaki mogą byc maksymalnie oddalone od zranionej osoby o 1 pole. Jeśli zraniłeś jedną osobę to Twoja umiejętność powoduje, ze dostaje ona dodatkowe obrażenia za każdą przyjazną postac w pobliżu (zasięg 1).'
    },
    {
        id: 11,
        name: 'pradawna krew',
        fileName: 'w11.bmp',
        stats: '',
        describe: '(T): Po użyciu stajesz się nieśmiertelny i możesz poruszać się przez ściany. Odporny na cc. Do końca tury możesz tylko się przemieszczać. Po użyciu zniszcz ten artefakt. Trwa do końca tury lub możesz wyjść z tej formy za A0.'
    },
]

const labirynth = [
    {
        id: 0,
        fileName: 'lab1.png',
    },
    {
        id: 1,
        fileName: 'lab2.png',
    },
    {
        id: 2,
        fileName: 'lab3.png',
    },
    {
        id: 3,
        fileName: 'lab3.png',
    },
    {
        id: 4,
        fileName: 'lab3.png',
    },
    {
        id: 5,
        fileName: 'lab4.png',
    },
    {
        id: 6,
        fileName: 'lab5.png',
    },
    {
        id: 7,
        fileName: 'lab6.png',
    },
    {
        id: 8,
        fileName: 'lab6.png',
    }
]

const labCounters = [
    {
        id: 'lab1',
        counter: 0
    },
    {
        id: 'lab2',
        counter: 0
    },
    {
        id: 'lab3',
        counter: 0
    },
    {
        id: 'lab4',
        counter: 0
    },
    {
        id: 'lab5',
        counter: 0
    },
    {
        id: 'lab6',
        counter: 0
    }
]

export {brownItems, silverItems, goldItems, labirynth, labCounters, vampireItems};