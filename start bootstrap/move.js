;
$(function () {
    var item1 = $('#item-1');
    var item2 = $('#item-2');
    var item3 = $('#item-3');
    var item4 = $('#item-4');
    var item5 = $('#item-5');
    var backtop = $('#backtop');

    
    backtop.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    })
    item1.on('click', function () {
        $('html,body').animate({
            scrollTop: 700
        }, 700);
    });
    item2.on('click', function () {
        $('html,body').animate({
            scrollTop: 1400
        }, 700);
    });
    item3.on('click', function () {
        $('html,body').animate({
            scrollTop: 2600
        }, 700);
    });
    item4.on('click', function () {
        $('html,body').animate({
            scrollTop: 4300
        }, 700);
    });
    item5.on('click', function () {
        $('html,body').animate({
            scrollTop: 5280
        }, 700);
    });
    
})
