function filterData() {
    var dayFilter = document.getElementById('dayFilter').value;

    var xmlRequest = new XMLHttpRequest();
    var xslRequest = new XMLHttpRequest();

    xmlRequest.open("GET", "index.xml", true);
    xslRequest.open("GET", "style.xsl", true);

    xmlRequest.onreadystatechange = function () {
        if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
            var xml = xmlRequest.responseXML;

            xslRequest.onreadystatechange = function () {
                if (xslRequest.readyState === 4 && xslRequest.status === 200) {
                    var xsl = xslRequest.responseXML;

                    var xslProcessor = new XSLTProcessor();
                    xslProcessor.setParameter(null, 'selectedDay', dayFilter);
                    xslProcessor.importStylesheet(xsl);
                    var resultDocument = xslProcessor.transformToFragment(xml, document);
                    
                    document.getElementById('output').innerHTML = '';
                    document.getElementById('output').appendChild(resultDocument);
                }
            };
            xslRequest.send();
        }
    };

    xmlRequest.send();
}
