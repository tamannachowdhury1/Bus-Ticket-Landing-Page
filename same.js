function setbgcolor(eventName) {
    removebgcolor('.kbdbtn', '');
    const btn = document.getElementById(eventName);
    btn.style.backgroundColor = '#1DD100';
    disabled('.kbdbtn');
}
function removebgcolor(eventName) {
    const bg = document.querySelectorAll(eventName);
    for (let i = 0; i < bg.length; i++) {
        bg[i].style.backgroundColor = '';
    }

}
function disabled(elementName) {
    document.querySelectorAll(elementName).disabled = false;
}

function getElementBySeatsonkka(eventID) {
    const seat = document.getElementById(eventID);
    const seatText = seat.innerText;
    let i = parseInt(seatText);
    const seatEnecreaseNUmber = i + 1;
    if (seatEnecreaseNUmber > 40) {
        return seatEnecreaseNUmber;
    }
    seat.innerText = seatEnecreaseNUmber;

}
function seatLeftElementBySeatsonkka(eventID) {
    const seat = document.getElementById(eventID);
    const seatText = seat.innerText;
    const seatConvertNumber = parseInt(seatText);
    const seatEnecreaseNUmber = seatConvertNumber - 1;
    if (seatEnecreaseNUmber < 0) {
        return seatEnecreaseNUmber;
    }
    seat.innerText = seatEnecreaseNUmber;

}



function setelement(elementId) {
    const parents = document.getElementById(elementId);
    const newChiledAdd = document.createElement('div');
    newChiledAdd.id = 'setptag';
    newChiledAdd.classList.add('font-medium', 'text-base', 'flex', 'justify-between', 'text-[#03071299]');
    newChiledAdd.innerHTML = ` <p>Economoy</p>
                                     <p id="ticket-price">550</p>`;
    const beforeChiled = parents.children[2];
    parents.insertBefore(newChiledAdd, beforeChiled);
}
function getSeatName(elementName) {
    const seatNameCall = document.getElementById(elementName);
    return seatNameCall;
}
function getPriceElement(eventID) {
    const seatPrice = document.getElementById(eventID);
    const seatText = seatPrice.innerText;
    const seatPriceNumber = parseInt(seatText);
    return seatPriceNumber;


}
function setPricecurrentvalue(eventID) {
    const seatPrice = document.getElementById(eventID);
    const seatText = seatPrice.innerText;
    const seatPriceNumber = parseInt(seatText);
    return seatPriceNumber;

}
function setPricecurrentvalue(eventID) {
    const seatPrice = document.getElementById(eventID);
    const seatText = seatPrice.innerText;
    const priceSeat = parseInt(seatText);
    const totalTicketPrice = priceSeat + 550;
    seatPrice.innerText = totalTicketPrice;
}


function setbgcolor(eventName) {
    removebgcolor('.kbdbtn')
    const btn = document.getElementById(eventName);
    btn.style.backgroundColor = '#1DD100';


}
function removebgcolor(eventName) {
    const bg = document.querySelectorAll(eventName);
    for (let i = 0; i < bg.length; i++) {
        bg[i].style.backgroundColor = '';

    }
}