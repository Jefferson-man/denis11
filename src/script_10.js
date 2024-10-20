function loadXML() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.xml', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var xmlText = xhr.responseText;
            var xml = xhr.responseXML;
            
            document.getElementById('xml-original').textContent = xmlText;
            displayDoctors(xml, 'xml-table', false);
            displayDoctors(xml, 'xml-table-converted', true);
        }
    };
    xhr.send();
}

// отображения таблицы из XML
function displayDoctors(xml, elementId, convertValuesFlag) {
    var output = document.getElementById(elementId);
    var table = document.createElement('table');
    table.border = '1';

    var headers = ['Спеціалізація', 'Прізвище', 'Ім\'я', 'Дні прийому', 'Час прийому', 'Номер кабінету'];
    var tr = document.createElement('tr');
    headers.forEach(function (header) {
        var th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });
    table.appendChild(tr);

    // данных из XML
    var doctors = xml.getElementsByTagName('Doctor');
    for (var i = 0; i < doctors.length; i++) {
        var doctor = doctors[i];
        var row = document.createElement('tr');

        var specialization = doctor.getElementsByTagName('Specialization')[0].textContent;
        row.appendChild(createCell(specialization));

        var surname = doctor.getElementsByTagName('Surname')[0].textContent;
        row.appendChild(createCell(surname));

        var firstname = doctor.getElementsByTagName('Firstname')[0].textContent;
        row.appendChild(createCell(firstname));
    
        var days = doctor.getElementsByTagName('Days')[0].textContent;
        row.appendChild(createCell(days));

        var time = doctor.getElementsByTagName('Time')[0].textContent;
        if (convertValuesFlag) {
            time = convertTimeAndRoom(time);
        }
        row.appendChild(createCell(time));

        var room = doctor.getElementsByTagName('Room')[0].textContent;
        if (convertValuesFlag) {
            room = convertTimeAndRoom(room);
        }
        row.appendChild(createCell(room));

        table.appendChild(row);
    }
    output.innerHTML = '';
    output.appendChild(table);
}

// создания ячейки таблицы
function createCell(text) {
    var cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

function convertTimeAndRoom(value) {
    var numberMap = {
        '0': 'нуль',
        '1': 'один',
        '2': 'два',
        '3': 'три',
        '4': 'чотири',
        '5': 'п\'ять',
        '6': 'шість',
        '7': 'сім',
        '8': 'вісім',
        '9': 'дев\'ять'
    };
    return value.split('').map(function (char) {
        return numberMap[char] ? numberMap[char] + ' ' : char; 
    }).join('');
}

window.onload = loadXML;
