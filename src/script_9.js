document.addEventListener("DOMContentLoaded", () => {
    loadOriginalData();
});

function loadOriginalData() {
    fetch("index.xml")
        .then(response => response.text())
        .then(data => {
            const xml = loadXMLString(data);
            fetch("style.xsl")
                .then(response => response.text())
                .then(xslData => {
                    const xsl = loadXMLString(xslData);
                    const resultDocument = transformXML(xml, xsl);
                    document.getElementById("originalData").appendChild(resultDocument);
                });
        });
}

function loadXMLString(xmlString) {
    const parser = new DOMParser();
    return parser.parseFromString(xmlString, "text/xml");
}

function transformXML(xml, xsl) {
    const xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    return xsltProcessor.transformToFragment(xml, document);
}

function filterDoctors() {
    const selectedDay = document.getElementById("daySelect").value;

    fetch("index.xml")
        .then(response => response.text())
        .then(data => {
            const xml = loadXMLString(data);
            const filteredDoctors = Array.from(xml.getElementsByTagName("Doctor")).filter(doctor => {
                const daysText = doctor.getElementsByTagName("Days")[0].textContent;

                // возращает всех
                if (selectedDay === "") {
                    return true; 
                }

                // фильрация по дню
                return daysText.split(',').map(day => day.trim()).includes(selectedDay);
            });

            const filteredXML = createFilteredXML(filteredDoctors);
            fetch("style.xsl")
                .then(response => response.text())
                .then(xslData => {
                    const xsl = loadXMLString(xslData);
                    const resultDocument = transformXML(filteredXML, xsl);
                    const filteredDataDiv = document.getElementById("filteredData");
                    filteredDataDiv.innerHTML = "";
                    filteredDataDiv.appendChild(resultDocument);
                });
        });
}


function createFilteredXML(doctors) {
    const xmlString = `<Doctors>${doctors.map(doctor => new XMLSerializer().serializeToString(doctor)).join('')}</Doctors>`;
    return loadXMLString(xmlString);
}

function sortDoctors() {
    fetch("index.xml")
        .then(response => response.text())
        .then(data => {
            const xml = loadXMLString(data);
            const doctorsArray = Array.from(xml.getElementsByTagName("Doctor"));

            // за фамилией
            doctorsArray.sort((a, b) => {
                const surnameA = a.getElementsByTagName("Surname")[0].textContent;
                const surnameB = b.getElementsByTagName("Surname")[0].textContent;
                return surnameA.localeCompare(surnameB);
            });

            const sortedXML = createFilteredXML(doctorsArray);
            fetch("style.xsl")
                .then(response => response.text())
                .then(xslData => {
                    const xsl = loadXMLString(xslData);
                    const resultDocument = transformXML(sortedXML, xsl);
                    const sortedDataDiv = document.getElementById("sortedData");
                    sortedDataDiv.innerHTML = "";
                    sortedDataDiv.appendChild(resultDocument);
                });
        });
}
