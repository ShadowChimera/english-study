"use strict"

$(document).ready(function() {
    // Модальные окна
    $('.link.nav#login, .btn.login-reqired').on('click', function(e){
        let $modal = $('#authorization-modal');
        $modal.css('display', 'flex');
        $modal.addClass('visible');

        $modal.on('click', function(e){
            if(e.target.className.includes('modal')){
                $modal.removeClass('visible');
                $('input').each(function() {
                    $(this).val('');
                });
            }
        });
    });


    // Аккордеон
    $('.expandable .expand-btn').on('click', function() {
        $(this).toggleClass('cover');
        let $icon = $(this).find('.material-icons');
        let $iconType = $(this).find('.material-icons').text()
        if($iconType == "expand_less") {
            $icon.text("expand_more");
        }
        else if ($iconType == "expand_more") {
            $icon.text("expand_less");
        }
        $(this).next().slideToggle(500);
    });


    // Toggle-icon   
    $('input[type=checkbox].hidden').each(function(){
        function toggle(e) {
            let $target = $(e.target);
            if($target.attr('class') == undefined) {
                $target = $target.prev();
            }

            if($target.attr('class').includes('toggle-on')) {
                $target.removeClass('toggle-on');
                $target.addClass('toggle-off');
                $target.text('toggle_off');
            }
            else if($target.attr('class').includes('toggle-off')) {
                $target.removeClass('toggle-off');
                $target.addClass('toggle-on');
                $target.text('toggle_on');
            }
        }

        let $toggleIcon = $(this).next();
        if(!$toggleIcon.text().includes("toggle")) {
            return;
        }
        $toggleIcon.on('click', toggle);
        
        let $toggleLabel = $toggleIcon.next();
        if($toggleLabel.prop('tagName').toLowerCase() != 'label') {
            return;
        }
        $toggleLabel.on('click', toggle);
    });

    // Auto Input
    $('#auto-input-btn').on('click', function(){
        $('.auto-input').each(function() {
            function alignInput($input) {
                let $buffer = $(`pre[name= for-${$input.attr('name')} ]`);
                $buffer.text($input.val());
                console.log("start-input-length: " + $input.css('width'),
                            "buffer-lenght: " + $buffer.css('width'));
                $input.width($buffer.width());
                // $input.css('width', $buffer.css('width'));
                console.log("end-input-length: " + $input.css('width'),
                            "buffer-lenght: " + $buffer.css('width'));
            }
            function alignIndents($input) {
                let $buffer = $(`pre[name= for-${$input.attr('name')} ]`);
                $buffer.css('padding', $input.css('padding'));
                $buffer.css('border', $input.css('border'));
            }
    
    
            console.log(`pre[name= for-${$(this).attr('name')} ]`);
            alignIndents($(this));
            alignInput($(this));
    
            $(this).on('input', function() {
                alignInput($(this));
            });
        });
    });

    $('.detailed-link').on('click', function(e) {
        if(
            $(e.target).attr('class').includes("expand-btn")
            || $(e.target).attr('class').includes("expandable-part")
            || $(e.target).attr('class').includes("link")
                && !$(e.target).attr('class').includes("detailed-link")
            || $(e.target).parent().attr('class').includes("expand-btn")
            || $(e.target).parent().attr('class').includes("expandable-part")
            || $(e.target).parent().attr('class').includes("link")
                && !$(e.target).parent().attr('class').includes("detailed-link")
            || $(e.target).parent().parent().attr('class').includes("expandable-part")
        ) {
            console.log("prevented", e.target);
            console.log(
                        $(e.target).attr('class').includes("expand-btn"),
                        $(e.target).attr('class').includes("expandable-part"),
                        $(e.target).attr('class').includes("link"),
                        $(e.target).parent().attr('class').includes("expand-btn"),
                        $(e.target).parent().attr('class').includes("expandable-part"),
                        $(e.target).parent().attr('class').includes("link"),
                        $(e.target).parent().parent().attr('class').includes("expandable-part")
                        );
            return;
        }
        if($(this).attr('name').startsWith('link:')) {
            document.location.href = $(this).attr('name').substr('link:'.length);
        }
    });
    $('.btn').on('click', function(e) {
        if($(this).attr('name').startsWith('link:')) {
            document.location.href = $(this).attr('name').substr('link:'.length);
        }
    });

    $('button.btn, button.btn-icon').each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
        });
    });
});