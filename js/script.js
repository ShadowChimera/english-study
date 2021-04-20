"use strict"

$(document).ready(function() {
    $('.auto-input').each(function() {
        let $buffer = $(`div[name=${$(this).attr('name')}]`);
        $buffer.text($(this).val());
        $(this).width($buffer.width());

        $(this).on('input', function() {
            let $buffer = $(`div[name=${$(this).attr('name')}]`)
            $buffer.text($(this).val());
            $(this).width($buffer.width());
        });
    });



    $('.my-courses-link').each(function(){
        $(this).on('click', function(){
            document.location.href = `components/my-courses/${$(this).attr('id')}`;
        });
    });


    $('.lectures__item .btn').each(function(){
        $(this).on('click', function(){
            document.location.href = `course-lectures/lecture1.html`;
        });
    });
});