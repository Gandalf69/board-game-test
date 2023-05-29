const openLab = (data, labArray, conn) => {
    let index = data.itemNr;
    let divId = '#'+data.divId;
    let itemId = labArray.find(el => el.id == index);
    let imgUrl = '/planszówka/assets/labirynt/' + itemId.fileName;
    
    $(divId).append('<img src="'+ imgUrl +'">')

    $(divId).parent().append('<button id="'+data.divId+'-l" class="btn-rot-l" data-img="'+ data.divId +'" ><-</button>')

    $('#'+data.divId+'-l').on("click", function(){
        let divId = $(this).attr('data-img')
        let data = {
            operation: 'rotLeft',
            divId,
        }
        conn.send(JSON.stringify(data))
    });
    
    $(divId).parent().append('<button  id="'+data.divId+'-r" class="btn-rot-r" data-img="'+ data.divId +'" >-></button>')
    
    $('#'+data.divId+'-r').on("click", function(){
        let divId = $(this).attr('data-img')
        let data = {
            operation: 'rotRight',
            divId,
        }
        conn.send(JSON.stringify(data))
    });

    $(divId).off("click");

    return labArray.filter(el => el.id != index);
}

const calcRot = (data, countersArray) => {
    let divId = '#'+data.divId;
    let itemId = countersArray.find(el => el.id == data.divId);
    let count = itemId.counter
    data.rotation === 'minus' ? count-- : count++;
    
    countersArray.forEach( el => {
        if(el.id === data.divId)
            el.counter = count
    })

    let deg=count*90;
    $(divId).css('transform', 'rotate('+deg+'deg)')

    return countersArray
}

const setLabOnClick = (conn) => {
    $('.lab-img').click(function (e) { 
        e.preventDefault();
        
        if(confirm("Chcesz odkryć labirynt?"))
        {
            let divId = $(this).attr('id')
    
            let data = {
                operation: 'openLab',
                divId,
            }
    
            conn.send(JSON.stringify(data))
        }
    });
}

export {openLab, calcRot, setLabOnClick}