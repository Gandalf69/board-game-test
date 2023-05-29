const openSilver = (data, silverArray, dragElement) => {
    let index = data.itemId; 
    let divId = '#'+data.divId;
    let itemId = silverArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/srebrne/' + itemId.fileName;

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
    $(divId).removeClass('item-silver');
    $(divId).addClass('silver-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    $(divId).off("click");
    dragElement(document.getElementById(data.divId));

    return silverArray.filter(el => el.id != index);
}

const chooseSilver = (data, silverArray, conn) => {
    $('.silver-modal').css('display', 'block');
    let firstItem = data.firstItem
    firstItem = silverArray.find(el => el.id == firstItem)
    let firstUrl = '/planszówka/assets/srebrne/' + firstItem.fileName;
    let firstString = '<div id="silver-modal-first" class="silver-modal-item">'
        + '<img src="'+firstUrl+'">';
    
    if(firstItem.stats !== '')
    {
        firstString += '<p>'+ firstItem.stats +'</p>'
    }
    if(firstItem.describe !== '')
    {
        firstString += '<p>'+ firstItem.describe +'</p><a href="'+firstItem.id+'" data-id="'+data.divId+'">Wybierz</a></div>'
    } else {
        firstString += '<a href="'+firstItem.id+'" data-id="'+data.divId+'">Wybierz</a></div>'
    }


    let secondItem = data.secondItem
    secondItem = silverArray.find(el => el.id == secondItem)
    let secondtUrl = '/planszówka/assets/srebrne/' + secondItem.fileName;
    let secondString = '<div id="silver-modal-first" class="silver-modal-item">'
        + '<img src="'+secondtUrl+'">';
    
    if(secondItem.stats !== '')
    {
        secondString += '<p>'+ secondItem.stats +'</p>'
    }
    if(secondItem.describe !== '')
    {
        secondString += '<p>'+ secondItem.describe +'</p><a href="'+secondItem.id+'" data-id="'+data.divId+'">Wybierz</a></div>'
    } else {
        secondString += '<a href="'+secondItem.id+'" data-id="'+data.divId+'">Wybierz</a></div>'
    }

    $('.silver-modal-items').append(firstString)
    $('.silver-modal-items').append(secondString)

    silverOnClick(conn);
}

const silverOnClick = (conn) => {
    $('.silver-modal-item a').click(function (e) { 
        e.preventDefault();
        let itemId = $(this).attr('href')
        let divId = $(this).attr('data-id')
        $('.silver-modal-item').remove()
        $('.silver-modal').css('display', 'none');
        $('.silver-modal-item a').off("click")
        
        let data = {
            operation: 'openSilver',
            itemId,
            divId,
        }

        conn.send(JSON.stringify(data))
    });
}

const setSilverOnClick = (silverArray, conn) => {
    $('.item-silver').click(function (e) { 
        e.preventDefault();
        
        if(silverArray.length)
        {
            if(confirm("Chcesz otworzyć item?"))
            {
                let divId = $(this).attr('id')
    
                let data = {
                    operation: 'chooseSilver',
                    divId,
                }
    
                conn.send(JSON.stringify(data))
            }
        } else {
            alert('Brak srebrnych przedmiotów!');
        }     
    });
}



export {chooseSilver, openSilver, setSilverOnClick};