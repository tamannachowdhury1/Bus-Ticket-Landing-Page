
function gothePoribohon() {
    const getsection = document.getElementById('poribohonSection').scrollIntoView();
    console.log(getsection);
};
let count = 0;

document.getElementById('A1').addEventListener('click', function () {
    count++;

    setbgcolor('A1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');
    setelement('parentId');

    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');

    const btnInnerText = document.getElementById('A1');

    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);

    setPricecurrentvalue('currentTotal');


    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {

        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('A2').addEventListener('click', function () {
    count++;

    setbgcolor('A2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');

    setelement('parentId');

    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');

    const btnInnerText = document.getElementById('A2');

    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('B1').addEventListener('click', function () {
    count++;

    setbgcolor('B1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');

    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');

    const btnInnerText = document.getElementById('B1');

    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);

    setPricecurrentvalue('currentTotal');

    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('B2').addEventListener('click', function () {
    count++;

    setbgcolor('B2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');

    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');

    const btnInnerText = document.getElementById('B2');

    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('C1').addEventListener('click', function (event) {
    count++;

    setbgcolor('C1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');

    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');

    const btnInnerText = document.getElementById('C1');

    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('C2').addEventListener('click', function () {
    count++;

    setbgcolor('C2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');

    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');

    const btnInnerText = document.getElementById('C2');

    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('D1').addEventListener('click', function () {
    count++;
    setbgcolor('D1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');

    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');

    const btnInnerText = document.getElementById('D1');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');


    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('D2').addEventListener('click', function () {

    setbgcolor('D2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft');

    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('D2');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('E1').addEventListener('click', function () {

    setbgcolor('E1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('E1');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {
        btnInnerText.setAttribute('disabled', 'true');

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('E2').addEventListener('click', function () {

    setbgcolor('E2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('E2');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;

    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');

    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }


});
document.getElementById('F1').addEventListener('click', function () {
    setbgcolor('F1');

    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('F1');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    /* if (count < 1) {

        inputID.setAttribute('disabled', 'true');
    }
    else */ if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('F2').addEventListener('click', function () {

    setbgcolor('F2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('F2');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }

    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('G1').addEventListener('click', function () {

    setbgcolor('G1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('G1');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');

    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('G2').addEventListener('click', function () {

    setbgcolor('G2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('G2');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');

    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('H1').addEventListener('click', function () {

    setbgcolor('H1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('H1');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');

    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('H2').addEventListener('click', function () {

    setbgcolor('H2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('H2');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('I1').addEventListener('click', function () {

    setbgcolor('I1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('I1');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('I2').addEventListener('click', function () {

    setbgcolor('I2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('I2');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count < 1) {

        inputID.setAttribute('disabled', 'true');
    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('J2').addEventListener('click', function () {

    setbgcolor('J2');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('J2');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');

    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }

    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('J1').addEventListener('click', function () {

    setbgcolor('J1');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('J1');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {

        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('A3').addEventListener('click', function () {
    setbgcolor('A3');

    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('A3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('A4').addEventListener('click', function () {

    setbgcolor('A4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('A4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');

    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('B3').addEventListener('click', function () {

    setbgcolor('B3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('B3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('B4').addEventListener('click', function () {

    setbgcolor('B4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('B4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('C3').addEventListener('click', function () {

    setbgcolor('C3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('C3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('C4').addEventListener('click', function () {

    setbgcolor('C4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('C4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('D3').addEventListener('click', function () {

    setbgcolor('D3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('D3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }

    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('D4').addEventListener('click', function () {

    setbgcolor('D4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('D4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }

    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('E3').addEventListener('click', function () {

    setbgcolor('E3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('E3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('E4').addEventListener('click', function () {

    setbgcolor('E4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('E4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('F3').addEventListener('click', function () {
    setbgcolor('F3');

    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('F3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('F4').addEventListener('click', function () {

    setbgcolor('F4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('F4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('G3').addEventListener('click', function () {

    setbgcolor('G3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('G3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('G4').addEventListener('click', function () {

    setbgcolor('G4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('G4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');

    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('H3').addEventListener('click', function () {

    setbgcolor('H3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('H3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('H4').addEventListener('click', function () {

    setbgcolor('H4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('H4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('I3').addEventListener('click', function () {

    setbgcolor('I3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('I3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('I4').addEventListener('click', function () {

    setbgcolor('I4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('I4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }
});
document.getElementById('J3').addEventListener('click', function () {

    setbgcolor('J3');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('J3');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');
    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});
document.getElementById('J4').addEventListener('click', function () {

    setbgcolor('J4');
    getElementBySeatsonkka('seatsonkka');
    seatLeftElementBySeatsonkka('seatLeft')
    setelement('parentId');
    const newp = getSeatName('setptag');
    const setaname = document.createElement('p');
    const btnInnerText = document.getElementById('J4');
    const btnText = btnInnerText.innerText;
    setaname.innerText = btnText;
    newp.prepend(setaname);
    setPricecurrentvalue('currentTotal');
    count++;
    const apply = document.getElementById('applyBtn');
    if (count < 4) {


        apply.setAttribute('disabled', 'true');
    }
    else if (count === 4) {
        console.log(alert('you can select only four tickets'));

        apply.removeAttribute('disabled', 'false');
    }
    else {
        btnInnerText.setAttribute('disabled', 'true');
        apply.setAttribute('disabled', 'true');
    }
    const input = inputvalue('number');
    const inputID = document.getElementById('nextbutton');

    if (count === 1 && input !== null && typeof input === 'number') {

        inputID.removeAttribute('disabled', 'false');

    }
    else if (count < 1) {
        inputID.setAttribute('disabled', 'true');
    }

});

function nextbtn() {
    const success = document.getElementById('success');
    success.classList.remove('hidden');
    addvisible('ft');
    addvisible('head');
    addvisible('heros');
    addvisible('bonas');
    addvisible('poribohonSection');
}
function continueBtn() {
    const success = document.getElementById('success');
    success.classList.add('hidden');
    removevisible('ft');
    removevisible('head');
    removevisible('heros');
    removevisible('bonas');
    removevisible('poribohonSection');
}