const setArmCountOnClick = (conn) => {
    $('.arm-count button').click(function (e) { 
        e.preventDefault();
        let className = $(this).attr('class');
        let parentClass = $(this).parent().attr('class').split(' ')[1];
        
        CalculatePlayerArm(className, parentClass, conn);
    });
}

const CalculatePlayerArm = (operationType, selectedPlayer, conn) => {
    let data = {
        operation: 'calculateArm',
        operationType,
        selectedPlayer
    }
    conn.send(JSON.stringify(data))
}

const setAtkCountOnClick = (conn) => {
    $('.atk-count button').click(function (e) { 
        e.preventDefault();
        let className = $(this).attr('class');
        let parentClass = $(this).parent().attr('class').split(' ')[1];
        
        CalculatePlayerAtk(className, parentClass, conn);
    });
}

const CalculatePlayerAtk = (operationType, selectedPlayer, conn) => {
    let data = {
        operation: 'calculateAtk',
        operationType,
        selectedPlayer
    }
    conn.send(JSON.stringify(data))
}

const setHpCountOnClick = (conn) => {
    $('.hp-count button').click(function (e) { 
        e.preventDefault();
        let className = $(this).attr('class');
        let parentClass = $(this).parent().attr('class').split(' ')[1];
        
        CalculatePlayerHp(className, parentClass, conn);
    });
}

const CalculatePlayerHp = (operationType, selectedPlayer, conn) => {
    let data = {
        operation: 'calculateHp',
        operationType,
        selectedPlayer
    }
    conn.send(JSON.stringify(data))
}

const setJCountOnClick = (conn) => {
    $('.j-count button').click(function (e) { 
        e.preventDefault();
        let className = $(this).attr('class');
        let parentClass = $(this).parent().attr('class').split(' ')[1];
        
        CalculatePlayerJ(className, parentClass, conn);
    });
}

const CalculatePlayerJ = (operationType, selectedPlayer, conn) => {
    let data = {
        operation: 'calculateJ',
        operationType,
        selectedPlayer
    }
    conn.send(JSON.stringify(data))
}

const setCapCountOnClick = (conn) => {
    $('.c-count button').click(function (e) { 
        e.preventDefault();
        let className = $(this).attr('class');
        let parentClass = $(this).parent().attr('class').split(' ')[1];
        
        CalculatePlayerC(className, parentClass, conn);
    });
}

const CalculatePlayerC = (operationType, selectedPlayer, conn) => {
    let data = {
        operation: 'calculateC',
        operationType,
        selectedPlayer
    }
    conn.send(JSON.stringify(data))
}

const setCurAtkCountOnClick = (conn) => {
    $('.cur-atk-count button').click(function (e) { 
        e.preventDefault();
        let className = $(this).attr('class');
        let parentClass = $(this).parent().attr('class').split(' ')[1];
        
        CalculatePlayerCurAtk(className, parentClass, conn);
    });
}

const CalculatePlayerCurAtk = (operationType, selectedPlayer, conn) => {
    let data = {
        operation: 'calculateCurAtk',
        operationType,
        selectedPlayer
    }
    conn.send(JSON.stringify(data))
}

const setCurHpCountOnClick = (conn) => {
    $('.cur-hp-count button').click(function (e) { 
        e.preventDefault();
        let className = $(this).attr('class');
        let parentClass = $(this).parent().attr('class').split(' ')[1];
        
        CalculatePlayerCurHp(className, parentClass, conn);
    });
}

const CalculatePlayerCurHp = (operationType, selectedPlayer, conn) => {
    let data = {
        operation: 'calculateCurHp',
        operationType,
        selectedPlayer
    }
    conn.send(JSON.stringify(data))
}

export {
    setArmCountOnClick,
    setAtkCountOnClick, 
    setHpCountOnClick, 
    setJCountOnClick, 
    setCapCountOnClick,
    setCurAtkCountOnClick,
    setCurHpCountOnClick
}