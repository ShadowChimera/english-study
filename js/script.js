"use strict"

$(document).ready(function() {

    let $input = $('.auto-input');

    // console.log($input.length, $input[1]);

    $('.auto-input').each(function(index) {
        let $buffer = $(`div[name=${$(this).attr('name')}]`);
        $buffer.text($(this).val());
        $(this).width($buffer.width());

        $(this).on('input', function() {
            let $buffer = $(`div[name=${$(this).attr('name')}]`)
            $buffer.text($(this).val());
            $(this).width($buffer.width());
        });
    });

});