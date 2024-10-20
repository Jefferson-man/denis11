function toggleCondition() {
    const labConditionElement = document.getElementById('labCondition');
    labConditionElement.style.display = labConditionElement.style.display === 'none' ? 'block' : 'none';
  
    const labNumber = 7; // Замінити на потрібний номер лабораторної роботи
    const labData = labContent[labNumber];
  
    // Формуємо HTML-код з використанням шаблону
    const formattedText = `
      <h2>Умова лабораторної роботи ${labNumber}</h2>
      <p>${labData.condition.replace(/\*\s*/g, '<li>').replace(/\n/g, '</li></p><p>')}</p>
    `;
  
    labConditionElement.innerHTML = formattedText;
  }
  
  const labContent = {
    1: {
        condition: `Умова лабораторної роботи 1: Опис умови першої лабораторної роботи.`,
        resultLink: "index.html",
        codeLink: "index.html"
    },
    2: {
        condition: `Умова лабораторної роботи 2:
        2.1 Варіант 1. Горизонтальне дворівневе меню, яке розкривається при наведенні покажчика миші.
        Другий рівень меню приховується, коли вказівник миші залишає область вибраного пункту або меню;
        2.2 Організуйте рух зображення праворуч наліво.`,
        resultLink: "/lab2/Lab2_1.html",
        codeLink: "/lab2/Lab2_code.html"
    },
    3: {
        condition: `Умова лабораторної роботи 3: Використовувати можливості, що надаються об'єктною моделлю документа DOM.
        Можна використовувати фреймворк jQuery.
        Калькулятор на чотири дії (з кнопками, що натискаються).`,
        resultLink: "/lab3/Lab3.html",
        codeLink: "/lab3/Lab3_code.html"
    },
    4: {
        condition: `Умова лабораторної роботи 4: 8.
        Дана рядок 'ave a#a a2a a$a a4a a5a aa aca'.
        Напишіть регулярний вираз, який замінить усі прогалини на '!'.`,
        resultLink: "/lab4/Lab4.html",
        codeLink: "/lab4/Lab4_code.html"
    },
    5: {
        condition: `За допомогою jQuery реалізувати дії:
        1. За подвійним натисканням на елемент сторінки виводити модальне вікно із значенням атрибуту цього елемента.
        2. Текст синього кольору рухається зліва направо до центру сторінки, що збільшується, стає жовтим, потім переміщається вправо та збільшується.
        3. Відображати інший елемент.`,
        resultLink: "/lab5/Lab5.html",
        codeLink: "/lab5/Lab5_code.html"
    },
    6: {
        condition: `Умова лабораторної роботи 6:
        Ваша фотографія зі ставленням сторін 3*4.
        1. Відображається по центру у верхній частині вікна браузера.
        2. З'являється підпис під фото (ПІБ).
        3. Фотографія зменшує розмір у 2 рази.
        4. Рухає по вертикалі до нижньої межі вікна браузера.
        5. Фото змінюється на інше.
        6. Розчиняється.`,
        resultLink: "/lab6/Lab6.html",
        codeLink: "/lab6/Lab6_code.html"
    },
    7: {
        condition: `Основні конструкції мови XML:
        1. Побудувати графічно статичну та динамічну модель.
        Варіант 8.
        Інформація про графік роботи лікарів медичного центру:
        - Спеціалізація лікаря;
        - Лікар:
        - Прізвище,
        - Ім'я,
        - По батькові,
        - Дні прийому;
        - Час прийому щодня.
        2. Створіть XML-документ, використовуючи інформаційну модель, побудовану в першій частині лабораторної роботи.
        Документ має вміщати якнайменше ДЕСЯТЬ записів!`,
        resultLink: "/lab7/index.xml",
        codeLink: "/lab7/Lab7_code.html"
    },
    8: {
        condition: `1. Створити опис структури документа XML за допомогою DTD-схеми.
                    2. Виконати опис структури документа XML за допомогою XML Schema .`,
        resultLink: "/lab8/Lab8_code.html",
        codeLink: "/lab8/Lab8_code.html"
    },
    9: {
        condition: `1) Створіть власні шаблони XSL. Як вихідний файл використовуйте результати робіт 6 і 7.
        2) Виконайте сортування записів за одним із можливих критеріїв та фільтрацію даних за одним із можливих показників`,
        resultLink: "/lab9/Lab9.html",
        codeLink: "/lab9/Lab9_code.html"
    },
    10: {
        condition: `1. Завантажте документ XML, розроблений у попередніх роботах, в об'єкт документа та відобразіть у вікні браузера.
        2. Використовуючи методи DOM XML, сформуйте HTML-сторінку, що містить таблицю з кількох стовпців .
        3. Використовуючи методи DOM XML, замініть цифрові значення їх словесними еквівалентами.`,
        resultLink: "/lab10/Lab10.html",
        codeLink: "/lab10/Lab10_code.html"
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
