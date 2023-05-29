const prepareHorse = (id, dragElement) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/kon.bmp">';
    contentTooltip += '<p>Na razie bez funckji</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).removeClass('horse');
    $(divId).removeClass('item-blue');
    $(divId).addClass('horse-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)
    
    dragElement(document.getElementById(id));
} 

const prepareRod = (id, dragElement) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/wędka.bmp">';
    contentTooltip += '<p>1A Dwuręczna</p>';
    contentTooltip += '<p>A1: Wyłów z wody lub przyciągnij przedmiot z ziemi(zasięg 2)</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).removeClass('rod');
    $(divId).removeClass('item-blue');
    $(divId).addClass('rod-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)
    
    dragElement(document.getElementById(id));
} 

const prepareAxe = (id, dragElement) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/siekiera.bmp">';
    contentTooltip += '<p>2A 2CAP</p>';
    contentTooltip += '<p>A0: Zniszcz barykadę; A1: zniszcz zaklęcie leżące na ziemi i odrzuć siekierę</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).removeClass('axe');
    $(divId).removeClass('item-blue');
    $(divId).addClass('axe-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)
    
    dragElement(document.getElementById(id));
}  

const prepareGarlic = (id, dragElement) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/s24.bmp">';
    contentTooltip += '<p>P:Wampir płaci 1 akcje wiecej za to aby wjesc na kafelek na ktorym znajduje sie gracz posiadajacy ten amulet, Jesli wapir zaplacił dodatkową akcje zniszcz ten amulet.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).removeClass('garlic');
    $(divId).addClass('garlic-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)
    
    dragElement(document.getElementById(id));
} 

const prepareKey = (id, dragElement) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/klucz.bmp">';
    contentTooltip += '<p>A1: Otwórz zamek i dorzuć klucz.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).removeClass('key');
    $(divId).addClass('key-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)
    
    dragElement(document.getElementById(id));
}

const prepareBonfire = (id) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/ognisko.bmp">';
    contentTooltip += '<p>(każda postać, raz na grę ) A1: Dodaj 1 Atk lub 1Hp lub 1 Joker.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });
}

const prepareWell = (id) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/studnia.bmp">';
    contentTooltip += '<p>(1 postać, raz na grę) A1: Rzuć kostką -> wynik: 1,2,3 to los brązowego przedmoitu; wynik 4,5 to los srebrnego; wynik 6 to los złotego.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });
}

const prepareBigFountain = (id) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/fontanna_duza.bmp">';
    contentTooltip += '<p>(1 postać, raz na grę) A0: Rozwiń talent z drzewka w normalny sposób.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });
}

const prepareSmallFountain = (id) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/fontanna.bmp">';
    contentTooltip += '<p>(1 postać, raz na grę) A0: Rozwiń statystykę z drzewka w normalny sposób.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });
}

const prepareFurnance = (id) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/piec.bmp">';
    contentTooltip += '<p>Możesz odrzucić 3 brązowe przedmioty, aby dobrać losowy srebrny przedmiot z pudełka lub możesz odrzucić 3 srebrne przedmioty, aby dobrać losowy złoty przedmiot z pudełka. Możesz wykorzsytywać do tego przedmioty z własnego eq i leżące na Twoim polu.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });
}

const prepareSecret = (id) => {
    let divId = `#${id}`
    let contentTooltip = '<div class="brown-tooltip"><img src="assets/dodatkowe/ksiegarnia.bmp">';
    contentTooltip += '<p>(1 postać, raz na grę) A1: jeśli masz rozwiniętą przynajmniej 1 umiejętność możęsz rozwinać ulta.</p></div>'

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });
}

const prepareBlueItems = (dragElement) => {
    prepareHorse('horse1', dragElement)
    prepareHorse('horse2', dragElement)
    
    prepareRod('rod1', dragElement)

    prepareAxe('axe1', dragElement)

    prepareGarlic('garlic1', dragElement)

    prepareKey('key1', dragElement)

    prepareBonfire('bonfire1')
    prepareBonfire('bonfire2')

    prepareWell('well1')

    prepareBigFountain('big-fountain1')

    prepareSmallFountain('small-fountain1')
    prepareSmallFountain('small-fountain2')

    prepareFurnance('furnance1')

    prepareSecret('secret1')
}

export{prepareBlueItems}