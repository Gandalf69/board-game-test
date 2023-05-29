import { 
    collectorAppendBronze,
    collectorAppendSilver,
    collectorAppendGold
 } from "./collectorFunctions/appendItems.js";

import { 
    setCollectorBrownItemsOnClick,
    setCollectorSilverItemsOnClick,
    setCollectorGoldItemsOnClick,
    closeCollectorModal
} from "./collectorFunctions/collectorListeners.js";

const setHamburgerOnClick = () => {
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        $('.hamburger').css('display', 'none')
        $('.fixed-menu').css('display', 'unset')
    });
}

const setMenuOnClick = () => {
    $('.close-menu').click(function (e) { 
        e.preventDefault();
        $('.fixed-menu').css('display', 'none')
        $('.hamburger').css('display', 'unset')
    });
}

const showEmptyDeckInfo = () => {
    alert(`Brak przedmiotów w pudełku!`)
}

const throwK6 = (data) => {
    alert(`Wypadło: ${data.diceValue}`)
}

const setThrowK6OnClick = (conn) => {
    $('.throw-k6').click(function (e) { 
        e.preventDefault();
        
        let data = {
            operation: 'throwK6',
        }
        conn.send(JSON.stringify(data))
    });
}

const showChar = (data) => {
    alert(`Jesteś: ${data.char}`)
}

const setrandCharsOnClick = (conn) => {
    $('.rand-chars').click(function (e) { 
        e.preventDefault();
        
        let data = {
            operation: 'randChars',
        }
        conn.send(JSON.stringify(data))
    });
}

const setDigItemOnClick = (conn) => {
    $('.dig-item').click(function (e) { 
        e.preventDefault();

        let data
        let randItem = Math.floor(Math.random() * 6) + 1;

        if(randItem == 1 || randItem == 2)
            data = {
                operation: 'digBrownItem',
            }
        else if(randItem == 3 || randItem == 4)
            data = {
                operation: 'digSilverItem',
            }
        else
            data = {
                operation: 'digGoldItem',
            }
        
        conn.send(JSON.stringify(data))
    });
}

const setUpgradeItemToSilverOnClick = (conn) => {
    $('.upgrade-item-to-silver').click(function (e) { 
        e.preventDefault();

        let data = {
            operation: 'upgradeItemToSilver',
        }
        
        conn.send(JSON.stringify(data))
    });
}

const setUpgradeItemToGoldOnClick = (conn) => {
    $('.upgrade-item-to-gold').click(function (e) { 
        e.preventDefault();

        let data = {
            operation: 'upgradeItemToGold',
        }
        
        conn.send(JSON.stringify(data))
    });
}

const setCollectorOnClick = (conn) => {
    $('.collector').click(function (e) { 
        e.preventDefault();

        let data = {
            operation: 'collectorAbility',
        }
        
        conn.send(JSON.stringify(data))
    });
}

const manageCollectorAbility = (data, brownArray, silverArray, goldArray, conn) => {
    collectorAppendBronze(data.brownArray, brownArray);
    collectorAppendSilver(data.silverArray, silverArray);
    collectorAppendGold(data.goldArray, goldArray)

    $('.collector-modal').css('display', 'block');

    setCollectorBrownItemsOnClick(conn);
    setCollectorSilverItemsOnClick(conn);
    setCollectorGoldItemsOnClick(conn);
    
    closeCollectorModal();
}

const prepareMenuListeners = (conn) => {
    setHamburgerOnClick();
    setMenuOnClick();
    setThrowK6OnClick(conn);
    setrandCharsOnClick(conn);
    setDigItemOnClick(conn);
    setUpgradeItemToSilverOnClick(conn);
    setUpgradeItemToGoldOnClick(conn);
    setCollectorOnClick(conn);
}

export {
    prepareMenuListeners, 
    throwK6, 
    showChar,
    showEmptyDeckInfo,
    manageCollectorAbility
}