let div = document.getElementById('main-container');

let table = document.createElement('table');
table.id = 'utable';
table.class = 'tElem';

div.append(table);

document.getElementById('generate').addEventListener('click', generateTable);

document.getElementById('tWidth').oninput = function () {
    tableWidth();
}

document.getElementById('bWidth').oninput = function () {
    document.getElementById('error').textContent = '';
    if (borderWidthCorrect(document.getElementById('bWidth').value)) {
        borderWidth();
    }

}

document.getElementById('tableBG').oninput = function () {
    tableBG();
}

document.getElementById('headerBG').oninput = function () {
    headerBG();
}

document.getElementById('bColor').oninput = function () {
    borderColor();
}

document.getElementById('fColor').oninput = function () {
    fontColor();
}

document.getElementById('bColl').onchange = function () {
    borderSep();
    if (document.getElementById('bColl').checked === true) {
        borderColl();
    }
}

document.getElementById('fType').onchange = function () {
    fontFamily();
}

document.getElementById('fWeight').onchange = function () {
    fontWeight();
}

document.getElementById('textAlign').onchange = function () {
    textAlign();
}


document.getElementById('fSize').oninput = function () {
    if (valueIsCorrect(document.getElementById('fSize').value)) {
        fSize();
    }

}

document.getElementById('getCode').onclick = function() {
    getTableCode();
}



//main function to generate table
function generateTable() {
    emptyTable();
    generateRows();
    generateHeader();
    generateColumns();
    borderWidth();
}

function emptyTable() {
    if (table.hasChildNodes) {
        table.textContent = '';
    }
}

function generateRows() {
    let rowsInput = document.getElementById('rows').value;
    if (valueIsCorrect(rowsInput)) {
        for (let i = 0; i <= rowsInput; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
        }
    }

}

function generateColumns() {
    let rows = document.getElementsByTagName('tr');
    let colsInput = document.getElementById('columns').value;
    if (valueIsCorrect(colsInput)) {
        generateHeader(rows, colsInput);

        for (let i = 1; i < rows.length; i++) {
            for (let j = 1; j <= colsInput; j++) {
                let td = document.createElement('td');
                td.className = 'tElem';
                td.textContent = 'value';
                rows[i].append(td);
            }
        }
    }
}

function generateHeader(rows, colInput) {
    for (let i = 1; i <= colInput; i++) {
        let th = document.createElement('th');
        th.className = 'tElem';
        th.textContent = 'Column ' + i;
        rows[0].append(th);
    }
}

function tableWidth() {
    let tWidth = document.getElementById('tWidth').value;
    table.style.width = tWidth + '%';
}

function borderWidth() {
    let bWidth = document.getElementById('bWidth').value;
    let tElements = document.querySelectorAll('.tElem');
    table.style.borderCollapse = "collapse";
    for (let element of tElements) {
        element.style.border = bWidth + 'px solid black';
    }
}

function borderColor() {
    let bColor = document.getElementById('bColor').value;
    let tElements = document.querySelectorAll('.tElem');
    for (let element of tElements) {
        element.style.borderColor = bColor;
    }
}

function tableBG() {
    let tableBG = document.getElementById('tableBG').value;
    let tdList = document.querySelectorAll('td');
    for (let td of tdList) {
        td.style.backgroundColor = tableBG;
    }
}

function headerBG() {
    let headerBG = document.getElementById('headerBG').value;
    let thList = document.querySelectorAll('th');
    for (let th of thList) {
        th.style.backgroundColor = headerBG;
    }
}

function fontColor() {
    let fColor = document.getElementById('fColor').value;
    let tdList = document.querySelectorAll('td');
    for (let td of tdList) {
        td.style.color = fColor;
    }
}

function borderColl() {
    table.style.borderCollapse = 'collapse';
}
function borderSep() {
    table.style.borderCollapse = 'separate';
}

function fontFamily() {
    let fontFam = document.getElementById('fType').value;
    table.style.fontFamily = fontFam;
}

function fontWeight() {
    let fWeight = document.getElementById('fWeight').value;
    table.style.fontWeight = fWeight;
}

function textAlign() {
    let tAlign = document.getElementById('textAlign').value;
    let tdList = document.querySelectorAll('td');
    for (let td of tdList) {
        td.style.textAlign = tAlign;
    }
}

function fSize() {
    let fSize = document.getElementById('fSize').value;
    if (fSize === null) {
        table.style.fontSize = 16 + 'px';
    }
    table.style.fontSize = fSize + 'px';
}

function valueIsCorrect(val) {
    document.getElementById('error').textContent = '';
    if (val !== '' && Number.isInteger(Number(val)) && val > 0) {
        return true;
    }
    document.getElementById('error').innerHTML = 'Enter integer value > 0';
}

function borderWidthCorrect(val) {
    if (Number.isInteger(Number(val)) && val >= 0) {
        return true;
    } else {
        document.getElementById('error').innerHTML = 'Enter integer value ≥ 0';
    }
}

function getTableCode() {
    let string = document.getElementsByTagName('table')[0].innerHTML;
    navigator.clipboard.writeText(string);
}



