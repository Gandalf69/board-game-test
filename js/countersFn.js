const calculateArm = (data) => {
    if(data.operationType === 'plus')
    {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr++
        $('.'+data.selectedPlayer+' span').text(currentNr)
    } else {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr--
        $('.'+data.selectedPlayer+' span').text(currentNr)
    }
}

const calculateAtk = (data) => {
    if(data.operationType === 'plus')
    {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr++
        $('.'+data.selectedPlayer+' span').text(currentNr)
    } else {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr--
        $('.'+data.selectedPlayer+' span').text(currentNr)
    }
}

const calculateHp = (data) => {
    if(data.operationType === 'plus')
    {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr++
        $('.'+data.selectedPlayer+' span').text(currentNr)
    } else {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr--
        $('.'+data.selectedPlayer+' span').text(currentNr)
    }
}

const calculateJ = (data) => {
    if(data.operationType === 'plus')
    {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr++
        $('.'+data.selectedPlayer+' span').text(currentNr)
    } else {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr--
        $('.'+data.selectedPlayer+' span').text(currentNr)
    }
}

const calculateC = (data) => {
    if(data.operationType === 'plus')
    {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr++
        $('.'+data.selectedPlayer+' span').text(currentNr)
    } else {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr--
        $('.'+data.selectedPlayer+' span').text(currentNr)
    }
}

const calculateCurAtk = (data) => {
    if(data.operationType === 'plus')
    {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr++
        $('.'+data.selectedPlayer+' span').text(currentNr)
    } else {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr--
        $('.'+data.selectedPlayer+' span').text(currentNr)
    }
}

const calculateCurHp = (data) => {
    if(data.operationType === 'plus')
    {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr++
        $('.'+data.selectedPlayer+' span').text(currentNr)
    } else {
        let currentNr = $('.'+data.selectedPlayer+' span').text();
        currentNr = parseInt(currentNr)
        currentNr--
        $('.'+data.selectedPlayer+' span').text(currentNr)
    }
}

export {
    calculateArm, 
    calculateAtk, 
    calculateHp, 
    calculateJ, 
    calculateC,
    calculateCurAtk,
    calculateCurHp
}