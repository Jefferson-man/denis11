$(document).ready(function() {
    // 1. Фото по центру в верхній частині
    $('#photo').css({
        'position': 'absolute',
        'top': '20px',
        'left': '50%',
        'transform': 'translateX(-50%)'
    });

    // 2. Відображення підпису під фото
    $('#caption').fadeIn(1000);

    // 3. Зменшення фото в 2 рази
    $('#photo').animate({
        width: '75px',
        height: '100px'
    }, 1000, function() {
        // 4. Рух по вертикалі до нижньої межі
        $(this).animate({
            top: $(window).height() - $(this).height() - 20
        }, 2000, function() {
            // 5. Заміна фото
            $(this).attr('src', '/image/image6_2.jpg');

            // 6. Розчинення
            $(this).fadeOut(1000);
        });
    });
});