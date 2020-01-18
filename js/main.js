let div = document.getElementById('main-container');

let table = document.createElement('table');
table.class = 'tElem';

div.append(table);

document.getElementById('generate').addEventListener('click', generateTable);

document.getElementById('tWidth').oninput = function () {
    tableWidth();
}

document.getElementById('bWidth').oninput = function () {
    borderWidth();
}

document.getElementById('tableBG').oninput = function () {
    tableBG();
}

document.getElementById('headerBG').oninput = function () {
    headerBG();
}


function generateTable() {
    emptyTable();
    generateRows();
    generateHeader();
    generateColumns();
}

function emptyTable() {
    if (table.hasChildNodes) {
        table.textContent = '';
    }
}

function generateRows() {
    let rowsInput = document.getElementById('rows').value;
    for (let i = 0; i <= rowsInput; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
    }
}

function generateColumns() {
    let rows = document.getElementsByTagName('tr');
    let colsInput = document.getElementById('columns').value;

    generateHeader(rows, colsInput);

    for (let i = 1; i < rows.length; i++) {
        for (let j = 1; j <= colsInput; j++) {
            let td = document.createElement('td');
            td.className = 'tElem';
            td.textContent = i;
            rows[i].append(td);
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
    //let tElements = document.getElementsByClassName('tElem');
    table.style.borderCollapse = "collapse";
    for (let element of tElements) {
        element.style.border = bWidth + 'px solid black';
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



