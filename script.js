import { brownItems, silverItems, goldItems, labirynth, labCounters, vampireItems } from './js/items.js';
import { openBrown, setBrownOnClick } from './js/brownItemsFn.js';
import { chooseSilver, openSilver, setSilverOnClick } from './js/silverItemsFn.js';
import { chooseGold, openGold, setGoldOnClick } from './js/goldItemsFn.js';
import { chooseVamp, openVamp, setVampOnClick } from './js/vampireItemsFn.js';
import { openLab, calcRot, setLabOnClick } from './js/labyrinthFn.js';
import { 
    calculateArm, 
    calculateAtk, 
    calculateHp, 
    calculateJ, 
    calculateC,
    calculateCurAtk,
    calculateCurHp
 } from './js/countersFn.js';
import { 
    setArmCountOnClick,
    setAtkCountOnClick, 
    setHpCountOnClick, 
    setJCountOnClick, 
    setCapCountOnClick,
    setCurAtkCountOnClick,
    setCurHpCountOnClick 
} from './js/countersListeners.js';
import { 
    throwK6, 
    prepareMenuListeners, 
    showChar,
    showEmptyDeckInfo,
    manageCollectorAbility
} from './js/menuFunctions.js';
import { prepareBlueItems } from './js/blueItemsFn.js';
import { 
    prepareMapListeners,
    appendBrownItemWell,
    appendSilverItemWell,
    appendGoldItemWell,
    appendBrownItem,
    appendSilverItem,
    appendGoldItem
} from './js/mapFn.js';

$(document).ready(function () {    
    var brownArray = brownItems;
    var silverArray = silverItems;
    var goldArray = goldItems;
    var vampArray = vampireItems;
    var labArray = labirynth;
    var countersArray = labCounters;

    var conn = new WebSocket('ws://25.62.236.127:8080');
    conn.onopen = (e) => console.log("Połączenie otwarte");

    conn.onmessage = (e) => {
        let data = JSON.parse(e.data);
        if(data.operation === 'playerPos')
        {
            $('#'+data.id).css('top', data.top);
            $('#'+data.id).css('left', data.left);
        } else if(data.operation === 'calculateArm')
            calculateArm(data)
        else if(data.operation === 'calculateAtk')
            calculateAtk(data)
        else if(data.operation === 'calculateHp')
            calculateHp(data)
        else if(data.operation === 'calculateJ')
            calculateJ(data)
        else if(data.operation === 'calculateC')
            calculateC(data)
        else if(data.operation === 'calculateCurAtk')
            calculateCurAtk(data)
        else if(data.operation === 'calculateCurHp')
            calculateCurHp(data)
        else if(data.operation === 'openBrown')
            brownArray = openBrown(data, brownArray, dragElement)
        else if(data.operation === 'chooseSilver')
            chooseSilver(data, silverArray, conn)
        else if(data.operation === 'openSilver')
            silverArray = openSilver(data, silverArray, dragElement)
        else if(data.operation === 'chooseGold')
            chooseGold(data, goldArray, conn)
        else if(data.operation === 'openGold')
            goldArray = openGold(data, goldArray, dragElement)
        else if(data.operation === 'chooseVamp')
            chooseVamp(data, vampArray, conn);
        else if(data.operation === 'openVamp')
            vampArray = openVamp(data, vampArray, dragElement)
        else if(data.operation === 'openLab')
            labArray = openLab(data, labArray, conn)
        else if(data.operation === 'calcRot')
            countersArray = calcRot(data, countersArray)
        else if(data.operation === 'throwK6')
            throwK6(data)
        else if(data.operation === 'randChars')
            showChar(data)
        else if(data.operation === 'brownWell')
            brownArray = appendBrownItemWell(data, brownArray, dragElement)
        else if(data.operation === 'silverWell')
            silverArray = appendSilverItemWell(data, silverArray, dragElement)
        else if(data.operation === 'goldWell')
            goldArray = appendGoldItemWell(data, goldArray, dragElement)
        else if(data.operation === 'digAppendBrown')
            brownArray = appendBrownItem(data, brownArray, dragElement)
        else if(data.operation === 'digAppendSilver' || data.operation === 'upgradeItemToSilver')
            silverArray = appendSilverItem(data, silverArray, dragElement)
        else if(data.operation === 'digAppendGold' || data.operation === 'upgradeItemToGold')
            goldArray = appendGoldItem(data, goldArray, dragElement) 
        else if(data.operation === 'emptyDeck')
            showEmptyDeckInfo()
        else if(data.operation === 'collectorAbility')
            manageCollectorAbility(data, brownArray, silverArray, goldArray, conn)
    };
    
    function sendPlayerPosition(top, left, id) {
        let data = {
            operation: 'playerPos',
            top,
            left,
            id
        }
        conn.send(JSON.stringify(data))
    }

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            // console.log('top: ' + elmnt.style.top)
            // console.log('left: ' + elmnt.style.left)
            sendPlayerPosition(elmnt.style.top, elmnt.style.left, elmnt.id)
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    setBrownOnClick(brownArray, conn);
    setSilverOnClick(silverArray, conn);
    setGoldOnClick(goldArray, conn);
    setVampOnClick(vampArray, conn);
    setLabOnClick(conn);
    setArmCountOnClick(conn);
    setAtkCountOnClick(conn); 
    setHpCountOnClick(conn); 
    setJCountOnClick(conn);
    setCapCountOnClick(conn);
    setCurAtkCountOnClick(conn);
    setCurHpCountOnClick(conn);

    prepareBlueItems(dragElement);
    prepareMenuListeners(conn);
    prepareMapListeners(conn)

    dragElement(document.getElementById("pl1-icon"));
    dragElement(document.getElementById("pl2-icon"));
    dragElement(document.getElementById("pl3-icon"));
    dragElement(document.getElementById("pl4-icon"));
    dragElement(document.getElementById("pl5-icon"));
    dragElement(document.getElementById("pl6-icon"));
});