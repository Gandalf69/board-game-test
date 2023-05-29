const setCollectorBrownItemsOnClick = (conn) => {
    $('.collector-choose-brown').click(function (e) { 
        e.preventDefault();
        let itemNr = $(this).attr('id').split('-')[0]
        if(confirm("Wybrać przedmiot?"))
        {
            let data = {
                operation: 'collectorOpenBrown',
                itemNr
            }

            clearCollectorModal();
            conn.send(JSON.stringify(data))
        }
    });
}

const setCollectorSilverItemsOnClick = (conn) => {
    $('.collector-choose-silver').click(function (e) { 
        e.preventDefault();
        let itemNr = $(this).attr('id').split('-')[0]
        if(confirm("Wybrać przedmiot?"))
        {
            let data = {
                operation: 'collectorOpenSilver',
                itemNr
            }

            clearCollectorModal();
            conn.send(JSON.stringify(data))
        }
    });
}

const setCollectorGoldItemsOnClick = (conn) => {
    $('.collector-choose-gold').click(function (e) { 
        e.preventDefault();
        let itemNr = $(this).attr('id').split('-')[0]
        if(confirm("Wybrać przedmiot?"))
        {
            let data = {
                operation: 'collectorOpenGold',
                itemNr
            }

            clearCollectorModal();
            conn.send(JSON.stringify(data))
        }
    });
}

const closeCollectorModal = () => {
    $('.collector-colse').click(function (e) { 
        e.preventDefault();
        clearCollectorModal();
    });
}

const clearCollectorModal = () => {
    $('.collector-choose-brown').off("click");
    $('.collector-choose-silver').off("click");
    $('.collector-choose-gold').off("click");

    $('.collector-choose-brown').remove();
    $('.collector-choose-silver').remove();
    $('.collector-choose-gold').remove();

    $('.brown-empty-info').remove();
    $('.silver-empty-info').remove();
    $('.gold-empty-info').remove();

    $('.collector-modal').css('display', 'none');
    $('.collector-colse').off("click");
}

export {
    setCollectorBrownItemsOnClick,
    setCollectorSilverItemsOnClick,
    setCollectorGoldItemsOnClick,
    closeCollectorModal
}