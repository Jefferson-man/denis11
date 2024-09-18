const labContent = {
    1: {
        condition: "Умова лабораторної роботи 1: Опис умови першої лабораторної роботи.",
        resultLink: "index.html",
        codeLink: "index.html"
    },
    2: {
        condition: "Умова лабораторної роботи 2: 2.1 Варіант 1. Горизонтальне дворівневе меню, яке розкривається при наведенні покажчика миші. Другий рівень меню приховується, коли вказівник миші залишає область вибраного пункту або меню; 2.2 Організуйте рух зображення праворуч наліво.",
        resultLink: "/lab2/Lab2_1.html",
        codeLink: "/lab2/Lab2_code.html"
    },
    3: {
        condition: "Умова лабораторної роботи 3: Використовувати можливості, що надаються об'єктною моделлю документа DOM, можна використовувати фреймворк jQuery\nКалькулятор на чотири дії (з кнопками, що натискаються).",
        resultLink: "/lab3/Lab3.html",
        codeLink: "/lab3/Lab3_code.html"
    }
};

function loadLabContent(labNumber) {
    const content = labContent[labNumber];
    if (content) {
        // Обновление условия лабораторной работы
        document.getElementById('labCondition').innerHTML = content.condition;

        // Обновление URL для кнопки "Результати виконання роботи"
        document.getElementById('labResultButton').onclick = function() {
            window.location.href = content.resultLink;
        };

        // Обновление URL для кнопки "Код файлів"
        document.getElementById('labCodeButton').onclick = function() {
            window.location.href = content.codeLink;
        };

        document.getElementById('labCondition').style.display = "block";
    } else {
        document.getElementById('labCondition').innerHTML = "Немає даних для цієї лабораторної роботи.";
    }
}

function toggleCondition() {
    const condition = document.getElementById('labCondition');
    condition.style.display = condition.style.display === "none" ? "block" : "none";
}
