$(document).ready(function () {
    
    /*       Grid Navigation Buttons   */
    
    $('.js--gridnav1').click(function(){
        
        var btn1 = $('.js--gridnav1');
        var btn2 = $('.js--gridnav2');
        var btn3 = $('.js--gridnav3');
        var btn4 = $('.js--gridnav4');
        if (btn1.hasClass('grid-is-active')) {
            
        }
        else {
            if (btn2.hasClass('grid-is-active')) {
                btn2.removeClass('grid-is-active');
            }
            
            else {
                if (btn3.hasClass('grid-is-active')) {
                    btn3.removeClass('grid-is-active');
                }
                else {
                    if (btn4.hasClass('grid-is-active')) {
                    btn4.removeClass('grid-is-active');
                    }
                }
            }
            btn1.addClass('grid-is-active');
        }
    });
    
    $('.js--gridnav2').click(function(){
        
        var btn1 = $('.js--gridnav1');
        var btn2 = $('.js--gridnav2');
        var btn3 = $('.js--gridnav3');
        var btn4 = $('.js--gridnav4');
        if (btn2.hasClass('grid-is-active')) {
            
        }
        else {
            if (btn3.hasClass('grid-is-active')) {
                btn3.removeClass('grid-is-active');
            }
            
            else {
                if (btn4.hasClass('grid-is-active')) {
                    btn4.removeClass('grid-is-active');
                }
                else {
                    if (btn1.hasClass('grid-is-active')) {
                    btn1.removeClass('grid-is-active');
                    }
                }
            }
            btn2.addClass('grid-is-active');
        }
    });
    
    $('.js--gridnav3').click(function(){
        
        var btn1 = $('.js--gridnav1');
        var btn2 = $('.js--gridnav2');
        var btn3 = $('.js--gridnav3');
        var btn4 = $('.js--gridnav4');
        if (btn3.hasClass('grid-is-active')) {
            
        }
        else {
            if (btn4.hasClass('grid-is-active')) {
                btn4.removeClass('grid-is-active');
            }
            
            else {
                if (btn1.hasClass('grid-is-active')) {
                    btn1.removeClass('grid-is-active');
                }
                else {
                    if (btn2.hasClass('grid-is-active')) {
                        btn2.removeClass('grid-is-active');
                    }
                }
            }
            btn3.addClass('grid-is-active');
        }
    });
    
    $('.js--gridnav4').click(function(){
        
        var btn1 = $('.js--gridnav1');
        var btn2 = $('.js--gridnav2');
        var btn3 = $('.js--gridnav3');
        var btn4 = $('.js--gridnav4');
        if (btn4.hasClass('grid-is-active')) {
            
        }
        else {
            if (btn1.hasClass('grid-is-active')) {
                btn1.removeClass('grid-is-active');
            }
            
            else {
                if (btn2.hasClass('grid-is-active')) {
                    btn2.removeClass('grid-is-active');
                }
                else {
                    if (btn3.hasClass('grid-is-active')) {
                        btn3.removeClass('grid-is-active');
                    }
                }
            }
            btn4.addClass('grid-is-active');
        }
    });
    
     /*      Category Tabs     */
    
    $('.js--tab-fl').click(function(){
        
        var tab = $('.js--list-fl');
        tab.slideToggle(200);
        
    });
    
    $('.js--tab-nf').click(function(){
        
        var tab = $('.js--list-nf');
        tab.slideToggle(200);
        
    });
    
    $('.js--tab-other').click(function(){
        
        var tab = $('.js--list-other');
        tab.slideToggle(200);
        
    });
    
});