const labContent = {
    1: {
        condition: "Умова лабораторної роботи 1: Опис умови першої лабораторної роботи.",
        resultLink: "index.html",
        codeLink: "index.html"
    },
    2: {
        condition: "Умова лабораторної роботи 2: 2.1 Варіант 1. Горизонтальне дворівневе меню, яке розкривається при наведенні покажчика миші. Другий рівень меню приховується, коли вказівник миші залишає область вибраного пункту або меню;" + "2.2 Організуйте рух зображення праворуч наліво.",
        resultLink: "/lab2/Lab2_1.html",
        codeLink: "/lab2/Lab2_code.html"
    },
    3: {
        condition: "Умова лабораторної роботи 3: Використовувати можливості, що надаються об'єктною моделлю документа DOM, можна використовувати фреймворк jQuery"+"Калькулятор на чотири дії (з кнопками, що натискаються).",
        resultLink: "/lab3/Lab3.html",
        codeLink: "/lab3/Lab3_code.html"
    },
    4: {
        condition: "Умова лабораторної роботи 4: 8. Дана рядок 'ave a#a a2a a$a a4a a5a aa aca'. Напишіть регулярний вираз, який замінить усі прогалини на '!'.",
        resultLink: "/lab4/Lab4.html",
        codeLink: "/lab4/Lab4_code.html"
    },
    5: {
        condition: "За допомогою jQuery реалізувати дії "+
        "1. За подвійним натисканням на елемент сторінки виводити модальне вікно із значенням атрибуту цього елемента"+
        "2. Текст синього кольору рухається зліва направо до центру сторінки, що збільшується, стає жовтим, потім переміщається вправо та збільшується"+
        "3. Відображати інший елемент",
        resultLink: "/lab5/Lab5.html",
        codeLink: "/lab5/Lab5_code.html"
    },
    6: {
        condition: "Умова лабораторної роботи 3: Ваша фотографія зі ставленням сторін 3*4"+
        "1. Відображається по центру у верхній частині вікна браузера."+
        "2. З'являється підпис під фото(ПІБ)"+
        "3. Фотографія зменшує розмір у 2 рази"+
        "4. Рухає по вертикалі до нижньої межі вікна браузера"+
        "5. Фото змінюється на інше"+
        "6. Розчиняється.",
        resultLink: "/lab6/Lab6.html",
        codeLink: "/lab6/Lab6_code.html"
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
