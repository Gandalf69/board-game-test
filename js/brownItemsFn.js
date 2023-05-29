const openBrown = (data, brownArray, dragElement) => {
    let index = data.itemNr;
    let divId = '#'+data.divId;
    let itemId = brownArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/bronzowe/' + itemId.fileName;

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
    $(divId).removeClass('item-brown');
    $(divId).addClass('brown-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    $(divId).off("click");
    dragElement(document.getElementById(data.divId));

    return brownArray.filter(el => el.id != index);
}

const setBrownOnClick = (brownArray, conn) => {
    $('.item-brown').click(function (e) { 
        e.preventDefault();
        
        if(brownArray.length)
        {
            if(confirm("Chcesz otworzyć item?"))
            {
                let divId = $(this).attr('id')

                let data = {
                    operation: 'openBrown',
                    divId,
                }

                conn.send(JSON.stringify(data))
            }
        } else {
            alert('Brak brązowych przedmiotów!');
        }     
    });
}

export {openBrown, setBrownOnClick};