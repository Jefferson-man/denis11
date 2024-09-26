$(document).ready(function() {
    //  показываю оконо
    $("#dbl-click-element").dblclick(function() {
        var info = $(this).data("info");
        $("#modal-text").text(info);
        $("#modal").show();
    });

    // закрываю окно
    $("#close-modal").click(function() {
        $("#modal").hide();
    });

    // анимация текста
    $(document).ready(function() {
        $("#animate-text").css({
            position: "absolute",
            left: "0",
            top: "50px",  // фиксирую высоте
            color: "blue",  // начальный цвет
            fontSize: "30px"  // и размер шрифта
        }).animate({
            left: "50%",  // движение в право
            fontSize: "40px",  //  увеличиваю
        }, 2000, function() {
            // в центре меняем цвет на желтый
            $(this).css("color", "yellow");
    
            $(this).animate({
                left: "100%",  // текст движется вправо, выходит за мою страницу
                fontSize: "50px",  // еще больше увеличивается
                opacity: 0  // делается прозрачным при уходе за экран
            }, 2000);
        });
    });
    

    // Завдання 3: Показати/сховати елемент форми
    $("#show-keyword").change(function() {
        if ($(this).is(":checked")) {
            $("#keyword-section").slideDown();
        } else {
            $("#keyword-section").slideUp();
        }
    });
});