const openGold = (data, goldArray, dragElement) => {
    let index = data.itemId; 
    let divId = '#'+data.divId;
    let itemId = goldArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/złote/' + itemId.fileName;

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
    $(divId).removeClass('item-gold');
    $(divId).addClass('gold-clicked');
    $(divId).css('left', left)
    $(divId).css('top', top)

    $(divId).off("click");
    dragElement(document.getElementById(data.divId));

    return goldArray.filter(el => el.id != index);
}

const chooseGold = (data, goldArray, conn) => {
    $('.silver-modal').css('display', 'block');
    let firstItem = data.firstItem
    firstItem = goldArray.find(el => el.id == firstItem)
    let firstUrl = '/planszówka/assets/złote/' + firstItem.fileName;
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
    secondItem = goldArray.find(el => el.id == secondItem)
    let secondtUrl = '/planszówka/assets/złote/' + secondItem.fileName;
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

    if(data.howMany === 3)
    {
        let thirdItem = data.thirdItem
        thirdItem = goldArray.find(el => el.id == thirdItem)
        let thirdUrl = '/planszówka/assets/złote/' + thirdItem.fileName;
        let thirdString = '<div id="silver-modal-first" class="silver-modal-item">'
            + '<img src="'+thirdUrl+'">';

        if(thirdItem.stats !== '')
        {
            thirdString += '<p>'+ thirdItem.stats +'</p>'
        }
        if(thirdItem.describe !== '')
        {
            thirdString += '<p>'+ thirdItem.describe +'</p><a href="'+thirdItem.id+'" data-id="'+data.divId+'">Wybierz</a></div>'
        } else {
            thirdString += '<a href="'+thirdItem.id+'" data-id="'+data.divId+'">Wybierz</a></div>'
        }

        $('.silver-modal-items').append(thirdString)
    }
    

    $('.silver-modal-items').append(firstString)
    $('.silver-modal-items').append(secondString)
    
    goldOnClick(conn);
}

const goldOnClick = (conn) => {
    $('.silver-modal-item a').click(function (e) { 
        e.preventDefault();
        let itemId = $(this).attr('href')
        let divId = $(this).attr('data-id')
        $('.silver-modal-item').remove()
        $('.silver-modal').css('display', 'none');
        $('.silver-modal-item a').off("click")
        
        let data = {
            operation: 'openGold',
            itemId,
            divId,
        }

        conn.send(JSON.stringify(data))
    });
}

const setGoldOnClick = (goldArray, conn) => {
    $('.item-gold').click(function (e) { 
        e.preventDefault();
        
        if(goldArray.length)
        {
            if(confirm("Chcesz otworzyć item?"))
            {
                let divId = $(this).attr('id')
    
                let data = {
                    operation: 'chooseGold',
                    divId,
                }
    
                conn.send(JSON.stringify(data))
            }
        } else {
            alert('Brak złotych przedmiotów!');
        }     
    });
}

export {chooseGold, openGold, setGoldOnClick}