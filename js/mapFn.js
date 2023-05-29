const setWellOnClick = (conn) => {
    $('.well-div').click(function (e) { 
        e.preventDefault();
        if(confirm("Chcesz użyć studni?"))
        {
            let data = {
                operation: 'openWell',
            }

            conn.send(JSON.stringify(data))
        }
    });
}

const appendBrownItemWell = (data, brownArray, dragElement) => {
    $('.well-div').off("click");

    let index = data.itemNr;
    let divId = '#well-item';
    let itemId = brownArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/bronzowe/' + itemId.fileName;

    $('.well-div').append('<div id="well-item" title=""></div>')

    let contentTooltip = '<div class="brown-tooltip"><img src="'+imgUrl+'">';
    if(itemId.stats !== '')
    {
        contentTooltip += '<p>'+ itemId.stats +'</p>'
    }
    if(itemId.describe !== '')
    {
        contentTooltip += '<p>'+ itemId.describe +'</p></div>'
    } else {
        contentTooltip += '</div>'
    }

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    $(divId).css('background-image', 'url(' + imgUrl + ')');
    $(divId).css('background-repeat', 'no-repeat');
    $(divId).css('background-size', 'cover');
    
    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).addClass('brown-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    dragElement(document.getElementById('well-item'));
    return brownArray.filter(el => el.id != index);
}

const appendSilverItemWell = (data, silverArray, dragElement) => {
    $('.well-div').off("click");

    let index = data.itemNr;
    let divId = '#well-item';
    let itemId = silverArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/srebrne/' + itemId.fileName;

    $('.well-div').append('<div id="well-item" title=""></div>')

    let contentTooltip = '<div class="brown-tooltip"><img src="'+imgUrl+'">';
    if(itemId.stats !== '')
    {
        contentTooltip += '<p>'+ itemId.stats +'</p>'
    }
    if(itemId.describe !== '')
    {
        contentTooltip += '<p>'+ itemId.describe +'</p></div>'
    } else {
        contentTooltip += '</div>'
    }

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    $(divId).css('background-image', 'url(' + imgUrl + ')');
    $(divId).css('background-repeat', 'no-repeat');
    $(divId).css('background-size', 'cover');
    
    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).addClass('silver-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    dragElement(document.getElementById('well-item'));
    return silverArray.filter(el => el.id != index);
}

const appendGoldItemWell = (data, goldArray, dragElement) => {
    $('.well-div').off("click");

    let index = data.itemNr;
    let divId = '#well-item';
    let itemId = goldArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/złote/' + itemId.fileName;

    $('.well-div').append('<div id="well-item" title=""></div>')

    let contentTooltip = '<div class="brown-tooltip"><img src="'+imgUrl+'">';
    if(itemId.stats !== '')
    {
        contentTooltip += '<p>'+ itemId.stats +'</p>'
    }
    if(itemId.describe !== '')
    {
        contentTooltip += '<p>'+ itemId.describe +'</p></div>'
    } else {
        contentTooltip += '</div>'
    }

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    $(divId).css('background-image', 'url(' + imgUrl + ')');
    $(divId).css('background-repeat', 'no-repeat');
    $(divId).css('background-size', 'cover');
    
    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).addClass('gold-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    dragElement(document.getElementById('well-item'));
    return goldArray.filter(el => el.id != index);
}

const prepareMapListeners = (conn) => {
    setWellOnClick(conn);
}

const appendBrownItem = (data, brownArray, dragElement) => {
    let index = data.itemNr;
    let divId = `#${data.appendCounter}-added-item`;
    let itemId = brownArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/bronzowe/' + itemId.fileName;

    $('.ct-field').append(`<div id="${divId.replaceAll('#', '')}" title=""></div>`)

    let contentTooltip = '<div class="brown-tooltip"><img src="'+imgUrl+'">';
    if(itemId.stats !== '')
    {
        contentTooltip += '<p>'+ itemId.stats +'</p>'
    }
    if(itemId.describe !== '')
    {
        contentTooltip += '<p>'+ itemId.describe +'</p></div>'
    } else {
        contentTooltip += '</div>'
    }

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    $(divId).css('background-image', 'url(' + imgUrl + ')');
    $(divId).css('background-repeat', 'no-repeat');
    $(divId).css('background-size', 'cover');
    
    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).addClass('brown-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    dragElement(document.getElementById(divId.replaceAll('#', '')));

    if(data.filterArray)
        return brownArray.filter(el => el.id != index);
    else
        return brownArray;
}

const appendSilverItem = (data, silverArray, dragElement) => {
    let index = data.itemNr;
    let divId = `#${data.appendCounter}-added-item`;
    let itemId = silverArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/srebrne/' + itemId.fileName;

    $('.ct-field').append(`<div id="${divId.replaceAll('#', '')}" title=""></div>`)

    let contentTooltip = '<div class="brown-tooltip"><img src="'+imgUrl+'">';
    if(itemId.stats !== '')
    {
        contentTooltip += '<p>'+ itemId.stats +'</p>'
    }
    if(itemId.describe !== '')
    {
        contentTooltip += '<p>'+ itemId.describe +'</p></div>'
    } else {
        contentTooltip += '</div>'
    }

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    $(divId).css('background-image', 'url(' + imgUrl + ')');
    $(divId).css('background-repeat', 'no-repeat');
    $(divId).css('background-size', 'cover');
    
    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).addClass('silver-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    dragElement(document.getElementById(divId.replaceAll('#', '')));

    if(data.filterArray)
        return silverArray.filter(el => el.id != index);
    else
        return silverArray;
}

const appendGoldItem = (data, goldArray, dragElement) => {
    let index = data.itemNr;
    let divId = `#${data.appendCounter}-added-item`;
    let itemId = goldArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/złote/' + itemId.fileName;

    $('.ct-field').append(`<div id="${divId.replaceAll('#', '')}" title=""></div>`)

    let contentTooltip = '<div class="brown-tooltip"><img src="'+imgUrl+'">';
    if(itemId.stats !== '')
    {
        contentTooltip += '<p>'+ itemId.stats +'</p>'
    }
    if(itemId.describe !== '')
    {
        contentTooltip += '<p>'+ itemId.describe +'</p></div>'
    } else {
        contentTooltip += '</div>'
    }

    $(divId).attr('title', " ");
    $(divId).tooltip({
        content: contentTooltip
    });

    $(divId).css('background-image', 'url(' + imgUrl + ')');
    $(divId).css('background-repeat', 'no-repeat');
    $(divId).css('background-size', 'cover');
    
    let left = $(divId).css('left')
    let top = $(divId).css('top')
    $(divId).addClass('gold-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    dragElement(document.getElementById(divId.replaceAll('#', '')));

    if(data.filterArray)
        return goldArray.filter(el => el.id != index);
    else
        return goldArray;
}

export {
    prepareMapListeners, 
    appendBrownItemWell, 
    appendSilverItemWell,
    appendGoldItemWell,
    appendBrownItem,
    appendSilverItem,
    appendGoldItem
}