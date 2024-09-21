// лічильник
let attempts = 0;

// перевірка введених даних
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // отримання значень в полях
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const organization = document.getElementById('organization').value.trim();
    const creditCard = document.getElementById('creditCard').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // заповненість усіх ціх полів
    if (!firstName || !lastName || !organization || !creditCard || !phone || !email) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    // шаблон для перевірки номера кредитної картки
    const creditCardPattern = /^\d{16}$/; // 16 цифр

    // перевірка номера картки
    if (!creditCardPattern.test(creditCard)) {
        attempts++;
        if (attempts >= 3) {
            alert('Ви використали всі спроби. Поле заблоковано.');
            document.getElementById('creditCard').disabled = true; // заблок. поля
            return;
        } else {
            alert(`Невірний номер кредитної картки. У вас залишилося ${3 - attempts} спроб.`);
            return; // Вихід з функції, якщо я уввів невірний номер картки
        }
    }

    // правильності введення імені та прізвища
    const namePattern = /^[A-Za-zА-Яа-я'їІі]{2,}$/; // Мінімум 2 букви
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        alert('Ім\'я та прізвище повинні містити щонайменше 2 букви.');
        return;
    }

    // перевірка номеру телефону 
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Невірний номер телефону. Введіть 10 цифр.');
        return;
    }

    // перевірка пошти ту яку вів
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // шаблон пошти
    if (!emailPattern.test(email)) {
        alert('Невірна адреса електронної пошти.');
        return;
    }

    // якщо все вірно
    alert('Реєстрація успішна!');
});

// регулярний виразом моє завдання
document.getElementById('replaceSpaces').addEventListener('click', function() {
    const input = document.getElementById('inputString').value;
    const result = input.replace(/\s+/g, '!'); // замінюю всіх пробіли на !
    document.getElementById('result').innerText = result; // вивод
});
