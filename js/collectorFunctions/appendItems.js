const collectorAppendBronze = (arrayToShow, brownArray) => {
    if(arrayToShow.length)
        arrayToShow.forEach(el => {
            let brownItem = brownArray.find(item => item.id == el)
            let itemUrl = '/planszówka/assets/bronzowe/' + brownItem.fileName;
            let divId = `${brownItem.id}-collector-brown`;
            let jqDivId = `#${divId}`;
            let itemString = `<div id="${divId}" class="collector-choose-brown"></div>`;
            
            $('.collector-brown-container').append(itemString)

            let contentTooltip = '<div class="brown-tooltip"><img src="'+itemUrl+'">';
            if(brownItem.stats !== '')
                contentTooltip += '<p>'+ brownItem.stats +'</p>'
            if(brownItem.describe !== '')
                contentTooltip += '<p>'+ brownItem.describe +'</p></div>'
            else
                contentTooltip += '</div>'

            $(jqDivId).attr('title', " ");
            $(jqDivId).tooltip({
                content: contentTooltip
            }); 
            $(jqDivId).css('background-image', 'url(' + itemUrl + ')');
            $(jqDivId).css('background-repeat', 'no-repeat');
            $(jqDivId).css('background-size', 'cover');
        })
    else {
        let itemString = `<div class="brown-empty-info"><h2>Brak brązowych przedmiotów...</h2></div>`;
        $('.collector-brown-container').append(itemString)
    }
}

const collectorAppendSilver = (arrayToShow, silverArray) => {
    if(arrayToShow.length)
        arrayToShow.forEach(el => {
            let silverItem = silverArray.find(item => item.id == el)
            let itemUrl = '/planszówka/assets/srebrne/' + silverItem.fileName;
            let divId = `${silverItem.id}-collector-silver`;
            let jqDivId = `#${divId}`;
            let itemString = `<div id="${divId}" class="collector-choose-silver"></div>`;
            
            $('.collector-silver-container').append(itemString)

            let contentTooltip = '<div class="brown-tooltip"><img src="'+itemUrl+'">';
            if(silverItem.stats !== '')
                contentTooltip += '<p>'+ silverItem.stats +'</p>'
            if(silverItem.describe !== '')
                contentTooltip += '<p>'+ silverItem.describe +'</p></div>'
            else
                contentTooltip += '</div>'

            $(jqDivId).attr('title', " ");
            $(jqDivId).tooltip({
                content: contentTooltip
            }); 
            $(jqDivId).css('background-image', 'url(' + itemUrl + ')');
            $(jqDivId).css('background-repeat', 'no-repeat');
            $(jqDivId).css('background-size', 'cover');
        })
    else {
        let itemString = `<div class="silver-empty-info"><h2>Brak srebrnych przedmiotów...</h2></div>`;
        $('.collector-silver-container').append(itemString)
    }
}

const collectorAppendGold = (arrayToShow, goldArray) => {
    if(arrayToShow.length)
        arrayToShow.forEach(el => {
            let goldItem = goldArray.find(item => item.id == el)
            let itemUrl = '/planszówka/assets/złote/' + goldItem.fileName;
            let divId = `${goldItem.id}-collector-gold`;
            let jqDivId = `#${divId}`;
            let itemString = `<div id="${divId}" class="collector-choose-gold"></div>`;
            
            $('.collector-gold-container').append(itemString)

            let contentTooltip = '<div class="brown-tooltip"><img src="'+itemUrl+'">';
            if(goldItem.stats !== '')
                contentTooltip += '<p>'+ goldItem.stats +'</p>'
            if(goldItem.describe !== '')
                contentTooltip += '<p>'+ goldItem.describe +'</p></div>'
            else
                contentTooltip += '</div>'

            $(jqDivId).attr('title', " ");
            $(jqDivId).tooltip({
                content: contentTooltip
            }); 
            $(jqDivId).css('background-image', 'url(' + itemUrl + ')');
            $(jqDivId).css('background-repeat', 'no-repeat');
            $(jqDivId).css('background-size', 'cover');
        })
    else {
        let itemString = `<div class="gold-empty-info"><h2>Brak złotych przedmiotów...</h2></div>`;
        $('.collector-gold-container').append(itemString)
    }
}

export {
    collectorAppendBronze,
    collectorAppendSilver,
    collectorAppendGold
}